import { motion, useAnimationControls, useTransform } from "framer-motion";
import { useState } from "react";
import { ImEnlarge2, ImShrink2 } from "react-icons/im";
import CardButton from "./CardButton";
import ExpandableText from "./ExpandableText";
import { animationProps } from "./Projects";
import { FiGithub } from "react-icons/fi";

interface CardProps {
  videoSrc: string;
  title: string;
  description: string;
  orientation: string;
  href: string;
  index: number;
  icons: string[];
  animateObject: animationProps;
}
const ProjectCard = ({
  description,
  videoSrc,
  title,
  href,
  index,
  icons,
  animateObject,
}: CardProps) => {
  // if (orientation === "right") {

  const scale = useTransform(
    animateObject.scrollYProgress,
    animateObject.range,
    [1, animateObject.targetScale]
  );

  const controls = useAnimationControls();

  const [isEnlarged, setIsEnlarged] = useState(false);

  return (
    <motion.div
      className=" z-10 sticky top-0 shadow-md border-[1px] border-neutral-700 rounded-lg p-2 py-10 w-full md:w-[80%] lg:w-[60%]   flex justify-center items-center text-center"
      style={{
        scale: scale,
        backgroundColor: "rgba(33,38,49,1)",
        top: `calc(10% + ${index * 25}px)`,
      }}
    >
      <div className=" flex flex-col lg:flex-row-reverse justify-start items-start text-start w-full">
        {/* <AnimatePresence mode="popLayout"> */}
        <motion.div
          animate={controls}
          className="relative lg:w-1/1 mx-auto z-1000 lg:origin-bottom-right"
          variants={{
            initial: { scale: 1 },
            enlarged: { scale: 2 },
          }}
        >
          {isEnlarged ? (
            <ImShrink2
              className="hidden lg:block mb-2 mx-auto cursor-pointer"
              style={{ filter: "drop-shadow(0 0 5px #)" }}
              color="#f1f1f1"
              size={15}
              onClick={() => {
                setIsEnlarged(!isEnlarged);
                controls.start("initial");
              }}
            />
          ) : (
            <ImEnlarge2
              onClick={() => {
                setIsEnlarged(!isEnlarged);
                controls.start("enlarged");
              }}
              className="hidden lg:block mb-2 mx-auto cursor-pointer"
              style={{ filter: "drop-shadow(0 0 5px #)" }}
              color="#f1f1f1"
              size={15}
            />
          )}
          <video
            src={videoSrc}
            className="rounded-xl "
            height={100}
            autoPlay
            muted
            loop
          >
            Your browser does not support the video tag.
          </video>
        </motion.div>
        {/* </AnimatePresence> */}
        <div className="flex flex-col mb-5 w-fit gap-2">
          <h2 className="truncate text-lg lg:text-2xl font-semibold mt-3  ml-3 text-neutral-100 uppercase">
            {title}
          </h2>
          <p className=" text-sm  lg:text-base  text-neutral-100 font-light mt-3 px-3 ">
            <ExpandableText>{description}</ExpandableText>
          </p>
          <div
            className="flex gap-4 my-4 ml-3 w-fit overflow-clip"
            style={{ filter: "drop-shadow(0 0 5px #ae5bfd)" }}
          >
            {icons.map((icon, index) => (
              <img
                key={index}
                src={`assets/${icon}`}
                alt={icon}
                className="w-6 h-6 md:w-8 md:h-8"
              />
            ))}
          </div>
          <a href={href} target="_blank" className="ml-3">
            <CardButton>
              <FiGithub />
              Source Code
            </CardButton>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
