import React, { PropsWithChildren, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { IoMdMenu } from "react-icons/io";

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

const Navbar = () => {
  const content = ["Home", "Skills", "Projects", "Contact"];
  return (
    <div className="px-2 flex flex-row gap-10 sticky top-0 mt-10 justify-around items-center pb-4 border-b-1">
      <div className="flex flex-row items-center">
        <div className="w-10 h-10">logo</div>
        <div className="w-fit h-10 bg-amber-200 text-2xl text-nowrap">
          Dheeraj Krishna
        </div>
      </div>
      <div className="hidden md:block">
        <SlideTabs content={content} />
      </div>
      <div className="flex  flex-row gap-5">
        <button className="rounded-lg cursor-pointer bg-gray-600 px-5 py-2 text-white">
          Resume
        </button>
        <button className="flex sm:flex md:hidden border-2 cursor-pointer rounded-lg w-10 justify-center items-center">
          <IoMdMenu />
        </button>
      </div>
    </div>
  );
};

const SlideTabs = ({ content }: SlideTabContent) => {
  const [position, setPosition] = useState({} as position);

  useEffect(() => {
    setPosition({
      left: 10,
      width: 50,
      opacity: 1,
    });
  }, []);
  return (
    <ul
      onMouseLeave={() => {
        setPosition((prev) => ({ ...prev, opacity: 0 }));
      }}
      className="flex w-fit rounded-3xl border-2 border-black bg-white p-1"
    >
      {content.map((cont) => {
        return <Tab setPos={setPosition}>{cont}</Tab>;
      })}

      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({ setPos, children }: TabProps) => {
  const ref = useRef<HTMLLIElement>(null);
  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;
        const data = ref.current.getBoundingClientRect();
        setPos({ left: ref.current.offsetLeft, width: data.width, opacity: 1 });
      }}
      className="relative z-10 cursor-pointer px-4 py-2 text-sm uppercase text-white mix-blend-difference md:px-5  md:text-base"
    >
      {children}
    </li>
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
      className="absolute z-0 h-9 w-10 rounded-3xl bg-blue-300 md:h-10 "
    ></motion.li>
  );
};

export default Navbar;
