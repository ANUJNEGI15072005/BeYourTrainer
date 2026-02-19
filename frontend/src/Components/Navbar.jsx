import React from "react";

const Navbar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="bg-red-600 p-4 text-white flex justify-between items-end border-b-2 border-white">
      <div className="w-full text-center md:text-left">
        <h1
          className="font-teko text-3xl sm:text-4xl text-white cursor-pointer font-bold"
          onClick={() => scrollToSection("home")}
        >
          BeYourTrainer
        </h1>
      </div>

      <div className="hidden md:block pr-10">
        <ul className="flex space-x-8">
          <li
            onClick={() => scrollToSection("home")}
            className="hover:underline cursor-pointer text-lg"
          >
            Home
          </li>
          <li
            onClick={() => scrollToSection("features")}
            className="hover:underline cursor-pointer text-lg"
          >
            Features
          </li>
          <li
            onClick={() => scrollToSection("predict")}
            className="hover:underline cursor-pointer text-lg"
          >
            Predict
          </li>
          <li
            onClick={() => scrollToSection("about")}
            className="hover:underline cursor-pointer text-lg"
          >
            About
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
