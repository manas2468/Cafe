import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';

export const VisitUs = () => {
  const clockRef = useRef(null);
  const isClockInView = useInView(clockRef, { once: false, margin: '-20% 0px -20% 0px' });
  const hourControls = useAnimation();
  const minuteControls = useAnimation();

  useEffect(() => {
    if (isClockInView) {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();

      // Calculate angles based on standard clock math
      const targetMinAngle = minutes * 6; // 360 deg / 60 min
      const targetHourAngle = (hours % 12) * 30 + minutes * 0.5; // 360 deg / 12 hr + minute correction

      // Sweep animation: spin around once/twice first for visual charm, then settle on system time
      hourControls.start({
        rotate: [0, 360 + targetHourAngle],
        transition: { duration: 1.8, ease: 'easeOut' },
      });

      minuteControls.start({
        rotate: [0, 720 + targetMinAngle],
        transition: { duration: 2.2, ease: 'easeOut' },
      });
    } else {
      // Reset hands to 0 when out of view
      hourControls.set({ rotate: 0 });
      minuteControls.set({ rotate: 0 });
    }
  }, [isClockInView, hourControls, minuteControls]);

  return (
    <section 
      id="visit" 
      className="relative py-24 md:py-36 bg-espresso overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Address Details & Animated Clock Hours */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <ScrollReveal>
              <span className="font-serif text-xs md:text-sm text-gold tracking-[0.25em] uppercase font-semibold">
                Come Inside
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-cream tracking-tight leading-tight mt-3">
                Visit Velvet Bean
              </h2>
              <p className="font-sans text-sm text-latte/60 mt-4 leading-relaxed">
                Step away from the rush of the city and sink into a comfortable lounge chair with your favorite brew. We are located in the heart of the historic roasting district.
              </p>
            </ScrollReveal>

            {/* Hours Card with Animated Clock */}
            <ScrollReveal delay={0.15}>
              <div className="glass-card rounded-[2rem] p-8 flex items-start gap-6 border border-gold/15 relative overflow-hidden group select-none select-none">
                
                {/* Custom Animated Clock Widget */}
                <div 
                  ref={clockRef} 
                  className="w-16 h-16 rounded-full border-2 border-gold flex items-center justify-center shrink-0 relative bg-espresso-light shadow-[0_0_15px_rgba(197,168,128,0.1)] group-hover:scale-105 transition-transform duration-300"
                >
                  {/* Clock center pin */}
                  <div className="w-2.5 h-2.5 rounded-full bg-gold z-20" />
                  
                  {/* Hour Hand */}
                  <motion.div
                    animate={hourControls}
                    style={{ originX: '50%', originY: '100%' }}
                    className="absolute bottom-1/2 left-[calc(50%-1.5px)] w-[3px] h-[16px] bg-cream rounded-full z-10"
                  />
                  
                  {/* Minute Hand */}
                  <motion.div
                    animate={minuteControls}
                    style={{ originX: '50%', originY: '100%' }}
                    className="absolute bottom-1/2 left-[calc(50%-1px)] w-[2px] h-[22px] bg-gold rounded-full z-10"
                  />

                  {/* Tick Marks for 12, 3, 6, 9 */}
                  <div className="absolute top-1 left-1/2 -translate-x-1/2 w-[1px] h-1.5 bg-gold/50" />
                  <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-[1px] h-1.5 bg-gold/50" />
                  <div className="absolute right-1 top-1/2 -translate-y-1/2 h-[1px] w-1.5 bg-gold/50" />
                  <div className="absolute left-1 top-1/2 -translate-y-1/2 h-[1px] w-1.5 bg-gold/50" />
                </div>

                {/* Clock Info Details */}
                <div className="flex flex-col gap-3">
                  <h3 className="font-serif text-lg text-cream flex items-center gap-2">
                    <Clock className="w-4.5 h-4.5 text-gold" />
                    Opening Hours
                  </h3>
                  <div className="font-sans text-sm text-latte/75 flex flex-col gap-1.5">
                    <div className="flex justify-between gap-6 border-b border-gold/5 pb-1">
                      <span className="text-latte/50">Mon — Fri:</span>
                      <span className="font-medium text-cream">7:00 AM — 9:00 PM</span>
                    </div>
                    <div className="flex justify-between gap-6">
                      <span className="text-latte/50">Sat — Sun:</span>
                      <span className="font-medium text-cream">8:00 AM — 10:00 PM</span>
                    </div>
                  </div>
                </div>

              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.3} className="flex flex-col gap-4 text-sm text-latte/70 pl-2">
              <div className="flex items-center gap-4 group">
                <div className="w-9 h-9 rounded-full bg-caramel/40 border border-gold/15 flex items-center justify-center text-gold shrink-0 group-hover:bg-gold group-hover:text-espresso transition-all duration-300">
                  <MapPin className="w-4.5 h-4.5" />
                </div>
                <span>Colaba Causeway, Near Gateway of India, Colaba, Mumbai 400001</span>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-9 h-9 rounded-full bg-caramel/40 border border-gold/15 flex items-center justify-center text-gold shrink-0 group-hover:bg-gold group-hover:text-espresso transition-all duration-300">
                  <Phone className="w-4.5 h-4.5" />
                </div>
                <span>+91 22 5550 2326</span>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-9 h-9 rounded-full bg-caramel/40 border border-gold/15 flex items-center justify-center text-gold shrink-0 group-hover:bg-gold group-hover:text-espresso transition-all duration-300">
                  <Mail className="w-4.5 h-4.5" />
                </div>
                <span>hello@velvetbean.coffee</span>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Google Maps Embed with Premium Sepia Filter */}
          <ScrollReveal delay={0.2} className="lg:col-span-7 w-full h-[400px] md:h-[500px]">
            <div className="w-full h-full rounded-[2.5rem] overflow-hidden border border-gold/25 shadow-2xl relative">
              {/* Glass map outline frame cover */}
              <div className="absolute inset-0 border-[3px] border-gold/10 rounded-[2.5rem] pointer-events-none z-20" />
              
              <iframe
                title="Velvet Bean Google Maps Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.205779038237!2d72.82583851489712!3d18.908075387187198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1e83dc2676b%3A0x4a9d7010a307049c!2sColaba%20Causeway%2C%20Colaba%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1625000000000!5m2!1sen!2sin"
                className="w-full h-full border-0 select-none grayscale invert-[0.9] sepia-[0.45] hue-rotate-[330deg] brightness-[0.88] contrast-[1.18] relative z-10"
                allowFullScreen={false}
                loading="lazy"
              />
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};
