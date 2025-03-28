import type React from "react";
import { useNavigate } from "react-router-dom";
import {
  ChevronRight,
  Users,
  LogIn,
  Edit,
  Github,
  Code,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ModeToggle } from "./mode-toggle";

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  const handleLogIn = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 ">
        {/* Header */}
        <header className="sticky top-0 z-10 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6 max-w-7xl">
            <div className="flex items-center gap-4">
              <Users className="h-6 w-6 text-primary" />
              <div className="hidden sm:block">
                <h1 className="text-xl font-semibold">User Management</h1>
                <p className="text-xs text-muted-foreground">
                  Manage your users
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <ModeToggle />
              <Button
                variant="outline"
                size="sm"
                onClick={handleLogIn}
                className="gap-2"
              >
                <LogIn className="h-4 w-4" />
                <span className="hidden sm:inline">LogIn</span>
              </Button>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="text-center mb-16 mt-16">
          <h1 className="text-3xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
            User Management System
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            A comprehensive React application for managing users with
            authentication, listing, editing, and deletion capabilities using
            the Reqres API.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              onClick={() => navigate("/login")}
              className="gap-2"
            >
              <LogIn className="h-5 w-5" />
              Login Now
            </Button>
            <Button size="lg" variant="outline" asChild className="gap-2">
              <a
                href="https://github.com/sagarmanchakatla/emploWise"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
                View on GitHub
              </a>
            </Button>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Authentication */}
            <Card className="transition-all hover:shadow-md">
              <CardHeader className="text-center">
                <div className="mx-auto bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <LogIn className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>Authentication</CardTitle>
                <CardDescription>Secure user login system</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Token-based authentication</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Persistent login sessions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Protected routes for authenticated users</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* User Management */}
            <Card className="transition-all hover:shadow-md">
              <CardHeader className="text-center">
                <div className="mx-auto bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>User Management</CardTitle>
                <CardDescription>Comprehensive user listing</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Paginated user directory</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Responsive card layout with user details</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>User avatars and profile information</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* CRUD Operations */}
            <Card className="transition-all hover:shadow-md">
              <CardHeader className="text-center">
                <div className="mx-auto bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  <Edit className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>CRUD Operations</CardTitle>
                <CardDescription>Complete user data management</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Edit user information</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Delete users with confirmation</span>
                  </li>
                  {/* <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Toast notifications for all operations</span>
                  </li> */}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Technical Details */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Technical Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5" />
                  Technologies Used
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">React</span>
                      <p className="text-sm text-muted-foreground">
                        Frontend library for building user interfaces
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">Redux</span>
                      <p className="text-sm text-muted-foreground">
                        State management for predictable state container
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">React Router</span>
                      <p className="text-sm text-muted-foreground">
                        Navigation and routing between different components
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">
                        Tailwind CSS & shadcn/ui
                      </span>
                      <p className="text-sm text-muted-foreground">
                        Styling and UI components for a modern interface
                      </p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ExternalLink className="h-5 w-5" />
                  API Integration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">Reqres API</span>
                      <p className="text-sm text-muted-foreground">
                        REST API for user management operations
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">Authentication</span>
                      <p className="text-sm text-muted-foreground">
                        POST /api/login with email and password
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">User Operations</span>
                      <p className="text-sm text-muted-foreground">
                        GET /api/users, PUT /api/users/{"{id}"}, DELETE
                        /api/users/{"{id}"}
                      </p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* How to Use */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">How to Use</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-primary">1</span>
                </div>
                <CardTitle>Login</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  Use the provided credentials to log in:
                </p>
                <div className="mt-4 p-3 bg-muted rounded-md">
                  <p>
                    <strong>Email:</strong> eve.holt@reqres.in
                  </p>
                  <p>
                    <strong>Password:</strong> cityslicka
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-primary">2</span>
                </div>
                <CardTitle>Browse Users</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  View the paginated list of users with their details and
                  avatars. Navigate through pages using the pagination controls
                  at the bottom.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto bg-primary/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-primary">3</span>
                </div>
                <CardTitle>Manage Users</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground">
                  Edit user information or delete users as needed. All actions
                  will display toast notifications to confirm success or
                  failure.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center mb-16">
          <Card className="bg-primary text-primary-foreground p-8">
            <CardContent className="pt-6">
              <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
              <p className="text-xl mb-6 opacity-90">
                Experience the full functionality of our User Management System
              </p>
              <Button
                size="lg"
                variant="secondary"
                onClick={() => navigate("/login")}
                className="gap-2"
              >
                <LogIn className="h-5 w-5" />
                Login Now
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* Footer */}
        <footer className="text-center text-muted-foreground py-8 border-t">
          <p>
            User Management System - Built with React, Redux, and Tailwind CSS
          </p>
          <p className="mt-2">
            © {new Date().getFullYear()} - EmployWise Assignment - By Sagar
            Manchakatla
          </p>
          <p className="">Email - sagarmanchakatla01@gmail.com</p>
          <p className="">GitHub - https://github.com/sagarmanchakatla/</p>
        </footer>
      </div>
    </div>
  );
};

export default LandingPage;
