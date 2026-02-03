import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Users, 
  FileCheck, 
  UserCheck, 
  Briefcase, 
  Code,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import PageLayout from '@/components/layout/PageLayout';
import SectionHeader from '@/components/ui/SectionHeader';
import AnimatedCard from '@/components/ui/AnimatedCard';
import { Button } from '@/components/ui/button';

/**
 * Services page - Detailed view of all service offerings
 */
const services = [
  {
    id: 'it-recruitment',
    icon: Users,
    title: 'IT Recruitment',
    shortDesc: 'Connect with top-tier IT professionals who drive innovation.',
    description:
      'Our specialized IT recruitment team understands the unique demands of technology roles. We source developers, engineers, architects, and IT leaders who not only have the technical skills but also fit your company culture.',
    features: [
      'Full-stack developers',
      'DevOps engineers',
      'Cloud architects',
      'Data scientists',
      'Cybersecurity experts',
      'Technical leads',
    ],
  },
  {
    id: 'contract-staffing',
    icon: FileCheck,
    title: 'Contract Staffing',
    shortDesc: 'Flexible staffing solutions that scale with your needs.',
    description:
      'Whether you need to ramp up for a specific project or require specialized skills for a limited period, our contract staffing solutions provide the flexibility you need without long-term commitments.',
    features: [
      'Project-based staffing',
      'Short-term contracts',
      'Long-term engagements',
      'Contract-to-hire options',
      'Managed team solutions',
      'Rapid deployment',
    ],
  },
  {
    id: 'permanent-hiring',
    icon: UserCheck,
    title: 'Permanent Hiring',
    shortDesc: 'Find the perfect long-term additions to your team.',
    description:
      'Building a permanent team requires careful consideration of skills, culture fit, and growth potential. Our thorough vetting process ensures you find candidates who will thrive and grow with your organization.',
    features: [
      'Executive search',
      'Mid-level professionals',
      'Entry-level talent',
      'Cultural fit assessment',
      'Skills verification',
      'Reference checks',
    ],
  },
  {
    id: 'hr-consulting',
    icon: Briefcase,
    title: 'HR Consulting',
    shortDesc: 'Strategic HR solutions to optimize your workforce.',
    description:
      'Beyond recruitment, we offer comprehensive HR consulting services to help you build robust people processes, from organizational design to performance management frameworks.',
    features: [
      'Organizational design',
      'Compensation benchmarking',
      'Performance management',
      'HR policy development',
      'Employee engagement',
      'Talent retention strategies',
    ],
  },
  {
    id: 'software-dev',
    icon: Code,
    title: 'Software Development Support',
    shortDesc: 'Expert development teams for your digital projects.',
    description:
      'Need to augment your development capacity? We provide skilled development teams that integrate seamlessly with your existing workflows, delivering quality code and meeting your deadlines.',
    features: [
      'Web development',
      'Mobile applications',
      'Cloud solutions',
      'API development',
      'Legacy modernization',
      'Quality assurance',
    ],
  },
];

const ServicesPage = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-background" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-accent bg-accent/10 rounded-full">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
              Comprehensive{' '}
              <span className="gradient-text">Recruitment Solutions</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              From IT recruitment to HR consulting, we offer end-to-end talent
              solutions tailored to your business needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-container">
        <div className="space-y-16 md:space-y-24">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Content Side */}
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                  {service.title}
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="grid sm:grid-cols-2 gap-3 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-foreground">
                      <CheckCircle className="w-5 h-5 text-accent mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button asChild className="gradient-primary text-primary-foreground">
                  <Link to="/contact">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              {/* Visual Side */}
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="relative">
                  <div className="aspect-square rounded-2xl gradient-primary opacity-10" />
                  <div className="absolute inset-8 glass-card rounded-xl flex items-center justify-center">
                    <service.icon className="w-24 h-24 text-accent opacity-50" />
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-xl bg-accent/20 -z-10" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl p-8 md:p-12 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
            Not Sure Which Service Fits Your Needs?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our experts are here to help. Schedule a free consultation and we'll
            recommend the best approach for your hiring challenges.
          </p>
          <Button asChild size="lg" className="gradient-primary text-primary-foreground">
            <Link to="/contact">
              Schedule Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </section>
    </PageLayout>
  );
};

export default ServicesPage;
