import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ScrollReveal } from '../components/ScrollReveal';

// Inline helper for the hand-drawn underline animation
const HandDrawnUnderline = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null);
  // Animates the stroke length when it comes into view
  const isInView = useInView(ref, { once: true, margin: "-20% 0px -20% 0px" });

  return (
    <span ref={ref} className="relative inline-block font-bold text-gold">
      {children}
      <svg
        className="absolute left-0 -bottom-1.5 w-full h-3 text-gold/80 pointer-events-none"
        viewBox="0 0 150 15"
        fill="none"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M 5, 8 Q 55, 1 105, 8 T 145, 6"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut", delay: 0.2 }}
        />
      </svg>
    </span>
  );
};

export const Story = () => {
  return (
    <section 
      id="story" 
      className="relative py-24 md:py-36 bg-espresso-dark overflow-hidden flex flex-col items-center"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Brand Story Content */}
          <ScrollReveal>
            <div className="flex flex-col gap-6">
              <span className="font-serif text-xs md:text-sm text-gold tracking-[0.25em] uppercase font-semibold">
                Our Heritage
              </span>
              
              <h2 className="font-serif text-4xl md:text-6xl text-cream tracking-tight leading-tight">
                Crafting Moments, <br />
                <HandDrawnUnderline>One Cup</HandDrawnUnderline> at a Time.
              </h2>
              
              <p className="font-sans text-base text-latte/75 leading-relaxed mt-4">
                Born in 2026, Velvet Bean grew out of a simple philosophy: coffee is not merely a morning routine, but a sacred <HandDrawnUnderline>sensory ritual</HandDrawnUnderline>. We travel to remote highlands to source raw, organic, single-origin beans, honoring the hard work of smallholder micro-farms.
              </p>
              
              <p className="font-sans text-base text-latte/70 leading-relaxed">
                Back in our roastery, we apply meticulous temperature profiling to extract sweet, floral, and nutty notes. In our space, the aroma of grinding beans meets a cozy refuge, welcoming you to slow down, breathe, and enjoy coffee <HandDrawnUnderline>brewed with soul</HandDrawnUnderline>.
              </p>
              
              <div className="flex items-center gap-8 mt-8 border-t border-gold/10 pt-8">
                <div>
                  <h4 className="font-serif text-3xl text-gold">100%</h4>
                  <p className="font-sans text-xs text-latte/50 uppercase tracking-widest mt-1">Single-Origin Arabica</p>
                </div>
                <div className="w-[1px] h-12 bg-gold/15" />
                <div>
                  <h4 className="font-serif text-3xl text-gold">Handmade</h4>
                  <p className="font-sans text-xs text-latte/50 uppercase tracking-widest mt-1">Latte Art & Pastries</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Layered Premium Image Presentation */}
          <div className="relative w-full h-[400px] md:h-[500px]">
            {/* Background geometric decorative frames */}
            <div className="absolute -top-6 -left-6 w-2/3 h-2/3 rounded-[2rem] border border-gold/10 pointer-events-none" />
            <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 rounded-[2rem] border border-gold/10 pointer-events-none" />

            {/* Main Image Card with Glass Frame */}
            <ScrollReveal delay={0.2} className="absolute inset-0 z-10">
              <div className="w-full h-full rounded-[2.5rem] overflow-hidden border border-gold/20 shadow-2xl relative group">
                <div className="absolute inset-0 bg-espresso/25 group-hover:bg-transparent transition-colors duration-700 z-10 pointer-events-none" />
                <motion.img
                  src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800"
                  alt="Barista brewing specialty coffee"
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                />
              </div>
            </ScrollReveal>

            {/* Inset floating glass badge */}
            <ScrollReveal delay={0.4} className="absolute bottom-6 -left-4 md:-left-8 z-20">
              <div className="glass-card px-6 py-4 rounded-2xl flex items-center gap-4 shadow-xl">
                <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center text-gold font-serif text-lg font-bold">
                  VB
                </div>
                <div>
                  <p className="font-serif text-sm text-cream font-medium">Roasting Daily</p>
                  <p className="font-sans text-[10px] text-latte/50 uppercase tracking-wider">Est. 2026</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
};
