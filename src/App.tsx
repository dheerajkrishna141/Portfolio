import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import BasicsOfMotion from "./components/basicsOfMotion.tsx";
import Gestures from "./components/Gestures.tsx";
import AnimationControl from "./components/animationControl.tsx";
import ScrollAnimation from "./components/scrollAnimation.tsx";
import Navbar from "./components/Navbar.tsx";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <BasicsOfMotion /> */}
      {/* <Gestures /> */}
      {/* <AnimationControl /> */}
      {/* <ScrollAnimation /> */}
      <Navbar />
    </>
  );
};

export default App;
