import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin, Building2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ExperienceSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const experiences = [
    {
      company: "Infosys Springboard",
      role: "Java Full Stack Developer Intern",
      duration: "Present",
      location: "Remote",
      type: "Ongoing",
      description:
        "Currently working on a web application project utilizing Java Spring Boot for backend development. Building robust RESTful APIs, implementing business logic, and integrating with MySQL database for data persistence.",
      responsibilities: [
        "Developing backend services using Java and Spring Boot framework",
        "Designing and implementing RESTful APIs for web application",
        "Creating dynamic frontend views using Thymeleaf template engine",
        "Managing database operations with MySQL and JPA/Hibernate",
        "Collaborating with team members in agile development environment",
        "Writing clean, maintainable code following industry best practices",
      ],
      techStack: ["Java", "Spring Boot", "MySQL", "Thymeleaf", "REST API", "JPA/Hibernate"],
      isCurrent: true,
    },
    {
      company: "OASIS Infobyte",
      role: "Java Development Intern",
      duration: "Aug 2024 - Sep 2024",
      location: "Remote",
      type: "Completed",
      description:
        "Completed a comprehensive internship focused on Java backend development. Built multiple projects including a Train Reservation System, gaining hands-on experience with Spring Boot, MySQL, and RESTful API development.",
      responsibilities: [
        "Developed Train Reservation System with user authentication and booking features",
        "Implemented secure REST APIs for train search and reservation management",
        "Designed and optimized MySQL database schemas for efficient data storage",
        "Integrated Spring Security for user authentication and authorization",
        "Conducted testing and debugging to ensure application reliability",
        "Documented code and API endpoints for future maintainability",
      ],
      techStack: ["Java", "Spring Boot", "MySQL", "REST API", "Spring Security"],
      isCurrent: false,
    },
  ];

  return (
    <section
      ref={ref}
      id="experience"
      className={`py-20 bg-portfolio-card transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-portfolio-text-primary mb-4">
            Work <span className="text-portfolio-accent">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-portfolio-accent mx-auto mb-6"></div>
          <p className="text-portfolio-text-secondary text-lg max-w-2xl mx-auto">
            My professional journey and internship experiences in software development
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className={`bg-portfolio-bg border-portfolio-accent/20 shadow-portfolio-card overflow-hidden transition-all duration-300 hover:border-portfolio-accent/50 ${
                exp.isCurrent ? "ring-2 ring-portfolio-accent/30" : ""
              }`}
            >
              <CardContent className="p-0">
                {/* Header */}
                <div className="bg-portfolio-accent/10 p-6 border-b border-portfolio-accent/20">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-portfolio-accent/20 rounded-lg">
                        <Building2 className="w-8 h-8 text-portfolio-accent" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-xl font-bold text-portfolio-text-primary">
                            {exp.role}
                          </h3>
                          {exp.isCurrent && (
                            <Badge className="bg-green-500/20 text-green-400 border-green-500/30 text-xs">
                              Current
                            </Badge>
                          )}
                        </div>
                        <p className="text-portfolio-accent font-semibold text-lg">
                          {exp.company}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 text-sm text-portfolio-text-secondary">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-portfolio-accent" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-portfolio-accent" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-portfolio-text-secondary mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Responsibilities */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-portfolio-text-primary mb-3 flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-portfolio-accent" />
                      Key Responsibilities
                    </h4>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-portfolio-accent rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-portfolio-text-secondary">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-sm font-semibold text-portfolio-text-primary mb-3">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.techStack.map((tech, idx) => (
                        <Badge
                          key={idx}
                          variant="outline"
                          className="border-portfolio-accent/40 text-portfolio-accent bg-portfolio-accent/10"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
