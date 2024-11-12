import Button from "./Button";
import styles from "./styles.module.scss";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";

const variants = {
  open: {
    width: 480,
    height: 650,
    bottom: "-25px",
    left: "-25px",
    transition: {
      duration: 0.4,
      ease: [0.11, 0, 0.5, 0],
    },
  },
  closed: {
    width: 0,
    height: 0,
    bottom: "25px",
    left: "80px",
    transition: {
      duration: 0.4,
      delay: 0.3,
      ease: [0.11, 0, 0.5, 0],
    },
  },
};

const Index = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className={styles.header}>
      <motion.div
        className={styles.menu}
        variants={variants}
        animate={isActive ? "open" : "closed"}
        initial="closed"
      >
        <AnimatePresence>{isActive && <Navbar />}</AnimatePresence>
      </motion.div>
      <Button isActive={isActive} setIsActive={setIsActive} />
    </div>
  );
};

export default Index;
