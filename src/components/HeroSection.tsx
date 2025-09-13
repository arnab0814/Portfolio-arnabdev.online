import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import arnabProfile from "@/assets/arnab-new-profile.jpg";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-portfolio-gradient flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-portfolio-accent/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-portfolio-accent/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="animate-fade-in">
              <h1 className="text-5xl lg:text-7xl font-bold text-portfolio-text-primary mb-6">
                Hi, I'm{" "}
                <span className="text-portfolio-accent">
                  Arnab Das
                </span>
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold text-portfolio-accent mb-4">
                Backend & Full Stack Developer
              </h2>
              <p className="text-lg text-portfolio-text-secondary mb-8 max-w-2xl">
                BCA Graduate | Passionate Software Developer | Clean Code Enthusiast
              </p>
              <p className="text-base text-portfolio-text-secondary mb-10 max-w-2xl">
                Turning ideas into powerful, scalable applications with Java, Spring Boot, and modern web technologies.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-in-left">
              <Button 
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = 'https://drive.google.com/uc?export=download&id=1EI5MlcwlO-1kzG-gyay80GLzGFoBWatA';
                  link.download = 'Arnab_Das_Resume.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="bg-portfolio-accent hover:bg-portfolio-accent-hover text-white px-8 py-3 text-lg font-semibold shadow-glow hover:shadow-glow transition-all duration-300"
              >
                Resume
              </Button>
              <Button 
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent hover:text-white px-8 py-3 text-lg font-semibold transition-all duration-300"
              >
                Contact Me
              </Button>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="flex-shrink-0 animate-scale-in">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-portfolio-accent shadow-glow animate-glow-pulse">
                <img 
                  src={arnabProfile} 
                  alt="Arnab Das - Software Developer" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-portfolio-accent/20 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-portfolio-accent" />
      </div>
    </section>
  );
};

export default HeroSection;