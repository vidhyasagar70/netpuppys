import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';
import { SCHOOL_STATS } from '../../data/schoolData';
import { SectionHeading } from '../ui/SectionHeading';
import { Reveal } from '../../animations/Reveal';

interface CountUpProps {
  end: number;
  suffix?: string;
  duration?: number;
}

const CountUpNumber: React.FC<CountUpProps> = ({ end, suffix = '', duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      // Easing function outExpo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeProgress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

export const Stats: React.FC = () => {
  return (
    <section className="py-24 bg-neutral-950 text-white border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="02 — KEY METRICS"
          title="Excellence Measured in Impact"
          description="Factual milestones reflecting our commitment to academic distinction, pastoral care, and world-class athletic facilities."
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-neutral-800 border border-neutral-800">
          {SCHOOL_STATS.map((stat, idx) => (
            <Reveal
              key={stat.id}
              variant="fadeUp"
              delay={idx * 0.1}
              className="bg-black p-8 sm:p-10 flex flex-col justify-between hover:bg-neutral-900/80 transition-colors duration-500 group"
            >
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 block mb-6">
                  {stat.tag}
                </span>

                <div className="text-5xl sm:text-6xl lg:text-7xl font-serif font-light tracking-tight text-white mb-4 group-hover:translate-x-1 transition-transform duration-300">
                  <CountUpNumber end={stat.numberValue} suffix={stat.suffix} />
                </div>

                <h3 className="text-lg font-serif text-neutral-200 mb-3 font-medium">
                  {stat.label}
                </h3>
              </div>

              <p className="text-sm font-light text-neutral-400 leading-relaxed pt-4 border-t border-neutral-900">
                {stat.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
