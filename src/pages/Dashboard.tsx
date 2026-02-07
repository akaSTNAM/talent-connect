import PageLayout from '@/components/layout/PageLayout';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  User, 
  FileText, 
  Settings, 
  BarChart3,
  Upload,
  ExternalLink,
  ChevronRight,
  Clock,
  CheckCircle,
  XCircle,
  MessageSquare
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

/**
 * Dashboard page - User's application management interface
 * This is a UI mockup without backend functionality
 */
const mockApplications = [
  {
    id: 1,
    company: 'Google',
    position: 'Software Engineer',
    location: 'Mountain View, CA',
    appliedDate: '2024-01-15',
    status: 'interview',
  },
  {
    id: 2,
    company: 'Meta',
    position: 'Frontend Developer',
    location: 'Menlo Park, CA',
    appliedDate: '2024-01-14',
    status: 'applied',
  },
  {
    id: 3,
    company: 'Amazon',
    position: 'Full Stack Developer',
    location: 'Seattle, WA',
    appliedDate: '2024-01-13',
    status: 'applied',
  },
  {
    id: 4,
    company: 'Microsoft',
    position: 'Software Developer',
    location: 'Redmond, WA',
    appliedDate: '2024-01-12',
    status: 'pending',
  },
  {
    id: 5,
    company: 'Apple',
    position: 'iOS Developer',
    location: 'Cupertino, CA',
    appliedDate: '2024-01-11',
    status: 'rejected',
  },
];

const statusConfig = {
  pending: { label: 'Pending', class: 'status-pending', icon: Clock },
  applied: { label: 'Applied', class: 'status-applied', icon: CheckCircle },
  interview: { label: 'Interview', class: 'status-interview', icon: MessageSquare },
  rejected: { label: 'Rejected', class: 'status-rejected', icon: XCircle },
};

const Dashboard = () => {
  const applicationsUsed = 67;
  const applicationsLimit = 100;

  return (
    <PageLayout>
      <section className="pt-28 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="text-3xl font-display font-bold text-foreground">
              Welcome back, John! 👋
            </h1>
            <p className="text-muted-foreground mt-1">
              Here's an overview of your job search progress.
            </p>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
          >
            <div className="soft-card p-4 md:p-6">
              <div className="text-3xl font-display font-bold text-foreground">67</div>
              <div className="text-sm text-muted-foreground">Applications Sent</div>
            </div>
            <div className="soft-card p-4 md:p-6">
              <div className="text-3xl font-display font-bold text-accent">3</div>
              <div className="text-sm text-muted-foreground">Interview Invites</div>
            </div>
            <div className="soft-card p-4 md:p-6">
              <div className="text-3xl font-display font-bold text-primary">48</div>
              <div className="text-sm text-muted-foreground">Pending Review</div>
            </div>
            <div className="soft-card p-4 md:p-6">
              <div className="text-3xl font-display font-bold text-foreground">33</div>
              <div className="text-sm text-muted-foreground">Applications Left</div>
            </div>
          </motion.div>

          {/* Application Progress */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="soft-card p-6 mb-8"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-foreground">Monthly Applications</h3>
              <span className="text-sm text-muted-foreground">
                {applicationsUsed} / {applicationsLimit} used
              </span>
            </div>
            <Progress value={(applicationsUsed / applicationsLimit) * 100} className="h-2" />
            <p className="text-xs text-muted-foreground mt-2">
              Resets on February 1, 2024
            </p>
          </motion.div>

          {/* Main Content */}
          <Tabs defaultValue="applications" className="space-y-6">
            <TabsList className="bg-secondary/50">
              <TabsTrigger value="applications" className="data-[state=active]:bg-background">
                <BarChart3 className="w-4 h-4 mr-2" />
                Applications
              </TabsTrigger>
              <TabsTrigger value="profile" className="data-[state=active]:bg-background">
                <User className="w-4 h-4 mr-2" />
                Profile
              </TabsTrigger>
              <TabsTrigger value="resume" className="data-[state=active]:bg-background">
                <FileText className="w-4 h-4 mr-2" />
                Resume
              </TabsTrigger>
              <TabsTrigger value="preferences" className="data-[state=active]:bg-background">
                <Settings className="w-4 h-4 mr-2" />
                Preferences
              </TabsTrigger>
            </TabsList>

            {/* Applications Tab */}
            <TabsContent value="applications">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="soft-card overflow-hidden"
              >
                <div className="p-4 border-b border-border flex items-center justify-between">
                  <h3 className="font-semibold text-foreground">Recent Applications</h3>
                  <Button variant="ghost" size="sm">
                    View All
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
                <div className="divide-y divide-border">
                  {mockApplications.map((app) => {
                    const status = statusConfig[app.status as keyof typeof statusConfig];
                    const StatusIcon = status.icon;
                    return (
                      <div
                        key={app.id}
                        className="p-4 hover:bg-secondary/30 transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="flex items-center gap-2">
                              <h4 className="font-medium text-foreground">
                                {app.position}
                              </h4>
                              <span className={status.class}>
                                <StatusIcon className="w-3 h-3 mr-1" />
                                {status.label}
                              </span>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">
                              {app.company} • {app.location}
                            </p>
                            <p className="text-xs text-muted-foreground mt-1">
                              Applied on {new Date(app.appliedDate).toLocaleDateString()}
                            </p>
                          </div>
                          <Button variant="ghost" size="sm">
                            <ExternalLink className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </TabsContent>

            {/* Profile Tab */}
            <TabsContent value="profile">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="soft-card p-6"
              >
                <h3 className="font-semibold text-foreground mb-6">Your Profile</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium text-foreground">Full Name</label>
                    <p className="text-muted-foreground mt-1">John Doe</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground">Email</label>
                    <p className="text-muted-foreground mt-1">john.doe@email.com</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground">Phone</label>
                    <p className="text-muted-foreground mt-1">+1 (555) 123-4567</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground">Location</label>
                    <p className="text-muted-foreground mt-1">San Francisco, CA</p>
                  </div>
                  <div className="md:col-span-2">
                    <label className="text-sm font-medium text-foreground">LinkedIn</label>
                    <p className="text-primary mt-1">linkedin.com/in/johndoe</p>
                  </div>
                </div>
                <Button className="mt-6">Edit Profile</Button>
              </motion.div>
            </TabsContent>

            {/* Resume Tab */}
            <TabsContent value="resume">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="soft-card p-6"
              >
                <h3 className="font-semibold text-foreground mb-6">Your Resume</h3>
                <div className="border-2 border-dashed border-border rounded-xl p-8 text-center">
                  <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-foreground font-medium">JohnDoe_Resume_v3.pdf</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Uploaded on January 10, 2024
                  </p>
                  <div className="flex items-center justify-center gap-3 mt-4">
                    <Button variant="outline" size="sm">
                      View Resume
                    </Button>
                    <Button size="sm">
                      Upload New
                    </Button>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-accent/10 rounded-lg">
                  <p className="text-sm text-accent font-medium">
                    ✓ Resume reviewed by our team
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Your resume has been optimized for ATS systems.
                  </p>
                </div>
              </motion.div>
            </TabsContent>

            {/* Preferences Tab */}
            <TabsContent value="preferences">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="soft-card p-6"
              >
                <h3 className="font-semibold text-foreground mb-6">Job Preferences</h3>
                <div className="space-y-6">
                  <div>
                    <label className="text-sm font-medium text-foreground">Target Roles</label>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {['Software Engineer', 'Frontend Developer', 'Full Stack Developer'].map(
                        (role) => (
                          <span
                            key={role}
                            className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                          >
                            {role}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground">Preferred Locations</label>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {['San Francisco, CA', 'New York, NY', 'Remote'].map((loc) => (
                        <span
                          key={loc}
                          className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full"
                        >
                          {loc}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground">Visa Sponsorship</label>
                    <p className="text-muted-foreground mt-1">Required - H1B Visa</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground">Salary Expectation</label>
                    <p className="text-muted-foreground mt-1">$100,000 - $150,000</p>
                  </div>
                </div>
                <Button className="mt-6">Update Preferences</Button>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </PageLayout>
  );
};

export default Dashboard;
