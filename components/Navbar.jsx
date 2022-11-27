"use client";

import { motion } from "framer-motion";
import styles from "styles";
import { navVariants } from "utils/motion";

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    className={`${styles.xPaddings} py-8 relative`}
    initial={"hidden"}
    whileInView={"show"}
    viewport={{once: true}}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <img
        role={"button"}
        src="/search.svg"
        alt="search"
        className="w-6 h-6 object-contain cursor-pointer"
      />
      <h2 className="uppercase font-extrabold leading-[30px] text-[24px] text-white">
        MetaMadness
      </h2>
      <img
        role={"button"}
        src="/menu.svg"
        alt="menu"
        className="w-6 h-6 object-contain cursor-pointer"
      />
    </div>
  </motion.nav>
);

export default Navbar;
