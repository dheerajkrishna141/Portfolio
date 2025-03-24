import { motion, useTime, useTransform } from "framer-motion";

interface CardProps {
  imageSrc: string;
  title: string;
}
const SkillCard = ({ imageSrc, title }: CardProps) => {
  const time = useTime();

  const rotate = useTransform(time, [0, 4500], [0, 360], { clamp: false });
  const rotatingBg = useTransform(
    rotate,
    (r) => `conic-gradient(from ${r}deg, #000000, #0d12cb)`
  );

  return (
    <>
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        whileHover={{
          scale: 1.025,

          transition: { duration: 0.1 },
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="relative"
      >
        <div
          className=" shadow-md rounded-3xl p-3 w-fit h-14 flex flex-row items-center z-10 relative"
          style={{ backgroundColor: "rgba(33,38,49,1)" }}
        >
          <img src={imageSrc} className="h-10 w-10" alt={title} />
          <h2 className="text-lg font-medium ml-3 text-neutral-100">{title}</h2>
        </div>
        <motion.div
          className="absolute -inset-[2px] rounded-3xl"
          style={{ background: rotatingBg }}
        ></motion.div>
      </motion.div>
    </>
  );
};

export default SkillCard;
