import { motion } from 'framer-motion';
import { 
  AlertTriangle, 
  Clock, 
  FileSearch, 
  Frown 
} from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';

/**
 * Problem section - highlighting pain points for target audience
 */
const problems = [
  {
    icon: Clock,
    title: 'Time Running Out',
    description: 'Your visa expires soon and every day counts. You can\'t afford to waste time on applications.',
  },
  {
    icon: FileSearch,
    title: 'Endless Applications',
    description: 'Applying to 100+ jobs manually is exhausting and takes away from interview preparation.',
  },
  {
    icon: AlertTriangle,
    title: 'Generic Rejections',
    description: 'Mass applying with the same resume leads to instant rejections and wasted effort.',
  },
  {
    icon: Frown,
    title: 'Burnout & Stress',
    description: 'The constant pressure of job searching while managing studies or visa stress is overwhelming.',
  },
];

const ProblemSection = () => {
  return (
    <section className="section-container bg-secondary/30">
      <SectionHeader
        badge="The Challenge"
        title="Job Hunting Shouldn't Be This Hard"
        subtitle="We understand the unique struggles of international students and job seekers with limited time."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {problems.map((problem, index) => (
          <motion.div
            key={problem.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="soft-card p-6 text-center"
          >
            <div className="w-12 h-12 mx-auto rounded-xl bg-destructive/10 flex items-center justify-center mb-4">
              <problem.icon className="w-6 h-6 text-destructive" />
            </div>
            <h3 className="text-lg font-display font-semibold text-foreground mb-2">
              {problem.title}
            </h3>
            <p className="text-muted-foreground text-sm">
              {problem.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProblemSection;
