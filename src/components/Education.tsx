import { GraduationCap } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center animate-fade-in">
          Education
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all duration-300 animate-slide-up">
            <div className="flex items-start gap-6">
              <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-primary to-accent shrink-0">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-semibold mb-2 text-foreground">
                  B.Tech in Computer Science Engineering
                </h3>
                <p className="text-lg text-primary font-medium mb-2">3rd Year Student</p>
                <p className="text-muted-foreground mb-4">2023 - 2027</p>
                <p className="text-foreground/90 leading-relaxed">
                  Pursuing a comprehensive education in computer science with a focus on web development, 
                  software engineering principles, and emerging technologies. Actively involved in coding 
                  competitions and technical events to enhance practical skills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;