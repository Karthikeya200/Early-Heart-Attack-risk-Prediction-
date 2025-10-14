from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List, Optional
import uuid
from datetime import datetime, timezone

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI()
api_router = APIRouter(prefix="/api")

# Models
class VitalSigns(BaseModel):
    heart_rate: Optional[int] = None
    respiratory_rate: Optional[int] = None
    stress_level: Optional[float] = None

class AssessmentInput(BaseModel):
    name: str
    age: int
    gender: str
    smoking: str
    exercise: str
    blood_pressure: str
    cholesterol: str
    diabetes: str
    chest_pain: str
    ecg: str
    symptoms: List[str] = []
    vitals: Optional[VitalSigns] = None
    consent: bool = True

class AssessmentResult(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    age: int
    gender: str
    risk_score: int
    risk_band: str
    factors: List[dict]
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

def calculate_risk(data: AssessmentInput) -> tuple[int, str, List[dict]]:
    """Rule-based risk calculation for MVP"""
    score = 0
    factors = []
    
    # Age factor
    if data.age > 65:
        score += 25
        factors.append({'factor': 'Age > 65', 'contribution': 25})
    elif data.age > 50:
        score += 15
        factors.append({'factor': 'Age > 50', 'contribution': 15})
    elif data.age > 40:
        score += 5
        factors.append({'factor': 'Age > 40', 'contribution': 5})
    
    # Smoking
    if data.smoking == 'current':
        score += 20
        factors.append({'factor': 'Current smoker', 'contribution': 20})
    elif data.smoking == 'former':
        score += 10
        factors.append({'factor': 'Former smoker', 'contribution': 10})
    
    # Exercise
    if data.exercise == 'low':
        score += 15
        factors.append({'factor': 'Low exercise', 'contribution': 15})
    elif data.exercise == 'moderate':
        score += 5
        factors.append({'factor': 'Moderate exercise', 'contribution': 5})
    
    # Blood pressure
    if '/' in data.blood_pressure:
        try:
            systolic = int(data.blood_pressure.split('/')[0])
            if systolic >= 140:
                score += 20
                factors.append({'factor': f'High BP ({systolic})', 'contribution': 20})
            elif systolic >= 130:
                score += 10
                factors.append({'factor': f'Elevated BP ({systolic})', 'contribution': 10})
        except:
            pass
    
    # Cholesterol
    try:
        chol = int(''.join(filter(str.isdigit, data.cholesterol)))
        if chol >= 240:
            score += 20
            factors.append({'factor': f'High cholesterol ({chol})', 'contribution': 20})
        elif chol >= 200:
            score += 10
            factors.append({'factor': f'Elevated cholesterol ({chol})', 'contribution': 10})
    except:
        pass
    
    # Diabetes
    if data.diabetes == 'yes':
        score += 20
        factors.append({'factor': 'Diabetes', 'contribution': 20})
    
    # Chest pain
    if data.chest_pain in ['typical', 'atypical']:
        score += 15
        factors.append({'factor': f'{data.chest_pain.capitalize()} chest pain', 'contribution': 15})
    
    # Symptoms
    symptom_score = len(data.symptoms) * 3
    if symptom_score > 0:
        score += symptom_score
        factors.append({'factor': f'{len(data.symptoms)} symptoms present', 'contribution': symptom_score})
    
    # Cap at 100
    score = min(score, 100)
    
    # Determine band
    if score >= 70:
        band = 'high'
    elif score >= 40:
        band = 'medium'
    else:
        band = 'low'
    
    return score, band, factors

@api_router.get("/")
async def root():
    return {"message": "Heart Attack Risk Detection API"}

@api_router.post("/assessment", response_model=AssessmentResult)
async def create_assessment(input: AssessmentInput):
    try:
        risk_score, risk_band, factors = calculate_risk(input)
        
        result = AssessmentResult(
            name=input.name,
            age=input.age,
            gender=input.gender,
            risk_score=risk_score,
            risk_band=risk_band,
            factors=factors
        )
        
        # Save to MongoDB
        doc = result.model_dump()
        doc['timestamp'] = doc['timestamp'].isoformat()
        doc['input_data'] = input.model_dump()
        
        await db.assessments.insert_one(doc)
        
        return result
    except Exception as e:
        logging.error(f"Assessment error: {e}")
        raise HTTPException(status_code=500, detail=str(e))

@api_router.get("/assessment/{assessment_id}", response_model=AssessmentResult)
async def get_assessment(assessment_id: str):
    doc = await db.assessments.find_one({'id': assessment_id}, {'_id': 0})
    
    if not doc:
        raise HTTPException(status_code=404, detail="Assessment not found")
    
    if isinstance(doc['timestamp'], str):
        doc['timestamp'] = datetime.fromisoformat(doc['timestamp'])
    
    return AssessmentResult(**doc)

@api_router.get("/assessments", response_model=List[AssessmentResult])
async def get_all_assessments():
    docs = await db.assessments.find({}, {'_id': 0}).to_list(100)
    
    for doc in docs:
        if isinstance(doc['timestamp'], str):
            doc['timestamp'] = datetime.fromisoformat(doc['timestamp'])
    
    return [AssessmentResult(**doc) for doc in docs]

app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()