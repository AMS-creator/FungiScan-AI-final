from fastapi import APIRouter, UploadFile, File
from app.services.ai_service import predict_image
from app.models.schemas import PredictionResponse


router = APIRouter()

@router.post("/predict", response_model=PredictionResponse)
async def predict(file: UploadFile = File()):
    result = await predict_image(file)
    return result