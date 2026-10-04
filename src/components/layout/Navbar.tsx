import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { NAV_ITEMS } from '../../data/schoolData';
import { Button } from '../ui/Button';
import { EASE_PREMIUM } from '../../animations/animationVariants';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const menuVariants = {
    closed: {
      opacity: 0,
      y: '-100%',
      transition: {
        duration: 0.4,
        ease: EASE_PREMIUM,
        when: 'afterChildren',
      },
    },
    open: {
      opacity: 1,
      y: '0%',
      transition: {
        duration: 0.5,
        ease: EASE_PREMIUM,
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const menuItemVariants = {
    closed: { opacity: 0, y: -20 },
    open: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[9000] transition-all duration-500 ${
          isScrolled
            ? 'bg-black/90 backdrop-blur-md border-b border-neutral-800/80 py-4 shadow-2xl'
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left: TIS Brand Wordmark */}
            <a href="#" className="group flex items-center gap-3 focus:outline-none">
              <div className="w-9 h-9 border border-white flex items-center justify-center font-serif text-sm font-bold tracking-tighter text-white group-hover:bg-white group-hover:text-black transition-colors duration-300">
                TIS
              </div>
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-serif font-semibold tracking-wider text-white uppercase leading-none">
                  Tulas
                </span>
                <span className="text-[10px] tracking-widest text-neutral-400 uppercase font-mono mt-0.5">
                  International School
                </span>
              </div>
            </a>

            {/* Center Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-xs uppercase tracking-widest text-neutral-300 hover:text-white font-medium transition-colors duration-300 relative py-1 group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Right Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <Button href="#admissions" size="sm" variant="outline">
                Enquire Now
              </Button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-white hover:text-neutral-300 focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 z-[8999] bg-black flex flex-col justify-between pt-24 pb-12 px-6 lg:hidden border-b border-neutral-800"
          >
            <div className="flex flex-col gap-6 max-w-md mx-auto w-full">
              <p className="text-xs font-mono uppercase tracking-ultra text-neutral-500 border-b border-neutral-800 pb-3">
                Navigation
              </p>
              {NAV_ITEMS.map((item) => (
                <motion.a
                  key={item.label}
                  variants={menuItemVariants}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-serif text-white hover:text-neutral-400 transition-colors flex items-center justify-between border-b border-neutral-900 pb-3"
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="w-5 h-5 text-neutral-500" />
                </motion.a>
              ))}
            </div>

            <div className="flex flex-col gap-4 max-w-md mx-auto w-full pt-8 border-t border-neutral-800">
              <Button
                href="#admissions"
                onClick={() => setMobileMenuOpen(false)}
                size="lg"
                variant="primary"
                className="w-full"
              >
                Apply / Enquire Now
              </Button>
              <div className="text-center text-xs font-mono text-neutral-500 tracking-wider">
                Dehradun, Uttarakhand • Admissions Helpline: +91-9837983791
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
