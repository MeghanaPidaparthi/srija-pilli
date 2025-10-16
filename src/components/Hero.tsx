import { Button } from "@/components/ui/button";
import { Sparkles, Brain } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <div className="container relative z-10 mx-auto px-4 py-20 text-center animate-fade-in">
        <div className="inline-block mb-6 px-4 py-2 border-2 border-foreground rounded-full text-sm font-medium">
          Pre-Final Year | AI & ML
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground font-playfair">
          Hi I'm{" "}
          <span className="relative inline-block">
            Srija Pilli
            <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 300 12" fill="none">
              <path d="M2 10C50 5 100 2 150 5C200 8 250 3 298 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-primary"/>
            </svg>
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto">
          Building and experimenting through code and creativity
        </p>
        
        <Button 
          size="lg"
          asChild
          className="animate-scale-in rounded-full bg-foreground text-background hover:bg-foreground/90 border-2 border-foreground font-semibold px-8"
        >
          <a href="https://drive.google.com/file/d/194-u_m5yf938E61vqkGUyQ4l5V6I_dIy/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            See Resume
            <Sparkles className="ml-2 h-5 w-5" />
          </a>
        </Button>
      </div>
    </section>
  );
};

export default Hero;