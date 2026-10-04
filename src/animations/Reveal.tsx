import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import {
  fadeUp,
  fadeIn,
  scaleReveal,
  slideInLeft,
  slideInRight,
  staggerContainer,
  imageReveal,
} from './animationVariants';

interface RevealProps {
  children: React.ReactNode;
  variant?: 'fadeUp' | 'fadeIn' | 'scaleReveal' | 'slideInLeft' | 'slideInRight' | 'staggerContainer' | 'imageReveal';
  customVariants?: Variants;
  className?: string;
  delay?: number;
  amount?: number;
  once?: boolean;
}

const variantMap: Record<string, Variants> = {
  fadeUp,
  fadeIn,
  scaleReveal,
  slideInLeft,
  slideInRight,
  staggerContainer,
  imageReveal,
};

export const Reveal: React.FC<RevealProps> = ({
  children,
  variant = 'fadeUp',
  customVariants,
  className = '',
  delay = 0,
  amount = 0.2,
  once = true,
}) => {
  const selectedVariant = customVariants || variantMap[variant] || fadeUp;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={selectedVariant}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
