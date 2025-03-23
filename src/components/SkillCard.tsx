import { motion, useTime, useTransform } from "framer-motion";

interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
}
const SkillCard = ({ description, imageSrc, title }: CardProps) => {
  const time = useTime();

  const rotate = useTransform(time, [0, 4500], [0, 360], { clamp: false });
  const rotatingBg = useTransform(
    rotate,
    (r) => `conic-gradient(from ${r}deg, #000000, #0d12cb)`
  );

  return (
    <>
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.025, transition: { duration: 0.1 } }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="relative"
      >
        <div
          className=" shadow-md rounded-lg p-4 py-10 w-80 h-fit flex flex-col items-center text-center z-10 relative"
          style={{ backgroundColor: "rgba(33,38,49,1)" }}
        >
          <img src={imageSrc} alt={title} className="w-16 h-16 mb-4" />
          <h2 className="text-xl font-semibold mb-2 text-neutral-100">
            {title}
          </h2>
          <p className="text-neutral-100">{description}</p>
        </div>
        <motion.div
          className="absolute -inset-[2px] rounded-lg"
          style={{ background: rotatingBg }}
        ></motion.div>
      </motion.div>
    </>
  );
};

export default SkillCard;

// <div
//   className="group relative max-w-md rounded-xl border border-white/10 bg-gray-900 px-8 py-16 shadow-2xl"
//   onMouseMove={handleMouseMove}
// >
//   <div>
//     <h3 className="text-base font-semibold leading-7 text-sky-500">Byline</h3>
//     <div className="mt-2 flex items-center gap-x-2">
//       <span className="text-5xl font-bold tracking-tight text-white">Hero</span>
//     </div>
//     <p className="mt-6 text-base leading-7 text-gray-300">
//       Lorem ipsum dolor sit amet consectetur adipisicing elit, facilis illum eum
//       ullam nostrum atque quam.
//     </p>
//   </div>
// </div>;
