import PageLayout from '@/components/layout/PageLayout';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

/**
 * Signup page for Phoenix Consultancy
 */
const benefits = [
  '15-day free trial',
  'No credit card required',
  'Cancel anytime',
  'Resume review included',
];

const Signup = () => {
  return (
    <PageLayout>
      <section className="min-h-[80vh] flex items-center justify-center py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left - Benefits */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden md:block"
            >
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">
                Start Your Free Trial Today
              </h2>
              <p className="text-muted-foreground mb-8">
                Join hundreds of job seekers who let us handle their applications
                while they focus on interview preparation.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-accent mr-3" />
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Right - Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="text-center mb-6 md:hidden">
                <h1 className="text-3xl font-display font-bold text-foreground">
                  Start Free Trial
                </h1>
                <p className="text-muted-foreground mt-2">
                  No credit card required
                </p>
              </div>

              <div className="soft-card p-6 md:p-8">
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      placeholder="••••••••"
                    />
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Create Account
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </form>

                <p className="mt-4 text-xs text-muted-foreground text-center">
                  By signing up, you agree to our{' '}
                  <Link to="/terms" className="text-primary hover:underline">
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link to="/privacy" className="text-primary hover:underline">
                    Privacy Policy
                  </Link>
                  .
                </p>

                <div className="mt-6 text-center">
                  <p className="text-sm text-muted-foreground">
                    Already have an account?{' '}
                    <Link to="/login" className="text-primary hover:underline">
                      Log in
                    </Link>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Signup;
