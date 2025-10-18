import pickle
import pandas as pd
from model.exercise_mapper import filter_exercises

# Load model
with open("model/exercise_model.pkl", "rb") as f:
    data = pickle.load(f)

model = data["model"]
encoders = data["encoders"]
target_encoder = data["target_encoder"]

def preprocess_input(input_dict):
    df = pd.DataFrame([input_dict])
    for col in encoders.keys():
        if col in df:
            df[col] = encoders[col].transform(df[col])
    return df[["BMI", "Gender", "Age", "Fitness_Level", "Goal"]]

def predict_exercises(input_dict, debug=False):
    X = preprocess_input(input_dict)
    pred = model.predict(X)
    predicted_exercise = target_encoder.inverse_transform(pred)[0]

    # Debug: print predicted exercise from model
    if debug:
        print("Predicted exercise by model:", predicted_exercise)

    equipment = input_dict.get("Equipment_Available", "Bodyweight")
    exercises = filter_exercises(predicted_exercise, equipment)

    # Debug: print filtered list
    if debug:
        print("Filtered exercises for equipment:", exercises)

    return {"exercises": exercises}
