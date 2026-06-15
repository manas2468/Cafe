import { type ReactNode, useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export const ScrollReveal = ({ children, delay = 0, duration = 0.8, className = "" }: ScrollRevealProps) => {
  const ref = useRef(null);
  // Detects when the element has scrolled 10% into view
  const isInView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });
  const shouldReduceMotion = useReducedMotion();

  const revealVariants = {
    hidden: {
      opacity: 0,
      scale: shouldReduceMotion ? 1 : 0.93,
      rotate: shouldReduceMotion ? 0 : -2.5,
      filter: shouldReduceMotion ? "none" : "blur(10px)",
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      filter: "blur(0px)",
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={revealVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // Premium cubic easing
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
