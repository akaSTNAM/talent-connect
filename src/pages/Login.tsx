import PageLayout from '@/components/layout/PageLayout';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

/**
 * Login page for Phoenix Consultancy
 */
const Login = () => {
  return (
    <PageLayout>
      <section className="min-h-[80vh] flex items-center justify-center py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-md mx-auto"
          >
            <div className="text-center mb-8">
              <h1 className="text-3xl font-display font-bold text-foreground">
                Welcome Back
              </h1>
              <p className="text-muted-foreground mt-2">
                Log in to access your dashboard
              </p>
            </div>

            <div className="soft-card p-6 md:p-8">
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <Link
                      to="/forgot-password"
                      className="text-sm text-primary hover:underline"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                  />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Log In
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground">
                  Don't have an account?{' '}
                  <Link to="/signup" className="text-primary hover:underline">
                    Sign up for free
                  </Link>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Login;
