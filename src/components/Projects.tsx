import { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { MotionValue, useScroll, motion } from "framer-motion";
export interface animationProps {
  range: number[];
  targetScale: number;
  scrollYProgress: MotionValue<number>;
}
const Projects = () => {
  const project = [
    {
      videoSrc: "src/assets/projects/project-1/gamehub.mp4",
      title: "GAME-HUB",
      description:
        "GameHub is a user-friendly interface designed to explore thousands of games in one place. This platform enables you to search, sort, and filter games effortlessly, making it easy to discover your next favorite game.",
      orientation: "left",
      icons: ["react.svg", "reactquery.webp", "vite.svg"],
      href: "https://github.com/dheerajkrishna141/GAME-HUB",
    },
    {
      videoSrc: "src/assets/projects/project-2/URLink.mp4",
      title: "URLINK (frontend)",
      description:
        "URLINK (frontend) is a responsive user interface for URLINK, a URL shortening service that allows users to convert long URLs into short, easy-to-share custom alias links, enabling better organization, tagging, and access to the web.",
      orientation: "right",
      icons: ["react.svg", "zustand.svg", "Chakra.png", "typescript.svg"],
      href: "https://github.com/dheerajkrishna141/URLink-frontend",
    },
    {
      videoSrc: "src/assets/projects/project-3/URLink_backend.mp4",
      title: "URLink (backend)",
      description:
        "The URLink (Backend) is the core application for URLink (frontend). This Spring Boot application offers RESTful APIs to shorten URLs with user-specific aliases, facilitating redirection to the original URLs. It also includes features such as user authentication, role-based authorization, and Cross-Origin Resource Sharing (CORS) to ensure secure access to user information.",
      orientation: "left",
      icons: ["spring.png", "mysql.png", "java.svg", "springboot.svg"],
      href: "https://github.com/dheerajkrishna141/URLink-backend",
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
            className=" text-5xl p-3 font-bold bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text text-center"
            style={{ textShadow: "5px 10px 60px #e5e5e5" }}
          >
            My Projects
          </h1>
        </div>

        <div>
          <div ref={container} className="relative flex flex-row ">
            <motion.div
              className="z-10 hidden md:block absolute md:ml-5 lg:ml-30 w-1 md:h-503 lg:h-302 origin-top rounded-full "
              style={{
                boxShadow: "0 0 20px 0.1px #ae5bfd",
                scaleY: scrollYProgress,
                background:
                  "linear-gradient(to bottom, #000000 40%, #ae5bfd, #5089fd)",
              }}
            ></motion.div>
            <div className="flex flex-col justify-center items-center gap-10 mt-10">
              {project.map((item, index) => {
                const targetScale = 1 - (project.length - index) * 0.05;
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
