import os
import shutil
import asyncio
import re
from pathlib import Path
from datetime import datetime, timedelta
from typing import Union
from bson import ObjectId

from fastapi import FastAPI, HTTPException, status, Body, UploadFile, File, Form, Request
from fastapi.responses import FileResponse
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles

# Internal modules
from .database import users_collection, otp_collection, history_collection
from .auth import (
    get_password_hash,
    verify_password,
    create_access_token,
    generate_otp,
    send_verification_email,
    send_report_email
)
from .audio_engine import analyze_drums, generate_professional_sheet

app = FastAPI(title="KICKR AI - Pro Engine")

# --- PATH RESOLUTION ---
BASE_DIR = Path(__file__).parent.resolve()
UPLOAD_DIR = BASE_DIR / "uploads"
STATIC_PATH = BASE_DIR / "static"
SCORES_DIR = STATIC_PATH / "scores"

for path in [UPLOAD_DIR, STATIC_PATH, SCORES_DIR]:
    path.mkdir(parents=True, exist_ok=True)

app.mount("/static", StaticFiles(directory=str(STATIC_PATH)), name="static")

print(f"\n--- [SYSTEM START] ---")
print(f"ROOT: {BASE_DIR}")
print(f"SERVING IMAGES FROM: {STATIC_PATH}")
print(f"----------------------\n")

# --- CORS ---
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- OTP RATE LIMIT: max 3 requests per email per 10 minutes ---
OTP_RATE_LIMIT = 3
OTP_RATE_WINDOW_MINUTES = 10


async def check_otp_rate_limit(email: str):
    """Raises 429 if the email has requested OTPs too many times recently."""
    window_start = datetime.utcnow() - timedelta(minutes=OTP_RATE_WINDOW_MINUTES)
    recent_count = await otp_collection.count_documents({
        "email": email.lower(),
        "created_at": {"$gte": window_start}
    })
    if recent_count >= OTP_RATE_LIMIT:
        raise HTTPException(
            status_code=429,
            detail=f"TOO_MANY_REQUESTS: Wait {OTP_RATE_WINDOW_MINUTES} minutes before requesting another OTP."
        )


# ─────────────────────────────────────────────
#  HEARTBEAT
# ─────────────────────────────────────────────

@app.get("/")
async def heartbeat():
    return {"status": "ONLINE", "version": "v5.4.0"}


# ─────────────────────────────────────────────
#  AI ANALYSIS
# ─────────────────────────────────────────────

@app.post("/analyze")
async def analyze_audio(file: UploadFile = File(...), prompt: str = Form(None)):
    try:
        file_save_path = UPLOAD_DIR / file.filename
        with open(file_save_path, "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)

        loop = asyncio.get_event_loop()
        results = await loop.run_in_executor(None, analyze_drums, str(file_save_path), prompt)

        if results["status"] == "ERROR":
            raise HTTPException(status_code=500, detail=results["message"])

        ts = datetime.now().strftime("%H%M%S")
        sheet_url_path = await loop.run_in_executor(
            None, generate_professional_sheet, results, f"score_{ts}"
        )

        results["sheet_url"] = f"http://localhost:8000{sheet_url_path}" if sheet_url_path else None
        results["file_name"] = file.filename

        return results
    except Exception as e:
        print(f"Analysis Error: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))


# ─────────────────────────────────────────────
#  HISTORY
# ─────────────────────────────────────────────

@app.post("/history/save")
async def save_history(payload: dict = Body(...)):
    try:
        analysis_data = {
            "user_email": payload.get("email").lower(),
            "file_name": payload.get("file_name"),
            "prompt": payload.get("prompt") or "Standard Extraction",
            "bpm": payload.get("bpm"),
            "accuracy": payload.get("accuracy"),
            "timeline": payload.get("timeline"),
            "transients": payload.get("transients"),
            "sheet_url": payload.get("sheet_url"),
            "timestamp": datetime.utcnow()
        }
        await history_collection.insert_one(analysis_data)
        return {"status": "SUCCESS"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.get("/history/{email}")
async def get_history(email: str):
    try:
        email_regex = re.compile(f"^{re.escape(email)}$", re.IGNORECASE)
        cursor = history_collection.find({"user_email": email_regex}).sort("timestamp", -1)
        history_list = await cursor.to_list(length=30)
        for item in history_list:
            item["_id"] = str(item["_id"])
        return history_list
    except Exception:
        return []


@app.delete("/history/delete/{session_id}")
async def delete_history_item(session_id: str):
    try:
        result = await history_collection.delete_one({"_id": ObjectId(session_id)})
        if result.deleted_count == 0:
            raise HTTPException(status_code=404, detail="SESSION_NOT_FOUND")
        return {"status": "SUCCESS"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.delete("/history/clear/{email}")
async def clear_history(email: str):
    """
    Wipe ALL history entries belonging to a specific email.
    Security: only deletes documents where user_email matches exactly (case-insensitive).
    """
    try:
        email_regex = re.compile(f"^{re.escape(email.lower())}$", re.IGNORECASE)
        result = await history_collection.delete_many({"user_email": email_regex})
        return {"status": "SUCCESS", "deleted_count": result.deleted_count}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


# ─────────────────────────────────────────────
#  AUTHENTICATION
# ─────────────────────────────────────────────

@app.post("/auth/login")
async def login(payload: dict = Body(...)):
    identifier = payload.get("identifier", "").strip()
    password = payload.get("password", "")

    if not identifier or not password:
        raise HTTPException(status_code=400, detail="MISSING_CREDENTIALS")

    user = await users_collection.find_one({
        "$or": [
            {"email": identifier.lower()},
            {"username": identifier.lower()}
        ]
    })
    if not user or not verify_password(password, user["hashed_password"]):
        raise HTTPException(status_code=401, detail="INVALID_CREDENTIALS")

    token = create_access_token(data={"sub": user["email"]})
    return {
        "status": "SUCCESS",
        "access_token": token,
        "user": {
            "email": user.get("email"),
            "username": user.get("username")
        }
    }


@app.post("/auth/request-otp")
async def request_otp(payload: dict = Body(...)):
    """
    Request an OTP for registration or password recovery.
    Security checks:
      - Rate limit: max 3 OTPs per email per 10 minutes
      - Registration flow: reject if email already registered
      - Recovery flow: reject if email is NOT registered
    """
    email = payload.get("email", "").strip().lower()
    flow_type = payload.get("flow_type", "registration")  # "registration" | "recovery"

    if not email:
        raise HTTPException(status_code=400, detail="EMAIL_REQUIRED")

    # Basic email format check
    email_pattern = re.compile(r"^[^@\s]+@[^@\s]+\.[^@\s]+$")
    if not email_pattern.match(email):
        raise HTTPException(status_code=400, detail="INVALID_EMAIL_FORMAT")

    # Rate limit check
    await check_otp_rate_limit(email)

    existing_user = await users_collection.find_one({"email": email})

    if flow_type == "registration":
        # Block if already registered
        if existing_user:
            raise HTTPException(status_code=409, detail="EMAIL_ALREADY_REGISTERED")
    elif flow_type == "recovery":
        # Block if NOT registered
        if not existing_user:
            raise HTTPException(status_code=404, detail="EMAIL_NOT_FOUND")
    else:
        raise HTTPException(status_code=400, detail="INVALID_FLOW_TYPE")

    # Invalidate any previous unexpired OTPs for this email + flow
    await otp_collection.delete_many({"email": email, "flow_type": flow_type})

    # Generate and store new OTP
    otp_code = generate_otp()
    expires_at = datetime.utcnow() + timedelta(minutes=10)

    await otp_collection.insert_one({
        "email": email,
        "otp_code": otp_code,
        "flow_type": flow_type,
        "expires_at": expires_at,
        "created_at": datetime.utcnow(),
        "verified": False
    })

    # Send email (non-blocking — don't expose send failure to user)
    try:
        await send_verification_email(email, otp_code)
    except Exception as e:
        print(f"[OTP EMAIL WARN] Could not send to {email}: {e}")

    return {"status": "OTP_SENT"}


@app.post("/auth/verify-otp")
async def verify_otp(payload: dict = Body(...)):
    """
    Verify a submitted OTP code.
    Security checks:
      - OTP must exist and match exactly
      - OTP must not be expired (10 min window)
      - OTP must not have already been used
    Returns a short-lived verification token on success.
    """
    email = payload.get("email", "").strip().lower()
    submitted_otp = payload.get("otp", "").strip()

    if not email or not submitted_otp:
        raise HTTPException(status_code=400, detail="MISSING_FIELDS")

    record = await otp_collection.find_one({
        "email": email,
        "otp_code": submitted_otp
    })

    if not record:
        raise HTTPException(status_code=400, detail="INVALID_OTP")

    if record.get("verified"):
        raise HTTPException(status_code=400, detail="OTP_ALREADY_USED")

    if datetime.utcnow() > record["expires_at"]:
        await otp_collection.delete_one({"_id": record["_id"]})
        raise HTTPException(status_code=400, detail="OTP_EXPIRED")

    # Mark OTP as verified (single-use enforcement)
    await otp_collection.update_one(
        {"_id": record["_id"]},
        {"$set": {"verified": True}}
    )

    return {"status": "VERIFIED"}


@app.post("/auth/register")
async def register_user(payload: dict = Body(...)):
    """
    Final registration step: create user account after OTP is verified.
    Security checks:
      - OTP must be verified before this can proceed
      - Prevents duplicate accounts (email + username uniqueness)
    """
    email = payload.get("email", "").strip().lower()
    username = payload.get("username", "").strip().lower()
    full_name = payload.get("full_name", "").strip()
    password = payload.get("password", "")

    if not all([email, username, full_name, password]):
        raise HTTPException(status_code=400, detail="MISSING_FIELDS")

    if len(password) < 8:
        raise HTTPException(status_code=400, detail="PASSWORD_TOO_SHORT")

    # Confirm OTP was actually verified for this email
    otp_record = await otp_collection.find_one({
        "email": email,
        "flow_type": "registration",
        "verified": True
    })
    if not otp_record:
        raise HTTPException(status_code=403, detail="OTP_NOT_VERIFIED")

    # Double-check uniqueness
    if await users_collection.find_one({"email": email}):
        raise HTTPException(status_code=409, detail="EMAIL_ALREADY_REGISTERED")
    if await users_collection.find_one({"username": username}):
        raise HTTPException(status_code=409, detail="USERNAME_TAKEN")

    # Create user
    new_user = {
        "full_name": full_name,
        "username": username,
        "email": email,
        "hashed_password": get_password_hash(password),
        "created_at": datetime.utcnow()
    }
    await users_collection.insert_one(new_user)

    # Clean up used OTP
    await otp_collection.delete_many({"email": email, "flow_type": "registration"})

    return {"status": "ACCOUNT_CREATED"}


@app.post("/auth/reset-password")
async def reset_password(payload: dict = Body(...)):
    """
    Final password reset step after OTP is verified.
    """
    email = payload.get("email", "").strip().lower()
    password = payload.get("password", "")

    if not email or not password:
        raise HTTPException(status_code=400, detail="MISSING_FIELDS")

    if len(password) < 8:
        raise HTTPException(status_code=400, detail="PASSWORD_TOO_SHORT")

    # Confirm OTP was actually verified
    otp_record = await otp_collection.find_one({
        "email": email,
        "flow_type": "recovery",
        "verified": True
    })
    if not otp_record:
        raise HTTPException(status_code=403, detail="OTP_NOT_VERIFIED")

    user = await users_collection.find_one({"email": email})
    if not user:
        raise HTTPException(status_code=404, detail="USER_NOT_FOUND")

    await users_collection.update_one(
        {"email": email},
        {"$set": {"hashed_password": get_password_hash(password)}}
    )

    # Clean up used OTP
    await otp_collection.delete_many({"email": email, "flow_type": "recovery"})

    return {"status": "PASSWORD_RESET"}


# ─────────────────────────────────────────────
#  REPORT
# ─────────────────────────────────────────────

@app.post("/report")
async def submit_report(payload: dict = Body(...)):
    try:
        user_email = payload.get("email", "unknown")
        message = payload.get("message", "")
        if not message.strip():
            raise HTTPException(status_code=400, detail="EMPTY_REPORT")
        await send_report_email(user_email, message)
        return {"status": "REPORT_SENT"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


# ─────────────────────────────────────────────
#  AUDIO STREAMING
# ─────────────────────────────────────────────

@app.get("/audio/{filename}")
async def get_audio_file(filename: str):
    file_path = UPLOAD_DIR / filename
    if not file_path.exists():
        raise HTTPException(status_code=404, detail="Audio not found")
    return FileResponse(str(file_path))