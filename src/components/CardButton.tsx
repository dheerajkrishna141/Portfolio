import { motion, useTime, useTransform } from "framer-motion";
import { PropsWithChildren } from "react";

const CardButton = ({ children }: PropsWithChildren) => {
  const time = useTime();

  const rotate = useTransform(time, [0, 9500], [0, 360], { clamp: false });
  const rotatingBg = useTransform(
    rotate,
    (r) => `conic-gradient(from ${r}deg, #000000, #f6f6f6)`
  );
  return (
    <motion.div
      initial={{ scale: 1 }}
      whileHover={{
        scale: 1.025,
        borderRadius: "5rem",
        boxShadow: "0px 3px 8px rgba(255, 255, 255, 0.5)",
      }}
      whileTap={{ scale: 0.95 }}
      style={{}}
      transition={{ ease: "easeInOut" }}
      className="absolute"
    >
      <div className="relative">
        <button className="relative z-10 bg-gray-900 rounded-lg text-neutral-50 p-1 px-4 cursor-pointer">
          {children}
        </button>
        <motion.div
          style={{ background: rotatingBg }}
          className="absolute -inset-[1.3px] rounded-lg"
        ></motion.div>
      </div>
    </motion.div>
  );
};

export default CardButton;
