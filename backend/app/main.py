from fastapi import FastAPI, HTTPException, status, Body
from fastapi.middleware.cors import CORSMiddleware
from datetime import datetime, timedelta

# Internal modules - Ensure database.py and auth.py exist in the same folder
from .database import users_collection, otp_collection
from .auth import (
    get_password_hash, 
    verify_password, 
    create_access_token, 
    generate_otp, 
    send_verification_email
)

app = FastAPI(title="KICKR AI - Neural Backend")

# --- CORS SETTINGS ---
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def heartbeat():
    return {"status": "KICKR_CORE_ONLINE", "version": "v4.0.1"}

# --- 1. REQUEST OTP ---
@app.post("/auth/request-otp")
async def request_otp(payload: dict = Body(...)):
    email = payload.get("email")
    flow_type = payload.get("flow_type") # 'registration' or 'recovery'
    if not email:
        raise HTTPException(status_code=400, detail="IDENTIFICATION_REQUIRED")
    
    user = await users_collection.find_one({"email": email})
    if flow_type == "registration" and user:
        raise HTTPException(status_code=400, detail="USER_ALREADY_REGISTERED")
    if flow_type == "recovery" and not user:
        raise HTTPException(status_code=404, detail="EMAIL_NOT_RECOGNIZED")

    otp_code = generate_otp()
    expires_at = datetime.utcnow() + timedelta(minutes=10)
    await otp_collection.update_one(
        {"email": email},
        {"$set": {"otp": otp_code, "expires_at": expires_at}},
        upsert=True
    )
    await send_verification_email(email, otp_code)
    return {"status": "SUCCESS", "message": "SECURITY_KEY_DISPATCHED"}

# --- 2. VERIFY OTP ---
@app.post("/auth/verify-otp")
async def verify_otp_only(payload: dict = Body(...)):
    email = payload.get("email")
    user_otp = payload.get("otp")
    stored_record = await otp_collection.find_one({"email": email})
    if not stored_record or stored_record["otp"] != user_otp:
        raise HTTPException(status_code=400, detail="INVALID_SECURITY_KEY")
    return {"status": "SUCCESS", "message": "IDENTITY_CONFIRMED"}

# --- 3. REGISTER USER ---
@app.post("/auth/register")
async def register_user(payload: dict = Body(...)):
    full_name = payload.get("fullName")
    email = payload.get("email")
    password = payload.get("password")
    user_otp = payload.get("otp")

    stored_record = await otp_collection.find_one({"email": email})
    if not stored_record or stored_record["otp"] != user_otp:
        raise HTTPException(status_code=400, detail="SECURITY_VALIDATION_FAILED")

    hashed_pass = get_password_hash(password)
    new_user = {
        "full_name": full_name,
        "email": email,
        "hashed_password": hashed_pass,
        "created_at": datetime.utcnow()
    }
    await users_collection.insert_one(new_user)
    await otp_collection.delete_one({"email": email})
    return {"status": "SUCCESS", "message": "ACCOUNT_ESTABLISHED"}

# --- 4. RESET PASSWORD ---
@app.post("/auth/reset-password")
async def reset_password(payload: dict = Body(...)):
    email = payload.get("email")
    new_password = payload.get("password")
    user_otp = payload.get("otp")

    stored_record = await otp_collection.find_one({"email": email})
    if not stored_record or stored_record["otp"] != user_otp:
        raise HTTPException(status_code=400, detail="SECURITY_VALIDATION_FAILED")

    hashed_pass = get_password_hash(new_password)
    update_result = await users_collection.update_one(
        {"email": email},
        {"$set": {"hashed_password": hashed_pass}}
    )

    if update_result.modified_count > 0:
        print(f"--- [DATABASE] PASSWORD UPDATED FOR: {email} ---")
        await otp_collection.delete_one({"email": email})
        return {"status": "SUCCESS", "message": "NEURAL_KEY_UPDATED"}
    else:
        raise HTTPException(status_code=500, detail="DATABASE_UPDATE_FAILED")

# --- 5. LOGIN ---
@app.post("/auth/login")
async def login(payload: dict = Body(...)):
    email = payload.get("email")
    password = payload.get("password")
    user = await users_collection.find_one({"email": email})
    if not user or not verify_password(password, user["hashed_password"]):
        raise HTTPException(status_code=401, detail="INVALID_CREDENTIALS")
    access_token = create_access_token(data={"sub": user["email"]})
    return {
        "status": "SUCCESS", 
        "access_token": access_token, 
        "user": {"name": user["full_name"], "email": user["email"]}
    }

# --- 6. DELETE ACCOUNT (NEW) ---
@app.post("/auth/delete-account")
async def delete_account(payload: dict = Body(...)):
    email = payload.get("email")
    if not email:
        raise HTTPException(status_code=400, detail="IDENTIFICATION_REQUIRED")

    result = await users_collection.delete_one({"email": email})

    if result.deleted_count > 0:
        print(f"--- [DATABASE] ACCOUNT TERMINATED: {email} ---")
        return {"status": "SUCCESS", "message": "NEURAL_PROFILE_WIPED"}
    else:
        raise HTTPException(status_code=404, detail="ACCOUNT_NOT_FOUND")