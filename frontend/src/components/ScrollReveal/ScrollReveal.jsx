import React, { useState } from "react";
import { motion } from "framer-motion";

const ScrollReveal = ({ 
  children, 
  direction = "up", 
  duration = 0.8, 
  delay = 0, 
  distance = 50,
  scale = 0.95,
  className = ""
}) => {
  const [isInView, setIsInView] = useState(false);

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? distance : direction === "down" ? -distance : 0,
      x: direction === "left" ? distance : direction === "right" ? -distance : 0,
      scale: scale,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration: duration,
        delay: delay,
        ease: [0.25, 0.1, 0.25, 1], // Smooth cubic-bezier
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      onViewportEnter={() => setIsInView(true)}
      viewport={{ once: true, amount: 0.1 }}
      variants={variants}
      className={`scroll-reveal-container ${isInView ? "reveal-visible" : ""} ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;

