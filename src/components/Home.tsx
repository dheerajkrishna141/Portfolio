import TypeWriter from "./TypeWriter";
import ScrollAnimation from "./scrollAnimation";

const Home = () => {
  const textList = [
    "Full Stack Web Developer",
    "Software Engineer",
    "Tech Enthusiast",
  ];
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="flex flex-col gap-5 mt-10">
        <h2 className="text-gray-300">Hello I'm</h2>
        <strong className="text-6xl text-white">Dheeraj Krishna</strong>
        <TypeWriter textList={textList} />
        <p className="text-gray-300">
          I specialize in building high-performance web applications
        </p>
      </div>
    </div>
  );
};

export default Home;
