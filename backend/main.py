from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from routers import vocals, generator

app = FastAPI()

# CORS for frontend communication
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Route registration
app.include_router(vocals.router, prefix="/vocals")
app.include_router(generator.router, prefix="/generate")

@app.get("/")
def read_root():
    return {"message": "Garcias Studio API is running"}
