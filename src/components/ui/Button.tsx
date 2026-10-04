import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  showArrow?: boolean;
  children: React.ReactNode;
  className?: string;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  showArrow = true,
  children,
  className = '',
  href,
  onClick,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-sans tracking-wider uppercase font-semibold transition-all duration-300 relative group overflow-hidden focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50 disabled:pointer-events-none';

  const variantStyles = {
    primary: 'bg-white text-black hover:bg-neutral-200 border border-white',
    secondary: 'bg-neutral-900 text-white hover:bg-neutral-800 border border-neutral-700',
    outline: 'bg-transparent text-white border border-neutral-700 hover:border-white hover:bg-white hover:text-black',
    ghost: 'bg-transparent text-white hover:bg-neutral-900/60 border border-transparent',
  }[variant];

  const sizeStyles = {
    sm: 'text-xs px-4 py-2.5 gap-2',
    md: 'text-xs sm:text-sm px-6 py-3.5 gap-2.5',
    lg: 'text-sm sm:text-base px-8 py-4.5 gap-3',
  }[size];

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      {showArrow && (
        <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 relative z-10" />
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={`${baseStyles} ${variantStyles} ${sizeStyles} ${className}`}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles} ${sizeStyles} ${className}`}
      {...props}
    >
      {content}
    </button>
  );
};
