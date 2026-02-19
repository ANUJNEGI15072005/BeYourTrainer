import React from "react";

const features = [
  {
    title: "Personalized Exercise",
    description:
      "Get exercises recommended based on your BMI, age, fitness level, and goals.",
    imageUrl: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?_gl=1*1wdylyp*_ga*OTgzOTIwOTY0LjE3NTQyODgwNDk.*_ga_8JE65Q40S6*czE3NjA2OTA5MjEkbzIkZzEkdDE3NjA2OTA5MjUkajU2JGwwJGgw",
  },
  {
    title: "Equipment-based Filtering",
    description:
      "Only see exercises you can do with the equipment you have.",
    imageUrl: "https://images.pexels.com/photos/841128/pexels-photo-841128.jpeg?_gl=1*15lsp8f*_ga*OTgzOTIwOTY0LjE3NTQyODgwNDk.*_ga_8JE65Q40S6*czE3NjA2OTA5MjEkbzIkZzEkdDE3NjA2OTA5ODckajU5JGwwJGgw",
  },
  {
    title: "Workout Variety",
    description:
      "Enjoy a balanced mix of strength, cardio, and flexibility exercises.",
    imageUrl: "https://images.pexels.com/photos/371049/pexels-photo-371049.jpeg?_gl=1*1hnrwfv*_ga*OTgzOTIwOTY0LjE3NTQyODgwNDk.*_ga_8JE65Q40S6*czE3NjA2OTA5MjEkbzIkZzEkdDE3NjA2OTExODgkajU5JGwwJGgw",
  },
  {
    title: "Quick Predictions",
    description: "Predict your workout instantly after entering your stats.",
    imageUrl: "https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?_gl=1*ewvmk5*_ga*OTgzOTIwOTY0LjE3NTQyODgwNDk.*_ga_8JE65Q40S6*czE3NjA2OTA5MjEkbzIkZzEkdDE3NjA2OTEyNzUkajU5JGwwJGgw",
  },
];

const Features = () => {
  return (
    <section className="px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="h-64 rounded-lg shadow-lg overflow-hidden relative border-2 border-white"
            >
              <img
                src={feature.imageUrl}
                alt={feature.title}
                className="w-full h-full object-cover opacity-90"
              />

              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                <h3 className="text-white font-poppins text-2xl font-bold text-center px-4">
                  {feature.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
