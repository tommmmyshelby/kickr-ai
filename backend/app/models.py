from pydantic import BaseModel, EmailStr, Field
from typing import Optional, List
from datetime import datetime

# --- USER MODELS ---
class UserSchema(BaseModel):
    full_name: str = Field(...)
<<<<<<< HEAD
    username: str = Field(...) # NEW FIELD
=======
>>>>>>> 806e05c999d5d4cd4455ce3a5c31589cabf32df6
    email: EmailStr = Field(...)
    hashed_password: str = Field(...)
    created_at: datetime = Field(default_factory=datetime.now)

    class Config:
        json_schema_extra = {
            "example": {
                "full_name": "John Doe",
<<<<<<< HEAD
                "username": "johndoe88",
=======
>>>>>>> 806e05c999d5d4cd4455ce3a5c31589cabf32df6
                "email": "johndoe@college.edu",
                "hashed_password": "encrypted_string"
            }
        }

# --- OTP MODEL ---
class OTPSchema(BaseModel):
    email: EmailStr
    otp_code: str
    expires_at: datetime

# --- HISTORY MODEL ---
class HistorySchema(BaseModel):
    user_email: EmailStr
    file_name: str
    prompt: Optional[str]
    accuracy: float
    bpm: float
    timestamp: datetime = Field(default_factory=datetime.now)