import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { ReactLenis } from "lenis/react";
import About from "./components/About.tsx";
import Footer from "./components/Footer.tsx";
import Home from "./components/Home.tsx";
import LogoSlider from "./components/logoslider.tsx";
import Navbar from "./components/Navbar.tsx";
import Projects from "./components/Projects.tsx";
import Skills from "./components/Skills.tsx";

const App = () => {
  return (
    <>
      <ReactLenis root>
        <Navbar />
        <div className=" pb-14 max-w-screen-2xl mx-auto">
          <Home />
          <About />
        </div>
        <div
          style={{
            backgroundImage:
              "radial-gradient(100% 100% at 50% 50%, #000000 50%, #5720e8)",
          }}
        >
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

          <div className="absolute inset-0 z-0">
            <Canvas>
              <Stars
                radius={100}
                count={10000}
                factor={2}
                saturation={100}
                fade
                speed={1}
              />
            </Canvas>
          </div>
          <div className="relative bottom-0 w-full max-w-screen-2xl mx-auto">
            <Footer />
          </div>
        </div>
      </ReactLenis>
    </>
  );
};

export default App;
