import React from 'react';
import { Reveal } from '../../animations/Reveal';
import { Button } from '../ui/Button';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 lg:py-36 bg-black text-white relative border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          <div className="lg:col-span-4">
            <Reveal variant="fadeIn">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-[1px] bg-neutral-600 inline-block" />
                <p className="text-xs font-mono uppercase tracking-ultra text-neutral-400">
                  01 — ABOUT TIS
                </p>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-light text-neutral-300 uppercase tracking-widest">
                The Heritage of Learning
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <Reveal variant="fadeUp" delay={0.1}>
              <blockquote className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-light text-white leading-[1.2] tracking-tight">
                “An environment where curiosity becomes confidence, and individual potential transforms into global leadership.”
              </blockquote>
            </Reveal>
          </div>
        </div>

        {/* Story Body & Editorial Image Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Editorial Monochromatic Photo */}
          <div className="lg:col-span-6">
            <Reveal variant="imageReveal">
              <div className="relative group overflow-hidden border border-neutral-800">
                <img
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop"
                  alt="Tulas International School Students Learning"
                  className="w-full aspect-[4/3] object-cover grayscale contrast-125 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs font-mono tracking-widest uppercase text-neutral-300">
                  <span>Modern Gurukul Concept</span>
                  <span>Est. 2012</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Narrative Text */}
          <div className="lg:col-span-6 space-y-6">
            <Reveal variant="fadeUp" delay={0.15}>
              <h3 className="text-2xl sm:text-3xl font-serif text-white font-light">
                Bridging Ancient Wisdom with 21st-Century Excellence
              </h3>
            </Reveal>

            <Reveal variant="fadeUp" delay={0.2}>
              <p className="text-neutral-400 font-light leading-relaxed text-base sm:text-lg">
                Established in 2012 under the aegis of Rishabh Educational Trust, Tulas International School was founded with a clear vision: to create a sanctuary of learning in Dehradun where academic rigour is balanced by character formation.
              </p>
            </Reveal>

            <Reveal variant="fadeUp" delay={0.25}>
              <p className="text-neutral-400 font-light leading-relaxed text-base sm:text-lg">
                Rooted in our signature <strong className="text-white font-normal">Modern Gurukul</strong> concept, we combine traditional Indian values of reverence, discipline, and mindfulness with state-of-the-art CBSE curriculum, advanced robotics labs, and 16+ Olympic sports disciplines.
              </p>
            </Reveal>

            <Reveal variant="fadeUp" delay={0.3}>
              <div className="pt-4 flex items-center gap-6">
                <Button href="#philosophy" variant="outline">
                  Our Philosophy
                </Button>
                <div className="text-xs font-mono uppercase tracking-widest text-neutral-500 border-l border-neutral-800 pl-6 py-1">
                  22 Acres • Co-Ed Residential
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
