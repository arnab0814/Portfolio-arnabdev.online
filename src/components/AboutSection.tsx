import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Briefcase, Code2 } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "BCA Graduate 2025",
      details: "K.P.B. Hinduja College"
    },
    {
      icon: Briefcase,
      title: "Experience",
      description: "Internship Completed",
      details: "OASIS Infobyte"
    },
    {
      icon: Code2,
      title: "Passion",
      description: "Aspiring Full Stack Developer",
      details: "Problem Solver"
    }
  ];

  return (
    <section id="about" className="py-20 bg-portfolio-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-portfolio-text-primary mb-4">
            About <span className="text-portfolio-accent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-portfolio-accent mx-auto"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Text */}
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-semibold text-portfolio-text-primary mb-6">
              Passionate Software Developer
            </h3>
            <p className="text-portfolio-text-secondary text-lg leading-relaxed mb-6">
              I am a recent BCA graduate (2025) from K.P.B. Hinduja College, passionate about becoming a skilled software developer. I enjoy solving problems, writing clean and efficient code, and building real-world projects that make a difference.
            </p>
            <p className="text-portfolio-text-secondary text-lg leading-relaxed mb-6">
              During my journey, I have completed an internship at OASIS Infobyte and gained hands-on experience in both app and web development. My focus is on backend development with Java and Spring Boot, while also building full-stack applications.
            </p>
            <p className="text-portfolio-text-secondary text-lg leading-relaxed">
              I believe in continuous learning and staying updated with the latest technologies. My goal is to contribute to innovative projects and grow as a professional developer.
            </p>
          </div>
          
          {/* Highlights Cards */}
          <div className="grid gap-6 animate-slide-in-right">
            {highlights.map((highlight, index) => (
              <Card key={index} className="bg-portfolio-card border-portfolio-accent/20 hover:border-portfolio-accent/50 transition-all duration-300 hover:shadow-glow">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-portfolio-accent/20 rounded-lg flex items-center justify-center">
                      <highlight.icon className="w-6 h-6 text-portfolio-accent" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-portfolio-text-primary mb-1">
                      {highlight.title}
                    </h4>
                    <p className="text-portfolio-accent font-medium">
                      {highlight.description}
                    </p>
                    <p className="text-portfolio-text-secondary text-sm">
                      {highlight.details}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;