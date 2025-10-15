const About = () => {
  return (
    <section id="about" className="py-20 bg-background relative">
      <div className="absolute top-10 right-10 text-5xl">🎨</div>
      <div className="absolute bottom-10 left-10 text-4xl">💡</div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-center animate-fade-in">
              About Me
            </h2>
            <span className="text-4xl">☺️</span>
          </div>
          
          <div className="bg-card rounded-3xl p-8 md:p-12 border-4 border-foreground shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 animate-slide-up">
            <p className="text-lg md:text-xl leading-relaxed mb-6 text-foreground">
              Hi! I'm Srija Pilli, a pre-final year Computer Science student with a growing interest in <span className="font-bold relative inline-block">web development, digital creativity, and online branding<span className="absolute bottom-0 left-0 w-full h-1 bg-secondary"></span></span>.
            </p>
            <p className="text-lg md:text-xl leading-relaxed mb-6 text-foreground">
              I love learning how technology and design can come together to create meaningful digital experiences, whether it's building a simple website or curating engaging content for social media.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-foreground">
              I'm currently exploring opportunities that allow me to blend tech and creativity, collaborate with new people, and keep learning through real-world projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;