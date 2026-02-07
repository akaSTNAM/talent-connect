import PageLayout from '@/components/layout/PageLayout';
import HeroSection from '@/components/home/HeroSection';
import ProblemSection from '@/components/home/ProblemSection';
import HowItWorksPreview from '@/components/home/HowItWorksPreview';
import BenefitsSection from '@/components/home/BenefitsSection';
import PricingPreview from '@/components/home/PricingPreview';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import FAQSection from '@/components/home/FAQSection';
import CTABanner from '@/components/home/CTABanner';

/**
 * Home Page - Phoenix Consultancy Job Application SaaS
 * Conversion-focused landing page for international students and job seekers
 */
const Index = () => {
  return (
    <PageLayout>
      <HeroSection />
      <ProblemSection />
      <HowItWorksPreview />
      <BenefitsSection />
      <PricingPreview />
      <TestimonialsSection />
      <FAQSection />
      <CTABanner />
    </PageLayout>
  );
};

export default Index;
