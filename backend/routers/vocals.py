from fastapi import APIRouter, UploadFile, File
from services.audio_utils import analyze_vocals

router = APIRouter()

@router.post("/analyze")
async def analyze(file: UploadFile = File(...)):
    data = await analyze_vocals(file)
    return data
