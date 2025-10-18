import Navbar from "./Components/Navbar";
import Features from "./Components/Features";
import Predict from "./Components/Predict";
import Footer from "./Components/Footer";
import Home from "./Components/Home";

const App = () => {
  return (
    <div className="bg-red-600 min-h-screen w-full">
      <Navbar/>

      <section id="home">
        <Home/>
      </section>

      <section id="features">
        <Features />
      </section>

      <section id="predict">
        <Predict />
      </section>

      <section id="about">
        <Footer />
      </section>
    </div>
  );
};

export default App;
