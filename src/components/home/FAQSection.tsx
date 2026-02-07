import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import SectionHeader from '@/components/ui/SectionHeader';

/**
 * FAQ section for common questions
 */
const faqs = [
  {
    question: 'Do you guarantee I will get a job?',
    answer:
      'No, we do not guarantee job placement. What we guarantee is professional, targeted applications submitted on your behalf. Your success depends on many factors including your qualifications, interview performance, and market conditions.',
  },
  {
    question: 'How do you apply on my behalf?',
    answer:
      'We use your resume and credentials to submit applications through company career portals, LinkedIn, and job boards. Each application is reviewed by a human before submission to ensure quality.',
  },
  {
    question: 'Do you apply to random jobs?',
    answer:
      'Absolutely not. We carefully match jobs based on your skills, experience, location preferences, and visa requirements. Quality over quantity is our approach.',
  },
  {
    question: 'Can you help with visa sponsorship jobs?',
    answer:
      'Yes! We specialize in helping international students and visa holders. We prioritize companies known to sponsor work visas and can filter for sponsorship-friendly positions.',
  },
  {
    question: 'What if I want to cancel?',
    answer:
      'You can cancel anytime. There are no long-term contracts. We offer a 15-day free trial so you can try our service risk-free before committing.',
  },
  {
    question: 'How do I track my applications?',
    answer:
      'You get access to a personal dashboard where you can see every job we applied to, the company details, application date, and current status.',
  },
];

const FAQSection = () => {
  return (
    <section className="section-container">
      <SectionHeader
        badge="FAQ"
        title="Common Questions"
        subtitle="Everything you need to know about our service."
      />

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
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
  );
};

export default FAQSection;
