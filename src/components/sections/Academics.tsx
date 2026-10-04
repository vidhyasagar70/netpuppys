import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, BookOpen } from 'lucide-react';
import { ACADEMIC_PROGRAMS } from '../../data/schoolData';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../../animations/Reveal';

export const Academics: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="academics" className="py-24 lg:py-36 bg-black text-white relative border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <SectionHeading
            eyebrow="03 — ACADEMICS"
            title="Rigorous CBSE Academic Pathways"
            description="Fostering intellectual curiosity, critical thinking, and university readiness across every developmental stage."
          />

          <Reveal variant="fadeIn">
            <div className="text-xs font-mono uppercase tracking-widest text-neutral-400 border border-neutral-800 px-4 py-2 bg-neutral-950 inline-flex items-center gap-2">
              <BookOpen className="w-3.5 h-3.5" />
              <span>CBSE Affiliated • Class IV to XII</span>
            </div>
          </Reveal>
        </div>

        {/* Academic Program Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {ACADEMIC_PROGRAMS.map((program, idx) => (
            <Reveal
              key={program.id}
              variant="fadeUp"
              delay={idx * 0.15}
              className="h-full"
            >
              <div
                onMouseEnter={() => setActiveTab(idx)}
                className={`h-full border transition-all duration-500 flex flex-col justify-between p-8 group cursor-hover-card ${
                  activeTab === idx
                    ? 'border-white bg-neutral-950'
                    : 'border-neutral-800/80 bg-black hover:border-neutral-700'
                }`}
              >
                <div>
                  {/* Top Row: Code & Arrow */}
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-neutral-900">
                    <span className="text-xs font-mono tracking-widest uppercase text-neutral-400 font-semibold">
                      {program.code}
                    </span>
                    <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
                      activeTab === idx ? 'border-white bg-white text-black' : 'border-neutral-800 text-neutral-400 group-hover:border-white group-hover:text-white'
                    }`}>
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>

                  {/* Image Container with Grayscale Zoom */}
                  <div className="relative aspect-[16/10] overflow-hidden mb-6 border border-neutral-900">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover grayscale contrast-125 transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md px-3 py-1 text-[10px] font-mono text-neutral-300 uppercase tracking-wider">
                      {program.grades}
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl font-serif text-white font-medium mb-3">
                    {program.title}
                  </h3>
                  <p className="text-sm font-light text-neutral-400 leading-relaxed mb-6">
                    {program.description}
                  </p>

                  {/* Highlights List */}
                  <div className="space-y-2 pt-4 border-t border-neutral-900">
                    {program.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5 text-xs text-neutral-300 font-light">
                        <CheckCircle2 className="w-3.5 h-3.5 text-neutral-400 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8 mt-6">
                  <a
                    href="#admissions"
                    className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-400 group-hover:text-white transition-colors"
                  >
                    <span>View Curriculum Details</span>
                    <span className="w-4 h-[1px] bg-neutral-600 group-hover:w-8 group-hover:bg-white transition-all" />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
