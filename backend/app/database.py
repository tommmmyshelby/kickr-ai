import motor.motor_asyncio
import os
from dotenv import load_dotenv
from pathlib import Path

# 1. FORCE PATH RESOLUTION FOR D: DRIVE
# This looks for the .env file in the backend folder
env_path = Path(__file__).resolve().parent.parent / '.env'
load_dotenv(dotenv_path=env_path)

MONGO_URI = os.getenv("MONGO_URI", "mongodb://localhost:27017")
DB_NAME = os.getenv("DB_NAME", "kickr_db")

# Debugging prints to your terminal
print(f"--- DATABASE CONFIGURATION ---")
print(f"URL: {MONGO_URI}")
print(f"DB:  {DB_NAME}")

try:
    client = motor.motor_asyncio.AsyncIOMotorClient(MONGO_URI, serverSelectionTimeoutMS=5000)
    database = client[DB_NAME]
    
    # Explicitly define all collections used in main.py
    users_collection = database.get_collection("users")
    otp_collection = database.get_collection("otps")
    history_collection = database.get_collection("history")
    
    print("--- DATABASE STATUS: CONNECTED ---")
except Exception as e:
    print(f"--- DATABASE STATUS: ERROR | {str(e)} ---")