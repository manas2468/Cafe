import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, MapPin, Clock } from 'lucide-react';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: { label: string; href: string }[];
}

export const MobileDrawer = ({ isOpen, onClose, navItems }: MobileDrawerProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Dark blurred overlay */}
          <motion.div
            className="fixed inset-0 bg-espresso-dark/70 backdrop-blur-md z-[999] md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Premium Bottom Sheet Drawer */}
          <motion.div
            className="fixed bottom-0 left-0 right-0 bg-espresso-light border-t border-gold/25 rounded-t-[2.5rem] z-[1000] p-8 pb-10 flex flex-col md:hidden max-h-[85vh] overflow-y-auto"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
          >
            {/* Grab handle/indicator */}
            <div className="w-12 h-1 bg-gold/25 rounded-full mx-auto mb-6" />

            <div className="flex justify-between items-center mb-8">
              <div>
                <h3 className="font-serif text-2xl text-gold tracking-wide">Velvet Bean</h3>
                <p className="text-latte/50 text-[10px] tracking-widest uppercase">Specialty Coffee</p>
              </div>
              <button
                className="w-10 h-10 rounded-full bg-caramel/50 border border-gold/15 flex items-center justify-center text-latte hover:text-gold transition-colors focus:outline-none"
                onClick={onClose}
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Staggered Navigation Links */}
            <nav className="flex flex-col gap-4 mb-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className="font-serif text-2xl text-latte hover:text-gold transition-colors flex items-center justify-between border-b border-gold/5 pb-2 select-none"
                  onClick={onClose}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, ease: 'easeOut' }}
                >
                  <span>{item.label}</span>
                  <span className="text-gold text-lg font-light">→</span>
                </motion.a>
              ))}
            </nav>

            {/* Quick Cafe Info Details */}
            <div className="mt-auto border-t border-gold/10 pt-6 flex flex-col gap-4 text-sm text-latte/70">
              <div className="flex items-center gap-3">
                <MapPin className="w-4.5 h-4.5 text-gold shrink-0" />
                <span>Shop No 2, MJ College Rd, Ramanand Nagar, Jalgaon, Maharashtra 425002</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4.5 h-4.5 text-gold shrink-0" />
                <span>Daily: 11:00 AM — 10:00 PM</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4.5 h-4.5 text-gold shrink-0" />
                <span>+91 98230 87232</span>
              </div>
            </div>

            {/* Social Link */}
            <div className="flex justify-center mt-8 border-t border-gold/5 pt-4">
              <a
                href="#instagram"
                className="flex items-center gap-2 text-gold hover:text-gold-light transition-colors text-sm"
                onClick={onClose}
              >
                <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                <span className="font-serif tracking-widest text-xs uppercase">@velvetbeancafe</span>
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
