import os
import shutil
from fastapi import FastAPI, HTTPException, status, Body, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware
from datetime import datetime, timedelta
import asyncio

# Internal modules
from .database import users_collection, otp_collection
from .auth import (
    get_password_hash, 
    verify_password, 
    create_access_token, 
    generate_otp, 
    send_verification_email
)
from .audio_engine import analyze_drums 

app = FastAPI(title="KICKR AI - Unified Backend")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

UPLOAD_DIR = "uploads"
if not os.path.exists(UPLOAD_DIR):
    os.makedirs(UPLOAD_DIR)

@app.get("/")
async def heartbeat():
    return {"status": "KICKR_CORE_ONLINE", "version": "v4.0.1"}

@app.post("/analyze")
async def analyze_audio(file: UploadFile = File(...), prompt: str = Form(None)):
    try:
        file_path = os.path.join(UPLOAD_DIR, file.filename)
        with open(file_path, "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)

        loop = asyncio.get_event_loop()
        results = await loop.run_in_executor(None, analyze_drums, file_path, prompt)

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
    
    user = await users_collection.find_one({"email": email})
    if flow_type == "registration" and user:
        raise HTTPException(status_code=400, detail="USER_ALREADY_REGISTERED")
    
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
    email = payload.get("email")
    username = payload.get("username") # NEW
    
    # Check if username is already taken
    existing_user = await users_collection.find_one({"username": username})
    if existing_user:
        raise HTTPException(status_code=400, detail="USERNAME_TAKEN")
    
    stored = await otp_collection.find_one({"email": email})
    if not stored or stored["otp"] != payload.get("otp"):
        raise HTTPException(status_code=400, detail="VERIFICATION_FAILED")

    hashed_pass = get_password_hash(payload.get("password"))
    new_user = {
        "full_name": payload.get("fullName"), 
        "username": username, # NEW
        "email": email, 
        "hashed_password": hashed_pass, 
        "created_at": datetime.utcnow()
    }
    await users_collection.insert_one(new_user)
    await otp_collection.delete_one({"email": email})
    return {"status": "SUCCESS"}

@app.post("/auth/login")
async def login(payload: dict = Body(...)):
    identifier = payload.get("identifier") # Can be email or username
    password = payload.get("password")
    
    # NEW: Search for the identifier in BOTH the email and username fields
    user = await users_collection.find_one({
        "$or": [
            {"email": identifier},
            {"username": identifier}
        ]
    })
    
    if not user or not verify_password(password, user["hashed_password"]):
        raise HTTPException(status_code=401, detail="INVALID_CREDENTIALS")
        
    token = create_access_token(data={"sub": user["email"]})
    return {"status": "SUCCESS", "access_token": token, "user": {"email": user["email"], "username": user["username"]}}

@app.post("/auth/reset-password")
async def reset_password(payload: dict = Body(...)):
    email = payload.get("email")
    hashed_pass = get_password_hash(payload.get("password"))
    res = await users_collection.update_one({"email": email}, {"$set": {"hashed_password": hashed_pass}})
    if res.modified_count > 0:
        await otp_collection.delete_one({"email": email})
        return {"status": "SUCCESS"}
    raise HTTPException(status_code=404, detail="USER_NOT_FOUND")

@app.post("/auth/delete-account")
async def delete_account(payload: dict = Body(...)):
    await users_collection.delete_one({"email": payload.get("email")})
    return {"status": "SUCCESS"}