import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";

interface typeProps {
  textList: string[];
}
const TypeWriter = ({ textList }: typeProps) => {
  const LETTER_DELAY = 0.025;
  const BOX_FADE_DURATION = 0.125;

  const FADE_DELAY = 5;
  const MAIN_FADE_DURATION = 0.25;

  const SWAP_DELAY_IN_MS = 1000;
  const [textIndex, setTextIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTextIndex((prev) => {
        return (prev + 1) % textList.length;
      });
    }, SWAP_DELAY_IN_MS);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <p className="text-gray-300">
        a{" "}
        {textList[textIndex].split("").map((l, i) => {
          return (
            <AnimatePresence key={`${l}-${i}`}>
              <motion.span
                initial={{
                  opacity: 1,
                }}
                animate={{
                  opacity: 0,
                }}
                transition={{
                  delay: FADE_DELAY,
                  duration: MAIN_FADE_DURATION,
                  ease: "easeInOut",
                }}
                className="relative"
              >
                <motion.span
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  transition={{
                    delay: i * LETTER_DELAY,
                    duration: 0,
                  }}
                >
                  {l}
                </motion.span>
                <motion.span
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    delay: i * LETTER_DELAY,
                    times: [0, 0.1, 1],
                    duration: BOX_FADE_DURATION,
                    ease: "easeInOut",
                  }}
                  className="absolute bottom-[1px] left-[1px] right-0 top-[3px] bg-neutral-50"
                />
              </motion.span>
            </AnimatePresence>
          );
        })}
      </p>
    </>
  );
};

export default TypeWriter;
