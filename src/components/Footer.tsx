import { MdOutlineEmail } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { RiTwitterXFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div id="Contact">
      <div className="flex justify-center mb-10">
        <video src="src/assets/bgVideo2.mp4" autoPlay loop muted width={"700"}>
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="backdrop-blur-[0.7px] pb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-neutral-50 ml-13 gap-10">
        <div className="w-fit max-w-50">
          <div className="text-xl font-bold">Dheeraj</div>
          <div className="font-light text-gray-400">
            <p className="">
              Aim is to become a great software engineer capable of solving
              complex problems quickly.
            </p>
            <p>Thanks for stopping by!</p>
          </div>
        </div>
        <div className="">
          <div className="text-xl font-bold ">Quick Links</div>
          <div className="font-light text-gray-400 flex flex-col ">
            <a
              className=" hover:text-white hover:font-light transition-all duration-300 ease-out w-fit relative group"
              href="#Home"
            >
              Home
              <span className="absolute -bottom-0 left-0 w-0 h-px bg-white transition-all duration-300 ease-out group-hover:w-full"></span>
            </a>

            <a
              className=" hover:text-white hover:font-light transition-all duration-300 ease-out w-fit relative group"
              href="#About"
            >
              About
              <span className="absolute -bottom-0 left-0 w-0 h-px bg-white transition-all duration-300 ease-out group-hover:w-full"></span>
            </a>
            <a
              className=" hover:text-white hover:font-light transition-all duration-300 ease-out w-fit relative group"
              href="#Skills"
            >
              Skills
              <span className="absolute -bottom-0 left-0 w-0 h-px bg-white transition-all duration-300 ease-out group-hover:w-full"></span>
            </a>
            <a
              className=" hover:text-white hover:font-light transition-all duration-300 ease-out w-fit relative group"
              href="#Projects"
            >
              Projects
              <span className="absolute -bottom-0 left-0 w-0 h-px bg-white transition-all duration-300 ease-out group-hover:w-full"></span>
            </a>
          </div>
        </div>
        <div>
          <div className="text-xl font-bold">Contact</div>
          <p className="font-light text-gray-400 hover:text-white transition-all duration-300 ease-out w-fit relative group flex items-center gap-2">
            <MdOutlineEmail />
            <a href="mailto:dnagula@gmu.edu"> dnagula@gmu.edu</a>
            <span className="absolute -bottom-0 left-0 w-0 h-px bg-white transition-all duration-300 ease-out group-hover:w-full"></span>
          </p>
        </div>
        <div>
          <div className="text-xl font-bold ">Connect</div>
          <div className="flex flex-col font-light text-gray-400 gap-1">
            <a
              className=" hover:text-white hover:font-light transition-all duration-300 ease-out w-fit relative group flex items-center gap-2"
              href="https://www.github.com/dheerajkrishna141"
              target="_blank"
            >
              <FiGithub />
              GitHub
              <span className="absolute -bottom-0 left-0 w-0 h-px bg-white transition-all duration-300 ease-out group-hover:w-full"></span>
            </a>
            <a
              className=" hover:text-white hover:font-light transition-all duration-300 ease-out w-fit relative group flex items-center gap-2"
              href="https://www.linkedin.com/in/dheeraj-krishna-nagula-05ab35203/"
              target="_blank"
            >
              <FiLinkedin />
              LinkedIn
              <span className="absolute -bottom-0 left-0 w-0 h-px bg-white transition-all duration-300 ease-out group-hover:w-full"></span>
            </a>
            <a
              className=" hover:text-white hover:font-light transition-all duration-300 ease-out w-fit relative group flex items-center gap-2"
              href="#Home"
            >
              <RiTwitterXFill />X
              <span className="absolute -bottom-0 left-0 w-0 h-px bg-white transition-all duration-300 ease-out group-hover:w-full"></span>
            </a>
          </div>
        </div>
      </div>

      <hr className=" border-gray-500"></hr>
      <div className="text-center text-neutral-50 font-extralight p-10">
        © 2025 Dheeraj Krishna Nagula. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
