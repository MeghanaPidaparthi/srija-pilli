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
              Hi there! I'm a pre-final year Computer Science student specializing in <span className="font-bold relative inline-block">Artificial Intelligence & Machine Learning<span className="absolute bottom-0 left-0 w-full h-1 bg-secondary"></span></span>. I'm passionate about building intelligent systems that can learn, adapt, and solve complex problems.
            </p>
            <p className="text-lg md:text-xl leading-relaxed mb-6 text-foreground">
              From neural networks to natural language processing, I dive deep into cutting-edge AI technologies. I believe in learning by doing – every model I train and every algorithm I implement brings me closer to understanding the future of technology.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-foreground">
              Currently seeking <span className="font-bold text-primary">internship opportunities</span> where I can contribute to innovative AI projects and grow alongside experienced practitioners in the field.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;