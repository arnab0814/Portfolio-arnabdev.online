import { Card, CardContent } from "@/components/ui/card";
import { Server, Code, Smartphone, Database, Cloud, Zap } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Server,
      title: "Backend Development",
      description: "Building scalable server-side systems and APIs using Java, Spring Boot, and microservices architecture.",
      features: [
        "REST API Development",
        "Database Design & Optimization",
        "Authentication & Security",
        "Performance Optimization"
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Code,
      title: "Full Stack Development",
      description: "End-to-end application development combining modern frontend technologies with robust backend systems.",
      features: [
        "React Frontend Development",
        "Spring Boot Backend",
        "Database Integration",
        "Deployment & DevOps"
      ],
      color: "from-green-500 to-green-600"
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Android application development using Java with Firebase integration for real-time features.",
      features: [
        "Native Android Development",
        "Firebase Integration",
        "Real-time Features",
        "User Authentication"
      ],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Database,
      title: "Database Solutions",
      description: "Designing and implementing efficient database systems with proper normalization and optimization.",
      features: [
        "MySQL Database Design",
        "Query Optimization",
        "Data Modeling",
        "Performance Tuning"
      ],
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Cloud,
      title: "API Development",
      description: "Creating robust and scalable RESTful APIs with proper documentation and testing.",
      features: [
        "RESTful API Design",
        "API Documentation",
        "Testing & Validation",
        "Rate Limiting & Security"
      ],
      color: "from-teal-500 to-teal-600"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Optimizing application performance through code review, database tuning, and architecture improvements.",
      features: [
        "Code Review & Refactoring",
        "Database Optimization",
        "Caching Strategies",
        "System Architecture"
      ],
      color: "from-red-500 to-red-600"
    }
  ];

  return (
    <section id="services" className="py-20 bg-portfolio-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-portfolio-text-primary mb-4">
            My <span className="text-portfolio-accent">Services</span>
          </h2>
          <div className="w-24 h-1 bg-portfolio-accent mx-auto mb-6"></div>
          <p className="text-portfolio-text-secondary text-lg max-w-2xl mx-auto">
            Comprehensive software development services to bring your ideas to life with cutting-edge technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-portfolio-bg border-portfolio-accent/20 hover:border-portfolio-accent/50 transition-all duration-300 hover:shadow-glow group"
            >
              <CardContent className="p-8">
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-portfolio-accent/20 rounded-xl flex items-center justify-center group-hover:bg-portfolio-accent/30 transition-all duration-300">
                    <service.icon className="w-8 h-8 text-portfolio-accent" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-portfolio-text-primary mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-portfolio-text-secondary mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-portfolio-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-portfolio-text-secondary">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Hover Effect */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-full h-1 bg-portfolio-accent/20 rounded-full overflow-hidden">
                    <div className="w-full h-full bg-portfolio-accent rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-portfolio-text-primary mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-portfolio-text-secondary mb-8">
              Let's collaborate to build something amazing together. From concept to deployment, 
              I'll help bring your vision to life with clean, efficient, and scalable solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-portfolio-accent hover:bg-portfolio-accent-hover text-white font-semibold rounded-lg shadow-glow hover:shadow-glow transition-all duration-300"
              >
                Get Started
              </a>
              <a 
                href="mailto:arnabdas0814@gmail.com"
                className="inline-flex items-center justify-center px-8 py-3 border border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent hover:text-white font-semibold rounded-lg transition-all duration-300"
              >
                Send Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;