import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader = ({ onComplete }: PreloaderProps) => {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsDone(true);
            setTimeout(onComplete, 800); // Time for the slide-up transition
          }, 300);
          return 100;
        }
        // Increment slowly for smooth filling effect
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          className="fixed inset-0 bg-espresso z-[99999] flex flex-col items-center justify-center"
          exit={{ 
            y: '-100%',
            opacity: 0,
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
        >
          <div className="relative flex flex-col items-center">
            {/* Steam rising vector with custom keyframes */}
            <svg
              className="w-24 h-16 mb-2 text-gold-light/60"
              viewBox="0 0 100 60"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            >
              <path
                className="steam-path-1"
                d="M35,50 Q30,35 40,20 T35,0"
              />
              <path
                className="steam-path-2"
                d="M50,50 Q55,35 45,20 T50,0"
              />
              <path
                className="steam-path-3"
                d="M65,50 Q60,35 70,20 T65,0"
              />
            </svg>

            {/* Coffee Cup Filling SVG */}
            <div className="relative w-36 h-28">
              <svg
                className="w-full h-full text-gold"
                viewBox="0 0 140 100"
                fill="none"
              >
                <defs>
                  {/* Clip liquid within the cup contour */}
                  <clipPath id="cup-clip">
                    <path d="M15,10 C15,10 17,70 65,70 C113,70 115,10 115,10 Z" />
                  </clipPath>
                </defs>

                {/* Cup handle */}
                <path
                  d="M115,25 C132,25 137,45 115,55"
                  stroke="currentColor"
                  strokeWidth="8"
                  strokeLinecap="round"
                />

                {/* Cup outline background */}
                <path
                  d="M10,10 L120,10 C120,10 115,80 65,80 C15,80 10,10 10,10 Z"
                  stroke="currentColor"
                  strokeWidth="8"
                  strokeLinejoin="round"
                />

                {/* Clipped liquid area */}
                <g clipPath="url(#cup-clip)">
                  {/* Base dark espresso backing */}
                  <rect
                    x="0"
                    y="0"
                    width="140"
                    height="100"
                    fill="#271912"
                  />
                  {/* Rising golden crema/liquid layer */}
                  <motion.rect
                    x="0"
                    width="140"
                    height="100"
                    fill="#C5A880"
                    animate={{
                      y: 75 - (progress * 0.68), // Moves liquid upwards
                    }}
                    transition={{ ease: "easeInOut" }}
                  />
                </g>

                {/* Saucer */}
                <path
                  d="M5,90 L125,90"
                  stroke="currentColor"
                  strokeWidth="8"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Café Brand & Progress */}
            <h2 className="text-gold font-serif text-2xl md:text-3xl tracking-[0.1em] mt-6 uppercase select-none">
              The Limelight Cafe
            </h2>
            <p className="text-latte/40 text-xs font-serif mt-1 tracking-widest uppercase">
              थे लाइमलाइट कैफे
            </p>
            
            <div className="w-48 bg-caramel h-[2px] mt-6 rounded-full overflow-hidden relative">
              <motion.div 
                className="bg-gold h-full"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="text-latte/30 text-xs font-mono mt-2 tracking-widest select-none">
              {progress}%
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
