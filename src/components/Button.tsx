import { PropsWithChildren } from "react";
import { motion } from "framer-motion";

interface onClickProp extends PropsWithChildren {
  onClick?: () => void;
}

const Button = ({ children, onClick }: onClickProp) => {
  return (
    <div>
      <motion.button
        onClick={onClick}
        initial={{ "--x": "100%", scale: 1, transition: { duration: 0.2 } }}
        animate={{ "--x": "-100%" }}
        whileTap={{ scale: 0.97 }}
        whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
        transition={{
          duration: 0.2,
          repeat: Infinity,
          repeatType: "loop",
          repeatDelay: 0.2,
          type: "spring",
          stiffness: 20,
          damping: 15,
          mass: 2,
          scale: {
            type: "spring",
            stiffness: 10,
            damping: 5,
            mass: 0.1,
          },
        }}
        className="px-6 py-3  rounded-full relative radial-gradient cursor-pointer "
      >
        <span className="text-neutral-100 tracking-wide font-medium h-full w-full block relative linear-mask">
          {children}
        </span>
        <span className="block absolute -inset-1  rounded-full  p-[2px] linear-overlay" />
      </motion.button>
    </div>
  );
};

export default Button;
