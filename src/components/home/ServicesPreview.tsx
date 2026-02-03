import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Users, 
  FileCheck, 
  UserCheck, 
  Briefcase, 
  Code,
  ArrowRight 
} from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import AnimatedCard from '@/components/ui/AnimatedCard';

/**
 * Services preview section with animated cards
 * Shows main service offerings with icons
 */
const services = [
  {
    icon: Users,
    title: 'IT Recruitment',
    description:
      'Connect with top-tier IT professionals who drive innovation and technological excellence.',
    link: '/services#it-recruitment',
  },
  {
    icon: FileCheck,
    title: 'Contract Staffing',
    description:
      'Flexible staffing solutions that scale with your project needs and business demands.',
    link: '/services#contract-staffing',
  },
  {
    icon: UserCheck,
    title: 'Permanent Hiring',
    description:
      'Find the perfect long-term additions to your team with our thorough vetting process.',
    link: '/services#permanent-hiring',
  },
  {
    icon: Briefcase,
    title: 'HR Consulting',
    description:
      'Strategic HR solutions to optimize your workforce and organizational structure.',
    link: '/services#hr-consulting',
  },
  {
    icon: Code,
    title: 'Software Development',
    description:
      'Expert development teams ready to bring your digital vision to life.',
    link: '/services#software-dev',
  },
];

const ServicesPreview = () => {
  return (
    <section className="section-container bg-secondary/30">
      <SectionHeader
        badge="Our Services"
        title={
          <>
            Comprehensive{' '}
            <span className="gradient-text">Recruitment Solutions</span>
          </>
        }
        subtitle="From IT recruitment to HR consulting, we offer a full spectrum of services to meet your talent acquisition needs."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {services.map((service, index) => (
          <AnimatedCard key={service.title} delay={index * 0.1}>
            <div className="flex flex-col h-full">
              <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground flex-grow mb-4">
                {service.description}
              </p>
              <Link
                to={service.link}
                className="inline-flex items-center text-accent font-medium hover:underline group"
              >
                Learn More
                <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </AnimatedCard>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="text-center mt-12"
      >
        <Link
          to="/services"
          className="inline-flex items-center text-lg font-medium text-foreground hover:text-accent transition-colors"
        >
          View All Services
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </motion.div>
    </section>
  );
};

export default ServicesPreview;
