import { Briefcase, GraduationCap, Award, Code } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const TimelineSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const timelineEvents = [
    {
      year: "2024",
      title: "Backend Developer",
      subtitle: "Freelance & Projects",
      description: "Specialized in Java Spring Boot backend development, building scalable REST APIs and database systems for various clients.",
      icon: Briefcase,
      type: "work",
    },
    {
      year: "2023",
      title: "Full Stack Development Focus",
      subtitle: "Skill Expansion",
      description: "Expanded expertise to include React.js, Node.js, and modern frontend technologies while maintaining strong backend fundamentals.",
      icon: Code,
      type: "learning",
    },
    {
      year: "2022",
      title: "BCA Degree",
      subtitle: "Bachelor of Computer Applications",
      description: "Graduated with comprehensive knowledge in computer science, programming, and software development principles.",
      icon: GraduationCap,
      type: "education",
    },
    {
      year: "2021",
      title: "Programming Foundation",
      subtitle: "Core Skills Development",
      description: "Started journey in software development with Java, learning OOP concepts, data structures, and algorithms.",
      icon: Award,
      type: "learning",
    },
  ];

  const getIconBgColor = (type: string) => {
    switch (type) {
      case "work":
        return "bg-portfolio-accent";
      case "education":
        return "bg-blue-500";
      case "learning":
        return "bg-purple-500";
      default:
        return "bg-portfolio-accent";
    }
  };

  return (
    <section
      ref={ref}
      id="timeline"
      className={`py-20 bg-portfolio-bg transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-portfolio-text-primary mb-4">
            My <span className="text-portfolio-accent">Journey</span>
          </h2>
          <div className="w-24 h-1 bg-portfolio-accent mx-auto mb-6"></div>
          <p className="text-portfolio-text-secondary text-lg max-w-2xl mx-auto">
            A timeline of my professional growth and achievements
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-0.5 bg-portfolio-accent/30"></div>

            {timelineEvents.map((event, index) => {
              const Icon = event.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative mb-12 lg:mb-16 ${
                    isEven ? "lg:text-right" : "lg:text-left"
                  }`}
                  style={{
                    animationDelay: `${index * 0.2}s`,
                  }}
                >
                  <div
                    className={`lg:grid lg:grid-cols-2 lg:gap-8 items-center ${
                      isEven ? "" : "lg:flex-row-reverse"
                    }`}
                  >
                    {/* Content */}
                    <div
                      className={`ml-20 lg:ml-0 ${
                        isEven ? "lg:col-start-1" : "lg:col-start-2"
                      }`}
                    >
                      <div className="bg-portfolio-card p-6 rounded-lg border border-portfolio-accent/20 hover:border-portfolio-accent/40 transition-all duration-300 shadow-portfolio-card hover:shadow-glow">
                        <span className="inline-block px-3 py-1 text-sm font-semibold text-portfolio-accent bg-portfolio-accent/10 rounded-full mb-3">
                          {event.year}
                        </span>
                        <h3 className="text-xl lg:text-2xl font-bold text-portfolio-text-primary mb-2">
                          {event.title}
                        </h3>
                        <p className="text-portfolio-accent font-medium mb-3">
                          {event.subtitle}
                        </p>
                        <p className="text-portfolio-text-secondary">
                          {event.description}
                        </p>
                      </div>
                    </div>

                    {/* Icon Circle */}
                    <div
                      className={`absolute left-4 lg:left-1/2 lg:-translate-x-1/2 w-16 h-16 rounded-full ${getIconBgColor(
                        event.type
                      )} flex items-center justify-center shadow-lg z-10 border-4 border-portfolio-bg`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
