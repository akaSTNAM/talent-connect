import PageLayout from '@/components/layout/PageLayout';
import { motion } from 'framer-motion';
import { 
  Users, 
  FileText, 
  BarChart3,
  Search,
  ChevronRight,
  Clock,
  CheckCircle,
  XCircle,
  MessageSquare,
  Eye,
  Edit,
  MoreHorizontal
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

/**
 * Admin Panel - Manage users and applications
 * This is a UI mockup without backend functionality
 */
const mockUsers = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@email.com',
    plan: 'Professional',
    applicationsUsed: 67,
    applicationsLimit: 100,
    status: 'active',
    joinedDate: '2024-01-01',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@email.com',
    plan: 'Starter',
    applicationsUsed: 45,
    applicationsLimit: 50,
    status: 'active',
    joinedDate: '2024-01-05',
  },
  {
    id: 3,
    name: 'Mike Johnson',
    email: 'mike@email.com',
    plan: 'Premium',
    applicationsUsed: 120,
    applicationsLimit: 200,
    status: 'active',
    joinedDate: '2023-12-15',
  },
  {
    id: 4,
    name: 'Sarah Williams',
    email: 'sarah@email.com',
    plan: 'Professional',
    applicationsUsed: 100,
    applicationsLimit: 100,
    status: 'trial',
    joinedDate: '2024-01-10',
  },
];

const mockAdminApplications = [
  {
    id: 1,
    user: 'John Doe',
    company: 'Google',
    position: 'Software Engineer',
    appliedDate: '2024-01-15',
    status: 'applied',
  },
  {
    id: 2,
    user: 'Jane Smith',
    company: 'Meta',
    position: 'Frontend Developer',
    appliedDate: '2024-01-14',
    status: 'interview',
  },
  {
    id: 3,
    user: 'Mike Johnson',
    company: 'Amazon',
    position: 'Full Stack Developer',
    appliedDate: '2024-01-13',
    status: 'pending',
  },
  {
    id: 4,
    user: 'Sarah Williams',
    company: 'Microsoft',
    position: 'Software Developer',
    appliedDate: '2024-01-12',
    status: 'rejected',
  },
];

const statusConfig = {
  pending: { label: 'Pending', class: 'status-pending' },
  applied: { label: 'Applied', class: 'status-applied' },
  interview: { label: 'Interview', class: 'status-interview' },
  rejected: { label: 'Rejected', class: 'status-rejected' },
};

const AdminPanel = () => {
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
              Admin Dashboard
            </h1>
            <p className="text-muted-foreground mt-1">
              Manage users and track applications.
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
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-display font-bold text-foreground">24</div>
                  <div className="text-sm text-muted-foreground">Total Users</div>
                </div>
              </div>
            </div>
            <div className="soft-card p-4 md:p-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="text-2xl font-display font-bold text-foreground">1,847</div>
                  <div className="text-sm text-muted-foreground">Applications</div>
                </div>
              </div>
            </div>
            <div className="soft-card p-4 md:p-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-warning/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-warning" />
                </div>
                <div>
                  <div className="text-2xl font-display font-bold text-foreground">156</div>
                  <div className="text-sm text-muted-foreground">Pending</div>
                </div>
              </div>
            </div>
            <div className="soft-card p-4 md:p-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-success" />
                </div>
                <div>
                  <div className="text-2xl font-display font-bold text-foreground">89</div>
                  <div className="text-sm text-muted-foreground">Interviews</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Main Content */}
          <Tabs defaultValue="users" className="space-y-6">
            <TabsList className="bg-secondary/50">
              <TabsTrigger value="users" className="data-[state=active]:bg-background">
                <Users className="w-4 h-4 mr-2" />
                Users
              </TabsTrigger>
              <TabsTrigger value="applications" className="data-[state=active]:bg-background">
                <FileText className="w-4 h-4 mr-2" />
                Applications
              </TabsTrigger>
              <TabsTrigger value="analytics" className="data-[state=active]:bg-background">
                <BarChart3 className="w-4 h-4 mr-2" />
                Analytics
              </TabsTrigger>
            </TabsList>

            {/* Users Tab */}
            <TabsContent value="users">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="soft-card overflow-hidden"
              >
                <div className="p-4 border-b border-border flex items-center justify-between gap-4">
                  <div className="relative flex-1 max-w-sm">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input placeholder="Search users..." className="pl-10" />
                  </div>
                  <Button>Add User</Button>
                </div>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>User</TableHead>
                      <TableHead>Plan</TableHead>
                      <TableHead>Applications</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Joined</TableHead>
                      <TableHead className="w-[50px]"></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockUsers.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell>
                          <div>
                            <p className="font-medium text-foreground">{user.name}</p>
                            <p className="text-sm text-muted-foreground">{user.email}</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <span className="badge-primary">{user.plan}</span>
                        </TableCell>
                        <TableCell>
                          <div className="text-sm">
                            {user.applicationsUsed} / {user.applicationsLimit}
                          </div>
                        </TableCell>
                        <TableCell>
                          <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              user.status === 'active'
                                ? 'bg-accent/10 text-accent'
                                : 'bg-warning/10 text-warning'
                            }`}
                          >
                            {user.status === 'active' ? 'Active' : 'Trial'}
                          </span>
                        </TableCell>
                        <TableCell className="text-muted-foreground text-sm">
                          {new Date(user.joinedDate).toLocaleDateString()}
                        </TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="sm">
                                <MoreHorizontal className="w-4 h-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>
                                <Eye className="w-4 h-4 mr-2" />
                                View Details
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <Edit className="w-4 h-4 mr-2" />
                                Edit User
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                <FileText className="w-4 h-4 mr-2" />
                                View Applications
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </motion.div>
            </TabsContent>

            {/* Applications Tab */}
            <TabsContent value="applications">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="soft-card overflow-hidden"
              >
                <div className="p-4 border-b border-border flex items-center justify-between gap-4">
                  <div className="relative flex-1 max-w-sm">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input placeholder="Search applications..." className="pl-10" />
                  </div>
                  <Button>Add Application</Button>
                </div>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>User</TableHead>
                      <TableHead>Company</TableHead>
                      <TableHead>Position</TableHead>
                      <TableHead>Applied Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="w-[50px]"></TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockAdminApplications.map((app) => {
                      const status = statusConfig[app.status as keyof typeof statusConfig];
                      return (
                        <TableRow key={app.id}>
                          <TableCell className="font-medium">{app.user}</TableCell>
                          <TableCell>{app.company}</TableCell>
                          <TableCell>{app.position}</TableCell>
                          <TableCell className="text-muted-foreground text-sm">
                            {new Date(app.appliedDate).toLocaleDateString()}
                          </TableCell>
                          <TableCell>
                            <span className={status.class}>{status.label}</span>
                          </TableCell>
                          <TableCell>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="sm">
                                  <MoreHorizontal className="w-4 h-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem>
                                  <Eye className="w-4 h-4 mr-2" />
                                  View Details
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <Edit className="w-4 h-4 mr-2" />
                                  Update Status
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </motion.div>
            </TabsContent>

            {/* Analytics Tab */}
            <TabsContent value="analytics">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="soft-card p-6"
              >
                <h3 className="font-semibold text-foreground mb-6">Analytics Overview</h3>
                <div className="h-64 flex items-center justify-center bg-secondary/30 rounded-xl">
                  <p className="text-muted-foreground">
                    Charts and analytics would go here.
                    <br />
                    Connect to a backend to enable real data.
                  </p>
                </div>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </PageLayout>
  );
};

export default AdminPanel;
