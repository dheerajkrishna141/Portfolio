import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { animationProps } from "./Projects";
import Button from "./Button";
import CardButton from "./CardButton";

interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
  orientation: string;
  href: string;
  index: number;
  animateObject: animationProps;
}
const ProjectCard = ({
  description,
  imageSrc,
  title,
  orientation,
  href,
  index,
  animateObject,
}: CardProps) => {
  // if (orientation === "right") {
  const container = useRef<HTMLImageElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start center"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.5, 1]);
  const scale = useTransform(
    animateObject.scrollYProgress,
    animateObject.range,
    [1, animateObject.targetScale]
  );

  return (
    <motion.div
      className="z-10 sticky top-0 shadow-md border-2 rounded-lg p-4 py-10 w-[80%] lg:w-[60%] h-100 flex flex-row justify-center items-center text-center"
      style={{
        scale: scale,
        backgroundColor: "rgba(33,38,49,1)",
        top: `calc(10% + ${index * 25}px)`,
      }}
    >
      <div className="flex flex-col items-start justify-start items-start text-start w-1/2">
        <h2 className="text-2xl font-semibold mb-2 text-neutral-100 uppercase">
          {title}
        </h2>
        <p className="text-neutral-100 font-light my-3">{description}</p>
        <a href={href} target="_blank">
          <CardButton>Github</CardButton>
        </a>
      </div>
      <img src={imageSrc} alt={title} className="w-[45%]  mb-4 " />
    </motion.div>
  );
  // }

  // else {
  //   return (
  //     <>
  //       <div
  //         className="sticky top-0 shadow-md rounded-lg p-4 py-10 w-[80%] lg:w-[60%] h-100 flex flex-row justify-center items-center text-center"
  //         style={{ backgroundColor: "rgba(33,38,49,1)" }}
  //       >
  //         <div className="w-[40%] overflow-hidden">
  //           <img src={imageSrc} alt={title} className=" mb-4 " />
  //         </div>
  //         <div className="flex flex-col items-start justify-center mx-auto w-1/2">
  //           <h2 className="text-xl font-semibold mb-2 text-neutral-100">
  //             {title}
  //           </h2>
  //           <p className="text-neutral-100">{description}</p>
  //         </div>
  //       </div>
  //     </>
  //   );
  // }
};

export default ProjectCard;
