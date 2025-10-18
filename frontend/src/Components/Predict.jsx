import React, { useState } from "react";

const Predict = () => {
  const [formData, setFormData] = useState({
    Gender: "",
    Age: "",
    Fitness_Level: "",
    Goal: "",
    Equipment_Available: "",
    Height: "",
    Weight: "",
  });

  const [bmi, setBmi] = useState(null);
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Calculate BMI
    const heightInM = formData.Height / 100;
    const calculatedBMI = (formData.Weight / (heightInM * heightInM)).toFixed(1);
    setBmi(calculatedBMI);

    // Create payload with correct attribute names
    const payload = {
      BMI: calculatedBMI,
      Gender: formData.Gender,
      Age: Number(formData.Age),
      Fitness_Level: formData.Fitness_Level,
      Goal: formData.Goal,
      Equipment_Available: formData.Equipment_Available,
    };

    try {
      setLoading(true);
      const response = await fetch("https://beyourtrainer.onrender.com/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      setExercises(data.exercises || []);
    } catch (error) {
      console.error("Error fetching prediction:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="px-6 py-12 min-h-screen">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-poppins font-bold text-white mb-4">Get Your Personalized Workout Plan</h2>
        <p className="text-white text-lg mb-2">
          Enter your fitness details below to let our AI model analyze your data.
        </p>
        <p className="text-white text-lg mb-2">
          Based on your BMI, goals, and available equipment, it will recommend the most suitable exercises for you.
        </p>
        <p className="text-white text-lg">
          Fill in the form, click <span className="font-semibold text-white">Predict</span>, and start training smarter!
        </p>
      </div>
      <div className="max-w-4xl mx-auto bg-white sm:p-8 p-4 rounded-lg shadow-md">
        <h2 className="sm:text-3xl text-2xl font-poppins font-bold text-center mb-8 text-red-600">
          PREDICT YOUR EXERCISES
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Gender */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Gender</label>
            <select
              name="Gender"
              value={formData.Gender}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          {/* Age */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Age</label>
            <input
              type="number"
              name="Age"
              value={formData.Age}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>

          {/* Fitness Level */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Fitness Level
            </label>
            <select
              name="Fitness_Level"
              value={formData.Fitness_Level}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
              required
            >
              <option value="">Select Level</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>

          {/* Goal */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Goal</label>
            <select
              name="Goal"
              value={formData.Goal}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
              required
            >
              <option value="">Select Goal</option>
              <option value="Strength">Strength</option>
              <option value="Fat Loss">Fat Loss</option>
              <option value="Endurance">Endurance</option>
              <option value="Flexibility">Flexibility</option>
            </select>
          </div>

          {/* Equipment */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Equipment Available
            </label>
            <select
              name="Equipment_Available"
              value={formData.Equipment_Available}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
              required
            >
              <option value="">Select Equipment</option>
              <option value="Bodyweight">Bodyweight</option>
              <option value="Barbell">Barbell</option>
              <option value="Dumbbell">Dumbbell</option>
              <option value="Kettlebell">Kettlebell</option>
              <option value="Machine">Machine</option>
              <option value="Mixed">Mixed</option>
              <option value="Resistance Band">Resistance Band</option>
            </select>
          </div>

          {/* Height */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Height (cm)
            </label>
            <input
              type="number"
              name="Height"
              value={formData.Height}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>

          {/* Weight */}
          <div className="md:col-span-2">
            <label className="block text-gray-700 font-medium mb-2">
              Weight (kg)
            </label>
            <input
              type="number"
              name="Weight"
              value={formData.Weight}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 text-center">
            <button
              type="submit"
              className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition duration-300"
            >
              {loading ? "Predicting..." : "Predict"}
            </button>
          </div>
        </form>

        {/* BMI Display */}
        {bmi && (
          <p className="text-center text-lg mt-6 font-medium text-gray-700">
            Your BMI: <span className="font-bold">{bmi}</span>
          </p>
        )}

        {/* Result Table */}
        {exercises.length > 0 && (
          <div className="mt-8 overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr className="bg-red-600 text-white">
                  <th className="py-2 px-4 border">#</th>
                  <th className="py-2 px-4 border">Exercise Name</th>
                </tr>
              </thead>
              <tbody>
                {exercises.map((exercise, index) => (
                  <tr key={index} className="text-center border-b">
                    <td className="py-2 px-4">{index + 1}</td>
                    <td className="py-2 px-4">{exercise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-4 bg-red-100 border-l-4 border-red-500 text-red-800 p-4 rounded-md text-sm sm:text-base">
               <span className="font-semibold">Note:</span> For each exercise, perform <span className="font-bold">3 sets of 10 reps</span> to achieve the best results.
              Take short breaks between sets and focus on maintaining proper form.
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Predict;
