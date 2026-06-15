import { useState } from 'react';
import { ScrollReveal } from '../components/ScrollReveal';
import { TiltCard } from '../components/TiltCard';
import { Heart, Sparkles, Flame } from 'lucide-react';

const ITEMS = [
  {
    name: 'Paneer Tikka Cheese Burst Pizza',
    price: '₹280',
    description: 'Our signature double-layered cheese burst crust topped with local tandoori-marinated paneer chunks, crisp bell peppers, red onions, and baked to golden perfection.',
    tag: 'Must Try',
    icon: Sparkles,
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=600',
    localImage: '/limelight/menu-item-1.jpg',
  },
  {
    name: 'Hazelnut Frappé',
    price: '₹165',
    description: 'A double shot of chilled specialty espresso, blended creamy with thick milk, roasted Italian hazelnut extract, and topped with dark chocolate shavings.',
    tag: 'College Favorite',
    icon: Flame,
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&q=80&w=600',
    localImage: '/limelight/menu-item-2.jpg',
  },
  {
    name: 'Sizzling Chocolate Brownie',
    price: '₹180',
    description: 'Freshly baked walnut fudge brownie served on a piping hot iron sizzler plate, crowned with vanilla bean ice cream and smothered in rich hot fudge sauce.',
    tag: 'Best Seller',
    icon: Heart,
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80&w=600',
    localImage: '/limelight/menu-item-3.jpg',
  },
];

interface MenuItem {
  name: string;
  price: string;
  description: string;
  tag: string;
  icon: React.ComponentType<{ className?: string }>;
  image: string;
  localImage: string;
}

const MenuCard = ({ item, index }: { item: MenuItem; index: number }) => {
  const [imgSrc, setImgSrc] = useState(item.localImage);
  const IconComponent = item.icon;

  return (
    <ScrollReveal delay={index * 0.15}>
      <TiltCard className="w-full h-full">
        <div className="group glass-card glass-card-hover rounded-[2.5rem] p-6 flex flex-col h-full relative overflow-hidden select-none">
          
          {/* Image Area with Zoom & Error Failover */}
          <div className="w-full h-52 rounded-[1.8rem] overflow-hidden mb-6 relative">
            {/* Tag Badge */}
            <span className="absolute top-4 left-4 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-espresso-dark/80 border border-gold/25 backdrop-blur-md text-gold text-[10px] uppercase font-semibold tracking-wider">
              <IconComponent className="w-3.5 h-3.5" />
              {item.tag}
            </span>
            
            <div className="absolute inset-0 bg-espresso/15 group-hover:bg-transparent transition-colors duration-500 z-10" />
            <img
              src={imgSrc}
              onError={() => setImgSrc(item.image)}
              alt={item.name}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
          </div>

          {/* Item Details */}
          <div className="flex justify-between items-start gap-4 mb-3">
            <h3 className="font-serif text-xl md:text-2xl text-cream tracking-wide group-hover:text-gold transition-colors duration-300">
              {item.name}
            </h3>
            <span className="font-serif text-lg md:text-xl text-gold font-bold shrink-0">
              {item.price}
            </span>
          </div>

          {/* Description */}
          <p className="font-sans text-sm text-latte/65 leading-relaxed mb-8">
            {item.description}
          </p>

          {/* Action Trigger */}
          <div className="mt-auto pt-4 flex items-center gap-2 text-gold group-hover:text-gold-light text-xs font-semibold uppercase tracking-widest relative pb-2 w-max clickable">
            <span>Order Now</span>
            <span className="text-sm">→</span>
            
            {/* Animating golden underline */}
            <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gold transition-all duration-500 group-hover:w-full" />
          </div>

        </div>
      </TiltCard>
    </ScrollReveal>
  );
};

export const Menu = () => {
  return (
    <section 
      id="menu" 
      className="relative py-24 md:py-36 bg-espresso overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <span className="font-serif text-xs md:text-sm text-gold tracking-[0.25em] uppercase font-semibold">
            Cafe Favorites
          </span>
          <h2 className="font-serif text-4xl md:text-6xl text-cream tracking-tight leading-tight mt-4">
            Menu Highlights
          </h2>
          <p className="font-sans text-sm md:text-base text-latte/60 mt-4 leading-relaxed">
            Taste our top-rated pizzas, chilled coffee shakes, and sizzling desserts, prepared fresh daily near MJ College area.
          </p>
        </ScrollReveal>

        {/* 3 Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {ITEMS.map((item, index) => (
            <MenuCard key={item.name} item={item} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};
