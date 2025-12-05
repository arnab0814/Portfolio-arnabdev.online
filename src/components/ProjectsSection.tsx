import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, ExternalLink, Github, Calendar, Users, Database, Code2, Server, Smartphone, FileCode, Settings, Cloud, Shield } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ProjectsSection = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [filter, setFilter] = useState<string>("all");
  const navigate = useNavigate();
  const { ref, isVisible } = useScrollAnimation();

  const projects = [
    {
      id: "infosys-springboard-project",
      title: "Infosys Springboard Web Application",
      description: "A full-stack web application developed during my ongoing internship at Infosys Springboard. Built with Java Spring Boot backend and Thymeleaf frontend, featuring robust data management with MySQL database integration.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60",
      githubUrl: "#",
      techStack: [
        { name: "Java", icon: Code2 },
        { name: "Spring Boot", icon: Server },
        { name: "MySQL", icon: Database },
        { name: "Thymeleaf", icon: FileCode }
      ],
      features: [
        "RESTful API architecture",
        "Dynamic Thymeleaf templates",
        "MySQL database integration",
        "User authentication & authorization",
        "CRUD operations",
        "Responsive web design"
      ],
      type: "Full Stack Web App",
      category: "fullstack",
      duration: "Ongoing",
      role: "Full Stack Developer Intern",
      highlights: [
        "Spring Boot MVC architecture",
        "JPA/Hibernate ORM integration",
        "Clean code practices"
      ]
    },
    {
      id: "train-reservation",
      title: "Train Reservation System",
      description: "A comprehensive backend system for train booking and reservation management built with Java and Spring Boot. Features include user authentication, train search functionality, seat booking, and complete reservation management.",
      image: "https://i.postimg.cc/59vdfyqL/Chat-GPT-Image-Sep-11-2025-10-28-23-PM.png",
      githubUrl: "https://github.com/arnab0814/OIBSIP_Java_Task1.git",
      techStack: [
        { name: "Java", icon: Code2 },
        { name: "Spring Boot", icon: Server },
        { name: "MySQL", icon: Database },
        { name: "REST API", icon: Settings }
      ],
      features: [
        "User login and authentication",
        "Advanced train search with filters",
        "Real-time seat booking system",
        "Reservation management dashboard",
        "Payment integration ready",
        "Admin panel for train management"
      ],
      type: "Backend System",
      category: "backend",
      duration: "3 months",
      role: "Full Backend Developer",
      highlights: [
        "Scalable microservice architecture",
        "Clean code with 90% test coverage",
        "Optimized database queries"
      ]
    },
    {
      id: "milap-dating-app",
      title: "Milap - Dating App",
      description: "A modern Android dating application developed as an academic project. Features profile matching, real-time chat, and user authentication. Built with Java and XML for Android platform with Firebase backend.",
      image: "https://i.postimg.cc/gJdxDjph/banner.png",
      githubUrl: "https://github.com/arnab0814/Milap-repo.git",
      techStack: [
        { name: "Java", icon: Code2 },
        { name: "XML", icon: FileCode },
        { name: "Firebase", icon: Cloud },
        { name: "Android SDK", icon: Smartphone }
      ],
      features: [
        "Profile creation and management",
        "Smart profile matching algorithm",
        "Real-time chat messaging",
        "Photo upload and gallery",
        "Push notifications",
        "User preference settings"
      ],
      type: "Mobile Application",
      category: "mobile",
      duration: "2 months",
      role: "Android Developer",
      highlights: [
        "Intuitive swipe-based UI",
        "Real-time Firebase integration",
        "Secure user authentication"
      ]
    }
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.category === filter);

  const project = filteredProjects[currentProject] || projects[0];

  const filters = [
    { label: "All Projects", value: "all" },
    { label: "Backend", value: "backend" },
    { label: "Mobile", value: "mobile" },
    { label: "Full Stack", value: "fullstack" },
  ];

  return (
    <section ref={ref} id="projects" className={`py-20 bg-portfolio-bg transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-portfolio-text-primary mb-4">
            Featured <span className="text-portfolio-accent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-portfolio-accent mx-auto mb-6"></div>
          <p className="text-portfolio-text-secondary text-lg max-w-2xl mx-auto">
            Showcasing my technical expertise through real-world applications and innovative solutions
          </p>
        </div>

        {/* Project Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filterOption) => (
            <Badge
              key={filterOption.value}
              variant={filter === filterOption.value ? "default" : "outline"}
              className={`cursor-pointer px-4 py-2 text-sm transition-all duration-300 ${
                filter === filterOption.value
                  ? "bg-portfolio-accent text-white hover:bg-portfolio-accent-hover"
                  : "border-portfolio-accent/40 text-portfolio-text-secondary hover:border-portfolio-accent hover:text-portfolio-accent"
              }`}
              onClick={() => {
                setFilter(filterOption.value);
                setCurrentProject(0);
              }}
            >
              {filterOption.label}
            </Badge>
          ))}
        </div>

        {/* Project Navigation */}
        <div className="flex items-center justify-center mb-8">
          <Button
            variant="ghost"
            size="icon"
            onClick={prevProject}
            className="text-portfolio-accent hover:bg-portfolio-accent/20"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          
          <div className="flex space-x-2 mx-6">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentProject(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentProject === index
                    ? "bg-portfolio-accent"
                    : "bg-portfolio-accent/30 hover:bg-portfolio-accent/50"
                }`}
              />
            ))}
          </div>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={nextProject}
            className="text-portfolio-accent hover:bg-portfolio-accent/20"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>

        {/* Project Display */}
        <div className="max-w-6xl mx-auto">
          <Card className="bg-portfolio-card border-portfolio-accent/20 shadow-portfolio-card overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Project Image */}
              <div className="relative">
                <div className="aspect-video bg-portfolio-bg flex items-center justify-center overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={`${project.title} screenshot`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-portfolio-accent text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.type}
                  </span>
                </div>
              </div>

              {/* Project Details */}
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-portfolio-text-primary mb-3">
                  {project.title}
                </h3>
                
                <p className="text-portfolio-text-secondary mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Project Info */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-portfolio-accent" />
                    <span className="text-sm text-portfolio-text-secondary">
                      Duration: {project.duration}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-portfolio-accent" />
                    <span className="text-sm text-portfolio-text-secondary">
                      {project.role}
                    </span>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-portfolio-text-primary mb-3">
                    Technology Stack:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, index) => {
                      const IconComponent = tech.icon;
                      return (
                        <span
                          key={index}
                          className="px-3 py-1 bg-portfolio-accent/20 text-portfolio-accent rounded-full text-sm font-medium flex items-center gap-2"
                        >
                          <IconComponent className="w-4 h-4" />
                          {tech.name}
                        </span>
                      );
                    })}
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-portfolio-text-primary mb-3">
                    Key Features:
                  </h4>
                  <ul className="space-y-2">
                    {project.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-portfolio-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-portfolio-text-secondary">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button 
                    className="bg-portfolio-accent hover:bg-portfolio-accent-hover text-white"
                    size="sm"
                    onClick={() => window.open(project.githubUrl, '_blank', 'noopener,noreferrer')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </Button>
                  <Button 
                    variant="outline"
                    className="border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent hover:text-white"
                    size="sm"
                    onClick={() => navigate(`/project/${project.id}`)}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>

        {/* Project Highlights */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {project.highlights.map((highlight, index) => (
              <Card key={index} className="bg-portfolio-card border-portfolio-accent/20 hover:border-portfolio-accent/50 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Database className="w-8 h-8 text-portfolio-accent mx-auto mb-3" />
                  <p className="text-portfolio-text-primary font-medium">{highlight}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;