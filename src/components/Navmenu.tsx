import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { content } from "./Navbar";
import Navbutton from "./Navbutton";

const Navmenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="relative block lg:hidden ml-auto">
      <Navbutton menuOpen={menuOpen} setMenuOpen={setMenuOpen}></Navbutton>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            style={{ backgroundColor: "rgba(33,38,49,1)" }}
            transition={{ duration: 0.5, type: "spring", ease: "easeInOut" }}
            className="absolute -top-2 -right-2 w-64 min-h-64 rounded-md bg-gray-500 mt-10 z-10 p-8 flex flex-col origin-top-right"
          >
            <ul className="flex flex-col gap-2 flex-1">
              {content.map((cont, index) => (
                <a href={"#" + cont} onClick={() => setMenuOpen(false)}>
                  <li
                    key={index}
                    className="text-white text-xl font-medium cursor-pointer"
                  >
                    {cont}
                  </li>
                </a>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navmenu;
