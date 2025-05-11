from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI
from app.routes import predict, health
app = FastAPI(
    title="FingiScan AI API",
    description="API pour détecter les maladies fongiques des plantes à partir d'images",
    version="1.0",
)

app.include_router(predict.router)
app.include_router(health.router)
# 🔧 Autoriser les appels depuis n'importe quelle origine (à restreindre en prod)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Pour autoriser tout domaine (frontend React Native Web)
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)