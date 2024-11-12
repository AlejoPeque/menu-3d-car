import styles from "./styles.module.scss";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useCursor } from "../Cursor/CursorContext";

const Index = ({ isActive, setIsActive }) => {
  const audioRef = useRef(null);
  const { setIsHovered } = useCursor();

  const handleClick = () => {
    audioRef.current.currentTime = 0;
    audioRef.current.volume = 0.3;
    audioRef.current.play();
    setIsActive(!isActive);
  };

  return (
    <>
      <audio ref={audioRef}>
        <source src="/sound-menu.mp3" type="audio/mp3" />
      </audio>

      <motion.div
        onClick={handleClick}
        className={styles.button}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileTap={{
          scale: 0.85,
          rotate: 5,
          transition: {
            type: "spring",
            stiffness: 400,
            damping: 10,
            duration: 0.2,
          },
        }}
      >
        <motion.div
          animate={{
            top: isActive ? "-100%" : "0%",
            transition: {
              duration: 0.4,
              ease: [0.65, 0, 0.35, 1],
            },
          }}
          className={styles.slider}
        >
          <div className={styles.el}>
            <PerspectiveText label="Open Menu" />
          </div>

          <div className={styles.el}>
            <PerspectiveText label="Close Menu" />
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Index;

const PerspectiveText = ({ label }) => {
  return (
    <div className={styles.perspectiveText}>
      <p>{label}</p>
      <p>{label}</p>
    </div>
  );
};
