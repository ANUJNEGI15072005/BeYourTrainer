import pandas as pd
import pickle
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
from sklearn.ensemble import RandomForestClassifier

# Load dataset
data = pd.read_csv("datasets/core_exercise_dataset.csv")

# Encode categorical columns
categorical_cols = ["Gender", "Fitness_Level", "Goal"]
encoders = {col: LabelEncoder().fit(data[col]) for col in categorical_cols}
for col in categorical_cols:
    data[col] = encoders[col].transform(data[col])

# Encode target column (Exercise)
target_encoder = LabelEncoder()
data["Exercise"] = target_encoder.fit_transform(data["Exercise"])

X = data[["BMI", "Gender", "Age", "Fitness_Level", "Goal"]]
y = data["Exercise"]

# Train model
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
model = RandomForestClassifier(n_estimators=200, random_state=42)
model.fit(X_train, y_train)

# Save model and encoders
with open("model/exercise_model.pkl", "wb") as f:
    pickle.dump({
        "model": model,
        "encoders": encoders,
        "target_encoder": target_encoder
    }, f)

print("✅ Model trained and saved successfully!")
