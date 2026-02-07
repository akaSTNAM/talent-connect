import PageLayout from '@/components/layout/PageLayout';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Upload, 
  UserSearch, 
  Send, 
  MessageSquare,
  CheckCircle,
  ArrowRight,
  FileText,
  Target,
  BarChart3
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionHeader from '@/components/ui/SectionHeader';

/**
 * Detailed How It Works page
 */
const steps = [
  {
    icon: Upload,
    title: 'Sign Up & Upload Your Resume',
    description: 'Create your free account and upload your resume. Share your job preferences, target locations, and career goals with us.',
    details: [
      'Quick 5-minute onboarding',
      'Secure resume storage',
      'Define your ideal job criteria',
      'Set visa/sponsorship preferences',
    ],
  },
  {
    icon: UserSearch,
    title: 'We Analyze Your Profile',
    description: 'Our team reviews your background, skills, and goals to create a personalized job search strategy tailored to you.',
    details: [
      'Resume optimization feedback',
      'Skills gap analysis',
      'Target company identification',
      'Market positioning advice',
    ],
  },
  {
    icon: Send,
    title: 'We Apply to Jobs Daily',
    description: 'Every day, we search for matching positions and submit applications on your behalf. Watch your dashboard fill up.',
    details: [
      'Targeted job matching',
      'Human-reviewed applications',
      'Cover letter customization',
      'Real-time dashboard updates',
    ],
  },
  {
    icon: MessageSquare,
    title: 'You Focus on Interviews',
    description: 'When companies respond, you\'re ready. Focus all your energy on interview preparation and assessment tests.',
    details: [
      'Interview prep resources',
      'Application status tracking',
      'Response notifications',
      'Ongoing support',
    ],
  },
];

const HowItWorks = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="badge-primary"
            >
              How It Works
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-6 text-4xl md:text-5xl font-display font-bold text-foreground"
            >
              Your Job Search, <span className="gradient-text">Simplified</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-lg text-muted-foreground"
            >
              We handle the tedious application process so you can focus on 
              what really matters — preparing to ace your interviews.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="section-container">
        <div className="space-y-16 md:space-y-24">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-primary">
                    Step {index + 1}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                  {step.title}
                </h2>
                <p className="text-muted-foreground text-lg mb-6">
                  {step.description}
                </p>
                <ul className="space-y-3">
                  {step.details.map((detail) => (
                    <li key={detail} className="flex items-center text-sm">
                      <CheckCircle className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                      <span className="text-foreground">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                <div className="soft-card p-8 h-64 flex items-center justify-center bg-gradient-to-br from-primary/5 to-accent/5">
                  <step.icon className="w-24 h-24 text-primary/20" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* What You Get Section */}
      <section className="section-container bg-secondary/30">
        <SectionHeader
          badge="Included"
          title="Everything You Need"
          subtitle="Our service includes comprehensive support beyond just applications."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: FileText,
              title: 'Resume Optimization',
              description: 'Get professional feedback to make your resume stand out.',
            },
            {
              icon: Target,
              title: 'Targeted Applications',
              description: 'Quality over quantity. We match you with relevant positions.',
            },
            {
              icon: BarChart3,
              title: 'Progress Dashboard',
              description: 'Track every application with real-time status updates.',
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="soft-card p-6 text-center"
            >
              <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-display font-bold text-foreground mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Join hundreds of successful job seekers who let us handle their applications.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link to="/signup">
              Start Your Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </section>
    </PageLayout>
  );
};

export default HowItWorks;
