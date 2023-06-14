import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const PageTransition = ({ children }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -200, opacity: 0 }}
        transition={{ duration: 1 }}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          background: "#fff",
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
