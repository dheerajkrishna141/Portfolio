import React from "react";
import { motion } from "framer-motion";
import Button from "./Button";
import { MdDownload } from "react-icons/md";
const About = () => {
  const about =
    "As a dynamic full stack developer, I specialize in building robust and scalable web applications that deliver seamless user experiences. With expertise spanning both front-end and back-end development, I craft intuitive interfaces and engineer efficient server-side architectures. Passionate about leveraging modern technologies and frameworks, I thrive on creating innovative solutions that drive impact and elevate user satisfaction.";

  const icons = [
    { src: "github.png", href: "https://www.github.com/dheerajkrishna141" },
    {
      src: "linkedin.svg",
      href: "https://www.linkedin.com/in/dheeraj-krishna-nagula-05ab35203/",
    },
  ];
  const about_words = about.split(" ");
  return (
    <div id="About" className="mt-10">
      <motion.div
        initial={{ y: 10 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="text-2xl text-white"
      >
        <div>ABOUT</div>
      </motion.div>
      <div>
        {about_words.map((word, index) => (
          <motion.p
            initial={{ filter: "blur(5px)", opacity: 0, y: 10 }}
            whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="text-gray-300 text-lg mr-1.25 inline-block"
            key={index}
          >
            {word}
          </motion.p>
        ))}
      </div>
      <div>
        <div className="flex flex-row gap-5 mt-10">
          {icons.map((icon, index) => (
            <a href={icon.href} target="_blank">
              <motion.img
                initial={{ scale: 1 }}
                whileHover={{
                  scale: 1.1,
                  cursor: "pointer",
                }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                key={index}
                src={`/src/assets/${icon.src}`}
                alt={icon.src}
                className="w-10 h-10 "
              />
            </a>
          ))}
        </div>
      </div>
      <div className="flex flex-row gap-4 mt-5">
        <Button
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1Lm5lGnxP846sMBxcLmzKoHxuZcx5ZkBK/view?usp=sharing",
              "_blank"
            )
          }
        >
          Resume
        </Button>
        <Button>Contact me</Button>
      </div>
    </div>
  );
};

export default About;
