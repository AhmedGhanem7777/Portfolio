import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    type: "work",
    title: "Backend Developer Intern",
    organization: "Digital Egypt Pioneers Initiative (DEPI)",
    description: "Specialized in backend development with .NET and SQL Server, building scalable APIs and database solutions.",
    period: "2024",
  },
  {
    type: "work",
    title: "Frontend Developer Intern",
    organization: "Information Technology Institute (ITI)",
    description: "Summer training focused on Angular and TypeScript, developing modern responsive web applications.",
    period: "2024",
  },
];

const education = {
  degree: "Bachelor of Computer Science",
  institution: "Tanta University",
  coursework: ["Artificial Intelligence", "Object-Oriented Programming", "Software Engineering", "Database Systems", "Machine Learning", "Probability and Statistics", "Operating Systems", "Data Structures and Algorithms", "Computer Networks", "Web Development"],
  period: "2022 - 2026",
};

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-4 gradient-text">Experience & Education</h2>
          <div className="w-20 h-1 gradient-primary mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-8">
            <h3 className="font-poppins font-semibold text-2xl text-foreground flex items-center gap-3">
              <Briefcase className="text-primary" size={28} />
              Professional Experience
            </h3>

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative pl-8 border-l-2 border-primary pb-8 last:pb-0 hover:border-accent transition-colors duration-300"
                >
                  <div className="absolute left-0 top-0 w-4 h-4 bg-primary rounded-full -translate-x-[9px] ring-4 ring-background"></div>
                  <div className="space-y-2">
                    <h4 className="font-poppins font-semibold text-xl text-foreground">{exp.title}</h4>
                    <p className="font-inter text-primary">{exp.organization}</p>
                    <p className="font-inter text-sm text-muted-foreground">{exp.period}</p>
                    <p className="font-inter text-muted-foreground">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="font-poppins font-semibold text-2xl text-foreground flex items-center gap-3">
              <GraduationCap className="text-primary" size={28} />
              Education
            </h3>

            <div className="p-6 bg-background rounded-lg border border-border hover:border-primary transition-all duration-300">
              <h4 className="font-poppins font-semibold text-xl text-foreground mb-2">{education.degree}</h4>
              <p className="font-inter text-primary mb-1">{education.institution}</p>
              <p className="font-inter text-sm text-muted-foreground mb-4">{education.period}</p>
              <div className="space-y-2">
                <p className="font-inter text-sm font-semibold text-foreground">Key Coursework:</p>
                <div className="flex flex-wrap gap-2">
                  {education.coursework.map((course) => (
                    <span key={course} className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm font-inter">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
