import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, MapPin, Award, Compass } from 'lucide-react';
import { Button } from '../ui/Button';
import { EASE_PREMIUM } from '../../animations/animationVariants';

export const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 800], [0, 180]);
  const opacityFade = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden select-none">
      {/* Background Image with Parallax and Subtle Grayscale Mask */}
      <motion.div
        style={{ y: yParallax, opacity: opacityFade }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40 z-10" />
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img
          src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=2000&auto=format&fit=crop"
          alt="Tulas International School Dehradun Campus Architecture"
          className="w-full h-full object-cover grayscale contrast-125 opacity-40 scale-105"
        />
      </motion.div>

      {/* Top Metadata Badge */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.0, ease: EASE_PREMIUM }}
          className="inline-flex items-center gap-3 px-4 py-2 border border-neutral-800 bg-black/60 backdrop-blur-md rounded-full"
        >
          <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-300">
            Admissions Open 2025–26 • CBSE Residential & Day Boarding
          </span>
        </motion.div>
      </div>

      {/* Main Editorial Hero Text Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          {/* Main Typography Column */}
          <div className="lg:col-span-8 flex flex-col">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: EASE_PREMIUM }}
              className="text-xs sm:text-sm uppercase tracking-ultra font-mono text-neutral-400 mb-4 flex items-center gap-2"
            >
              <Compass className="w-4 h-4 text-neutral-400 inline" />
              Modern Gurukul Pedagogy • Dehradun, Uttarakhand
            </motion.p>

            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-serif tracking-tight text-white leading-[0.92] uppercase font-light">
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15, ease: EASE_PREMIUM }}
                className="block"
              >
                Tulas
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25, ease: EASE_PREMIUM }}
                className="block text-neutral-400 italic font-serif font-extralight"
              >
                International
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35, ease: EASE_PREMIUM }}
                className="block"
              >
                School
              </motion.span>
            </h1>
          </div>

          {/* Supporting Statement & CTA Column */}
          <div className="lg:col-span-4 flex flex-col justify-end space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: EASE_PREMIUM }}
              className="text-base sm:text-lg text-neutral-300 font-light leading-relaxed border-l border-neutral-700 pl-6"
            >
              Cultivating intellect, character, and global leadership across 22 acres of serene Himalayan foothills. Where curiosity becomes confidence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65, ease: EASE_PREMIUM }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <Button href="#admissions" variant="primary" size="lg">
                Apply for Admission
              </Button>
              <Button href="#about" variant="outline" size="lg">
                Explore School
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Hero Bottom Bar / Scroll Indicator & Badges */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        className="relative z-10 max-w-7xl mx-auto w-full pt-8 border-t border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between gap-6"
      >
        <div className="flex items-center gap-8 text-xs font-mono uppercase tracking-wider text-neutral-400">
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-neutral-400" />
            <span>Dehradun, India</span>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <Award className="w-3.5 h-3.5 text-neutral-400" />
            <span>Top Rated CBSE Boarding</span>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <span>Grades IV – XII</span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <a
          href="#about"
          className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-neutral-400 hover:text-white transition-colors group cursor-pointer"
        >
          <span>Scroll to Discover</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            className="w-6 h-6 border border-neutral-700 rounded-full flex items-center justify-center group-hover:border-white"
          >
            <ChevronDown className="w-3.5 h-3.5 text-neutral-300" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
};
