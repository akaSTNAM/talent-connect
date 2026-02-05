import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';

/**
 * Testimonials slider with auto-play and manual navigation
 * Features client quotes and company information
 */
const testimonials = [
  {
    quote:
      "Phoenix Consultancy LLP transformed our hiring process. Within three weeks, we had five exceptional developers on our team. Their understanding of our culture made all the difference.",
    author: 'Sarah Johnson',
    role: 'CTO',
    company: 'TechCorp Solutions',
  },
  {
    quote:
      "The quality of candidates we received was outstanding. Every single hire through Phoenix Consultancy LLP has exceeded our expectations. They truly understand the tech industry.",
    author: 'Michael Chen',
    role: 'VP of Engineering',
    company: 'InnovateCo',
  },
  {
    quote:
      "Working with Phoenix Consultancy LLP was seamless from start to finish. Their team is professional, responsive, and genuinely invested in finding the right fit for both parties.",
    author: 'Emily Rodriguez',
    role: 'HR Director',
    company: 'GlobalSoft Inc.',
  },
  {
    quote:
      "We've partnered with many recruiters over the years, but Phoenix Consultancy LLP stands out. Their expertise in IT recruitment is unmatched, and they deliver results consistently.",
    author: 'David Park',
    role: 'Founder & CEO',
    company: 'DataPrime Analytics',
  },
];

const TestimonialsSlider = () => {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const handleDotClick = (index: number) => {
    setIsAutoPlaying(false);
    setCurrent(index);
  };

  return (
    <section className="section-container bg-secondary/30">
      <SectionHeader
        badge="Testimonials"
        title={
          <>
            What Our <span className="gradient-text">Clients Say</span>
          </>
        }
        subtitle="Don't just take our word for it. Here's what industry leaders say about working with Phoenix Consultancy LLP."
      />

      <div className="max-w-4xl mx-auto">
        {/* Testimonial Card */}
        <div className="relative glass-card rounded-2xl p-8 md:p-12">
          {/* Quote Icon */}
          <div className="absolute top-6 left-6 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
            <Quote className="w-6 h-6 text-accent" />
          </div>

          {/* Content */}
          <div className="pt-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <blockquote className="text-xl md:text-2xl text-foreground font-medium leading-relaxed mb-8">
                  "{testimonials[current].quote}"
                </blockquote>

                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-display font-bold">
                    {testimonials[current].author.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <p className="font-display font-semibold text-foreground">
                      {testimonials[current].author}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonials[current].role}, {testimonials[current].company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4 pointer-events-none">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePrev}
              className="pointer-events-auto w-10 h-10 rounded-full bg-background shadow-lg flex items-center justify-center text-foreground hover:bg-secondary transition-colors -translate-x-1/2"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleNext}
              className="pointer-events-auto w-10 h-10 rounded-full bg-background shadow-lg flex items-center justify-center text-foreground hover:bg-secondary transition-colors translate-x-1/2"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === current
                  ? 'bg-accent w-8'
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSlider;
