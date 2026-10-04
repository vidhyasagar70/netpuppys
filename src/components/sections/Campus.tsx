import React, { useState } from 'react';
import { CAMPUS_FACILITIES } from '../../data/schoolData';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../../animations/Reveal';
import { Maximize2 } from 'lucide-react';

export const Campus: React.FC = () => {
  const [selectedFacility, setSelectedFacility] = useState<string | null>(null);

  const activeModalData = CAMPUS_FACILITIES.find((f) => f.id === selectedFacility);

  return (
    <section id="campus" className="py-24 lg:py-36 bg-black text-white relative border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <SectionHeading
            eyebrow="05 — CAMPUS & FACILITIES"
            title="22 Acres of Himalayan Sanctuary"
            description="Purpose-built infrastructure designed for quiet focus, physical vigor, and modern technological inquiry in Dehradun."
          />
          
          <Reveal variant="fadeIn">
            <div className="text-xs font-mono uppercase tracking-ultra text-neutral-400 border border-neutral-800 px-5 py-3 bg-neutral-950">
              Dhoolkot, Chakrata Road • Dehradun
            </div>
          </Reveal>
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CAMPUS_FACILITIES.map((facility, idx) => {
            const isFeatured = idx === 0 || idx === 3;
            return (
              <Reveal
                key={facility.id}
                variant="fadeUp"
                delay={idx * 0.1}
                className={`${isFeatured ? 'lg:col-span-2' : 'lg:col-span-1'}`}
              >
                <div
                  onClick={() => setSelectedFacility(facility.id)}
                  className="group relative overflow-hidden border border-neutral-800/80 bg-neutral-950 cursor-hover-card cursor-pointer h-full flex flex-col justify-between"
                >
                  {/* Image wrapper with hover zoom */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={facility.image}
                      alt={facility.title}
                      className="w-full h-full object-cover grayscale contrast-125 transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />

                    <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1 text-[10px] font-mono uppercase tracking-widest text-neutral-300 border border-neutral-800">
                      {facility.category}
                    </div>

                    <button
                      aria-label="Expand Image"
                      className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-neutral-700 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Caption & Content */}
                  <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl sm:text-2xl font-serif text-white font-medium">
                          {facility.title}
                        </h3>
                        {facility.size && (
                          <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500">
                            {facility.size}
                          </span>
                        )}
                      </div>
                      <p className="text-sm font-light text-neutral-400 leading-relaxed">
                        {facility.description}
                      </p>
                    </div>

                    <div className="pt-6 mt-4 border-t border-neutral-900 flex items-center justify-between">
                      <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-500">
                        Explore Infrastructure
                      </span>
                      <span className="text-xs font-mono text-white group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal for Facility Inspection */}
      {activeModalData && (
        <div
          onClick={() => setSelectedFacility(null)}
          className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-neutral-950 border border-neutral-800 max-w-4xl w-full p-6 sm:p-10 relative overflow-hidden"
          >
            <button
              onClick={() => setSelectedFacility(null)}
              className="absolute top-4 right-4 text-neutral-400 hover:text-white font-mono text-sm uppercase tracking-widest p-2"
            >
              [ Close ✕ ]
            </button>

            <div className="aspect-[16/9] mb-6 overflow-hidden border border-neutral-800">
              <img
                src={activeModalData.image}
                alt={activeModalData.title}
                className="w-full h-full object-cover grayscale contrast-125"
              />
            </div>

            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">
                {activeModalData.category} • {activeModalData.size}
              </span>
              <h3 className="text-3xl font-serif text-white">{activeModalData.title}</h3>
              <p className="text-base text-neutral-300 font-light leading-relaxed">
                {activeModalData.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
