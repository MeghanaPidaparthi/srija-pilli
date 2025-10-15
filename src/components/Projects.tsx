import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "AI-Enhanced Learning Companion",
      description: "Built during VIBE Coding Hackathon (GDG on Campus) — Finalist: Top 20 Teams. AI-powered study companion that adapts to different learners and supports their study process through personalized recommendations and progress tracking.",
      technologies: ["Firebase Studio", "GitHub"],
      emoji: "🤖"
    },
    {
      title: "AttendML",
      description: "A smart attendance system using face and fingerprint recognition ensures accurate, secure, and efficient tracking through real-time monitoring and cloud integration. It overcomes the drawbacks of traditional attendance methods with modern biometric technology.",
      technologies: ["HTML", "CSS", "Python", "MySQL", "Flask"],
      emoji: "👤"
    },
    {
      title: "AI-Based Application for Sustainable Farming",
      description: "An innovative solution leveraging AI to support sustainable farming practices and optimize agricultural processes.",
      technologies: ["Python", "React.js", "Node.js"],
      emoji: "🌱"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-3 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center animate-fade-in relative font-playfair">
            My Portfolio
            <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 300 8" fill="none">
              <path d="M2 6C50 3 100 2 150 4C200 6 250 2 298 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-primary"/>
            </svg>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-card rounded-3xl p-8 border-4 border-foreground shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-300 animate-slide-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <Button variant="ghost" size="icon" className="rounded-full border-2 border-foreground hover:bg-foreground hover:text-background">
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>
              
              <h3 className="text-2xl font-bold mb-3 text-foreground font-playfair">
                {project.title}
              </h3>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-background border-2 border-foreground rounded-full text-xs font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;