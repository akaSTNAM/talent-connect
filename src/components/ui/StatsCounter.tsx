import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface StatItem {
  value: number;
  suffix?: string;
  label: string;
}

interface StatsCounterProps {
  stats: StatItem[];
  className?: string;
}

/**
 * Animated stats counter with number animation
 * Triggers count-up animation when scrolled into view
 */
const StatsCounter = ({ stats, className = '' }: StatsCounterProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.5 }}
      className={`grid grid-cols-2 md:grid-cols-4 gap-8 ${className}`}
    >
      {stats.map((stat, index) => (
        <CounterItem
          key={stat.label}
          stat={stat}
          isInView={isInView}
          delay={index * 0.1}
        />
      ))}
    </motion.div>
  );
};

interface CounterItemProps {
  stat: StatItem;
  isInView: boolean;
  delay: number;
}

const CounterItem = ({ stat, isInView, delay }: CounterItemProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = stat.value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= stat.value) {
        setCount(stat.value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isInView, stat.value]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl lg:text-6xl font-display font-bold gradient-text">
        {count}
        {stat.suffix}
      </div>
      <p className="mt-2 text-muted-foreground font-medium">{stat.label}</p>
    </motion.div>
  );
};

export default StatsCounter;
