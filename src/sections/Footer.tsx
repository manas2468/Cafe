import { Heart } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-espresso-dark border-t border-gold/10 py-12 md:py-16 text-latte/60 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Identity */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left select-none">
          <h3 className="font-serif text-xl text-gold tracking-widest uppercase">Velvet Bean</h3>
          <p className="text-[10px] tracking-[0.3em] text-latte/40 uppercase mt-0.5">Specialty Café & Roastery</p>
        </div>

        {/* Navigation Quicklinks */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-xs tracking-wider uppercase font-semibold">
          <a href="#home" className="hover:text-gold transition-colors clickable">Home</a>
          <a href="#story" className="hover:text-gold transition-colors clickable">Story</a>
          <a href="#menu" className="hover:text-gold transition-colors clickable">Signature</a>
          <a href="#pairings" className="hover:text-gold transition-colors clickable">Pairings</a>
          <a href="#visit" className="hover:text-gold transition-colors clickable">Visit Us</a>
        </div>

        {/* Social media connections */}
        <div className="flex gap-4">
          <a
            href="#instagram"
            className="w-10 h-10 rounded-full bg-caramel/20 border border-gold/10 flex items-center justify-center hover:bg-gold hover:text-espresso transition-all duration-300 clickable"
            aria-label="Instagram"
          >
            <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          </a>
          <a
            href="#facebook"
            className="w-10 h-10 rounded-full bg-caramel/20 border border-gold/10 flex items-center justify-center hover:bg-gold hover:text-espresso transition-all duration-300 clickable"
            aria-label="Facebook"
          >
            <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </a>
          <a
            href="#twitter"
            className="w-10 h-10 rounded-full bg-caramel/20 border border-gold/10 flex items-center justify-center hover:bg-gold hover:text-espresso transition-all duration-300 clickable"
            aria-label="Twitter"
          >
            <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
          </a>
        </div>

      </div>

      {/* Copyright Disclaimer block */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12 pt-8 border-t border-gold/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] tracking-widest uppercase text-latte/30">
        <p>© {currentYear} Velvet Bean Cafe. All Rights Reserved.</p>
        <p className="flex items-center gap-1.5">
          <span>Made with</span>
          <Heart className="w-3 h-3 text-gold fill-gold animate-pulse" />
          <span>for Coffee Enthusiasts</span>
        </p>
      </div>
    </footer>
  );
};
