import { Trophy, Award, Star } from "lucide-react";

const Achievements = () => {
  const stats = [
    { number: "15+", label: "ML Projects", emoji: "🤖" },
    { number: "94%", label: "Best Model Accuracy", emoji: "🎯" },
    { number: "3", label: "Research Papers", emoji: "📄" }
  ];

  const achievements = [
    {
      icon: Trophy,
      title: "Kaggle Competitions",
      description: "Top 10% ranking in multiple ML competitions",
      emoji: "🏆"
    },
    {
      icon: Award,
      title: "Hackathon Winner",
      description: "1st place in AI/ML hackathon with innovative solution",
      emoji: "🥇"
    },
    {
      icon: Star,
      title: "Certifications",
      description: "Deep Learning Specialization, ML by Andrew Ng",
      emoji: "⭐"
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-background relative">
      <div className="absolute top-10 left-10 text-5xl">🎨</div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Achievements & Impact
          </h2>
          <p className="text-muted-foreground text-lg">Results that matter ✨</p>
        </div>
        
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="bg-card rounded-3xl p-6 border-4 border-foreground text-center shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl mb-2">{stat.emoji}</div>
              <div className="text-4xl font-bold text-foreground mb-2">{stat.number}</div>
              <div className="text-sm font-semibold text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.title}
              className="bg-card rounded-3xl p-8 border-4 border-foreground shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-300 animate-slide-up text-center"
              style={{ animationDelay: `${(index + 3) * 0.1}s` }}
            >
              <div className="text-5xl mb-4">{achievement.emoji}</div>
              <div className="inline-flex p-3 rounded-2xl bg-secondary border-2 border-foreground mb-4">
                <achievement.icon className="h-6 w-6 text-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">{achievement.title}</h3>
              <p className="text-foreground/80 leading-relaxed">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;