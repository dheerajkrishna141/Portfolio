import "./App.css";
import Navbar from "./components/Navbar.tsx";
import Home from "./components/Home.tsx";
import About from "./components/About.tsx";
import LogoSlider from "./components/logoslider.tsx";
import Skills from "./components/Skills.tsx";
const App = () => {
  return (
    <>
      <Navbar />
      <div className="p-5 px-10 max-w-screen-2xl mx-auto">
        <Home />
        <About />
        <LogoSlider />
      </div>
      <div className="bg-black rounded-2xl ">
        <Skills />
      </div>
    </>
  );
};

export default App;
