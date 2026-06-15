import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ScrollReveal } from '../components/ScrollReveal';

const PAIRINGS_LIST = [
  {
    name: 'Pistachio Raspberry Tart',
    price: '$7.50',
    description: 'Crisp butter shortbread shell filled with house-made fresh raspberry confit, topped with a velvety, rich white-chocolate pistachio ganache and crushed roasted pistachios.',
    pairWith: 'Honey Lavender Latte',
  },
  {
    name: 'Smoked Salmon Brioche',
    price: '$12.00',
    description: 'Freshly toasted house brioche bun layered with organic herb cream cheese, pickled shallots, wild capers, micro-dill, and sustainably caught premium smoked sockeye salmon.',
    pairWith: 'Brown Sugar Shaken Espresso',
  },
  {
    name: 'Almond Cardamom Croissant',
    price: '$6.00',
    description: 'Our signature twice-baked flaky croissant, loaded with a sweet cardamom-spiced almond frangipane center and topped with sliced almonds and vanilla bean glaze.',
    pairWith: 'Golden Turmeric Steamer',
  },
  {
    name: 'Fig & Goat Cheese Flatbread',
    price: '$9.50',
    description: 'Crisp hand-stretched flatbread topped with black mission figs, artisanal goat cheese crumbles, sweet caramelized onions, baby arugula, and a drizzle of local organic honey.',
    pairWith: 'Single-Origin Pour Over',
  },
];

export const Pairings = () => {
  const [activeIdx, setActiveIdx] = useState<number | null>(0);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section 
      id="pairings" 
      className="relative py-24 md:py-36 bg-espresso-dark overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left: Overlapping Asymmetric Image Grid */}
          <div className="lg:col-span-6 relative w-full h-[450px] md:h-[550px] flex items-center justify-center">
            {/* Image 1: Top-Left Croissant */}
            <ScrollReveal className="absolute w-[60%] h-[65%] top-0 left-0 z-10">
              <div className="w-full h-full rounded-[2.5rem] overflow-hidden border border-gold/15 shadow-2xl relative group">
                <div className="absolute inset-0 bg-espresso/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img
                  src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=600"
                  alt="Freshly baked butter croissants"
                  className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-108"
                />
              </div>
            </ScrollReveal>

            {/* Image 2: Bottom-Right Toast/Pastry */}
            <ScrollReveal delay={0.25} className="absolute w-[60%] h-[65%] bottom-0 right-0 z-20">
              <div className="w-full h-full rounded-[2.5rem] overflow-hidden border border-gold/25 shadow-2xl relative group">
                <div className="absolute inset-0 bg-espresso/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img
                  src="https://images.unsplash.com/photo-1541532713592-79a0317b6b77?auto=format&fit=crop&q=80&w=600"
                  alt="Avocado sourdough toast topped with microgreens"
                  className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-108"
                />
              </div>
            </ScrollReveal>

            {/* Background Accent Grid Circles */}
            <div className="absolute w-52 h-52 rounded-full bg-gold/5 blur-3xl -z-10" />
          </div>

          {/* Right: Interaction List Column */}
          <div className="lg:col-span-6">
            <ScrollReveal className="mb-12">
              <span className="font-serif text-xs md:text-sm text-gold tracking-[0.25em] uppercase font-semibold">
                Perfect Companions
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-cream tracking-tight leading-tight mt-3">
                Food Pairings
              </h2>
              <p className="font-sans text-sm text-latte/60 mt-4 leading-relaxed">
                Elevate your coffee ritual with our gourmet pastry pairings, baked fresh daily in-house by our pastry chefs.
              </p>
            </ScrollReveal>

            {/* List with Hover Accordions */}
            <div className="flex flex-col border-t border-gold/10">
              {PAIRINGS_LIST.map((food, idx) => {
                const isHovered = activeIdx === idx;
                return (
                  <div
                    key={food.name}
                    className="border-b border-gold/10 py-6 group clickable"
                    onMouseEnter={() => setActiveIdx(idx)}
                    onMouseLeave={() => setActiveIdx(idx)} // Retain last active or toggle
                  >
                    {/* Header line */}
                    <div className="flex justify-between items-center gap-4 select-none">
                      <div className="flex items-center gap-4">
                        <span className={`font-mono text-xs transition-colors duration-300 ${
                          isHovered ? 'text-gold' : 'text-latte/30'
                        }`}>
                          0{idx + 1}
                        </span>
                        <h3 className={`font-serif text-xl md:text-2xl transition-colors duration-300 ${
                          isHovered ? 'text-gold' : 'text-cream'
                        }`}>
                          {food.name}
                        </h3>
                      </div>
                      <span className={`font-serif text-lg transition-colors duration-300 ${
                        isHovered ? 'text-gold-light' : 'text-latte/55'
                      }`}>
                        {food.price}
                      </span>
                    </div>

                    {/* Sliding Hover Description */}
                    <motion.div
                      initial={false}
                      animate={{
                        height: isHovered ? 'auto' : 0,
                        opacity: isHovered ? 1 : 0,
                        marginTop: isHovered ? 12 : 0,
                      }}
                      transition={{
                        duration: shouldReduceMotion ? 0.1 : 0.4,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="overflow-hidden"
                    >
                      <p className="font-sans text-sm text-latte/70 leading-relaxed pr-8">
                        {food.description}
                      </p>
                      
                      <div className="flex items-center gap-2 mt-4 text-[10px] uppercase tracking-wider text-gold/80 bg-gold/5 w-max px-3 py-1 rounded-full border border-gold/10">
                        <span className="font-sans font-semibold">Recommended with:</span>
                        <span className="font-serif italic font-bold">{food.pairWith}</span>
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
