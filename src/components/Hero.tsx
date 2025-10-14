import { Button } from "@/components/ui/button";
import { Sparkles, Brain } from "lucide-react";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <div className="absolute top-10 left-10 text-6xl animate-pulse">🌸</div>
      <div className="absolute top-20 right-20 text-4xl animate-bounce">✨</div>
      <div className="absolute bottom-32 left-20 text-5xl">🎯</div>
      <div className="absolute bottom-20 right-32 text-4xl rotate-12">🚀</div>
      
      <div className="container relative z-10 mx-auto px-4 py-20 text-center animate-fade-in">
        <div className="inline-block mb-6 px-4 py-2 border-2 border-foreground rounded-full text-sm font-medium">
          👋 Pre-Final Year | AI & ML
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
          I build <span className="inline-flex items-center gap-2"><Brain className="inline" />intelligent</span>
          <br />
          <span className="relative inline-block">
            AI solutions
            <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 300 12" fill="none">
              <path d="M2 10C50 5 100 2 150 5C200 8 250 3 298 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-primary"/>
            </svg>
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto">
          Exploring machine learning, deep learning, and cutting-edge AI to solve real-world problems
        </p>
        
        <Button 
          size="lg"
          onClick={scrollToProjects}
          className="animate-scale-in rounded-full bg-foreground text-background hover:bg-foreground/90 border-2 border-foreground font-semibold px-8"
        >
          See Portfolio
          <Sparkles className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;