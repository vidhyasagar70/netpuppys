import React from 'react';
import { Reveal } from '../../animations/Reveal';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  theme?: 'dark' | 'light';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  description,
  align = 'left',
  theme = 'dark',
  className = '',
}) => {
  const alignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  }[align];

  const textColor = theme === 'dark' ? 'text-white' : 'text-black';
  const subtitleColor = theme === 'dark' ? 'text-neutral-400' : 'text-neutral-600';
  const eyebrowColor = theme === 'dark' ? 'text-neutral-500' : 'text-neutral-400';

  return (
    <div className={`flex flex-col max-w-4xl ${alignClasses} ${className}`}>
      {eyebrow && (
        <Reveal variant="fadeIn">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-6 h-[1px] bg-neutral-600 inline-block" />
            <p className={`text-xs uppercase tracking-ultra font-mono font-semibold ${eyebrowColor}`}>
              {eyebrow}
            </p>
          </div>
        </Reveal>
      )}

      <Reveal variant="fadeUp" delay={0.05}>
        <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight font-serif ${textColor} leading-[1.15]`}>
          {title}
        </h2>
      </Reveal>

      {subtitle && (
        <Reveal variant="fadeUp" delay={0.1}>
          <p className={`mt-3 text-lg sm:text-xl font-medium tracking-wide uppercase font-sans ${subtitleColor}`}>
            {subtitle}
          </p>
        </Reveal>
      )}

      {description && (
        <Reveal variant="fadeUp" delay={0.15}>
          <p className={`mt-4 text-base sm:text-lg ${subtitleColor} font-light leading-relaxed max-w-2xl`}>
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
};
