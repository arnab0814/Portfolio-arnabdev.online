import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref, isVisible } = useScrollAnimation();

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Project Manager",
      company: "Tech Solutions Inc.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
      rating: 5,
      text: "Arnab is an exceptional developer with deep expertise in backend development. His work on our train reservation system was outstanding - clean code, excellent architecture, and delivered on time. Highly recommended!",
    },
    {
      name: "Rajesh Kumar",
      role: "CTO",
      company: "StartupHub",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rajesh",
      rating: 5,
      text: "Working with Arnab was a pleasure. His problem-solving skills and dedication to writing maintainable code made our project a success. He's not just a coder, but a true software engineer.",
    },
    {
      name: "Anita Desai",
      role: "Lead Developer",
      company: "Digital Innovations",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Anita",
      rating: 5,
      text: "Arnab's expertise in Java Spring Boot and database optimization is impressive. He consistently delivers high-quality work and is always willing to go the extra mile to ensure project success.",
    },
    {
      name: "Vikram Patel",
      role: "Senior Engineer",
      company: "Cloud Systems Ltd.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Vikram",
      rating: 5,
      text: "I had the pleasure of collaborating with Arnab on a complex backend system. His technical skills, combined with excellent communication, made the entire process smooth and efficient.",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const testimonial = testimonials[currentIndex];

  return (
    <section
      ref={ref}
      id="testimonials"
      className={`py-20 bg-portfolio-card transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-portfolio-text-primary mb-4">
            Client <span className="text-portfolio-accent">Testimonials</span>
          </h2>
          <div className="w-24 h-1 bg-portfolio-accent mx-auto mb-6"></div>
          <p className="text-portfolio-text-secondary text-lg max-w-2xl mx-auto">
            What people say about working with me
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-portfolio-bg border-portfolio-accent/20 shadow-portfolio-card">
            <CardContent className="p-8 lg:p-12 relative">
              <Quote className="absolute top-8 left-8 w-12 h-12 text-portfolio-accent/20" />
              
              <div className="text-center mb-8">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-portfolio-accent"
                />
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-portfolio-accent text-portfolio-accent" />
                  ))}
                </div>
              </div>

              <p className="text-portfolio-text-primary text-lg lg:text-xl leading-relaxed mb-8 italic">
                "{testimonial.text}"
              </p>

              <div className="text-center">
                <h4 className="text-xl font-bold text-portfolio-text-primary">
                  {testimonial.name}
                </h4>
                <p className="text-portfolio-accent font-medium">{testimonial.role}</p>
                <p className="text-portfolio-text-secondary">{testimonial.company}</p>
              </div>

              <div className="flex items-center justify-between mt-8">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={prevTestimonial}
                  className="text-portfolio-accent hover:bg-portfolio-accent/20"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-6 h-6" />
                </Button>

                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentIndex
                          ? "bg-portfolio-accent w-8"
                          : "bg-portfolio-accent/30"
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>

                <Button
                  variant="ghost"
                  size="icon"
                  onClick={nextTestimonial}
                  className="text-portfolio-accent hover:bg-portfolio-accent/20"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-6 h-6" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
