import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ChevronDown, 
  MapPin, 
  Clock, 
  Briefcase,
  ArrowRight
} from 'lucide-react';
import PageLayout from '@/components/layout/PageLayout';
import SectionHeader from '@/components/ui/SectionHeader';
import AnimatedCard from '@/components/ui/AnimatedCard';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

/**
 * FAQ data
 */
const faqs = [
  {
    question: 'How long does the recruitment process typically take?',
    answer:
      'Our average time-to-hire is 2-4 weeks, depending on the role complexity and requirements. For executive positions, it may take 4-6 weeks. We prioritize quality matches while maintaining efficiency.',
  },
  {
    question: 'What industries do you specialize in?',
    answer:
      'We specialize in technology, fintech, healthcare, e-commerce, and enterprise software sectors. Our recruiters have deep domain expertise to understand the unique requirements of each industry.',
  },
  {
    question: 'Do you offer a guarantee for placements?',
    answer:
      'Yes! We offer a 90-day placement guarantee. If your new hire doesn\'t work out within 90 days for any reason, we\'ll find a replacement at no additional cost.',
  },
  {
    question: 'How do you screen candidates?',
    answer:
      'Our screening process includes skills assessment, cultural fit evaluation, background checks, and reference verification. For technical roles, we also conduct coding challenges and technical interviews.',
  },
  {
    question: 'What makes Phoenix Consultancy LLP different from other recruiters?',
    answer:
      'We combine industry expertise with personalized service. Each client gets a dedicated account manager, and our recruiters specialize in specific domains. We focus on long-term partnerships, not just filling positions.',
  },
  {
    question: 'Do you help with contract-to-hire arrangements?',
    answer:
      'Absolutely! We offer flexible contract-to-hire options that allow you to evaluate candidates before making a permanent commitment. This reduces hiring risk while ensuring the right fit.',
  },
  {
    question: 'Can you help with remote hiring?',
    answer:
      'Yes, we have extensive experience in remote recruitment. We can help you source, screen, and onboard remote talent from anywhere in the world.',
  },
  {
    question: 'What are your fees?',
    answer:
      'Our fees vary based on the type of engagement (permanent, contract, or executive search). We offer competitive rates and flexible payment terms. Contact us for a customized quote.',
  },
];

/**
 * Career positions data
 */
const careers = [
  {
    id: 1,
    title: 'Senior Technical Recruiter',
    location: 'San Francisco, CA',
    type: 'Full-time',
    department: 'Recruitment',
    description:
      'Join our growing team to source and place top tech talent. 3+ years experience required.',
  },
  {
    id: 2,
    title: 'HR Consultant',
    location: 'Remote',
    type: 'Full-time',
    department: 'Consulting',
    description:
      'Help our clients build better HR processes and policies. SHRM certification preferred.',
  },
  {
    id: 3,
    title: 'Business Development Manager',
    location: 'New York, NY',
    type: 'Full-time',
    department: 'Sales',
    description:
      'Drive growth by building relationships with enterprise clients. 5+ years B2B experience.',
  },
  {
    id: 4,
    title: 'Recruitment Coordinator',
    location: 'San Francisco, CA',
    type: 'Full-time',
    department: 'Operations',
    description:
      'Support our recruitment team with scheduling, coordination, and candidate experience.',
  },
];

/**
 * FAQ Accordion Item Component
 */
const FAQItem = ({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <div className="border-b border-border last:border-0">
      <button
        onClick={onClick}
        className="w-full py-5 flex items-center justify-between text-left"
        aria-expanded={isOpen}
      >
        <span className="font-display font-semibold text-foreground pr-4">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-muted-foreground" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-muted-foreground">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/**
 * More page - FAQ and Careers tabs
 */
const MorePage = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

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
              Resources
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
              <span className="gradient-text">FAQs</span> & Careers
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Find answers to common questions and explore opportunities to join
              our team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="section-container pt-0">
        <Tabs defaultValue="faq" className="w-full">
          <TabsList className="w-full max-w-md mx-auto grid grid-cols-2 mb-12">
            <TabsTrigger value="faq" className="text-base">
              FAQs
            </TabsTrigger>
            <TabsTrigger value="careers" className="text-base">
              Careers
            </TabsTrigger>
          </TabsList>

          {/* FAQ Tab */}
          <TabsContent value="faq">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="max-w-3xl mx-auto"
            >
              <SectionHeader
                badge="Got Questions?"
                title={
                  <>
                    Frequently Asked <span className="gradient-text">Questions</span>
                  </>
                }
                subtitle="Everything you need to know about working with Phoenix Consultancy LLP."
              />

              <div className="glass-card rounded-2xl p-6 md:p-8">
                {faqs.map((faq, index) => (
                  <FAQItem
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openFAQ === index}
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  />
                ))}
              </div>

              {/* Additional Help CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-12 text-center"
              >
                <p className="text-muted-foreground mb-4">
                  Can't find what you're looking for?
                </p>
                <Button asChild className="gradient-primary text-primary-foreground">
                  <Link to="/contact">
                    Contact Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </TabsContent>

          {/* Careers Tab */}
          <TabsContent value="careers">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <SectionHeader
                badge="Join Our Team"
                title={
                  <>
                    Open <span className="gradient-text">Positions</span>
                  </>
                }
                subtitle="Help us connect exceptional talent with outstanding opportunities."
              />

              <div className="grid md:grid-cols-2 gap-6">
                {careers.map((job, index) => (
                  <AnimatedCard key={job.id} delay={index * 0.1}>
                    <div className="flex flex-col h-full">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <span className="text-sm font-medium text-accent">
                            {job.department}
                          </span>
                          <h3 className="text-xl font-display font-semibold text-foreground">
                            {job.title}
                          </h3>
                        </div>
                        <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
                          <Briefcase className="w-5 h-5 text-primary-foreground" />
                        </div>
                      </div>

                      <p className="text-muted-foreground text-sm mb-4 flex-grow">
                        {job.description}
                      </p>

                      <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-muted-foreground">
                        <span className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {job.location}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {job.type}
                        </span>
                      </div>

                      <Button
                        variant="outline"
                        className="w-full hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all"
                      >
                        Apply Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </AnimatedCard>
                ))}
              </div>

              {/* No Positions CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-12 glass-card rounded-2xl p-8 text-center"
              >
                <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                  Don't See a Perfect Fit?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                  We're always looking for talented individuals. Send us your
                  resume and we'll keep you in mind for future opportunities.
                </p>
                <Button asChild className="gradient-primary text-primary-foreground">
                  <Link to="/contact">
                    Submit Your Resume
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </TabsContent>
        </Tabs>
      </section>
    </PageLayout>
  );
};

export default MorePage;
