import os
import shutil
from fastapi import FastAPI, HTTPException, status, Body, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware
from datetime import datetime, timedelta

# Internal modules
from .database import users_collection, otp_collection
from .auth import (
    get_password_hash, 
    verify_password, 
    create_access_token, 
    generate_otp, 
    send_verification_email
)
from .audio_engine import analyze_drums # Ensure audio_engine.py is in the same folder

app = FastAPI(title="KICKR AI - Unified Backend")

# --- CORS SETTINGS ---
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Ensure upload directory exists
UPLOAD_DIR = "uploads"
if not os.path.exists(UPLOAD_DIR):
    os.makedirs(UPLOAD_DIR)

@app.get("/")
async def heartbeat():
    return {"status": "KICKR_CORE_ONLINE", "version": "v4.0.1"}

# --- AI ANALYSIS ENDPOINT (The fix for your 404) ---
@app.post("/analyze")
async def analyze_audio(
    file: UploadFile = File(...), 
    prompt: str = Form(None)
):
    try:
        # 1. Save file temporarily
        file_path = os.path.join(UPLOAD_DIR, file.filename)
        with open(file_path, "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)

        # 2. Run the Neural Engine from audio_engine.py
        results = analyze_drums(file_path, prompt)

        if results["status"] == "ERROR":
            raise HTTPException(status_code=500, detail=results["message"])

        return results
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# --- AUTHENTICATION ENDPOINTS ---

@app.post("/auth/request-otp")
async def request_otp(payload: dict = Body(...)):
    email = payload.get("email")
    flow_type = payload.get("flow_type")
    if not email: raise HTTPException(status_code=400, detail="ID_REQUIRED")
    
    user = await users_collection.find_one({"email": email})
    if flow_type == "registration" and user:
        raise HTTPException(status_code=400, detail="USER_ALREADY_REGISTERED")
    if flow_type == "recovery" and not user:
        raise HTTPException(status_code=404, detail="EMAIL_NOT_RECOGNIZED")

    otp_code = generate_otp()
    expires_at = datetime.utcnow() + timedelta(minutes=10)
    await otp_collection.update_one({"email": email}, {"$set": {"otp": otp_code, "expires_at": expires_at}}, upsert=True)
    await send_verification_email(email, otp_code)
    return {"status": "SUCCESS", "message": "KEY_DISPATCHED"}

@app.post("/auth/verify-otp")
async def verify_otp_only(payload: dict = Body(...)):
    email = payload.get("email")
    user_otp = payload.get("otp")
    stored = await otp_collection.find_one({"email": email})
    if not stored or stored["otp"] != user_otp:
        raise HTTPException(status_code=400, detail="INVALID_KEY")
    return {"status": "SUCCESS"}

@app.post("/auth/register")
async def register_user(payload: dict = Body(...)):
    stored = await otp_collection.find_one({"email": payload.get("email")})
    if not stored or stored["otp"] != payload.get("otp"):
        raise HTTPException(status_code=400, detail="VERIFICATION_FAILED")

    hashed_pass = get_password_hash(payload.get("password"))
    new_user = {"full_name": payload.get("fullName"), "email": payload.get("email"), "hashed_password": hashed_pass, "created_at": datetime.utcnow()}
    await users_collection.insert_one(new_user)
    await otp_collection.delete_one({"email": payload.get("email")})
    return {"status": "SUCCESS"}

@app.post("/auth/reset-password")
async def reset_password(payload: dict = Body(...)):
    hashed_pass = get_password_hash(payload.get("password"))
    res = await users_collection.update_one({"email": payload.get("email")}, {"$set": {"hashed_password": hashed_pass}})
    if res.modified_count > 0:
        await otp_collection.delete_one({"email": payload.get("email")})
        return {"status": "SUCCESS"}
    raise HTTPException(status_code=500, detail="UPDATE_FAILED")

@app.post("/auth/login")
async def login(payload: dict = Body(...)):
    user = await users_collection.find_one({"email": payload.get("email")})
    if not user or not verify_password(payload.get("password"), user["hashed_password"]):
        raise HTTPException(status_code=401, detail="INVALID_CREDENTIALS")
    token = create_access_token(data={"sub": user["email"]})
    return {"status": "SUCCESS", "access_token": token, "user": {"email": user["email"]}}

@app.post("/auth/delete-account")
async def delete_account(payload: dict = Body(...)):
    await users_collection.delete_one({"email": payload.get("email")})
    return {"status": "SUCCESS"}