import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionHeader from '@/components/ui/SectionHeader';

/**
 * Pricing preview section for landing page
 */
const plans = [
  {
    name: 'Starter',
    price: 99,
    period: '/month',
    description: 'Perfect for focused job searches',
    applications: '50 applications/month',
    features: [
      '50 targeted applications',
      'Resume review',
      'Application tracking dashboard',
      'Email support',
    ],
    popular: false,
  },
  {
    name: 'Professional',
    price: 179,
    period: '/month',
    description: 'Best for serious job seekers',
    applications: '100 applications/month',
    features: [
      '100 targeted applications',
      'Resume + LinkedIn optimization',
      'Priority application tracking',
      'Interview prep resources',
      'Priority support',
    ],
    popular: true,
  },
  {
    name: 'Premium',
    price: 299,
    period: '/month',
    description: 'Maximum coverage for urgent needs',
    applications: '200 applications/month',
    features: [
      '200 targeted applications',
      'Full profile optimization',
      'Dedicated account manager',
      '1-on-1 interview coaching',
      'Priority support',
      'Custom job targeting',
    ],
    popular: false,
  },
];

const PricingPreview = () => {
  return (
    <section className="section-container">
      <SectionHeader
        badge="Pricing"
        title="Simple, Transparent Pricing"
        subtitle="Start with a 15-day free trial. No credit card required. Cancel anytime."
      />

      <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className={`relative soft-card p-6 lg:p-8 ${
              plan.popular ? 'ring-2 ring-primary shadow-lg' : ''
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                  Most Popular
                </span>
              </div>
            )}

            <div className="text-center mb-6">
              <h3 className="text-xl font-display font-semibold text-foreground">
                {plan.name}
              </h3>
              <p className="text-muted-foreground text-sm mt-1">
                {plan.description}
              </p>
              <div className="mt-4">
                <span className="text-4xl font-display font-bold text-foreground">
                  ${plan.price}
                </span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>
              <p className="text-sm font-medium text-primary mt-2">
                {plan.applications}
              </p>
            </div>

            <ul className="space-y-3 mb-8">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start text-sm">
                  <Check className="w-5 h-5 text-accent mr-2 flex-shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
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

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-10 text-center"
      >
        <Link
          to="/pricing"
          className="inline-flex items-center text-primary font-medium hover:underline"
        >
          Compare all features
          <ArrowRight className="ml-1 w-4 h-4" />
        </Link>
      </motion.div>
    </section>
  );
};

export default PricingPreview;
