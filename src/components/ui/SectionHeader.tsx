import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionHeaderProps {
  badge?: string;
  title: string | ReactNode;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

/**
 * Reusable section header component with badge, title, and subtitle
 * Features scroll-triggered animations
 */
const SectionHeader = ({
  badge,
  title,
  subtitle,
  centered = true,
  className = '',
}: SectionHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      className={`mb-12 md:mb-16 ${centered ? 'text-center' : ''} ${className}`}
    >
      {badge && (
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-accent bg-accent/10 rounded-full"
        >
          {badge}
        </motion.span>
      )}
      <h2 className="section-title text-balance">
        {title}
      </h2>
      {subtitle && (
        <p className={`section-subtitle mt-4 ${centered ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader;
