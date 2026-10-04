import React from 'react';
import { STUDENT_LIFE_ACTIVITIES } from '../../data/schoolData';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../../animations/Reveal';
import { ArrowUpRight, Trophy } from 'lucide-react';

export const StudentLife: React.FC = () => {
  return (
    <section id="student-life" className="py-24 lg:py-36 bg-neutral-950 text-white relative border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <SectionHeading
            eyebrow="06 — BEYOND ACADEMICS"
            title="Student Life & Co-Curricular Distinction"
            description="Fostering physical endurance, artistic mastery, and technical innovation through 16+ specialized sports and cultural academies."
          />

          <Reveal variant="fadeIn">
            <div className="text-xs font-mono uppercase tracking-widest text-neutral-400 border border-neutral-800 px-4 py-2 bg-black inline-flex items-center gap-2">
              <Trophy className="w-3.5 h-3.5" />
              <span>National Competition Coaching</span>
            </div>
          </Reveal>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {STUDENT_LIFE_ACTIVITIES.map((activity, idx) => (
            <Reveal
              key={activity.id}
              variant="fadeUp"
              delay={idx * 0.12}
            >
              <div className="group border border-neutral-800 bg-black p-8 hover:border-white transition-all duration-500 flex flex-col justify-between h-full cursor-hover-card">
                <div>
                  {/* Card Header Tag */}
                  <div className="flex items-center justify-between mb-6 pb-3 border-b border-neutral-900">
                    <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                      {activity.category}
                    </span>
                    {activity.stats && (
                      <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500">
                        {activity.stats}
                      </span>
                    )}
                  </div>

                  {/* Image with zoom effect */}
                  <div className="relative aspect-[16/9] overflow-hidden mb-6 border border-neutral-900">
                    <img
                      src={activity.image}
                      alt={activity.title}
                      className="w-full h-full object-cover grayscale contrast-125 transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>

                  <h3 className="text-2xl font-serif text-white font-medium mb-3 flex items-center justify-between">
                    <span>{activity.title}</span>
                    <ArrowUpRight className="w-5 h-5 text-neutral-500 group-hover:text-white transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </h3>

                  <p className="text-sm font-light text-neutral-400 leading-relaxed">
                    {activity.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-neutral-900 flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 group-hover:text-neutral-300 transition-colors">
                    Explore Activity
                  </span>
                  <span className="w-6 h-[1px] bg-neutral-700 group-hover:w-12 group-hover:bg-white transition-all" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
