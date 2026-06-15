import { motion, useScroll, useTransform } from 'framer-motion';

// SVG representing a detailed coffee bean with its central groove
const CoffeeBeanSVG = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 100 100"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M50,8 C23,8 12,32 12,50 C12,68 23,92 50,92 C77,92 88,68 88,50 C88,32 77,8 50,8 Z M50,92 C50,92 42,65 52,45 C62,25 48,8 48,8 C48,8 54,28 44,48 C34,68 50,92 50,92 Z" />
  </svg>
);

export const FloatingBeans = () => {
  const { scrollY } = useScroll();
  
  // Transform functions mapping scrollY to y-offset for parallax depth simulation
  const yDepth1 = useTransform(scrollY, [0, 4000], [0, -400]);
  const yDepth2 = useTransform(scrollY, [0, 4000], [0, -180]);
  const yDepth3 = useTransform(scrollY, [0, 4000], [0, -600]);
  const yDepth4 = useTransform(scrollY, [0, 4000], [0, -320]);

  // Positions and properties of individual parallax beans
  const beans = [
    { id: 1, left: '5%', top: '12%', size: 'w-10 h-10', opacity: 0.12, transform: yDepth1, baseRotate: 22, delay: 0 },
    { id: 2, left: '88%', top: '24%', size: 'w-14 h-14', opacity: 0.08, transform: yDepth2, baseRotate: -45, delay: 1.5 },
    { id: 3, left: '8%', top: '48%', size: 'w-8 h-8', opacity: 0.14, transform: yDepth3, baseRotate: 75, delay: 0.8 },
    { id: 4, left: '82%', top: '60%', size: 'w-16 h-16', opacity: 0.06, transform: yDepth4, baseRotate: 135, delay: 2.2 },
    { id: 5, left: '12%', top: '82%', size: 'w-11 h-11', opacity: 0.13, transform: yDepth1, baseRotate: -15, delay: 0.3 },
    { id: 6, left: '85%', top: '88%', size: 'w-10 h-10', opacity: 0.09, transform: yDepth3, baseRotate: 90, delay: 1.9 },
    { id: 7, left: '48%', top: '40%', size: 'w-9 h-9', opacity: 0.07, transform: yDepth2, baseRotate: 180, delay: 3.1 },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none">
      {beans.map((bean) => (
        <motion.div
          key={bean.id}
          className={`absolute ${bean.size} text-gold/60`}
          style={{
            left: bean.left,
            top: bean.top,
            opacity: bean.opacity,
            y: bean.transform,
          }}
          animate={{
            // Floating drift cycles
            x: [0, 12, -8, 0],
            y: [0, -18, 12, 0],
            rotate: [bean.baseRotate, bean.baseRotate + 12, bean.baseRotate - 8, bean.baseRotate],
          }}
          transition={{
            duration: 10 + bean.id * 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: bean.delay,
          }}
        >
          <CoffeeBeanSVG className="w-full h-full" />
        </motion.div>
      ))}
    </div>
  );
};
