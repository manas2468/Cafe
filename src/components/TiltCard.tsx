import React, { useRef } from 'react';
import { motion, useSpring, useMotionValue, useReducedMotion } from 'framer-motion';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
}

export const TiltCard = ({ children, className = '' }: TiltCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Motion values to hold tilt angles
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  // Springs for smooth physics-based returns and movements
  const springConfig = { damping: 22, stiffness: 220, mass: 0.5 };
  const springX = useSpring(rotateX, springConfig);
  const springY = useSpring(rotateY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Mouse coordinates relative to card center (normalized between -1 and 1)
    const relativeX = (e.clientX - rect.left - width / 2) / (width / 2);
    const relativeY = (e.clientY - rect.top - height / 2) / (height / 2);

    // Max rotation is 12 degrees
    const maxTilt = 12;
    rotateX.set(-relativeY * maxTilt);
    rotateY.set(relativeX * maxTilt);
  };

  const handleMouseLeave = () => {
    // Return smoothly to flat position
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: springX,
        rotateY: springY,
        transformStyle: 'preserve-3d',
      }}
      className={`perspective-[1000px] ${className}`}
    >
      <div style={{ transform: 'translateZ(20px)' }} className="w-full h-full">
        {children}
      </div>
    </motion.div>
  );
};
