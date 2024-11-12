import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./styles.module.scss";
import { useCursor } from "./CursorContext";
import { ArrowUpRight } from "@phosphor-icons/react";

const Index = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { isHovered } = useCursor();

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    console.log(isHovered);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      className={styles.cursor}
      style={{
        boxShadow: isHovered
          ? "0 0 0px 1px rgb(212, 212, 212)"
          : "0 0 0px 2px rgb(212, 212, 212)",
      }}
      animate={{
        x: mousePosition.x - 16,
        y: mousePosition.y - 16,
        scale: isHovered ? 2 : 1,
      }}
      transition={{
        type: "spring",
        damping: 50,
        stiffness: 1000,
      }}
    >
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "100%",
            }}
          >
            <ArrowUpRight
              weight="bold"
              style={{
                width: "70%",
                height: "70%",
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Index;
