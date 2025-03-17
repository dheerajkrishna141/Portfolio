import { useAnimation, motion } from "framer-motion";
import React, { useEffect } from "react";

interface props {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbutton = ({ menuOpen, setMenuOpen }: props) => {
  const path1Controls = useAnimation();
  const path2Controls = useAnimation();

  const path1Variants = {
    open: { d: "M3.0601 2.99999L21.0606 21" },
    closed: { d: "M0 8.5L24 8.5" },
  };

  const path2Variants = {
    open: { d: "M3.00006 21.0607L21 3.06064" },
    closed: { d: "M0 15.5L24 15.5" },
  };

  useEffect(() => {
    if (menuOpen) {
      path1Controls.start(path1Variants.open);
      path2Controls.start(path2Variants.open);
    } else {
      path1Controls.start(path1Variants.closed);
      path2Controls.start(path2Variants.closed);
    }
  }, [menuOpen]);

  return (
    <div
      onClick={() => setMenuOpen(!menuOpen)}
      className="relative justify-self-center flex flex-col gap-2 cursor-pointer stroke-white stroke-2 z-50"
    >
      <svg width={"24"} height={"24"} viewBox="0 0 24 24">
        <motion.path
          animate={path1Controls}
          transition={{ duration: 0.2 }}
          {...path1Variants.closed}
        />
        <motion.path
          animate={path2Controls}
          transition={{ duration: 0.2 }}
          {...path2Variants.closed}
        />
      </svg>
    </div>
  );
};

export default Navbutton;
