import { motion } from 'framer-motion';
import { 
  Zap, 
  Award, 
  Users, 
  Shield, 
  HeartHandshake 
} from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import StatsCounter from '@/components/ui/StatsCounter';

/**
 * Why Choose Us section highlighting key differentiators
 * Includes stats counter and feature list
 */
const reasons = [
  {
    icon: Zap,
    title: 'Fast Hiring',
    description: 'Streamlined processes that reduce time-to-hire by up to 40%.',
  },
  {
    icon: Award,
    title: 'Industry Experts',
    description: 'Specialized recruiters with deep knowledge in their domains.',
  },
  {
    icon: Users,
    title: 'Quality Talent Pool',
    description: 'Access to pre-vetted candidates ready for immediate placement.',
  },
  {
    icon: Shield,
    title: 'Transparent Process',
    description: 'Clear communication and visibility at every stage of hiring.',
  },
  {
    icon: HeartHandshake,
    title: 'Client Satisfaction',
    description: 'Dedicated support ensuring long-term partnership success.',
  },
];

const stats = [
  { value: 100, suffix: '+', label: 'Happy Clients' },
  { value: 500, suffix: '+', label: 'Placements' },
  { value: 95, suffix: '%', label: 'Success Rate' },
  { value: 10, suffix: '+', label: 'Years Experience' },
];

const WhyChoosePreview = () => {
  return (
    <section className="section-container">
      <SectionHeader
        badge="Why Choose Us"
        title={
          <>
            The <span className="gradient-text">Phoenix Consultancy LLP</span> Advantage
          </>
        }
        subtitle="We combine industry expertise with innovative approaches to deliver exceptional recruitment outcomes."
      />

      {/* Reasons Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {reasons.map((reason, index) => (
          <motion.div
            key={reason.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="flex items-start space-x-4"
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
              <reason.icon className="w-6 h-6 text-accent" />
            </div>
            <div>
              <h3 className="text-lg font-display font-semibold text-foreground mb-1">
                {reason.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {reason.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Stats Counter */}
      <div className="glass-card rounded-2xl p-8 md:p-12">
        <StatsCounter stats={stats} />
      </div>
    </section>
  );
};

export default WhyChoosePreview;
