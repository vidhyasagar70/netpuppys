import React from 'react';
import { ScrollProgress } from './components/ui/ScrollProgress';
import { CustomCursor } from './components/ui/CustomCursor';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Stats } from './components/sections/Stats';
import { Academics } from './components/sections/Academics';
import { Philosophy } from './components/sections/Philosophy';
import { Campus } from './components/sections/Campus';
import { StudentLife } from './components/sections/StudentLife';
import { Admissions } from './components/sections/Admissions';
import { Testimonials } from './components/sections/Testimonials';
import { FinalCTA } from './components/sections/FinalCTA';
import { Footer } from './components/layout/Footer';

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
      {/* Scroll Progress Indicator at Top */}
      <ScrollProgress />

      {/* Reusable Custom Cursor (Desktop Only) */}
      <CustomCursor />

      {/* Main Sticky Navbar */}
      <Navbar />

      {/* Main Continuous Visual Story Content Sections */}
      <main>
        <Hero />
        <About />
        <Stats />
        <Academics />
        <Philosophy />
        <Campus />
        <StudentLife />
        <Admissions />
        <Testimonials />
        <FinalCTA />
      </main>

      {/* Semantic Monochrome Footer */}
      <Footer />
    </div>
  );
};

export default App;
