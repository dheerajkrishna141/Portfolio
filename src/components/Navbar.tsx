import React, { PropsWithChildren, useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Navmenu from "./Navmenu";

interface position {
  left: number;
  width: number;
  opacity: number;
}

interface Props {
  position: position;
}

interface TabProps extends PropsWithChildren {
  setPos: React.Dispatch<React.SetStateAction<position>>;
}

interface SlideTabContent {
  content: string[];
}
export const content = ["Home", "About", "Skills", "Projects", "Contact"];

const Navbar = () => {
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (previous) {
      if (latest > previous && latest > 150) {
        setHidden(true);
      } else {
        setHidden(false);
      }
    }
  });

  const [hidden, setHidden] = useState(false);
  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      style={{ backgroundColor: "#111112" }}
      className=" max-w-screen-2xl mx-auto border rounded-full border-gray-800 mt-3 p-5 sticky top-0 z-100"
    >
      <div className=" flex flex-row items-center ">
        <div className="size-17">
          <img src="assets/DK.png" />
        </div>
        <div className=" hidden lg:block ml-auto">
          <SlideTabs content={content} />
        </div>
        <Navmenu />
      </div>
    </motion.nav>
  );
};

const SlideTabs = ({ content }: SlideTabContent) => {
  const [position, setPosition] = useState({
    left: 1000,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() => {
        setPosition((prev) => ({ ...prev, opacity: 0 }));
      }}
      className="flex w-fit rounded-3xl border-2 border-black bg-white p-1"
    >
      {content.map((cont, index) => {
        return (
          <Tab key={index} setPos={setPosition}>
            {cont}
          </Tab>
        );
      })}

      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({ setPos, children }: TabProps) => {
  const ref = useRef<HTMLLIElement>(null);
  return (
    <a href={`#${children}`}>
      <li
        ref={ref}
        onMouseEnter={() => {
          if (!ref.current) return;
          const data = ref.current.getBoundingClientRect();
          setPos({
            left: ref.current.offsetLeft,
            width: data.width,
            opacity: 1,
          });
        }}
        className="relative z-10 cursor-pointer px-4 py-2 text-sm uppercase text-white mix-blend-difference md:px-5  md:text-base"
      >
        {children}
      </li>
    </a>
  );
};

const Cursor = ({ position }: Props) => {
  return (
    <motion.li
      animate={{
        left: position.left,
        width: position.width,
        opacity: position.opacity,
      }}
      className="absolute z-0 h-9 w-10 rounded-3xl md:h-10 "
      style={{ backgroundColor: "#5720e8" }}
    ></motion.li>
  );
};

export default Navbar;
