import { motion } from 'framer-motion';
import { 
  Target, 
  Eye, 
  FileText, 
  BarChart3, 
  Users, 
  Shield 
} from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';

/**
 * Benefits section - key value propositions
 */
const benefits = [
  {
    icon: Target,
    title: 'Targeted Applications',
    description: 'No random spam. We apply to jobs that match your skills, experience, and visa requirements.',
  },
  {
    icon: Eye,
    title: 'Visa-Aware Strategy',
    description: 'We understand visa timelines and prioritize companies that sponsor or hire quickly.',
  },
  {
    icon: FileText,
    title: 'Resume Optimization',
    description: 'Get professional feedback on your resume to maximize interview callbacks.',
  },
  {
    icon: BarChart3,
    title: 'Transparent Tracking',
    description: 'See every application in your dashboard. Know exactly where you stand.',
  },
  {
    icon: Users,
    title: 'Human-Reviewed',
    description: 'Real people review each application. No bots, no automation spam.',
  },
  {
    icon: Shield,
    title: 'Privacy Protected',
    description: 'Your data stays secure. We never share your information without consent.',
  },
];

const BenefitsSection = () => {
  return (
    <section className="section-container bg-primary text-primary-foreground">
      <SectionHeader
        badge="Why Phoenix"
        title="More Than Just Applications"
        subtitle="We're your career partner, not just an application service."
        className="[&_.section-title]:text-primary-foreground [&_.section-subtitle]:text-primary-foreground/80 [&_span]:bg-primary-foreground/20 [&_span]:text-primary-foreground"
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((benefit, index) => (
          <motion.div
            key={benefit.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="p-6 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-colors"
          >
            <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center mb-4">
              <benefit.icon className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="text-lg font-display font-semibold mb-2">
              {benefit.title}
            </h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              {benefit.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BenefitsSection;
