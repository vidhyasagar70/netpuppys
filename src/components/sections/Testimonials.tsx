import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../../data/schoolData';
import { SectionHeading } from '../ui/SectionHeading';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const currentTestimonial = TESTIMONIALS[currentIndex];

  return (
    <section className="py-24 lg:py-36 bg-neutral-950 text-white relative border-b border-neutral-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="07 — TESTIMONIALS / COMMUNITY"
          title="Voices from Our Community"
          description="Reflections from parents, alumni, and families who have experienced the TIS residential journey."
          className="mb-16"
        />

        <div className="max-w-4xl mx-auto border border-neutral-800 bg-black p-8 sm:p-12 lg:p-16 relative">
          <Quote className="w-16 h-16 text-neutral-800 absolute top-8 right-8 pointer-events-none" />

          <div className="min-h-[220px] flex flex-col justify-between relative z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-6"
              >
                <blockquote className="text-xl sm:text-2xl lg:text-3xl font-serif font-light text-white leading-relaxed italic">
                  “{currentTestimonial.quote}”
                </blockquote>

                <div className="pt-6 border-t border-neutral-900 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h4 className="text-lg font-serif font-medium text-white">
                      {currentTestimonial.author}
                    </h4>
                    <p className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                      {currentTestimonial.role} • {currentTestimonial.relation}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Pagination Controls */}
            <div className="flex items-center justify-between pt-8 border-t border-neutral-900/60 mt-8">
              <div className="text-xs font-mono tracking-widest text-neutral-500">
                0{currentIndex + 1} / 0{TESTIMONIALS.length}
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={handlePrev}
                  className="w-10 h-10 border border-neutral-800 hover:border-white hover:bg-white hover:text-black transition-colors flex items-center justify-center text-white"
                  aria-label="Previous Testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-10 h-10 border border-neutral-800 hover:border-white hover:bg-white hover:text-black transition-colors flex items-center justify-center text-white"
                  aria-label="Next Testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
