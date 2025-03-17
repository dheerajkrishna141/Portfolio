import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import BasicsOfMotion from "./components/basicsOfMotion.tsx";
import Gestures from "./components/Gestures.tsx";
import AnimationControl from "./components/animationControl.tsx";
import ScrollAnimation from "./components/scrollAnimation.tsx";
import Navbar from "./components/Navbar.tsx";
import Home from "./components/Home.tsx";
import About from "./components/About.tsx";
import LogoSlider from "./components/logoslider.tsx";
const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Home />
      <LogoSlider />
      <About />
    </>
  );
};

export default App;
