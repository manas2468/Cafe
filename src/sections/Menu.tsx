import { ScrollReveal } from '../components/ScrollReveal';
import { TiltCard } from '../components/TiltCard';
import { Heart, Sparkles, Flame } from 'lucide-react';

const DRINKS = [
  {
    name: 'Honey Lavender Latte',
    price: '$6.50',
    description: 'Rich espresso infusion combined with sweet wildflower honey, micro-foamed milk, and a delicate top sprinkle of culinary French lavender.',
    tag: 'Signature',
    icon: Sparkles,
    image: 'https://images.unsplash.com/photo-1570968915860-54d5c301fc9f?auto=format&fit=crop&q=80&w=600',
  },
  {
    name: 'Brown Sugar Shaken Espresso',
    price: '$6.00',
    description: 'Blonde espresso shots hand-shaken with caramelized brown sugar, Ceylon cinnamon, ice, and finished with a creamy layer of organic oatmilk.',
    tag: 'Popular',
    icon: Flame,
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&q=80&w=600',
  },
  {
    name: 'Golden Turmeric Steamer',
    price: '$5.75',
    description: 'A soothing caffeine-free blend of organic anti-inflammatory turmeric root, ginger, cracked black pepper, and steamed almond milk.',
    tag: 'Wellness',
    icon: Heart,
    image: 'https://images.unsplash.com/photo-1618228473300-9a5cf2a60b4f?auto=format&fit=crop&q=80&w=600',
  },
];

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
            The Velvet Bar
          </span>
          <h2 className="font-serif text-4xl md:text-6xl text-cream tracking-tight leading-tight mt-4">
            Signature Drinks
          </h2>
          <p className="font-sans text-sm md:text-base text-latte/60 mt-4 leading-relaxed">
            Discover our curated lineup of specialty drinks, hand-crafted by master baristas to excite your palate and warm your soul.
          </p>
        </ScrollReveal>

        {/* 3 Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {DRINKS.map((drink, index) => {
            const IconComponent = drink.icon;
            return (
              <ScrollReveal key={drink.name} delay={index * 0.15}>
                <TiltCard className="w-full h-full">
                  <div className="group glass-card glass-card-hover rounded-[2.5rem] p-6 flex flex-col h-full relative overflow-hidden select-none select-none">
                    
                    {/* Image Area with Zoom */}
                    <div className="w-full h-52 rounded-[1.8rem] overflow-hidden mb-6 relative">
                      {/* Tag Badge */}
                      <span className="absolute top-4 left-4 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-espresso-dark/80 border border-gold/25 backdrop-blur-md text-gold text-[10px] uppercase font-semibold tracking-wider">
                        <IconComponent className="w-3.5 h-3.5" />
                        {drink.tag}
                      </span>
                      
                      <div className="absolute inset-0 bg-espresso/15 group-hover:bg-transparent transition-colors duration-500 z-10" />
                      <img
                        src={drink.image}
                        alt={drink.name}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      />
                    </div>

                    {/* Drink Metadata */}
                    <div className="flex justify-between items-start gap-4 mb-3">
                      <h3 className="font-serif text-xl md:text-2xl text-cream tracking-wide group-hover:text-gold transition-colors duration-300">
                        {drink.name}
                      </h3>
                      <span className="font-serif text-lg md:text-xl text-gold font-bold shrink-0">
                        {drink.price}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="font-sans text-sm text-latte/65 leading-relaxed mb-8">
                      {drink.description}
                    </p>

                    {/* Interactive Order Action / Underline animate */}
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
          })}
        </div>

      </div>
    </section>
  );
};
