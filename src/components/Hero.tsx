import { Button } from "@/components/ui/button";
import { Github, Linkedin, Download, ArrowRight } from "lucide-react";
import ahmedPhoto from "@/assets/ahmed-photo.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen relative flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center space-y-8 animate-fade-in">
          <div className="flex justify-center mb-6">
            <img
              src={ahmedPhoto}
              alt="Ahmed Fadel Ghanem"
              className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-primary glow-primary animate-float"
            />
          </div>

          <div className="space-y-4">
            <h1 className="font-poppins font-bold text-4xl md:text-6xl lg:text-7xl text-foreground animate-slide-up">
              Ahmed Fadel Ghanem
            </h1>
            <h2 className="font-poppins font-semibold text-2xl md:text-3xl lg:text-4xl gradient-text animate-slide-up" style={{ animationDelay: "0.1s" }}>
              Full Stack Developer | .NET & Angular
            </h2>
            <p className="font-inter text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: "0.2s" }}>
              Crafting scalable, modern web applications with clean architecture and smooth user experience
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl" onClick={() => scrollToSection("projects")}>
              View My Work <ArrowRight className="ml-2" />
            </Button>
            <Button variant="gradient" size="xl" onClick={() => scrollToSection("contact")}>
              Contact Me
            </Button>
            <Button variant="outline" size="xl" asChild className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <a href="https://drive.google.com/file/d/1eYvhCgsLi4AllwmsJKwW_w2VNP_i3Cij/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2" /> Download CV
              </a>
            </Button>
          </div>

          <div className="flex gap-6 justify-center animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <a
              href="https://linkedin.com/in/ahmedfadelghanem"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-all duration-300 hover:scale-110 glow-primary"
            >
              <Linkedin size={32} />
            </a>
            <a
              href="https://github.com/AhmedGhanem7777"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-all duration-300 hover:scale-110 glow-primary"
            >
              <Github size={32} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
