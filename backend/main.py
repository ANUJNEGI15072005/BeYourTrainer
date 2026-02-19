from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from model.predict import predict_exercises

app = FastAPI(title="BeYourTrainer - ML Backend")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"message": "Welcome to BeYourTrainer ML Backend!"}

@app.post("/predict")
def predict(user_input: dict):
    return predict_exercises(user_input)
