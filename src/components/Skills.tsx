import { Code2, Database, Wrench, Users } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Code2,
      skills: ["HTML", "CSS", "JavaScript", "React"],
      color: "from-primary to-accent"
    },
    {
      title: "Backend",
      icon: Database,
      skills: ["Node.js", "Express.js"],
      color: "from-accent to-primary"
    },
    {
      title: "Tools & Databases",
      icon: Wrench,
      skills: ["MongoDB", "Firebase", "GitHub", "VS Code", "Netlify", "ChatGPT", "GitHub Copilot"],
      color: "from-primary to-accent"
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: ["Communication", "Teamwork", "Adaptability", "Problem Solving"],
      color: "from-accent to-primary"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center animate-fade-in">
          Skills & Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-card rounded-3xl p-8 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all duration-300 hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${category.color} mb-4`}>
                <category.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                  >
                    {skill}
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

export default Skills;