import { motion } from "framer-motion";
import Button from "./Button";
const About = () => {
  return (
    <div id="About" className="px-10 lg:px-0 scroll-mt-35">
      <div className="relative flex flex-col gap-5 mt-10 ">
        <div
          className=" p-4 lg:px-20 rounded-2xl backdrop-blur-2xl z-10 flex flex-row gap-20"
          style={{ backgroundColor: "#111112" }}
        >
          <img
            className="hidden lg:block w-110 h-150 rounded-4xl border-2 border-gray-500"
            src="assets/dheeraj.jpg"
            alt=""
          />
          <div className="my-auto">
            <motion.div
              initial={{ y: 10 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="text-2xl text-white"
            >
              <div className="mb-3">ABOUT ME</div>
            </motion.div>
            <div className="text-gray-300 flex flex-col gap-3 mb-10">
              <em>"Every problem holds the seed of its solution."</em>
              <p>
                This belief fuels my relentless passion for solving problems,
                which aligns seamlessly with my journey as a full-stack
                developer. I am constantly driven to find the most efficient
                solutions while crafting robust, elegant, and high-performing
                web applications.
              </p>
              <p>
                My enthusiasm for coding and web development was sparked during
                my first year as a Bachelor’s student, where I was introduced to
                programming through C. This journey deepened when I discovered
                my favorite language, Java, and ventured into the world of web
                development in my second year. These formative experiences laid
                a strong foundation for my passion and ambition.
              </p>
              <p>
                Fast forward two years of dedicated learning, I landed my first
                internship with Cognizant as a full-stack developer. During this
                opportunity, I gained hands-on experience with a variety of
                front-end and back-end technologies, further solidifying my
                passion for building elegant, user-friendly, and efficient web
                solutions. It was at this point that I resolved to excel as a
                full-stack developer, crafting optimal solutions and creating
                beautiful, functional digital experiences.
              </p>
              <p>
                To achieve my aspirations, I decided to dive deeper into this
                field by pursuing a Master's in Computer Science at George Mason
                University.This journey has not only deepened my understanding
                of web development but has also allowed me to explore other
                areas such as software engineering, algorithms, and system
                design that contribute equally to enhancing my skills. The
                experience has been incredibly rewarding and has fueled my
                excitement to apply this knowledge in real-world scenarios.
              </p>
            </div>
            <div className="flex flex-row gap-7 sm:gap-5">
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
              <a href="#Contact">
                <Button>Contact Me</Button>
              </a>
            </div>
          </div>
        </div>
        <div
          className="absolute -inset-[3px] rounded-2xl "
          style={{
            background:
              "radial-gradient( 100% 100% at 50% 50%, #111112 50%, #5720e8)",
          }}
        ></div>
      </div>
    </div>
  );
};

export default About;
