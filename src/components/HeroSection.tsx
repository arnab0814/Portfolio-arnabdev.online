import { Button } from "@/components/ui/button";
import { ChevronDown, Code, Database, Terminal, Cpu, Coffee, Layers, Server, Globe, Zap, Braces } from "lucide-react";
import arnabProfile from "@/assets/arnab-new-profile.jpg";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-background via-card to-background flex items-center justify-center relative overflow-hidden">
      {/* Modern Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      {/* Floating Tech Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 animate-float">
          <Code className="w-8 h-8 text-primary/20" />
        </div>
        <div className="absolute top-40 right-32 animate-float" style={{ animationDelay: '1s' }}>
          <Database className="w-6 h-6 text-primary/15" />
        </div>
        <div className="absolute bottom-32 left-32 animate-float" style={{ animationDelay: '2s' }}>
          <Terminal className="w-7 h-7 text-primary/25" />
        </div>
        <div className="absolute bottom-20 right-20 animate-float" style={{ animationDelay: '0.5s' }}>
          <Cpu className="w-9 h-9 text-primary/10" />
        </div>
      </div>
      
      {/* Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/10 to-accent/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-accent/10 to-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Enhanced Text Content */}
          <div className="flex-1 text-center lg:text-left space-y-8">
            {/* Enhanced Status Badge */}
            <div className="animate-fade-in">
              <div className="group inline-flex items-center gap-2 px-5 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-primary/20 text-sm text-muted-foreground mb-6 hover:bg-card/70 hover:border-primary/40 hover:scale-105 transition-all duration-300 cursor-default">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse group-hover:bg-green-300"></div>
                <span className="font-medium">Available for opportunities</span>
                <div className="w-1 h-1 bg-primary/50 rounded-full animate-ping"></div>
              </div>
            </div>
            
            <div className="animate-fade-in">
              <h1 className="text-6xl lg:text-8xl font-bold text-foreground mb-6 leading-tight">
                <span className="block text-4xl lg:text-5xl font-medium text-muted-foreground mb-2">Hello, I'm</span>
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
                  Arnab Das
                </span>
              </h1>
              <div className="space-y-3">
                <h2 className="text-2xl lg:text-4xl font-bold text-foreground">
                  Full Stack Developer
                </h2>
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-lg text-primary">
                  <span className="flex items-center gap-2">
                    <Code className="w-5 h-5" />
                    Backend Specialist
                  </span>
                  <span className="text-muted-foreground">•</span>
                  <span className="flex items-center gap-2">
                    <Database className="w-5 h-5" />
                    Database Expert
                  </span>
                </div>
              </div>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
                Crafting robust, scalable solutions with <span className="text-primary font-semibold">Java Spring Boot</span>, 
                modern web technologies, and clean architecture principles.
              </p>
            </div>
            
            {/* Enhanced Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-in-left">
              <Button 
                size="lg"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = 'https://drive.google.com/uc?export=download&id=1NCILhAZX4ThH4kX1ioNzTNeDU01Z6zHo';
                  link.download = 'Arnab_Das_Resume.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="group relative bg-gradient-to-r from-primary to-accent text-primary-foreground px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10">Download Resume</span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md"></div>
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="group border-2 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg bg-card/30 backdrop-blur-sm"
              >
                Let's Connect
                <ChevronDown className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
            
            {/* Enhanced Tech Stack with Icons */}
            <div className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <p className="text-sm text-muted-foreground mb-4">Tech Stack</p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
                {[
                  { name: 'Java', icon: Coffee },
                  { name: 'Spring Boot', icon: Layers },
                  { name: 'React', icon: Braces },
                  { name: 'Node.js', icon: Server },
                  { name: 'MongoDB', icon: Database },
                  { name: 'MySQL', icon: Database }
                ].map((tech, index) => {
                  const IconComponent = tech.icon;
                  return (
                    <div 
                      key={tech.name}
                      className="group flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 border border-primary/20 text-sm text-foreground hover:bg-primary/10 hover:border-primary/40 hover:scale-105 transition-all duration-300 cursor-default backdrop-blur-sm"
                      style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                    >
                      <IconComponent className="w-4 h-4 text-primary group-hover:text-primary/80 transition-colors duration-300" />
                      <span className="font-medium">{tech.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          
          {/* Enhanced Profile Image */}
          <div className="flex-shrink-0 animate-scale-in relative">
            <div className="relative group">
              {/* Enhanced Glow effect */}
              <div className="absolute -inset-6 bg-gradient-to-r from-primary/40 via-accent/30 to-primary/40 rounded-full blur-2xl group-hover:blur-3xl group-hover:from-primary/60 group-hover:via-accent/50 group-hover:to-primary/60 transition-all duration-700 animate-pulse"></div>
              
              {/* Main image container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl group-hover:border-primary/60 group-hover:shadow-primary/20 transition-all duration-500 hover:rotate-2">
                <img 
                  src={arnabProfile} 
                  alt="Arnab Das - Full Stack Developer" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent group-hover:from-primary/30 transition-all duration-500"></div>
              </div>
              
              {/* Enhanced floating code elements */}
              <div className="absolute -top-6 -right-6 w-14 h-14 bg-card/90 backdrop-blur-sm rounded-xl border border-primary/30 flex items-center justify-center animate-float hover:bg-primary/10 hover:border-primary/50 hover:scale-110 transition-all duration-300 cursor-pointer group-hover:rotate-12">
                <Code className="w-7 h-7 text-primary" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-14 h-14 bg-card/90 backdrop-blur-sm rounded-xl border border-primary/30 flex items-center justify-center animate-float hover:bg-primary/10 hover:border-primary/50 hover:scale-110 transition-all duration-300 cursor-pointer group-hover:-rotate-12" style={{ animationDelay: '1s' }}>
                <Terminal className="w-7 h-7 text-primary" />
              </div>
              <div className="absolute top-1/4 -left-8 w-12 h-12 bg-card/80 backdrop-blur-sm rounded-lg border border-primary/20 flex items-center justify-center animate-float hover:bg-primary/10 hover:border-primary/40 hover:scale-110 transition-all duration-300 cursor-pointer" style={{ animationDelay: '0.5s' }}>
                <Globe className="w-6 h-6 text-primary/70" />
              </div>
              <div className="absolute top-1/3 -right-8 w-12 h-12 bg-card/80 backdrop-blur-sm rounded-lg border border-primary/20 flex items-center justify-center animate-float hover:bg-primary/10 hover:border-primary/40 hover:scale-110 transition-all duration-300 cursor-pointer" style={{ animationDelay: '1.5s' }}>
                <Zap className="w-6 h-6 text-primary/70" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="p-2 rounded-full bg-card/30 backdrop-blur-sm border border-primary/20">
          <ChevronDown className="w-6 h-6 text-primary" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;