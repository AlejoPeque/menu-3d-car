import Header from "./components/Header";
import Model from "./components/Model";
import TextPresentation from "./components/Header/TextPresentation";
import Cursor from "./components/Header/Cursor";
import { motion, AnimatePresence } from "framer-motion";
import { CursorProvider } from "./components/Header/Cursor/CursorContext";
import { useState, useEffect } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 0.5;
      });
    }, 10);

    setTimeout(() => {
      setIsLoading(false);
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  return (
    <CursorProvider>
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="page-transition"
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 1 }}
            exit={{ scaleY: 0 }}
            transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100vh",
              background: "#0337AA",
              transformOrigin: "top",
              zIndex: 9999999,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              fontSize: "15rem",
              fontWeight: "bold",
              display: "flex",
              justifyContent: "start",
              alignItems: "end",
              paddingLeft: "4rem",
              paddingBottom: "2rem",
            }}
          >
            {Math.round(counter)}%
          </motion.div>
        )}
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
        >
          <Header />
          <TextPresentation />
          <Cursor />
          <div style={{ height: "100vh", width: "100vw", overflow: "hidden" }}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.5,
                ease: [0.65, 0, 0.35, 1],
              }}
            >
              <Model />
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
    </CursorProvider>
  );
}

export default App;
