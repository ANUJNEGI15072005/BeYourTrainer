import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 mt-16">
      <div className="max-w-5xl mx-auto px-6 text-center space-y-6">
        <div>
          <h2 className="font-poppins text-2xl font-bold text-red-500 mb-2">About Developer</h2>
          <p className="text-gray-300 text-lg">
            Hi, I'm <span className="font-semibold text-white">Anuj Negi</span> — a
            passionate <span className="text-red-500">Web Developer</span> and{" "}
            <span className="text-red-500">Machine Learning Engineer</span>.
          </p>
          <p className="text-gray-400 mt-2">
            I love building intelligent, user-friendly applications that make a real impact.
          </p>
        </div>

        <div className="flex justify-center space-x-6">
          <a
            href="https://linkedin.com/in/anujnegi-webdev" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-red-500 text-2xl transition-colors duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/ANUJNEGI15072005" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-red-500 text-2xl transition-colors duration-300"
          >
            <FaGithub />
          </a>
        </div>

        <div className="border-t border-gray-600 pt-6">
          <p className="text-gray-400 text-sm leading-relaxed max-w-3xl mx-auto">
            <span className="font-semibold text-white">Note:</span> This project uses{" "}
            <span className="text-red-400 font-medium">synthetic data</span> for educational
            and demonstration purposes. If you have any medical or health conditions,
            please consult a certified fitness trainer before starting any exercise.
          </p>
        </div>

        <p className="text-gray-500 text-sm mt-4">
          © {new Date().getFullYear()} BeYourTrainer
        </p>
      </div>
    </footer>
  );
};

export default Footer;
