import React from 'react';
import { Button } from '../ui/Button';
import { Reveal } from '../../animations/Reveal';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-28 lg:py-40 bg-black text-white relative border-b border-neutral-900 select-none overflow-hidden">
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <Reveal variant="fadeIn">
          <span className="text-xs font-mono uppercase tracking-ultra text-neutral-500 mb-6 block">
            DEHRADUN • UTTARAKHAND • INDIA
          </span>
        </Reveal>

        <Reveal variant="fadeUp" delay={0.05}>
          <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-serif font-light text-white leading-[0.95] tracking-tight uppercase mb-8">
            Let’s Begin <br />
            <span className="italic font-serif font-extralight text-neutral-400">The Journey</span>
          </h2>
        </Reveal>

        <Reveal variant="fadeUp" delay={0.15}>
          <p className="text-base sm:text-xl text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto mb-12">
            Schedule a personal campus tour or speak with our admissions panel to experience how Tulas International School shapes future global leaders.
          </p>
        </Reveal>

        <Reveal variant="fadeUp" delay={0.25}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="#admissions" variant="primary" size="lg">
              Apply For Admissions
            </Button>
            <Button href="#campus" variant="outline" size="lg">
              Virtual Campus Tour
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
