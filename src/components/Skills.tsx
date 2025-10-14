import { Brain, Code2, Database, Cpu } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Machine Learning",
      icon: Brain,
      skills: ["Scikit-learn", "TensorFlow", "PyTorch", "Keras", "XGBoost"],
      emoji: "🤖",
      color: "bg-primary"
    },
    {
      title: "Deep Learning",
      icon: Cpu,
      skills: ["CNN", "RNN", "LSTM", "Transformers", "GANs"],
      emoji: "🧠",
      color: "bg-accent"
    },
    {
      title: "Programming",
      icon: Code2,
      skills: ["Python", "R", "SQL", "JavaScript", "C++"],
      emoji: "💻",
      color: "bg-secondary"
    },
    {
      title: "Data & Tools",
      icon: Database,
      skills: ["Pandas", "NumPy", "Matplotlib", "Jupyter", "Git", "Docker"],
      emoji: "📊",
      color: "bg-primary"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background relative">
      <div className="absolute top-10 left-10 text-5xl animate-spin-slow">⚡</div>
      
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-3 mb-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center animate-fade-in">
            My Toolkit
          </h2>
        </div>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Technologies I work with to build intelligent systems
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-card rounded-3xl p-8 border-4 border-foreground shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`inline-flex p-3 rounded-2xl ${category.color} border-2 border-foreground`}>
                  <category.icon className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">{category.title}</h3>
                <span className="text-3xl ml-auto">{category.emoji}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-background border-2 border-foreground rounded-full text-sm font-semibold hover:bg-foreground hover:text-background transition-colors duration-200"
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