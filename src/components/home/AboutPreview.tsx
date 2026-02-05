import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionHeader from '@/components/ui/SectionHeader';

/**
 * About preview section on the home page
 * Brief company introduction with CTA
 */
const AboutPreview = () => {
  const features = [
    'Industry-leading talent acquisition',
    'Customized recruitment solutions',
    'Expert IT consulting services',
    '24/7 dedicated support',
  ];

  return (
    <section className="section-container">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Image/Visual Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <div className="absolute inset-0 gradient-primary opacity-90" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-primary-foreground p-8">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <span className="text-7xl md:text-8xl font-display font-bold">10+</span>
                  <p className="mt-2 text-lg opacity-90">Years of Excellence</p>
                </motion.div>
              </div>
            </div>
          </div>
          {/* Decorative Element */}
          <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-xl bg-accent/20 -z-10" />
        </motion.div>

        {/* Content Side */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            badge="About Us"
            title={
              <>
                Your Trusted Partner in{' '}
                <span className="gradient-text">Talent Acquisition</span>
              </>
            }
            subtitle=""
            centered={false}
          />

          <p className="text-muted-foreground leading-relaxed mb-6">
            Phoenix Consultancy LLP is a leading recruitment and IT consulting firm dedicated
            to bridging the gap between exceptional talent and forward-thinking
            organizations. With over a decade of experience, we've helped hundreds
            of companies build world-class teams.
          </p>

          <ul className="space-y-3 mb-8">
            {features.map((feature, index) => (
              <motion.li
                key={feature}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="flex items-center text-foreground"
              >
                <span className="w-2 h-2 rounded-full bg-accent mr-3" />
                {feature}
              </motion.li>
            ))}
          </ul>

          <Button asChild className="gradient-primary text-primary-foreground">
            <Link to="/about">
              Learn More About Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPreview;
