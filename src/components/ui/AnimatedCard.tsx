import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  hover?: boolean;
}

/**
 * Animated card component with glassmorphism effect
 * Features fade-in animation and optional hover lift effect
 */
const AnimatedCard = ({
  children,
  className = '',
  delay = 0,
  hover = true,
}: AnimatedCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { y: -8, transition: { duration: 0.3 } } : undefined}
      className={`glass-card rounded-xl p-6 md:p-8 transition-shadow duration-300 ${
        hover ? 'hover:shadow-glass-lg' : ''
      } ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;
