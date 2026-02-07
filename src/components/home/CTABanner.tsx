import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';

/**
 * Final CTA banner for landing page
 */
const CTABanner = () => {
  return (
    <section className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary/80 p-8 md:p-12 lg:p-16 text-center"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white blur-3xl" />
        </div>

        <div className="relative z-10 max-w-2xl mx-auto">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="w-16 h-16 mx-auto rounded-2xl bg-primary-foreground/20 flex items-center justify-center mb-6"
          >
            <Rocket className="w-8 h-8 text-primary-foreground" />
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
            Ready to Focus on What Matters?
          </h2>
          
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
            Let us handle your job applications. Start your 15-day free trial 
            today and get back the time you need to prepare for interviews.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-white/90 text-base px-8 h-12"
            >
              <Link to="/signup">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-base px-8 h-12"
            >
              <Link to="/contact">Talk to Us</Link>
            </Button>
          </div>

          <p className="mt-6 text-primary-foreground/60 text-sm">
            No credit card required • Cancel anytime
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default CTABanner;
