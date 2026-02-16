import os
import random
import bcrypt
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from datetime import datetime, timedelta
from typing import Union
from jose import jwt
from dotenv import load_dotenv

load_dotenv()

# --- CONFIGURATION ---
SECRET_KEY = os.getenv("SECRET_KEY")
ALGORITHM = os.getenv("ALGORITHM")
ACCESS_TOKEN_EXPIRE_MINUTES = int(os.getenv("ACCESS_TOKEN_EXPIRE_MINUTES"))

# Email Config
MAIL_USERNAME = os.getenv("MAIL_USERNAME")
MAIL_PASSWORD = os.getenv("MAIL_PASSWORD")
MAIL_FROM = os.getenv("MAIL_FROM")

# --- 1. PASSWORD SECURITY ---
def get_password_hash(password: str) -> str:
    pwd_bytes = password.encode('utf-8')
    salt = bcrypt.gensalt()
    hashed_password = bcrypt.hashpw(pwd_bytes, salt)
    return hashed_password.decode('utf-8')

def verify_password(plain_password: str, hashed_password: str) -> bool:
    try:
        return bcrypt.checkpw(
            plain_password.encode('utf-8'), 
            hashed_password.encode('utf-8')
        )
    except Exception:
        return False

# --- 2. SESSION TOKENS ---
def create_access_token(data: dict, expires_delta: Union[timedelta, None] = None):
    to_encode = data.copy()
    expire = datetime.utcnow() + (expires_delta or timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES))
    to_encode.update({"exp": expire})
    return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)

# --- 3. IDENTITY VERIFICATION (OTP) ---
def generate_otp() -> str:
    return str(random.randint(100000, 999999))

# --- 4. REAL EMAIL ENGINE (SMTP) ---
async def send_verification_email(email: str, otp: str):
    """Sends a professional HTML email with the verification key."""
    
    subject = f"{otp} is your KICKR AI Security Key"
    
    # Professional Industrial HTML Template
    html_content = f"""
    <html>
        <body style="background-color: #070707; color: #ffffff; font-family: sans-serif; padding: 40px; text-align: center;">
            <div style="border: 1px solid #333; padding: 40px; border-radius: 20px; max-width: 400px; margin: auto;">
                <h1 style="color: #fbbf24; letter-spacing: 5px;">KICKR / AI</h1>
                <p style="text-transform: uppercase; font-size: 10px; opacity: 0.5; letter-spacing: 2px;">Identity Verification Protocol</p>
                <hr style="border: 0; border-top: 1px solid #222; margin: 20px 0;">
                <p style="font-size: 14px; opacity: 0.8;">Your requested authentication key is:</p>
                <h2 style="font-size: 48px; color: #ffffff; letter-spacing: 10px; margin: 20px 0;">{otp}</h2>
                <p style="font-size: 10px; opacity: 0.4;">This key will expire in 10 minutes. <br> If you did not request this, please ignore this email.</p>
                <div style="margin-top: 30px; font-size: 9px; opacity: 0.2; letter-spacing: 3px;">SECURE_NEURAL_LINK_v4.0</div>
            </div>
        </body>
    </html>
    """

    message = MIMEMultipart()
    message["From"] = MAIL_FROM
    message["To"] = email
    message["Subject"] = subject
    message.attach(MIMEText(html_content, "html"))

    try:
        # Connect to Gmail SMTP Server
        with smtplib.SMTP_SSL("smtp.gmail.com", 465) as server:
            server.login(MAIL_USERNAME, MAIL_PASSWORD)
            server.sendmail(MAIL_FROM, email, message.as_string())
        
        print(f"--- [EMAIL] Real OTP sent successfully to {email} ---")
        return True
    except Exception as e:
        print(f"--- [ERROR] Failed to send email: {e} ---")
        # Fallback to terminal so you can still finish the demo if internet is slow
        print(f"FALLBACK_CODE: {otp}")
        return False