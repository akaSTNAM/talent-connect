import PageLayout from '@/components/layout/PageLayout';
import HeroSection from '@/components/home/HeroSection';
import AboutPreview from '@/components/home/AboutPreview';
import ServicesPreview from '@/components/home/ServicesPreview';
import WhyChoosePreview from '@/components/home/WhyChoosePreview';
import ProcessSteps from '@/components/home/ProcessSteps';
import TestimonialsSlider from '@/components/home/TestimonialsSlider';
import CTABanner from '@/components/home/CTABanner';

/**
 * Home Page - Main landing page for Phoenix Consultancy LLP recruitment website
 * Features hero, about preview, services, why choose us, process, testimonials, and CTA
 */
const Index = () => {
  return (
    <PageLayout>
      {/* SEO Meta - handled by index.html for this SPA */}
      <HeroSection />
      <AboutPreview />
      <ServicesPreview />
      <WhyChoosePreview />
      <ProcessSteps />
      <TestimonialsSlider />
      <CTABanner />
    </PageLayout>
  );
};

export default Index;
