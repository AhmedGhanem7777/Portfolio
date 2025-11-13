import { useState, useEffect } from "react";
import ahmedPhoto from "@/assets/ahmed-photo.jpg";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection("hero")}>
            <img src={ahmedPhoto} alt="Ahmed Fadel Ghanem" className="w-10 h-10 rounded-full object-cover border-2 border-primary" />
            <span className="font-poppins font-bold text-lg gradient-text">Ahmed Ghanem</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("about")} className="text-foreground hover:text-primary transition-colors font-inter">
              About
            </button>
            <button onClick={() => scrollToSection("projects")} className="text-foreground hover:text-primary transition-colors font-inter">
              Projects
            </button>
            <button onClick={() => scrollToSection("experience")} className="text-foreground hover:text-primary transition-colors font-inter">
              Experience
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-foreground hover:text-primary transition-colors font-inter">
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
