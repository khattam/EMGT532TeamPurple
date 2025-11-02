'use client';

import { motion } from 'framer-motion';

interface CTAButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  ctaId?: string;
  className?: string;
}

export default function CTAButton({ 
  children, 
  variant = 'primary', 
  onClick, 
  ctaId,
  className = '' 
}: CTAButtonProps) {
  const handleClick = () => {
    // Track CTA click (will be implemented in analytics task)
    if (ctaId) {
      console.log(`CTA clicked: ${ctaId}`);
    }
    onClick?.();
  };

  if (variant === 'primary') {
    return (
      <motion.button
        onClick={handleClick}
        className={`px-8 py-4 bg-gradient-to-r from-primary to-primary-cyan rounded-full text-white font-semibold text-lg relative overflow-hidden group ${className}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="relative z-10">{children}</span>
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary-cyan to-primary"
          initial={{ x: '100%' }}
          whileHover={{ x: 0 }}
          transition={{ duration: 0.3 }}
        />
        {/* Ripple effect on click */}
        <motion.div
          className="absolute inset-0 bg-white/20 rounded-full"
          initial={{ scale: 0, opacity: 1 }}
          whileTap={{ scale: 2, opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
      </motion.button>
    );
  }

  return (
    <motion.button
      onClick={handleClick}
      className={`px-8 py-4 glass rounded-full text-white font-semibold text-lg border border-white/20 hover:border-primary-cyan transition-colors ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
}
