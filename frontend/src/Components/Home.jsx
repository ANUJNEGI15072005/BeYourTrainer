import React from 'react';

const Home = () => {
  const scrollToPredict = () => {
    const predictSection = document.getElementById("predict");
    if (predictSection) {
      predictSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col items-center justify-start text-center sm:p-6 p-4">
      <h1 className="text-5xl font-poppins md:text-6xl font-bold text-white mb-6">
        Train Smart. Stay Strong.
      </h1>
      <p className="text-white text-lg md:text-xl max-w-xl">
        Your personal trainer in your pocket — push limits, break barriers, and achieve results, anytime, anywhere.
      </p>
      <button
        onClick={scrollToPredict}
        className="mt-8 bg-white hover:bg-red-600 hover:text-white text-red-600 font-bold px-6 py-3 rounded-full border-2 border-white transition duration-300 text-xl"
      >
        Get Started
      </button>
    </div>
  );
};

export default Home;
