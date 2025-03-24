import { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { MotionValue, useScroll, motion } from "framer-motion";
import { projects } from "../data/projects";
export interface animationProps {
  range: number[];
  targetScale: number;
  scrollYProgress: MotionValue<number>;
}
const Projects = () => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div id="Projects" className="scroll-m-12">
      <div className="p-5 px-10 max-w-screen-2xl mx-auto">
        <div className="flex justify-center items-center pt-10">
          <h1
            className=" text-5xl p-3 font-bold bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text text-center"
            style={{ textShadow: "5px 10px 60px #e5e5e5" }}
          >
            My Projects
          </h1>
        </div>

        <div>
          <div ref={container} className="relative flex flex-row ">
            <motion.div
              className="z-10 hidden md:block absolute md:ml-5 lg:ml-30 w-1 h-full origin-top rounded-full "
              style={{
                boxShadow: "0 0 20px 0.1px #ae5bfd",
                scaleY: scrollYProgress,
                background:
                  "linear-gradient(to bottom, #000000 40%, #ae5bfd, #5089fd)",
              }}
            ></motion.div>
            <div className="flex flex-col justify-center items-center gap-10 mt-10">
              {projects.map((item, index) => {
                const targetScale = 1 - (projects.length - index) * 0.05;
                return (
                  <ProjectCard
                    key={index}
                    index={index}
                    description={item.description}
                    videoSrc={item.videoSrc}
                    orientation={item.orientation}
                    icons={item.icons}
                    title={item.title}
                    href={item.href}
                    animateObject={{
                      range: [index * 0.25, 1],
                      targetScale: targetScale,
                      scrollYProgress: scrollYProgress,
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
