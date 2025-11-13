import { Code2, Database, Wrench } from "lucide-react";

const skills = {
  frontend: ["HTML5", "CSS3", "SCSS","Tailwind CSS", "Bootstrap", "Angular", "TypeScript", "JavaScript", "RxJS", "NgRx", "Angular Material", "AJAX"],
  backend: ["C#", ".NET Core", "SQL Server", "EF Core", "Dapper", "RESTful APIs", "Web API", "ASP.NET MVC", "Authentication & Authorization", "LINQ", "Unit Testing", "Design Patterns", "Clean Architecture", "Microservices"],
  tools: ["Git", "Postman", "Swagger", "VS Code", "Visual Studio", "GitHub", "Figma", "SSMS"],
};

const About = () => {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-4 gradient-text">About Me</h2>
          <div className="w-20 h-1 gradient-primary mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          <p className="font-inter text-lg text-muted-foreground leading-relaxed text-center">
            I'm a Computer Science graduate and freelance Full Stack Developer with expertise in building modern web applications using Angular and .NET Core. 
            I specialize in developing scalable RESTful APIs, implementing clean architecture patterns, and creating responsive user interfaces. 
            My experience spans from working with SQL Server databases to deploying complete enterprise solutions.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4 p-6 bg-background rounded-lg border border-border hover:border-primary transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-3">
                <Code2 className="text-primary" size={28} />
                <h3 className="font-poppins font-semibold text-xl">Frontend</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm font-inter">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-4 p-6 bg-background rounded-lg border border-border hover:border-primary transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-3">
                <Database className="text-primary" size={28} />
                <h3 className="font-poppins font-semibold text-xl">Backend</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm font-inter">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-4 p-6 bg-background rounded-lg border border-border hover:border-primary transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-3">
                <Wrench className="text-primary" size={28} />
                <h3 className="font-poppins font-semibold text-xl">Tools</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm font-inter">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
