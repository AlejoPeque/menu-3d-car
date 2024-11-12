import { links } from "./data";
import styles from "./styles.module.scss";
import { motion } from "framer-motion";
import { ArrowUpRight } from "@phosphor-icons/react";
import { useCursor } from "../Cursor/CursorContext";

const perspective = {
  initial: {
    opacity: 0,
    scale: 0.8,
    transformOrigin: "left",
  },
  enter: (index) => ({
    opacity: 1,
    scale: 1,
    transformOrigin: "left",
    transition: {
      duration: 0.4,
      delay: 0.5 + 0.1 * index,
      ease: [0.65, 0, 0.35, 1],
    },
  }),
  exit: {
    opacity: 0,
    scale: 0.8,
    transformOrigin: "left",
    transition: {
      duration: 0.5,
      ease: [0.65, 0, 0.35, 1],
    },
  },
};

const Index = () => {
  const { setIsHovered } = useCursor();
  return (
    <div className={styles.nav}>
      <div className={styles.body}>
        {links.map((link, index) => (
          <div
            key={index}
            className={styles.linkContainer}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <ArrowUpRight size={35} weight="bold" />
            <motion.div
              variants={perspective}
              custom={index}
              initial="initial"
              animate="enter"
              exit="exit"
              className={styles.link}
            >
              <a href={link.href}>{link.title}</a>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;
