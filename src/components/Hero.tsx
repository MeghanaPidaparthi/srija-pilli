import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      
      <div className="container relative z-10 mx-auto px-4 py-20 text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
          Aspiring Web Developer
        </h1>
        <p className="text-xl md:text-2xl mb-4 text-foreground/90 font-medium">
          Blending Creativity with Code
        </p>
        <p className="text-lg md:text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
          Building clean and functional web experiences while exploring AI tools and new technologies.
        </p>
        <Button 
          variant="hero" 
          size="lg"
          onClick={scrollToProjects}
          className="animate-scale-in"
        >
          View My Projects
          <ArrowDown className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;