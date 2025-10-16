import { Trophy, Award, Star } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "VIBE Coding Hackathon",
      description: "Finalist - Top 10 teams with 300+ participants",
    },
    {
      icon: Award,
      title: "Go4Youth Olympiad Topper",
      description: "Malla Reddy University – National Merit, 2023",
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in font-playfair">
            Achievements & Impact
          </h2>
          <p className="text-muted-foreground text-lg">Results that matter</p>
        </div>
        
        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {achievements.map((achievement, index) => (
            <div
              key={achievement.title}
              className="bg-card rounded-3xl p-8 border-4 border-foreground shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-300 animate-slide-up text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex p-3 rounded-2xl bg-secondary border-2 border-foreground mb-4">
                <achievement.icon className="h-6 w-6 text-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground font-playfair">{achievement.title}</h3>
              <p className="text-foreground/80 leading-relaxed">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;