import React from "react";
import { motion } from "framer-motion";

const logoslider = () => {
  const logos = [
    "spring.png",
    "css.svg",
    "html.svg",
    "javascript.svg",
    "java.svg",
    "mongodb.svg",
    "tailwind.svg",
    "typescript.svg",
    "react.svg",
  ];
  return (
    <div className="mt-10 max-w-screen-2xl mx-auto overflow-hidden backdrop-blur-2xl p-5 w-full border-2  border-gray-800 logoGradient">
      <div className="flex">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity }}
          className="flex flex-shrink-0 flex-row gap-5 "
        >
          {logos.map((logo, index) => (
            <img
              key={index}
              src={`/src/assets/${logo}`}
              alt={logo}
              className="w-20 h-20 mr-2 "
            />
          ))}
        </motion.div>
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity }}
          className="flex flex-shrink-0 flex-row gap-5 "
        >
          {logos.map((logo, index) => (
            <img
              key={index}
              src={`/src/assets/${logo}`}
              alt={logo}
              className="w-20 h-20 mr-2"
            />
          ))}
        </motion.div>
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity }}
          className="flex flex-shrink-0 flex-row gap-5"
        >
          {logos.map((logo, index) => (
            <img
              key={index}
              src={`/src/assets/${logo}`}
              alt={logo}
              className="w-20 h-20 mr-2"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default logoslider;
