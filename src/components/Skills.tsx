import React from "react";
import SkillCard from "./SkillCard";
import { image } from "framer-motion/client";

const Skills = () => {
  const skills = [
    {
      imageSrc: "/src/assets/react.svg",
      description: "React.ts for Frontend and User-Interface Development.",
      title: "React.ts",
    },
    {
      imageSrc: "/src/assets/spring.png",
      description: "Spring Boot for Backend and API Development.",
      title: "Spring Boot",
    },
    {
      imageSrc: "/src/assets/mysql.png",
      description: "MySQL for Relational Database Management.",
      title: "MySQL",
    },
    {
      imageSrc: "/src/assets/mongodb.svg",
      description: "MongoDB for Non-Relational Database Management.",
      title: "MongoDB",
    },
    {
      imageSrc: "/src/assets/tailwind.svg",
      description: "Tailwind CSS for Styling and UI Design.",
      title: "Tailwind CSS",
    },
    {
      imageSrc: "/src/assets/reactquery.webp",
      description: "React Query for Data Fetching and State Management.",
      title: "React Query",
    },
  ];
  return (
    <div id="Skills" className=" max-w-screen-2xl mx-auto pt-10 pb-10">
      <div className="flex justify-center items-center text-center">
        <h1
          className=" text-5xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text"
          style={{ textShadow: "5px 10px 60px #e5e5e5" }}
        >
          Skills and Technologies
        </h1>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-10 mt-10">
        {skills.map((skill, index) => (
          <SkillCard
            description={skill.description}
            imageSrc={skill.imageSrc}
            title={skill.title}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
