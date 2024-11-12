import { useCursor } from "../Cursor/CursorContext";
import styles from "./styles.module.scss";
import { motion } from "framer-motion";

const Index = () => {
  const { setIsHovered } = useCursor();
  return (
    <div className={styles.container}>
      <h1>GET</h1>
      <h1
        style={{ position: "relative", top: "-30px" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        STARTED
      </h1>
    </div>
  );
};

export default Index;
