import { useState } from 'react';
import { Preloader } from './components/Preloader';
import { CustomCursor } from './components/CustomCursor';
import { FloatingBeans } from './components/FloatingBeans';
import { Header } from './sections/Header';
import { Hero } from './sections/Hero';
import { Story } from './sections/Story';
import { Menu } from './sections/Menu';
import { Pairings } from './sections/Pairings';
import { VisitUs } from './sections/VisitUs';
import { Testimonials } from './sections/Testimonials';
import { InstagramFeed } from './sections/Instagram';
import { Newsletter } from './sections/Newsletter';
import { Footer } from './sections/Footer';
import { WaveDividerTop, WaveDividerBottom, OrganicDivider } from './components/SVGDividers';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {/* Subtle Grain Overlay Texture */}
      <div className="grain-overlay" />

      {/* Lag-free Spring-based Interactive Circle Cursor */}
      <CustomCursor />

      {/* Animated Filling Crema Cup Preloader Screen */}
      <Preloader onComplete={() => setIsLoading(false)} />

      {/* Orchestrate main elements when load completes */}
      {!isLoading && (
        <div className="min-h-screen relative bg-espresso text-latte overflow-x-hidden">
          
          {/* Multi-layered Parallax Floating Coffee Beans */}
          <FloatingBeans />

          {/* Premium Floating Header */}
          <Header />
          
          {/* Hero Landing Section */}
          <Hero />
          
          {/* Divider: Hero (espresso) -> Story (espresso-dark) */}
          <WaveDividerTop fillColor="#140D0A" bgClass="bg-espresso" />
          
          {/* Brand Story Section */}
          <Story />
          
          {/* Divider: Story (espresso-dark) -> Menu (espresso) */}
          <WaveDividerBottom fillColor="#140D0A" bgClass="bg-espresso" />
          
          {/* Signature Drinks Menu */}
          <Menu />
          
          {/* Divider: Menu (espresso) -> Pairings (espresso-dark) */}
          <OrganicDivider fillColor="#140D0A" bgClass="bg-espresso" />
          
          {/* Food Pairings List & Grid */}
          <Pairings />
          
          {/* Divider: Pairings (espresso-dark) -> Visit Us (espresso) */}
          <WaveDividerTop fillColor="#140D0A" bgClass="bg-espresso" />
          
          {/* Maps & System Clock Visit Section */}
          <VisitUs />
          
          {/* Divider: Visit Us (espresso) -> Testimonials (espresso-dark) */}
          <WaveDividerBottom fillColor="#140D0A" bgClass="bg-espresso" />
          
          {/* Infinite snapped reviews carousel */}
          <Testimonials />
          
          {/* Divider: Testimonials (espresso-dark) -> Instagram (espresso) */}
          <OrganicDivider fillColor="#1E140F" bgClass="bg-espresso-dark" />
          
          {/* Social Media Grid */}
          <InstagramFeed />
          
          {/* Divider: Instagram (espresso) -> Newsletter (espresso-dark) */}
          <WaveDividerTop fillColor="#140D0A" bgClass="bg-espresso" />
          
          {/* Glowing Form Newsletter Block */}
          <Newsletter />
          
          {/* Café Information Footer */}
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
