import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import hotelProject from "@/assets/hotel-project.jpg";
import freshcartProject from "@/assets/freshcart-project.jpg";
import crudProject from "@/assets/crud-project.jpg";
import weatherProject from "@/assets/weather-project.jpg";
import authProject from "@/assets/auth-project.jpg";
import angoraProject from "@/assets/Angora.png";
import techtrixProject from "@/assets/TechTrix.png";
import devfolioProject from "@/assets/DevFolio.png";

const featuredProjects = [
  {
    title: "Hotel Management System",
    description: "A complete modular system with booking, reviews, analytics, and responsive UI built with Angular 17.",
    tech: ["Angular 17", "SCSS", "ngx-stripe", "ng2-charts", "ngx-toastr"],
    image: hotelProject,
    demo: "https://hotel-system-pamd.vercel.app/",
    repo: "https://github.com/AhmedGhanem7777/HotelSystem",
  },
  {
    title: "FreshCart – E-Commerce Platform",
    description: "A dynamic, secure, and mobile-first e-commerce application with JWT authentication and lazy loading.",
    tech: ["Angular 17", "SCSS", "JWT Auth", "Lazy Loading", "ngx-toastr"],
    image: freshcartProject,
    demo: "https://fresh-cart-r6dn.vercel.app/",
    repo: "https://github.com/AhmedGhanem7777/FreshCart",
  },
];

const additionalProjects = [
  {
    title: "CRUD Responsive Website",
    description: "A responsive website created with HTML, CSS, Bootstrap 5, and JavaScript.",
    tech: ["HTML", "CSS", "Bootstrap 5", "JavaScript"],
    image: crudProject,
    demo: "https://ahmedghanem7777.github.io/CRUD/",
    repo: "https://github.com/AhmedGhanem7777/CRUD",
  },
  {
    title: "TECHTRIX",
    description: "A responsive website created with HTML, CSS, Bootstrap 5, and JavaScript.",
    tech: ["HTML", "CSS", "Bootstrap 5", "JavaScript"],
    image: techtrixProject,
    demo: "https://ahmedghanem7777.github.io/TECHTRIX/",
    repo: "https://github.com/AhmedGhanem7777/TECHTRIX",
  },
  {
    title: "DevFolio – Personal Portfolio & Blog Website",
    description: "A responsive website created with HTML, CSS, Bootstrap 5, and JavaScript.",
    tech: ["HTML", "CSS", "Bootstrap 5", "JavaScript"],
    image: devfolioProject,
    demo: "https://ahmedghanem7777.github.io/DevFolio/",
    repo: "https://github.com/AhmedGhanem7777/DevFolio",
  },
  {
    title: "Angora – Responsive Multipurpose Website",
    description: "A responsive website created with HTML, CSS, Bootstrap 5, and JavaScript.",
    tech: ["HTML", "CSS", "Bootstrap 5", "JavaScript"],
    image: angoraProject,
    demo: "https://ahmedghanem7777.github.io/Angora/",
    repo: "https://github.com/AhmedGhanem7777/Angora",
  },
  {
    title: "Weather Website",
    description: "A responsive weather website with current location detection, city search, and detailed weather info.",
    tech: ["HTML", "CSS", "JavaScript", "Weather API"],
    image: weatherProject,
    demo: "https://ahmedghanem7777.github.io/Weather/",
    repo: "https://github.com/AhmedGhanem7777/Weather",
  },
  {
    title: "Angular SignIn-SignUp App",
    description: "A SignIn-SignUp application showcasing component-based architecture and responsive design.",
    tech: ["Angular", "TypeScript", "Responsive Design"],
    image: authProject,
    demo: "https://ahmedghanem7777.github.io/signin-signup/login",
    repo: "https://github.com/AhmedGhanem7777/signin-signup",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-4 gradient-text">Projects</h2>
          <div className="w-20 h-1 gradient-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="font-poppins font-bold text-2xl text-foreground">{project.title}</h3>
                <p className="font-inter text-muted-foreground">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs font-inter">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4">
                  <Button variant="gradient" size="sm" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2" size={16} /> Live Demo
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <a href={project.repo} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2" size={16} /> Source Code
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-8">
          <h3 className="font-poppins font-bold text-3xl text-center gradient-text">More Projects</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {additionalProjects.map((project, index) => (
              <div
                key={index}
                className="bg-card rounded-lg overflow-hidden border border-border hover:border-primary transition-all duration-300 hover:scale-105"
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>

                <div className="p-4 space-y-3">
                  <h4 className="font-poppins font-semibold text-lg text-foreground">{project.title}</h4>
                  <p className="font-inter text-sm text-muted-foreground line-clamp-2">{project.description}</p>

                  <div className="flex flex-wrap gap-1">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-2 py-0.5 bg-muted text-muted-foreground rounded text-xs font-inter">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button variant="gradient" size="sm" asChild className="flex-1">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={14} /> Demo
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      <a href={project.repo} target="_blank" rel="noopener noreferrer">
                        <Github size={14} /> Repo
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
