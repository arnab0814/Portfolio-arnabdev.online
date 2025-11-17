import { useState, useEffect } from "react";
import emailjs from '@emailjs/browser';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github, Send, MapPin, Phone, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { ref, isVisible } = useScrollAnimation();

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init("pp_0BZNKtn6A58RA8");
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = { name: "", email: "", message: "" };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_rcezmkg",
        "template_r4y55qb",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: "Arnab Das",
        }
      );

      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      // Reset form
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      toast({
        title: "Error sending message",
        description: "Please try again later or contact me directly via email.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "arnabdas0814@gmail.com",
      href: "mailto:arnabdas0814@gmail.com"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/arnab-das-581a87264",
      href: "https://linkedin.com/in/arnab-das-581a87264"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/arnab0814",
      href: "https://github.com/arnab0814"
    }
  ];

  return (
    <section ref={ref} id="contact" className={`py-20 bg-portfolio-bg transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-portfolio-text-primary mb-4">
            Get In <span className="text-portfolio-accent">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-portfolio-accent mx-auto mb-6"></div>
          <p className="text-portfolio-text-secondary text-lg max-w-2xl mx-auto">
            Ready to start your next project? Let's discuss how we can work together to create something amazing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-portfolio-card border-portfolio-accent/20 shadow-portfolio-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-portfolio-text-primary mb-6">
                Send me a message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-portfolio-text-primary mb-2">
                    Your Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className={`bg-portfolio-bg border-portfolio-accent/30 text-portfolio-text-primary placeholder:text-portfolio-text-secondary focus:border-portfolio-accent ${
                      errors.name ? "border-destructive" : ""
                    }`}
                  />
                  {errors.name && (
                    <p className="text-destructive text-sm mt-1">{errors.name}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-portfolio-text-primary mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email address"
                    className={`bg-portfolio-bg border-portfolio-accent/30 text-portfolio-text-primary placeholder:text-portfolio-text-secondary focus:border-portfolio-accent ${
                      errors.email ? "border-destructive" : ""
                    }`}
                  />
                  {errors.email && (
                    <p className="text-destructive text-sm mt-1">{errors.email}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-portfolio-text-primary mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or how I can help you..."
                    rows={5}
                    className={`bg-portfolio-bg border-portfolio-accent/30 text-portfolio-text-primary placeholder:text-portfolio-text-secondary focus:border-portfolio-accent resize-none ${
                      errors.message ? "border-destructive" : ""
                    }`}
                  />
                  {errors.message && (
                    <p className="text-destructive text-sm mt-1">{errors.message}</p>
                  )}
                </div>
                
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-portfolio-accent hover:bg-portfolio-accent-hover text-white font-semibold py-3 shadow-glow hover:shadow-glow transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4 mr-2" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-portfolio-card border-portfolio-accent/20 shadow-portfolio-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-portfolio-text-primary mb-6">
                  Contact Information
                </h3>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 bg-portfolio-bg rounded-lg hover:bg-portfolio-accent/10 transition-all duration-300 group cursor-pointer"
                    >
                      <div className="w-12 h-12 bg-portfolio-accent/20 rounded-lg flex items-center justify-center group-hover:bg-portfolio-accent/30 transition-all duration-300">
                        <info.icon className="w-6 h-6 text-portfolio-accent" />
                      </div>
                      <div>
                        <div className="text-portfolio-text-primary font-medium">
                          {info.label}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Additional Info */}
            <Card className="bg-portfolio-card border-portfolio-accent/20 shadow-portfolio-card">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-portfolio-text-primary mb-4">
                  Let's Work Together
                </h3>
                <p className="text-portfolio-text-secondary mb-6">
                  I'm always excited to take on new challenges and collaborate on innovative projects. 
                  Whether you need a full-stack application, backend system, or mobile app, I'm here to help.
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-portfolio-bg rounded-lg">
                    <div className="text-2xl font-bold text-portfolio-accent">24h</div>
                    <div className="text-sm text-portfolio-text-secondary">Response Time</div>
                  </div>
                  <div className="text-center p-4 bg-portfolio-bg rounded-lg">
                    <div className="text-2xl font-bold text-portfolio-accent">100%</div>
                    <div className="text-sm text-portfolio-text-secondary">Commitment</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;