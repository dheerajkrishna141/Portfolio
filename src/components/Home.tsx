import TypeWriter from "./TypeWriter";
import { motion } from "framer-motion";
const Home = () => {
  const textList = [
    "Full Stack Web Developer.",
    "Software Engineer.",
    "Tech Enthusiast.",
    "Java Developer.",
    "API Developer.",
    "Frontend Engineer.",
    "Database Designer.",
  ];
  return (
    <div id="Home" className="px-10  scroll-mt-100">
      <div className="flex flex-col gap-5 mt-10">
        <div className="flex  items-center gap-5">
          <h2 className="text-gray-300 font-bold text-4xl pt-4">Hello</h2>
          <span className="rotate-15">
            <motion.img
              className="h-25 origin-bottom"
              style={{ filter: "drop-shadow(1px 1px 10px lightblue)" }}
              src="src/assets/robotic-hand.png"
              animate={{
                rotate: [-15, 15, -15, 0, -15, 15, -15, 0],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
              }}
            />
          </span>
        </div>
        <div className="flex flex-col md:flex-row gap-5 items-center">
          <div className="flex flex-col lg:flex-row items-baseline  gap-2">
            <h2 className="text-gray-300 font-bold text-5xl">I'm</h2>
            <h1 className="w-fit  p-3 text-7xl font-extrabold bg-gradient-to-r from-purple-500  to-blue-500 text-transparent bg-clip-text">
              Dheeraj Krishna
            </h1>
          </div>

          <img
            className="mx-auto h-65"
            style={{ filter: "drop-shadow(5px 5px 10px lightblue" }}
            src="/src/assets/coding.svg"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <TypeWriter textList={textList} />
        <p className="text-gray-300 text-md sm:text-lg">
          I specialize in building high-performance web applications.
        </p>
      </div>
    </div>
  );
};

export default Home;
