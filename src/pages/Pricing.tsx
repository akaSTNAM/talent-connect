import PageLayout from '@/components/layout/PageLayout';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

/**
 * Pricing page with detailed plan comparison
 */
const plans = [
  {
    name: 'Starter',
    price: 99,
    period: '/month',
    description: 'For focused job searches with moderate volume',
    applications: 50,
    features: [
      { name: '50 targeted applications/month', included: true },
      { name: 'Resume review & feedback', included: true },
      { name: 'Application tracking dashboard', included: true },
      { name: 'Email support', included: true },
      { name: 'LinkedIn optimization', included: false },
      { name: 'Interview prep resources', included: false },
      { name: 'Dedicated account manager', included: false },
      { name: '1-on-1 coaching', included: false },
    ],
    popular: false,
  },
  {
    name: 'Professional',
    price: 179,
    period: '/month',
    description: 'Best value for serious job seekers',
    applications: 100,
    features: [
      { name: '100 targeted applications/month', included: true },
      { name: 'Resume review & optimization', included: true },
      { name: 'Application tracking dashboard', included: true },
      { name: 'Priority email support', included: true },
      { name: 'LinkedIn profile optimization', included: true },
      { name: 'Interview prep resources', included: true },
      { name: 'Dedicated account manager', included: false },
      { name: '1-on-1 coaching', included: false },
    ],
    popular: true,
  },
  {
    name: 'Premium',
    price: 299,
    period: '/month',
    description: 'Maximum support for urgent job searches',
    applications: 200,
    features: [
      { name: '200 targeted applications/month', included: true },
      { name: 'Full resume optimization', included: true },
      { name: 'Application tracking dashboard', included: true },
      { name: 'Priority support (phone & email)', included: true },
      { name: 'LinkedIn profile optimization', included: true },
      { name: 'Interview prep resources', included: true },
      { name: 'Dedicated account manager', included: true },
      { name: '1-on-1 interview coaching', included: true },
    ],
    popular: false,
  },
];

const faqs = [
  {
    question: 'What counts as one application?',
    answer: 'Each job we apply to on your behalf counts as one application. We submit complete applications through company portals, LinkedIn Easy Apply, or job boards.',
  },
  {
    question: 'Can I change plans anytime?',
    answer: 'Yes! You can upgrade or downgrade your plan at any time. Changes take effect on your next billing cycle.',
  },
  {
    question: 'What happens if I use all my applications early?',
    answer: 'You can purchase additional application credits or upgrade your plan. We\'ll notify you when you\'re running low.',
  },
  {
    question: 'Is there a refund policy?',
    answer: 'We offer a full refund within 7 days of your first paid subscription if you\'re not satisfied. The 15-day trial is completely free.',
  },
];

const Pricing = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="badge-accent"
            >
              15-Day Free Trial
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-6 text-4xl md:text-5xl font-display font-bold text-foreground"
            >
              Simple, <span className="gradient-text">Transparent</span> Pricing
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-lg text-muted-foreground"
            >
              Start with a free trial. No credit card required. 
              Choose the plan that fits your job search intensity.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-container">
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative soft-card p-6 lg:p-8 ${
                plan.popular ? 'ring-2 ring-primary shadow-lg scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-xl font-display font-semibold text-foreground">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground text-sm mt-1">
                  {plan.description}
                </p>
                <div className="mt-6">
                  <span className="text-5xl font-display font-bold text-foreground">
                    ${plan.price}
                  </span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <p className="text-sm font-medium text-primary mt-2">
                  {plan.applications} applications/month
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature.name} className="flex items-start text-sm">
                    <Check
                      className={`w-5 h-5 mr-2 flex-shrink-0 ${
                        feature.included ? 'text-accent' : 'text-muted-foreground/30'
                      }`}
                    />
                    <span
                      className={
                        feature.included
                          ? 'text-foreground'
                          : 'text-muted-foreground/50 line-through'
                      }
                    >
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className={`w-full ${
                  plan.popular
                    ? 'bg-primary hover:bg-primary/90'
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                }`}
              >
                <Link to="/signup">Start Free Trial</Link>
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Comparison Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground text-sm">
            All plans include a 15-day free trial. Cancel anytime with no questions asked.
          </p>
        </motion.div>
      </section>

      {/* FAQ Section */}
      <section className="section-container bg-secondary/30">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="badge-primary">
              <HelpCircle className="w-4 h-4 mr-2" />
              Pricing FAQ
            </span>
            <h2 className="mt-4 text-3xl font-display font-bold text-foreground">
              Common Questions
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="soft-card px-6 border-none"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
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
            Still Have Questions?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            We're here to help. Reach out and we'll get back to you within 24 hours.
          </p>
          <Button asChild variant="outline" size="lg">
            <Link to="/contact">
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </section>
    </PageLayout>
  );
};

export default Pricing;
