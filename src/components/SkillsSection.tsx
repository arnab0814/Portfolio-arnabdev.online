import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Code, Database, Globe, Settings } from "lucide-react";
const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const skillCategories = [{
    title: "Frontend",
    icon: Globe,
    skills: [{
      name: "React.js (JavaScript, ES6+)",
      level: 90,
      icon: "⚛️"
    }, {
      name: "XML (Android UI Design)",
      level: 85,
      icon: "📄"
    }, {
      name: "UI/UX & Responsive Web Design",
      level: 88,
      icon: "🎨"
    }, {
      name: "TailwindCSS, CSS3, HTML5",
      level: 92,
      icon: "💅"
    }]
  }, {
    title: "Backend",
    icon: Settings,
    skills: [{
      name: "Java (Spring Boot)",
      level: 95,
      icon: "☕"
    }, {
      name: "Node.js & Express.js",
      level: 85,
      icon: "🟢"
    }, {
      name: "REST API Development",
      level: 90,
      icon: "🔗"
    }, {
      name: "Authentication & Security (JWT)",
      level: 87,
      icon: "🔐"
    }, {
      name: "Clean & Efficient Code (OOP, MVC)",
      level: 93,
      icon: "✨"
    }]
  }, {
    title: "Database",
    icon: Database,
    skills: [{
      name: "MySQL",
      level: 88,
      icon: "🗄️"
    }, {
      name: "MongoDB",
      level: 82,
      icon: "🍃"
    }, {
      name: "Firebase (Realtime DB & Auth)",
      level: 85,
      icon: "🔥"
    }, {
      name: "Database Design & Optimization",
      level: 86,
      icon: "📊"
    }]
  }];
  const nextCategory = () => {
    setActiveCategory(prev => (prev + 1) % skillCategories.length);
  };
  const prevCategory = () => {
    setActiveCategory(prev => (prev - 1 + skillCategories.length) % skillCategories.length);
  };
  return <section id="skills" className="py-20 bg-portfolio-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-portfolio-text-primary mb-4">
            My <span className="text-portfolio-accent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-portfolio-accent mx-auto mb-6"></div>
          <p className="text-portfolio-text-secondary text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and professional capabilities
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex items-center justify-center mb-12">
          <Button variant="ghost" size="icon" onClick={prevCategory} className="text-portfolio-accent hover:bg-portfolio-accent/20">
            <ChevronLeft className="w-6 h-6" />
          </Button>
          
          <div className="flex space-x-4 mx-8">
            {skillCategories.map((category, index) => <button key={index} onClick={() => setActiveCategory(index)} className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${activeCategory === index ? "bg-portfolio-accent text-white shadow-glow" : "text-portfolio-text-secondary hover:text-portfolio-accent hover:bg-portfolio-accent/10"}`}>
                <category.icon className="w-5 h-5" />
                <span className="hidden sm:inline">{category.title}</span>
              </button>)}
          </div>
          
          <Button variant="ghost" size="icon" onClick={nextCategory} className="text-portfolio-accent hover:bg-portfolio-accent/20">
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>

        {/* Skills Display */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-portfolio-bg border-portfolio-accent/20 shadow-portfolio-card">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold text-portfolio-text-primary mb-2">
                  {skillCategories[activeCategory].title} Development
                </h3>
                <p className="text-portfolio-text-secondary">
                  Specialized skills and expertise in {skillCategories[activeCategory].title.toLowerCase()} technologies
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {skillCategories[activeCategory].skills.map((skill, index) => <div key={index} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{skill.icon}</span>
                        <span className="font-medium text-portfolio-text-primary">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-portfolio-accent font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-portfolio-card rounded-full h-2 overflow-hidden">
                      <div className="h-full bg-accent-gradient rounded-full transition-all duration-1000 ease-out" style={{
                    width: `${skill.level}%`
                  }}></div>
                    </div>
                  </div>)}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Skills Summary */}
        <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
          <Card className="bg-portfolio-bg border-portfolio-accent/20 hover:border-portfolio-accent/50 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-portfolio-accent mb-2">4+</div>
              <div className="text-portfolio-text-primary font-medium">Programming Languages</div>
            </CardContent>
          </Card>
          <Card className="bg-portfolio-bg border-portfolio-accent/20 hover:border-portfolio-accent/50 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-portfolio-accent mb-2">10+</div>
              <div className="text-portfolio-text-primary font-medium">Technologies & Tools</div>
            </CardContent>
          </Card>
          <Card className="bg-portfolio-bg border-portfolio-accent/20 hover:border-portfolio-accent/50 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-portfolio-accent mb-2">3+</div>
              <div className="text-portfolio-text-primary font-medium">Projects Completed</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
export default SkillsSection;