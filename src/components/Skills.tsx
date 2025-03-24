import { skills } from "../data/skills";
import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <div
      id="Skills"
      className=" max-w-screen-2xl mx-auto pt-10 pb-10"
      style={{ scrollMarginTop: "120px" }}
    >
      <div className="flex justify-center items-center text-center">
        <h1
          className=" text-5xl p-3 font-bold bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text"
          style={{ textShadow: "5px 10px 60px #e5e5e5" }}
        >
          Skills and Technologies
        </h1>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-5 mt-10">
        {skills.map((skill, index) => (
          <SkillCard
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
