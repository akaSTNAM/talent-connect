import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Target, 
  Eye, 
  Heart,
  Linkedin,
  Twitter,
  ArrowRight
} from 'lucide-react';
import PageLayout from '@/components/layout/PageLayout';
import SectionHeader from '@/components/ui/SectionHeader';
import AnimatedCard from '@/components/ui/AnimatedCard';
import { Button } from '@/components/ui/button';

/**
 * About Us page - Company story, mission, vision, values, and team
 */
const values = [
  {
    icon: Target,
    title: 'Mission',
    description:
      'To connect exceptional talent with innovative organizations, fostering growth and success for both candidates and companies through personalized, expert-driven recruitment solutions.',
  },
  {
    icon: Eye,
    title: 'Vision',
    description:
      'To be the most trusted recruitment partner globally, known for transforming how companies build teams and how professionals find meaningful careers.',
  },
  {
    icon: Heart,
    title: 'Values',
    description:
      'Integrity, Excellence, Partnership, Innovation, and Empathy guide every interaction and decision we make, ensuring the best outcomes for all stakeholders.',
  },
];

const team = [
  {
    name: 'Alexandra Chen',
    role: 'Founder & CEO',
    bio: '15+ years in talent acquisition, previously VP at Fortune 500 tech companies.',
  },
  {
    name: 'Marcus Thompson',
    role: 'Head of IT Recruitment',
    bio: 'Former engineering manager turned recruiter, specializing in tech talent.',
  },
  {
    name: 'Sarah Williams',
    role: 'Director of Client Success',
    bio: 'Dedicated to ensuring every partnership delivers exceptional results.',
  },
  {
    name: 'James Rodriguez',
    role: 'Lead HR Consultant',
    bio: 'SHRM-certified professional with expertise in organizational development.',
  },
];

const timeline = [
  {
    year: '2014',
    title: 'Founded',
    description: 'TalentBridge was born from a vision to transform recruitment.',
  },
  {
    year: '2016',
    title: 'Expansion',
    description: 'Opened second office and grew to 25+ team members.',
  },
  {
    year: '2018',
    title: '100 Clients',
    description: 'Reached milestone of 100 active enterprise clients.',
  },
  {
    year: '2020',
    title: 'Digital Transformation',
    description: 'Launched virtual recruitment and remote hiring solutions.',
  },
  {
    year: '2022',
    title: '500+ Placements',
    description: 'Celebrated 500 successful placements across industries.',
  },
  {
    year: '2024',
    title: 'Global Reach',
    description: 'Expanded services to international markets.',
  },
];

const AboutPage = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-background" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-accent bg-accent/10 rounded-full">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
              Building <span className="gradient-text">Teams</span> That{' '}
              <span className="gradient-text">Transform</span> Businesses
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Since 2014, we've been dedicated to connecting exceptional talent
              with companies that value innovation and growth.
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
                TalentBridge was founded with a simple belief: recruitment should
                be about more than just matching resumes to job descriptions. It
                should be about understanding people, cultures, and aspirations.
              </p>
              <p>
                Our founder, Alexandra Chen, spent 15 years in corporate talent
                acquisition before recognizing the need for a more personalized,
                expert-driven approach to recruitment. She assembled a team of
                industry specialists who share her passion for connecting people
                with opportunities that truly fit.
              </p>
              <p>
                Today, we've grown from a small team of five to a full-service
                recruitment and consulting firm, serving clients across technology,
                finance, healthcare, and beyond. But our core philosophy remains
                unchanged: every placement should be a perfect match.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <div className="w-full h-full gradient-primary flex items-center justify-center">
                <div className="text-center text-primary-foreground p-8">
                  <span className="text-6xl md:text-7xl font-display font-bold block mb-2">
                    2014
                  </span>
                  <p className="text-xl opacity-90">Year Founded</p>
                  <p className="mt-4 opacity-70 max-w-sm mx-auto">
                    A decade of excellence in recruitment and talent consulting
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-xl bg-accent/20 -z-10" />
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section-container bg-secondary/30">
        <SectionHeader
          badge="Our Foundation"
          title={
            <>
              Mission, Vision & <span className="gradient-text">Values</span>
            </>
          }
          subtitle="The principles that guide everything we do at TalentBridge."
        />

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <AnimatedCard key={value.title} delay={index * 0.1}>
              <div className="text-center">
                <div className="w-14 h-14 mx-auto rounded-xl gradient-primary flex items-center justify-center mb-4">
                  <value.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="section-container">
        <SectionHeader
          badge="Our Team"
          title={
            <>
              Meet the <span className="gradient-text">Experts</span>
            </>
          }
          subtitle="Our leadership team brings decades of combined experience in recruitment and HR consulting."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <AnimatedCard key={member.name} delay={index * 0.1}>
              <div className="text-center">
                <div className="w-20 h-20 mx-auto rounded-full gradient-primary flex items-center justify-center mb-4">
                  <span className="text-2xl font-display font-bold text-primary-foreground">
                    {member.name.split(' ').map((n) => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-lg font-display font-semibold text-foreground">
                  {member.name}
                </h3>
                <p className="text-sm text-accent font-medium mb-2">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
                <div className="flex justify-center gap-2 mt-4">
                  <a
                    href="#"
                    className="p-2 rounded-lg bg-secondary hover:bg-accent/10 hover:text-accent transition-colors"
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <Linkedin size={16} />
                  </a>
                  <a
                    href="#"
                    className="p-2 rounded-lg bg-secondary hover:bg-accent/10 hover:text-accent transition-colors"
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

      {/* Timeline Section */}
      <section className="section-container bg-primary text-primary-foreground">
        <SectionHeader
          badge="Our Journey"
          title="A Decade of Growth"
          subtitle="Key milestones that shaped who we are today."
          className="[&_.section-title]:text-primary-foreground [&_.section-subtitle]:text-primary-foreground/80 [&_span]:bg-accent/20 [&_span]:text-accent"
        />

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary-foreground/20 hidden md:block" />

          <div className="space-y-8 md:space-y-0">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative md:flex ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-center`}
              >
                <div className="md:w-1/2 md:px-8">
                  <div
                    className={`glass-card rounded-xl p-6 ${
                      index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                    }`}
                    style={{
                      background: 'rgba(255,255,255,0.1)',
                      backdropFilter: 'blur(10px)',
                    }}
                  >
                    <span className="text-accent font-display font-bold text-xl">
                      {item.year}
                    </span>
                    <h3 className="text-lg font-display font-semibold mt-1">
                      {item.title}
                    </h3>
                    <p className="text-primary-foreground/70 text-sm mt-2">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Center Dot */}
                <div className="hidden md:block absolute left-1/2 w-4 h-4 rounded-full bg-accent transform -translate-x-1/2" />

                <div className="md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-2xl p-8 md:p-12 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
            Want to Join Our Team?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals who share our passion
            for connecting people with opportunities.
          </p>
          <Button asChild size="lg" className="gradient-primary text-primary-foreground">
            <Link to="/more">
              View Open Positions
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </section>
    </PageLayout>
  );
};

export default AboutPage;
