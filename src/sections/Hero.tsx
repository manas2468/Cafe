import { useState, type MouseEvent } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Coffee } from 'lucide-react';
import coffeeVideo from '../assets/my-coffee-pour.mp4';

interface Ripple {
  x: number;
  y: number;
  id: number;
}

export const Hero = () => {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const shouldReduceMotion = useReducedMotion();

  const handleButtonClick = (e: MouseEvent<HTMLAnchorElement>) => {
    // Generate ripple positioning relative to button boundaries
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const newRipple = {
      x,
      y,
      id: Date.now(),
    };
    
    setRipples((prev) => [...prev, newRipple]);
  };

  const removeRipple = (id: number) => {
    setRipples((prev) => prev.filter((r) => r.id !== id));
  };

  const tagline = "Vibes. Taste. Celebration.";
  const words = tagline.split(" ");

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.18,
      },
    },
  };

  const wordVariants = {
    hidden: { 
      opacity: 0, 
      y: shouldReduceMotion ? 0 : 35,
      filter: shouldReduceMotion ? "none" : "blur(6px)" 
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1] as const
      } 
    },
  };

  return (
    <section 
      id="home" 
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-espresso"
    >
      {/* Background Video with Slow Zoom Effect */}
      <motion.div 
        className="absolute inset-0 w-full h-full z-0"
        initial={shouldReduceMotion ? { scale: 1 } : { scale: 1.08 }}
        animate={shouldReduceMotion ? { scale: 1 } : { scale: 1.02 }}
        transition={{ duration: 25, ease: "easeOut" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-espresso-dark/65 via-espresso/45 to-espresso z-10" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-45 select-none pointer-events-none"
        >
          <source src="/limelight/hero-bg.mp4" type="video/mp4" />
          <source src={coffeeVideo} type="video/mp4" />
        </video>
      </motion.div>

      {/* Hero Text Content Container */}
      <div className="relative z-20 text-center max-w-4xl px-6 flex flex-col items-center select-none">
        
        {/* Decorative Badge */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/15 border border-gold/25 backdrop-blur-md mb-6"
        >
          <Coffee className="w-4 h-4 text-gold" />
          <span className="text-[9px] md:text-xs font-sans tracking-[0.25em] text-gold-light uppercase font-semibold">
            Premium Specialty Coffeehouse
          </span>
        </motion.div>

        {/* Title Staggered Reveal */}
        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="font-serif text-5xl md:text-8xl text-cream tracking-tight leading-none mb-6"
        >
          {words.map((word, idx) => (
            <span key={idx} className="inline-block mr-3 md:mr-5 overflow-hidden py-1">
              <motion.span
                variants={wordVariants}
                className="inline-block"
              >
                {word}
              </motion.span>
            </span>
          ))}
        </motion.h1>

        {/* Café Intro description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="font-sans text-sm md:text-lg text-latte/75 tracking-wide max-w-xl mb-10"
        >
          Welcome to The Limelight Cafe near MJ College, Jalgaon. We specialize in mouth-watering pizzas, sizzling continental dishes, and customized decorations for your perfect birthday parties.
        </motion.p>

        {/* Pill CTA button with Custom Ripple Effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          <a
            href="#menu"
            onClick={handleButtonClick}
            className="relative overflow-hidden inline-flex items-center justify-center px-8 py-4 rounded-full bg-gold text-espresso-dark font-sans text-xs tracking-[0.2em] uppercase font-bold transition-all duration-300 hover:bg-gold-light hover:shadow-[0_0_30px_rgba(197,168,128,0.4)] clickable"
          >
            Explore Menu
            
            {/* Custom click ripple overlay elements */}
            {ripples.map((ripple) => (
              <span
                key={ripple.id}
                onAnimationEnd={() => removeRipple(ripple.id)}
                className="absolute bg-cream-light/35 rounded-full pointer-events-none transform -translate-x-1/2 -translate-y-1/2 animate-ping"
                style={{
                  left: ripple.x,
                  top: ripple.y,
                  width: '110px',
                  height: '110px',
                  animationDuration: '0.6s',
                }}
              />
            ))}
          </a>
        </motion.div>
      </div>

      {/* Visual Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 1.7, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-[8px] text-latte/40 tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent relative overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 right-0 h-1/3 bg-cream"
            animate={{
              y: ["0%", "300%"]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};
