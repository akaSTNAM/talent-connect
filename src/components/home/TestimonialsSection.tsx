import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';

/**
 * Testimonials section with user reviews
 */
const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Software Engineer',
    location: 'From India, now at Google',
    content:
      "Phoenix Consultancy was a lifesaver. With my OPT expiring, I didn't have time to apply to hundreds of jobs myself. They sent out 150 applications in my first month, and I got 8 interviews!",
    rating: 5,
  },
  {
    name: 'Chen Wei',
    role: 'Data Analyst',
    location: 'From China, now at Meta',
    content:
      "The team understood my visa situation perfectly. They prioritized companies that sponsor H1B and helped me prepare for interviews. Highly recommend for international students.",
    rating: 5,
  },
  {
    name: 'Ahmed Hassan',
    role: 'Product Manager',
    location: 'From Egypt, now at Amazon',
    content:
      "I was skeptical at first, but seeing my dashboard fill up with applications gave me peace of mind. I could focus on studying for interviews instead of job hunting.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-container bg-secondary/30">
      <SectionHeader
        badge="Testimonials"
        title="Real Stories, Real Results"
        subtitle="Hear from job seekers who landed their dream jobs with our help."
      />

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="soft-card p-6"
          >
            <div className="flex items-center mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 text-warning fill-warning"
                />
              ))}
            </div>

            <Quote className="w-8 h-8 text-primary/20 mb-4" />

            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              "{testimonial.content}"
            </p>

            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-primary font-semibold">
                  {testimonial.name.charAt(0)}
                </span>
              </div>
              <div className="ml-3">
                <p className="font-semibold text-foreground text-sm">
                  {testimonial.name}
                </p>
                <p className="text-muted-foreground text-xs">
                  {testimonial.role} • {testimonial.location}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
