import pandas as pd

equipment_df = pd.read_csv("datasets/equipment_exercise_map.csv")

def filter_exercises(predicted_exercise, equipment_available="Bodyweight"):
    
    equipment_available = equipment_available.strip().lower()

    allowed_exercises = equipment_df[
        equipment_df["Equipment_Available"].str.lower() == equipment_available
    ]["Exercise"].tolist()

    if not allowed_exercises:
        return [predicted_exercise]

    if predicted_exercise in allowed_exercises:
        allowed_exercises.remove(predicted_exercise)
        allowed_exercises.insert(0, predicted_exercise)

    allowed_exercises = list(dict.fromkeys(allowed_exercises))

    return allowed_exercises[:3]
