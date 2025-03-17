import TypeWriter from "./TypeWriter";
import ScrollAnimation from "./scrollAnimation";

const Home = () => {
  const textList = [
    "Full Stack Web Developer.",
    "Software Engineer.",
    "Tech Enthusiast.",
  ];
  return (
    <div className="">
      <div className="flex flex-col gap-5 mt-10">
        <h2 className="text-gray-300">Hello I'm</h2>
        <div className="flex flex-col md:flex-row gap-5 items-center">
          <h1 className="w-fit text-7xl font-extrabold bg-gradient-to-r from-indigo-600 via-blue-600 to-green-500 text-transparent bg-clip-text">
            Dheeraj Krishna
          </h1>

          <img
            className="mx-auto h-65"
            style={{ filter: "drop-shadow(5px 5px 10px lightblue" }}
            src="/src/assets/coding.svg"
          />
        </div>
      </div>
      <TypeWriter textList={textList} />
      <p className="text-gray-300">
        I specialize in building high-performance web applications
      </p>
    </div>
  );
};

export default Home;
