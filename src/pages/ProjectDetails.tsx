import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Github, ExternalLink, Calendar, Users, Code2, Database, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ProjectDetails = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();

  const projects = [
    {
      id: "train-reservation",
      title: "Train Reservation System",
      description: "A comprehensive backend system for train booking and reservation management built with Java and Spring Boot. Features include user authentication, train search functionality, seat booking, and complete reservation management.",
      image: "/api/placeholder/800/400",
      techStack: ["Java", "Spring Boot", "MySQL", "REST API", "JPA/Hibernate", "Maven"],
      features: [
        "User login and authentication with JWT tokens",
        "Advanced train search with filters (source, destination, date)",
        "Real-time seat booking system with availability checking",
        "Reservation management dashboard with CRUD operations",
        "Payment integration ready with secure transaction handling",
        "Admin panel for train management and route configuration",
        "Email notifications for booking confirmations",
        "Booking history and ticket generation",
        "Cancellation and refund management",
        "Multi-user concurrent booking handling"
      ],
      type: "Backend System",
      duration: "3 months",
      role: "Full Backend Developer",
      githubUrl: "https://github.com/arnab0814/OIBSIP_Java_Task1.git",
      highlights: [
        "Scalable microservice architecture",
        "Clean code with 90% test coverage",
        "Optimized database queries"
      ],
      technicalDetails: {
        architecture: "RESTful API with Spring Boot framework following MVC pattern",
        database: "MySQL with optimized indexing for fast search operations",
        security: "JWT-based authentication with role-based access control",
        performance: "Connection pooling and query optimization for handling concurrent users"
      }
    },
    {
      id: "milap-dating-app",
      title: "Milap - Dating App",
      description: "A modern Android dating application developed as an academic project. Features profile matching, real-time chat, and user authentication. Built with Java and XML for Android platform with Firebase backend.",
      image: "/api/placeholder/800/400",
      techStack: ["Java", "XML", "Firebase", "Android SDK", "Firebase Auth", "Cloud Firestore"],
      features: [
        "Profile creation and management with photo uploads",
        "Smart profile matching algorithm based on preferences",
        "Real-time chat messaging with Firebase integration",
        "Photo upload and gallery with image compression",
        "Push notifications for matches and messages",
        "User preference settings and filters",
        "Swipe-based UI for profile browsing",
        "Location-based matching within specified radius",
        "Report and block functionality for safety",
        "Age and interest-based filtering"
      ],
      type: "Mobile Application",
      duration: "2 months",
      role: "Android Developer",
      githubUrl: "https://github.com/arnab0814/Milap-repo.git",
      highlights: [
        "Intuitive swipe-based UI",
        "Real-time Firebase integration",
        "Secure user authentication"
      ],
      technicalDetails: {
        architecture: "MVVM pattern with Android Architecture Components",
        database: "Cloud Firestore for real-time data synchronization",
        security: "Firebase Authentication with Google Sign-In integration",
        performance: "Image caching and lazy loading for smooth scrolling"
      }
    }
  ];

  const project = projects.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen bg-portfolio-bg flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-portfolio-text-primary mb-4">Project Not Found</h1>
          <Button onClick={() => navigate("/")} className="bg-portfolio-accent hover:bg-portfolio-accent-hover text-white">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-portfolio-bg">
      {/* Header */}
      <div className="bg-portfolio-card border-b border-portfolio-accent/20">
        <div className="container mx-auto px-6 py-6">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="text-portfolio-accent hover:bg-portfolio-accent/20 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Button>
          
          <div className="flex items-center gap-4 mb-4">
            <Badge className="bg-portfolio-accent text-white">{project.type}</Badge>
            <div className="flex items-center gap-2 text-portfolio-text-secondary">
              <Calendar className="w-4 h-4" />
              <span>{project.duration}</span>
            </div>
            <div className="flex items-center gap-2 text-portfolio-text-secondary">
              <Users className="w-4 h-4" />
              <span>{project.role}</span>
            </div>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-portfolio-text-primary mb-4">
            {project.title}
          </h1>
          
          <p className="text-xl text-portfolio-text-secondary max-w-4xl">
            {project.description}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Project Image */}
            <Card className="bg-portfolio-card border-portfolio-accent/20">
              <CardContent className="p-0">
                <div className="aspect-video bg-portfolio-bg flex items-center justify-center">
                  <div className="text-center">
                    <Code2 className="w-24 h-24 text-portfolio-accent mx-auto mb-4" />
                    <p className="text-portfolio-text-secondary text-lg">Project Preview</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Technical Architecture */}
            <Card className="bg-portfolio-card border-portfolio-accent/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-portfolio-text-primary mb-6 flex items-center gap-2">
                  <Database className="w-6 h-6 text-portfolio-accent" />
                  Technical Architecture
                </h2>
                
                <div className="space-y-4">
                  {Object.entries(project.technicalDetails).map(([key, value]) => (
                    <div key={key} className="border-l-4 border-portfolio-accent pl-4">
                      <h3 className="font-semibold text-portfolio-text-primary capitalize mb-2">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </h3>
                      <p className="text-portfolio-text-secondary">{value}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Features */}
            <Card className="bg-portfolio-card border-portfolio-accent/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-portfolio-text-primary mb-6 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-portfolio-accent" />
                  Key Features
                </h2>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-portfolio-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-portfolio-text-secondary">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Project Highlights */}
            <Card className="bg-portfolio-card border-portfolio-accent/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-portfolio-text-primary mb-6">
                  Project Highlights
                </h2>
                
                <div className="grid md:grid-cols-3 gap-6">
                  {project.highlights.map((highlight, index) => (
                    <div key={index} className="text-center p-4 bg-portfolio-bg rounded-lg border border-portfolio-accent/20">
                      <Database className="w-8 h-8 text-portfolio-accent mx-auto mb-3" />
                      <p className="text-portfolio-text-primary font-medium">{highlight}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Tech Stack */}
            <Card className="bg-portfolio-card border-portfolio-accent/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-portfolio-text-primary mb-4">
                  Technology Stack
                </h3>
                
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-portfolio-accent/20 text-portfolio-accent hover:bg-portfolio-accent/30"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <Card className="bg-portfolio-card border-portfolio-accent/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-portfolio-text-primary mb-4">
                  Project Links
                </h3>
                
                <div className="space-y-3">
                  <Button 
                    className="w-full bg-portfolio-accent hover:bg-portfolio-accent-hover text-white"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View on GitHub
                  </Button>
                  
                  <Button 
                    variant="outline"
                    className="w-full border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent hover:text-white"
                    onClick={() => navigate("/")}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Back to Portfolio
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Project Info */}
            <Card className="bg-portfolio-card border-portfolio-accent/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-portfolio-text-primary mb-4">
                  Project Information
                </h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-portfolio-text-secondary">Duration:</span>
                    <span className="text-portfolio-text-primary font-medium">{project.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-portfolio-text-secondary">Role:</span>
                    <span className="text-portfolio-text-primary font-medium">{project.role}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-portfolio-text-secondary">Type:</span>
                    <span className="text-portfolio-text-primary font-medium">{project.type}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;