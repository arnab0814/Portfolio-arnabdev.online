import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Github, ExternalLink, Calendar, Users, Code2, Database, CheckCircle, Server, Smartphone, FileCode, Settings, Cloud, Shield } from "lucide-react";
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
      description: "The Train Reservation System is a full-stack application designed to simplify the process of booking, managing, and canceling train tickets. It provides a user-friendly interface where passengers can search trains, book tickets, view reservations, and cancel bookings efficiently.",
      image: "https://i.postimg.cc/59vdfyqL/Chat-GPT-Image-Sep-11-2025-10-28-23-PM.png",
      techStack: [
        { name: "Java", icon: Code2 },
        { name: "Spring Boot", icon: Server },
        { name: "MySQL", icon: Database },
        { name: "REST API", icon: Settings },
        { name: "JPA/Hibernate", icon: Database },
        { name: "Maven", icon: Settings }
      ],
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
      description: "Milap is a social networking and chat application that helps users connect, make friends, and chat in real-time. It offers an Instagram-style chat interface with emoji support, chat lists, and profile views. The app ensures smooth communication with features like real-time messaging, dynamic chat bubbles, and circular profile images.",
      image: "https://i.postimg.cc/gJdxDjph/banner.png",
      techStack: [
        { name: "Java", icon: Code2 },
        { name: "XML", icon: FileCode },
        { name: "Firebase", icon: Cloud },
        { name: "Android SDK", icon: Smartphone },
        { name: "Firebase Auth", icon: Shield },
        { name: "Cloud Firestore", icon: Database }
      ],
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
            onClick={() => navigate("/#projects")}
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

      {/* Project Image Hero */}
      <div className="bg-portfolio-card border-b border-portfolio-accent/20">
        <div className="container mx-auto px-6 py-8">
          <div className="max-w-6xl mx-auto">
            <div className="aspect-video bg-portfolio-bg overflow-hidden rounded-lg shadow-lg border border-portfolio-accent/20">
              <img 
                src={project.image} 
                alt={`${project.title} screenshot`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">

            {/* Project Overview */}
            <Card className="bg-portfolio-card border-portfolio-accent/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-portfolio-text-primary mb-6 flex items-center gap-2">
                  <Code2 className="w-6 h-6 text-portfolio-accent" />
                  Project Overview
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <p className="text-portfolio-text-secondary text-lg leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h3 className="font-semibold text-portfolio-text-primary">Key Features:</h3>
                      <ul className="space-y-2">
                        {project.features.slice(0, 5).map((feature, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-portfolio-accent rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-portfolio-text-secondary">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="font-semibold text-portfolio-text-primary">Additional Features:</h3>
                      <ul className="space-y-2">
                        {project.features.slice(5, 10).map((feature, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-portfolio-accent rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-portfolio-text-secondary">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
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
                  {project.techStack.map((tech, index) => {
                    const IconComponent = tech.icon;
                    return (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="bg-portfolio-accent/20 text-portfolio-accent hover:bg-portfolio-accent/30 flex items-center gap-2"
                      >
                        <IconComponent className="w-4 h-4" />
                        {tech.name}
                      </Badge>
                    );
                  })}
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
                    onClick={() => navigate("/#projects")}
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