import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  Award, 
  Users, 
  Shield, 
  HeartHandshake,
  Target,
  ArrowRight
} from 'lucide-react';
import PageLayout from '@/components/layout/PageLayout';
import SectionHeader from '@/components/ui/SectionHeader';
import AnimatedCard from '@/components/ui/AnimatedCard';
import StatsCounter from '@/components/ui/StatsCounter';
import { Button } from '@/components/ui/button';

/**
 * Why Choose Us page - Detailed advantages and differentiators
 */
const reasons = [
  {
    icon: Zap,
    title: 'Fast Hiring Process',
    description:
      'Our streamlined recruitment process reduces time-to-hire by up to 40%. We understand that vacant positions cost money, so we move quickly without compromising quality.',
    stats: '40% faster',
  },
  {
    icon: Award,
    title: 'Industry Experts',
    description:
      'Our recruiters are specialists in their domains. Whether it\'s fintech, healthcare, or enterprise software, we speak your language and understand your unique requirements.',
    stats: '15+ industries',
  },
  {
    icon: Users,
    title: 'Quality Talent Pool',
    description:
      'Access our pre-vetted database of thousands of qualified candidates. Each professional has been screened for skills, experience, and cultural fit.',
    stats: '50,000+ candidates',
  },
  {
    icon: Shield,
    title: 'Transparent Process',
    description:
      'We believe in complete visibility. Track progress, review candidates, and stay informed at every stage through our client portal and regular updates.',
    stats: '100% visibility',
  },
  {
    icon: HeartHandshake,
    title: 'Client Satisfaction',
    description:
      'Our dedicated account managers ensure personalized service. We don\'t just fill positions; we build lasting partnerships that grow with your business.',
    stats: '98% retention',
  },
  {
    icon: Target,
    title: 'Precision Matching',
    description:
      'Using advanced assessment tools and deep industry knowledge, we match candidates not just on skills, but on values, work style, and growth potential.',
    stats: '95% success rate',
  },
];

const stats = [
  { value: 100, suffix: '+', label: 'Happy Clients' },
  { value: 500, suffix: '+', label: 'Placements Made' },
  { value: 95, suffix: '%', label: 'Success Rate' },
  { value: 10, suffix: '+', label: 'Years Experience' },
];

const WhyChooseUsPage = () => {
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
              Why Choose Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
              The <span className="gradient-text">Phoenix Consultancy LLP</span> Advantage
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              We're not just another recruitment agency. We're your strategic
              partner in building exceptional teams that drive business success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-container pt-0">
        <div className="glass-card rounded-2xl p-8 md:p-12">
          <StatsCounter stats={stats} />
        </div>
      </section>

      {/* Reasons Grid */}
      <section className="section-container">
        <SectionHeader
          badge="Our Differentiators"
          title={
            <>
              What Sets Us <span className="gradient-text">Apart</span>
            </>
          }
          subtitle="Discover the unique advantages that make Phoenix Consultancy LLP the preferred choice for leading organizations."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <AnimatedCard key={reason.title} delay={index * 0.1}>
              <div className="flex flex-col h-full">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center">
                    <reason.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <span className="text-2xl font-display font-bold text-accent">
                    {reason.stats}
                  </span>
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground flex-grow">
                  {reason.description}
                </p>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </section>

      {/* Comparison Section */}
      <section className="section-container bg-secondary/30">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-accent bg-accent/10 rounded-full">
              The Phoenix Consultancy LLP Way
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Traditional Recruitment vs.{' '}
              <span className="gradient-text">Our Approach</span>
            </h2>
            <div className="space-y-6">
              {[
                {
                  traditional: 'Generic job postings',
                  ours: 'Targeted headhunting and active sourcing',
                },
                {
                  traditional: 'Resume-based screening',
                  ours: 'Skills assessment and cultural fit evaluation',
                },
                {
                  traditional: 'One-size-fits-all process',
                  ours: 'Customized recruitment strategies',
                },
                {
                  traditional: 'Limited communication',
                  ours: 'Dedicated account manager and regular updates',
                },
                {
                  traditional: 'No post-hire support',
                  ours: '90-day placement guarantee and onboarding support',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent flex items-center justify-center text-accent-foreground text-sm font-bold">
                    ✓
                  </div>
                  <div>
                    <p className="text-muted-foreground line-through text-sm">
                      {item.traditional}
                    </p>
                    <p className="text-foreground font-medium">{item.ours}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl gradient-primary p-8 flex items-center justify-center">
              <div className="text-center text-primary-foreground">
                <span className="text-7xl font-display font-bold block mb-4">90</span>
                <span className="text-2xl font-medium">Day Guarantee</span>
                <p className="mt-4 opacity-80 max-w-xs mx-auto">
                  If your new hire doesn't work out within 90 days, we'll find a
                  replacement at no additional cost.
                </p>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-xl bg-accent/20 -z-10" />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="gradient-primary rounded-2xl p-8 md:p-12 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-display font-bold text-primary-foreground mb-4">
            Experience the Phoenix Consultancy LLP Difference
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Join hundreds of companies that have transformed their hiring process
            with our expert recruitment solutions.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90"
          >
            <Link to="/contact">
              Start Your Success Story
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </section>
    </PageLayout>
  );
};

export default WhyChooseUsPage;
