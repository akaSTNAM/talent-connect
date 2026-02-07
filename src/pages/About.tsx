import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Target, 
  Eye, 
  Heart,
  Linkedin,
  Twitter,
  ArrowRight,
  Users,
  Globe,
  Shield
} from 'lucide-react';
import PageLayout from '@/components/layout/PageLayout';
import SectionHeader from '@/components/ui/SectionHeader';
import AnimatedCard from '@/components/ui/AnimatedCard';
import { Button } from '@/components/ui/button';

/**
 * About Us page - Company story, mission, and team for Phoenix Consultancy SaaS
 */
const values = [
  {
    icon: Target,
    title: 'Our Mission',
    description:
      'To help international students and job seekers land their dream jobs by handling the tedious application process, so they can focus on what matters most — interview preparation.',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    description:
      'To become the most trusted job application partner for international professionals, known for our transparency, quality, and genuine care for career success.',
  },
  {
    icon: Heart,
    title: 'Our Values',
    description:
      'Transparency, quality over quantity, empathy for visa challenges, and unwavering commitment to our clients\' career success guide every decision we make.',
  },
];

const team = [
  {
    name: 'Raj Patel',
    role: 'Founder & CEO',
    bio: 'Former international student who struggled with job applications. Built Phoenix to solve his own problem.',
  },
  {
    name: 'Emily Chen',
    role: 'Head of Operations',
    bio: 'Expert in HR processes and application optimization with 8+ years experience.',
  },
  {
    name: 'Michael Torres',
    role: 'Lead Career Coach',
    bio: 'Former tech recruiter who now helps candidates prepare for interviews.',
  },
  {
    name: 'Priya Sharma',
    role: 'Client Success Manager',
    bio: 'Dedicated to ensuring every client has a smooth and successful experience.',
  },
];

const stats = [
  { number: '500+', label: 'Happy Clients' },
  { number: '50,000+', label: 'Applications Sent' },
  { number: '95%', label: 'Client Satisfaction' },
  { number: '15+', label: 'Countries Served' },
];

const AboutPage = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="badge-primary">About Us</span>
            <h1 className="mt-6 text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              We Understand Your <span className="gradient-text">Struggle</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Phoenix Consultancy was founded by international students who 
              experienced the job search struggle firsthand. Now we help others 
              navigate the same challenges.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Our <span className="gradient-text">Story</span>
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                In 2022, our founder Raj was an international student in the US 
                with his OPT clock ticking down. He spent 6+ hours daily applying 
                to jobs, leaving little time for interview preparation.
              </p>
              <p>
                He realized that the application process — searching, customizing 
                resumes, filling forms — was taking away from what actually gets 
                you hired: nailing the interview.
              </p>
              <p>
                Phoenix Consultancy was born from this insight. We handle the 
                tedious application work so you can focus on preparing for interviews, 
                studying for assessments, and presenting your best self to employers.
              </p>
              <p className="font-medium text-foreground">
                We're not a recruitment agency. We don't promise jobs. We promise 
                professional, targeted applications and the time you need to prepare.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="soft-card p-6 text-center"
                >
                  <div className="text-3xl font-display font-bold text-primary">
                    {stat.number}
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who We Help */}
      <section className="section-container bg-secondary/30">
        <SectionHeader
          badge="Who We Help"
          title="Built for International Professionals"
          subtitle="We specialize in helping job seekers who face unique visa and timing challenges."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Globe,
              title: 'International Students',
              description: 'F-1 OPT/CPT holders who need to find jobs quickly before their work authorization expires.',
            },
            {
              icon: Users,
              title: 'Fresh Graduates',
              description: 'New graduates entering a competitive job market who need high-volume, quality applications.',
            },
            {
              icon: Shield,
              title: 'Visa-Expiring Seekers',
              description: 'Professionals whose current visa is ending and need sponsorship-friendly opportunities.',
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="soft-card p-6 text-center"
            >
              <div className="w-14 h-14 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section-container">
        <SectionHeader
          badge="Our Foundation"
          title="What Drives Us"
          subtitle="The principles that guide everything we do at Phoenix Consultancy."
        />

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <AnimatedCard key={value.title} delay={index * 0.1}>
              <div className="text-center">
                <div className="w-14 h-14 mx-auto rounded-xl bg-primary flex items-center justify-center mb-4">
                  <value.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="section-container bg-secondary/30">
        <SectionHeader
          badge="Our Team"
          title="Meet the Team"
          subtitle="People who genuinely care about your career success."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <AnimatedCard key={member.name} delay={index * 0.1}>
              <div className="text-center">
                <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-2xl font-display font-bold text-primary">
                    {member.name.split(' ').map((n) => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-lg font-display font-semibold text-foreground">
                  {member.name}
                </h3>
                <p className="text-sm text-primary font-medium mb-2">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
                <div className="flex justify-center gap-2 mt-4">
                  <a
                    href="#"
                    className="p-2 rounded-lg bg-secondary hover:bg-primary/10 hover:text-primary transition-colors"
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <Linkedin size={16} />
                  </a>
                  <a
                    href="#"
                    className="p-2 rounded-lg bg-secondary hover:bg-primary/10 hover:text-primary transition-colors"
                    aria-label={`${member.name}'s Twitter`}
                  >
                    <Twitter size={16} />
                  </a>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="soft-card p-8 md:p-12 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
            Ready to Let Us Help?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Start your 15-day free trial today. No credit card required.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link to="/signup">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </section>
    </PageLayout>
  );
};

export default AboutPage;
