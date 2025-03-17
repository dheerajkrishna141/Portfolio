import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const about =
    "As a dynamic full stack developer, I specialize in building robust and scalable web applications that deliver seamless user experiences. With expertise spanning both front-end and back-end development, I craft intuitive interfaces and engineer efficient server-side architectures. Passionate about leveraging modern technologies and frameworks, I thrive on creating innovative solutions that drive impact and elevate user satisfaction.";

  const about_words = about.split(" ");
  return (
    <div className="max-w-screen-xl mx-auto mt-10">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
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
            className="text-gray-300 text-lg mt-5 mr-1.25 inline-block"
            key={index}
          >
            {word}
          </motion.p>
        ))}
      </div>
    </div>
  );
};

export default About;
