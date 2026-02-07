import { motion } from 'framer-motion';
import { 
  Upload, 
  UserSearch, 
  Send, 
  MessageSquare,
  ArrowRight
} from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';

/**
 * How It Works preview - 4 simple steps
 */
const steps = [
  {
    icon: Upload,
    step: '01',
    title: 'Sign Up & Upload Resume',
    description: 'Create your account and upload your resume. Tell us your job preferences and career goals.',
  },
  {
    icon: UserSearch,
    step: '02',
    title: 'We Analyze Your Profile',
    description: 'Our team reviews your skills, experience, and targets to create a personalized job search strategy.',
  },
  {
    icon: Send,
    step: '03',
    title: 'We Apply Daily',
    description: 'We submit targeted applications to matching positions every day. Track progress in your dashboard.',
  },
  {
    icon: MessageSquare,
    step: '04',
    title: 'You Focus on Interviews',
    description: 'Prepare for interviews and assessments. We handle everything else so you can focus on getting hired.',
  },
];

const HowItWorksPreview = () => {
  return (
    <section className="section-container">
      <SectionHeader
        badge="How It Works"
        title="Simple. Effective. Stress-Free."
        subtitle="Let us handle the tedious application process while you focus on landing the job."
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
            {/* Connector Line */}
            {index < steps.length - 1 && (
              <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-border">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.2, duration: 0.8 }}
                  className="h-full bg-primary/50"
                />
              </div>
            )}

            <div className="relative z-10 text-center">
              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-4"
              >
                <step.icon className="w-8 h-8 text-primary" />
              </motion.div>

              {/* Step Number */}
              <span className="text-xs font-medium text-primary">{step.step}</span>

              {/* Title */}
              <h3 className="text-lg font-display font-semibold mt-2 mb-3 text-foreground">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorksPreview;
