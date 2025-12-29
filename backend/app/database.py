import motor.motor_asyncio
import os
from dotenv import load_dotenv

# Load .env from the parent directory
load_dotenv()

MONGO_URI = os.getenv("MONGO_URI")
DB_NAME = os.getenv("DB_NAME")

# DEBUG PRINT: This will show in your terminal if the variables are actually loading
print(f"--- DEBUG: MONGO_URI is {MONGO_URI}")
print(f"--- DEBUG: DB_NAME is {DB_NAME}")

if not MONGO_URI or not DB_NAME:
    print("❌ ERROR: Environment variables not loaded! Check your .env file location.")
    # Fallback for college project demo so it doesn't crash
    MONGO_URI = "mongodb://localhost:27017"
    DB_NAME = "kickr_db"

client = motor.motor_asyncio.AsyncIOMotorClient(MONGO_URI)
database = client[DB_NAME]

users_collection = database.get_collection("users")
otp_collection = database.get_collection("otps")
history_collection = database.get_collection("history")