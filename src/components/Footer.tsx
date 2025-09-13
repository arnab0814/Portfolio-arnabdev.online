import { Mail, Linkedin, Github, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Mail,
      href: "mailto:arnabdas0814@gmail.com",
      label: "Email"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/arnab-das-581a87264",
      label: "LinkedIn"
    },
    {
      icon: Github,
      href: "https://github.com/arnab0814",
      label: "GitHub"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-portfolio-card border-t border-portfolio-accent/20">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center">
          {/* Logo/Name */}
          <button 
            onClick={scrollToTop}
            className="text-2xl font-bold text-portfolio-accent hover:text-portfolio-accent-hover transition-colors duration-300 mb-6"
          >
            Arnab Das
          </button>
          
          {/* Tagline */}
          <p className="text-portfolio-text-secondary mb-8 max-w-md mx-auto">
            Backend & Full Stack Developer passionate about creating scalable, efficient solutions
          </p>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-portfolio-bg border border-portfolio-accent/30 rounded-lg flex items-center justify-center text-portfolio-accent hover:bg-portfolio-accent hover:text-white hover:shadow-glow transition-all duration-300"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
          
          {/* Copyright */}
          <div className="pt-8 border-t border-portfolio-accent/20">
            <p className="text-portfolio-text-secondary text-sm flex items-center justify-center gap-2">
              © {currentYear} Arnab Das. Made with 
              <Heart className="w-4 h-4 text-portfolio-accent fill-current" />
              and lots of coffee
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;