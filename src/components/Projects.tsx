import React, { useEffect, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { MotionValue, useScroll } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

export interface animationProps {
  range: number[];
  targetScale: number;
  scrollYProgress: MotionValue<number>;
}
const Projects = () => {
  const project = [
    {
      imageSrc: "src/assets/projects/project-1/home.png",
      title: "GAME-HUB",
      description:
        "GameHub is a user-friendly UI designed to explore thousands of games all in one place. This platform allows you to search, sort, and filter games easily, making it effortless to find your next favorite game.",
      orientation: "left",
      href: "https://github.com/dheerajkrishna141/GAME-HUB",
    },
    {
      imageSrc: "https://cdn-icons-png.flaticon.com/512/732/732212.png",
      title: "Project 2",
      description: "This is project 2",
      orientation: "right",
      href: "",
    },
    {
      imageSrc: "https://cdn-icons-png.flaticon.com/512/732/732212.png",
      title: "Project 3",
      description: "This is project 3",
      orientation: "left",
      href: "",
    },
  ];

  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div id="Projects">
      <div className="p-5 px-10 max-w-screen-2xl mx-auto">
        <div className="flex justify-center items-center pt-10">
          <h1
            className=" text-5xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text"
            style={{ textShadow: "5px 10px 60px #e5e5e5" }}
          >
            My Projects
          </h1>
        </div>
        <div
          ref={container}
          className="flex flex-col justify-center items-center gap-10 mt-10"
        >
          {project.map((item, index) => {
            const targetScale = 1 - (project.length - index) * 0.05;
            return (
              <ProjectCard
                key={index}
                index={index}
                description={item.description}
                imageSrc={item.imageSrc}
                orientation={item.orientation}
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
  );
};

export default Projects;
