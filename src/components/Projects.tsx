import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description: "Built using HTML, CSS, and JavaScript to showcase my learning journey and work. Features responsive design and smooth animations.",
      technologies: ["HTML", "CSS", "JavaScript"],
      gradient: "from-primary to-accent"
    },
    {
      title: "To-Do List App",
      description: "A simple task manager with add/delete features and interactive UI. Helps users organize their daily tasks efficiently.",
      technologies: ["React", "CSS"],
      gradient: "from-accent to-primary"
    },
    {
      title: "Weather Finder App",
      description: "Fetches real-time weather data using OpenWeather API. Displays current conditions and forecasts with a clean interface.",
      technologies: ["JavaScript", "API", "CSS"],
      gradient: "from-primary to-accent"
    },
    {
      title: "Study AI",
      description: "An AI-based app for creating instant notes and summaries. Leverages AI tools to help students study more efficiently.",
      technologies: ["React", "AI", "Node.js"],
      gradient: "from-accent to-primary"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center animate-fade-in">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-card rounded-3xl p-8 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all duration-300 hover:scale-105 animate-slide-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`h-2 w-16 rounded-full bg-gradient-to-r ${project.gradient} mb-6`} />
              <h3 className="text-2xl font-semibold mb-4 text-foreground group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <Button variant="outline" size="sm" className="group/btn">
                  <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                  View Demo
                </Button>
                <Button variant="ghost" size="sm" className="group/btn">
                  <Github className="h-4 w-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                  Code
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;