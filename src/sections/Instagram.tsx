import { ScrollReveal } from '../components/ScrollReveal';
import { Heart, MessageCircle } from 'lucide-react';

const INSTAGRAM_POSTS = [
  { id: 1, image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=400', likes: '1.2k', comments: '42' },
  { id: 2, image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=400', likes: '948', comments: '18' },
  { id: 3, image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=80&w=400', likes: '2.1k', comments: '64' },
  { id: 4, image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80&w=400', likes: '1.5k', comments: '31' },
  { id: 5, image: 'https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&q=80&w=400', likes: '1.8k', comments: '50' },
  { id: 6, image: 'https://images.unsplash.com/photo-1507133750040-4a8f57021571?auto=format&fit=crop&q=80&w=400', likes: '2.4k', comments: '88' },
];

export const InstagramFeed = () => {
  return (
    <section id="instagram" className="relative py-24 bg-espresso overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <span className="font-serif text-xs md:text-sm text-gold tracking-[0.25em] uppercase font-semibold">
            Social Rituals
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-cream tracking-tight mt-3 select-none">
            @velvetbeancafe
          </h2>
          <p className="font-sans text-sm text-latte/60 mt-4 leading-relaxed max-w-md mx-auto">
            Share your cozy coffee moments and tag us in your morning rituals. Join our digital specialty coffee club.
          </p>
        </ScrollReveal>

        {/* Responsive Photo Feed Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {INSTAGRAM_POSTS.map((post, index) => (
            <ScrollReveal key={post.id} delay={index * 0.08}>
              <div className="group aspect-square rounded-[1.8rem] overflow-hidden border border-gold/10 relative shadow-xl select-none clickable">
                
                {/* Photo Zoom */}
                <img
                  src={post.image}
                  alt={`Velvet Bean instagram visual snapshot ${post.id}`}
                  className="w-full h-full object-cover transition-transform duration-[1s] ease-out group-hover:scale-110"
                  loading="lazy"
                />

                {/* Interactive Glassmorphic Hover State */}
                <div className="absolute inset-0 bg-espresso-dark/70 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-center items-center gap-3 z-10">
                  <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center text-gold">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                  </div>
                  
                  <div className="flex items-center gap-4 text-xs font-mono text-cream font-medium">
                    <span className="flex items-center gap-1 font-sans">
                      <Heart className="w-3.5 h-3.5 fill-gold text-gold" />
                      {post.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle className="w-3.5 h-3.5 fill-cream text-cream" />
                      {post.comments}
                    </span>
                  </div>
                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};
