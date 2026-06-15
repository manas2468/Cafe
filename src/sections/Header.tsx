import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { MobileDrawer } from '../components/MobileDrawer';

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'Story', href: '#story' },
  { label: 'Signature', href: '#menu' },
  { label: 'Pairings', href: '#pairings' },
  { label: 'Visit Us', href: '#visit' },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'py-4 bg-espresso-dark/80 backdrop-blur-md border-b border-gold/15 shadow-xl'
            : 'py-6 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Cafe Identity */}
          <a
            href="#home"
            className="font-serif text-2xl md:text-3xl text-gold tracking-widest uppercase flex flex-col group select-none clickable"
          >
            <span>Velvet Bean</span>
            <span className="text-[8px] tracking-[0.4em] text-latte/40 transition-colors group-hover:text-gold-light -mt-0.5">
              specialty café
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-sans text-xs text-latte/80 hover:text-gold tracking-widest uppercase transition-colors relative py-1.5 group clickable"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Header Action Button */}
          <div className="flex items-center gap-4">
            <a
              href="#visit"
              className="hidden sm:inline-flex px-6 py-2.5 rounded-full border border-gold/60 text-gold hover:bg-gold hover:text-espresso font-sans text-xs tracking-wider uppercase font-semibold transition-all duration-500 clickable"
            >
              Order Online
            </a>

            {/* Mobile Menu Icon */}
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="md:hidden p-2.5 rounded-full bg-caramel/20 border border-gold/10 text-latte hover:text-gold transition-colors focus:outline-none"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      <MobileDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        navItems={NAV_ITEMS}
      />
    </>
  );
};
