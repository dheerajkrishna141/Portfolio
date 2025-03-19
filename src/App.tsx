import "./App.css";
import Navbar from "./components/Navbar.tsx";
import Home from "./components/Home.tsx";
import About from "./components/About.tsx";
import LogoSlider from "./components/logoslider.tsx";
import Skills from "./components/Skills.tsx";
import Projects from "./components/Projects.tsx";
import { ReactLenis, useLenis } from "lenis/react";
import Footer from "./components/Footer.tsx";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const App = () => {
  return (
    <>
      <ReactLenis root>
        <Navbar />
        <div className=" px-10 pb-14 max-w-screen-2xl mx-auto">
          <Home />
          <About />
        </div>
        <div
          style={{
            backgroundImage:
              "radial-gradient(100% 100% at 50% 50%, #000000 50%, #5720e8)",
          }}
        >
          {/* "radial-gradient(150% 190% at 50% 0%, #000000 50%, #fff)", */}

          <LogoSlider />
          <Skills />
        </div>
        <div
          className="relative"
          style={{
            backgroundImage:
              "radial-gradient(100% 100% at 50% 50%, #000000 50%, #5720e8)",
          }}
        >
          <Projects />
          <Footer />
          <div className="absolute inset-0 z-0">
            <Canvas>
              <Stars
                radius={300}
                count={10000}
                factor={4}
                saturation={10}
                fade
                speed={1}
              />
            </Canvas>
          </div>
        </div>
      </ReactLenis>
    </>
  );
};

export default App;
