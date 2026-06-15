import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ScrollReveal } from '../components/ScrollReveal';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const REVIEWS = [
  {
    name: 'Sophia Loren',
    role: 'Connoisseur',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',
    quote: 'The Honey Lavender Latte is an absolute masterpiece of balance. Velvet Bean has created a flavor profile that feels deeply luxurious, floral but never overpowering.',
  },
  {
    name: 'Julian Carter',
    role: 'Art Director',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150',
    quote: 'An incredible architectural haven in the city. The ambient warm lighting, glassmorphism cards, and organic dividers translate into a cozy, cozy refuge. The shaken espresso is out of this world.',
  },
  {
    name: 'Elena Rostova',
    role: 'Food Writer',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150',
    quote: 'Pairing their warm almond cardamom croissant with a single-origin pour-over is a sacred sensory ritual. Every detail here, from the music to the ceramics, has a beautiful soul.',
  },
  {
    name: 'Marcus Aurelius',
    role: 'Barista Champion',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150',
    quote: 'Their roasting team operates on another level. Meticulous roasting profiles yield a floral brightness in their single-origins that is rare to find. Highly recommended for purists.',
  },
];

export const Testimonials = () => {
  const [active, setActive] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const handleNext = () => {
    setActive((prev) => (prev === REVIEWS.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActive((prev) => (prev === 0 ? REVIEWS.length - 1 : prev - 1));
  };

  return (
    <section 
      id="testimonials" 
      className="relative py-24 md:py-32 bg-espresso-dark overflow-hidden"
    >
      {/* Background soft lighting glow */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-gold/5 blur-[120px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <span className="font-serif text-xs md:text-sm text-gold tracking-[0.25em] uppercase font-semibold">
            Cafe Stories
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-cream tracking-tight mt-3">
            Voices of Velvet Bean
          </h2>
        </ScrollReveal>

        {/* Carousel Container */}
        <ScrollReveal delay={0.2}>
          <div className="relative glass-card rounded-[2.5rem] p-8 md:p-16 border border-gold/15 select-none select-none">
            
            {/* Quote Icon overlay */}
            <Quote className="absolute top-8 right-10 w-16 h-16 text-gold/10 pointer-events-none" />
            
            <div className="min-h-[220px] md:min-h-[180px] flex flex-col justify-center items-center text-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 30, scale: shouldReduceMotion ? 1 : 0.98 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: shouldReduceMotion ? 0 : -30, scale: shouldReduceMotion ? 1 : 0.98 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                  className="flex flex-col items-center gap-6"
                >
                  
                  {/* Pulsing Avatar */}
                  <div className="relative w-20 h-20">
                    {/* Ring 1 */}
                    <div className="absolute inset-0 rounded-full border border-gold/40 animate-ping opacity-75" style={{ animationDuration: '3s' }} />
                    {/* Ring 2 */}
                    <div className="absolute -inset-1.5 rounded-full border border-gold/20 animate-pulse-slow" />
                    
                    <img
                      src={REVIEWS[active].avatar}
                      alt={REVIEWS[active].name}
                      className="w-full h-full rounded-full object-cover border-2 border-gold relative z-10"
                    />
                  </div>

                  {/* Review Text */}
                  <p className="font-serif text-lg md:text-2xl italic text-latte/90 leading-relaxed font-light">
                    "{REVIEWS[active].quote}"
                  </p>

                  {/* Reviewer Meta details */}
                  <div>
                    <h4 className="font-serif text-base text-gold tracking-widest uppercase font-semibold">
                      {REVIEWS[active].name}
                    </h4>
                    <p className="font-sans text-[10px] text-latte/45 uppercase tracking-widest mt-1">
                      {REVIEWS[active].role}
                    </p>
                  </div>

                </motion.div>
              </AnimatePresence>
            </div>

            {/* Carousel navigation controls */}
            <div className="flex justify-between items-center mt-12 border-t border-gold/10 pt-8">
              {/* Left arrow */}
              <button
                onClick={handlePrev}
                className="w-11 h-11 rounded-full bg-caramel/30 border border-gold/20 flex items-center justify-center text-gold hover:bg-gold hover:text-espresso transition-all duration-300 clickable"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Dot Indicators */}
              <div className="flex gap-2">
                {REVIEWS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActive(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 clickable ${
                      active === idx ? 'w-6 bg-gold' : 'w-1.5 bg-gold/30'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Right arrow */}
              <button
                onClick={handleNext}
                className="w-11 h-11 rounded-full bg-caramel/30 border border-gold/20 flex items-center justify-center text-gold hover:bg-gold hover:text-espresso transition-all duration-300 clickable"
                aria-label="Next review"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
