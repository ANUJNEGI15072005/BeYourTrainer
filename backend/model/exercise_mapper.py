import pandas as pd

# Load mapping file
equipment_df = pd.read_csv("datasets/equipment_exercise_map.csv")

def filter_exercises(predicted_exercise, equipment_available="Bodyweight"):
    """
    Returns up to 5 exercises compatible with the available equipment.
    Removes duplicates and keeps predicted exercise first.
    """
    equipment_available = equipment_available.strip().lower()

    # Select allowed exercises for this equipment
    allowed_exercises = equipment_df[
        equipment_df["Equipment_Available"].str.lower() == equipment_available
    ]["Exercise"].tolist()

    if not allowed_exercises:
        return [predicted_exercise]

    # Keep predicted exercise at top
    if predicted_exercise in allowed_exercises:
        allowed_exercises.remove(predicted_exercise)
        allowed_exercises.insert(0, predicted_exercise)

    # Remove duplicates (in case predicted was repeated)
    allowed_exercises = list(dict.fromkeys(allowed_exercises))

    # Return top 5
    return allowed_exercises[:5]
