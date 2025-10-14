import { Trophy, Brain, GraduationCap } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "Promptathon Finalist",
      description: "Secured finalist position at VIBE Coding Hackathon's Promptathon event",
      color: "from-primary to-accent"
    },
    {
      icon: Brain,
      title: "AI Tools Proficiency",
      description: "Proficient in using AI tools to boost productivity and creativity in development",
      color: "from-accent to-primary"
    },
    {
      icon: GraduationCap,
      title: "Certified Learner",
      description: "Completed multiple courses from Coursera, Udemy, and similar platforms",
      color: "from-primary to-accent"
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center animate-fade-in">
          Achievements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.title}
              className="bg-card rounded-3xl p-8 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all duration-300 hover:scale-105 animate-slide-up text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${achievement.color} mb-4`}>
                <achievement.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">{achievement.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;