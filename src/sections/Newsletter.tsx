import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Send, CheckCircle2, Mail } from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';

export const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    // Simulate API request delay
    setIsSubmitted(true);
  };

  return (
    <section 
      id="newsletter" 
      className="relative py-24 md:py-36 bg-espresso-dark overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <ScrollReveal>
          
          {/* Outer rotating glowing border box representing the premium Contact/Newsletter CTA */}
          <div className="rotating-border-box w-full rounded-[2.5rem] shadow-2xl">
            
            {/* Inner Content Card */}
            <div className="rotating-border-inner rounded-[2.5rem] p-8 md:p-16 flex flex-col items-center text-center">
              
              {/* Envelope visual icon */}
              <div className="w-14 h-14 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center text-gold mb-6 select-none">
                <Mail className="w-6 h-6" />
              </div>

              <span className="font-serif text-xs md:text-sm text-gold tracking-[0.25em] uppercase font-semibold select-none">
                The Roast List
              </span>
              <h2 className="font-serif text-3xl md:text-5xl text-cream tracking-tight mt-3 mb-4 select-none">
                Join the Bean Club
              </h2>
              <p className="font-sans text-sm md:text-base text-latte/60 max-w-xl mb-10 leading-relaxed select-none">
                Subscribe to receive early announcements of limited-run single-origin beans, monthly roasting diaries, and invitations to private tasting events.
              </p>

              {/* Form switch with Success State */}
              <div className="w-full max-w-md">
                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      className="flex flex-col sm:flex-row gap-3 w-full"
                      exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -15 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Email input with neon-soft glow on focus */}
                      <input
                        type="email"
                        required
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="flex-grow px-6 py-4 rounded-full bg-espresso-dark border border-gold/25 text-latte placeholder-latte/30 text-sm focus:outline-none focus:border-gold focus:shadow-[0_0_20px_rgba(197,168,128,0.45)] transition-all duration-300 font-sans clickable"
                      />
                      
                      {/* Submit Button */}
                      <button
                        type="submit"
                        className="px-6 py-4 rounded-full bg-gold text-espresso-dark font-sans text-xs tracking-widest uppercase font-bold hover:bg-gold-light transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(197,168,128,0.3)] clickable"
                      >
                        <span>Join</span>
                        <Send className="w-3.5 h-3.5" />
                      </button>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex flex-col items-center gap-3 p-4 bg-gold/5 border border-gold/20 rounded-2xl"
                    >
                      <CheckCircle2 className="w-8 h-8 text-gold animate-bounce" />
                      <h4 className="font-serif text-lg text-cream">You are on the list!</h4>
                      <p className="font-sans text-xs text-latte/50">
                        Check your inbox soon for your welcoming bean tasting voucher.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </div>
          </div>

        </ScrollReveal>
      </div>
    </section>
  );
};
