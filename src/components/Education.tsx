import { GraduationCap } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-20 bg-background relative">
      <div className="absolute bottom-10 right-10 text-5xl">🎓</div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center animate-fade-in">
            Education
          </h2>
          <div className="bg-card rounded-3xl p-8 md:p-12 border-4 border-foreground shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 animate-slide-up">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-primary border-2 border-foreground flex items-center justify-center">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2 text-foreground">
                  B.Tech in Computer Science Engineering
                </h3>
                <p className="text-lg font-semibold text-foreground/80 mb-2">
                  Specialization: Artificial Intelligence & Machine Learning
                </p>
                <p className="text-lg text-muted-foreground mb-2">
                  [Your College Name]
                </p>
                <div className="inline-block px-4 py-1 bg-secondary border-2 border-foreground rounded-full font-bold text-sm mb-4">
                  Pre-Final Year (2023 - 2027)
                </div>
                <p className="text-foreground leading-relaxed">
                  Pursuing advanced coursework in machine learning, deep learning, neural networks, and AI systems. Active member of AI/ML club and research group. Completed projects in computer vision, NLP, and predictive analytics.
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