import { motion } from 'framer-motion';
import { Search, Users, CheckCircle, Rocket } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';

/**
 * Process steps section showing the recruitment workflow
 * Discover → Recruit → Deliver → Scale
 */
const steps = [
  {
    icon: Search,
    step: '01',
    title: 'Discover',
    description:
      'We analyze your requirements, company culture, and team dynamics to understand exactly what you need.',
  },
  {
    icon: Users,
    step: '02',
    title: 'Recruit',
    description:
      'Our experts source, screen, and present the most qualified candidates from our extensive talent network.',
  },
  {
    icon: CheckCircle,
    step: '03',
    title: 'Deliver',
    description:
      'We facilitate interviews, negotiations, and onboarding to ensure a smooth hiring experience.',
  },
  {
    icon: Rocket,
    step: '04',
    title: 'Scale',
    description:
      'Continuous support and follow-ups ensure long-term success for both clients and placed candidates.',
  },
];

const ProcessSteps = () => {
  return (
    <section className="section-container bg-primary text-primary-foreground">
      <SectionHeader
        badge="Our Process"
        title="How We Work"
        subtitle="A streamlined approach designed to find you the perfect talent, efficiently and effectively."
        className="[&_.section-title]:text-primary-foreground [&_.section-subtitle]:text-primary-foreground/80 [&_span]:bg-accent/20 [&_span]:text-accent"
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="relative"
          >
            {/* Connector Line (hidden on mobile and last item) */}
            {index < steps.length - 1 && (
              <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-primary-foreground/20">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.2, duration: 0.8 }}
                  className="h-full bg-accent"
                />
              </div>
            )}

            <div className="relative z-10 text-center">
              {/* Step Number */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-16 h-16 mx-auto rounded-full bg-accent flex items-center justify-center mb-4"
              >
                <step.icon className="w-8 h-8 text-accent-foreground" />
              </motion.div>

              {/* Step Label */}
              <span className="text-sm font-medium text-accent">{step.step}</span>

              {/* Title */}
              <h3 className="text-xl font-display font-semibold mt-2 mb-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-primary-foreground/70 text-sm">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProcessSteps;
