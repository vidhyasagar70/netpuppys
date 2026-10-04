import React from 'react';
import { PHILOSOPHY_PILLARS } from '../../data/schoolData';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../../animations/Reveal';

export const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-24 lg:py-36 bg-neutral-950 text-white relative border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="04 — WHY TIS / PHILOSOPHY"
          title="The Modern Gurukul Vision"
          description="We prepare young minds not merely for examination papers, but for the complex ethical and technological realities of a globalized world."
          className="mb-20"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Sticky Editorial Lead Statement */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-8">
            <Reveal variant="fadeUp">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-light text-white leading-tight">
                “Education goes beyond text materials. It is the awakening of character.”
              </h3>
            </Reveal>

            <Reveal variant="fadeUp" delay={0.1}>
              <p className="text-neutral-400 font-light leading-relaxed text-base sm:text-lg">
                At Tulas International School, education is a transformative journey. Under our 5:1 student-teacher ratio, every student receives individual pastoral mentorship, building self-reliance, moral courage, and critical inquiry.
              </p>
            </Reveal>

            <Reveal variant="fadeUp" delay={0.2}>
              <div className="p-6 border border-neutral-800 bg-black">
                <p className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2">
                  Key Commitment
                </p>
                <p className="text-sm font-serif italic text-neutral-300">
                  “To nurture compassionate, resilient, and intellect-driven global citizens anchored in timeless Indian values.”
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right Column: 4 Educational Pillars */}
          <div className="lg:col-span-7 space-y-8">
            {PHILOSOPHY_PILLARS.map((pillar, idx) => (
              <Reveal
                key={pillar.id}
                variant="fadeUp"
                delay={idx * 0.1}
                className="border border-neutral-800 bg-black p-8 sm:p-10 hover:border-neutral-700 transition-colors duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 font-semibold border-b border-neutral-800 pb-1">
                    PILLAR {pillar.number}
                  </span>
                  <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 group-hover:text-white transition-colors">
                    {pillar.subtitle}
                  </span>
                </div>

                <h4 className="text-2xl sm:text-3xl font-serif text-white font-medium mb-3">
                  {pillar.title}
                </h4>

                <p className="text-sm sm:text-base font-light text-neutral-400 leading-relaxed">
                  {pillar.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
