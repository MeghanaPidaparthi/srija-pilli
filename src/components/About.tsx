const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center animate-fade-in">
            About Me
          </h2>
          <div className="bg-card rounded-3xl p-8 md:p-12 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all duration-300 animate-slide-up">
            <p className="text-lg md:text-xl leading-relaxed mb-6 text-foreground/90">
              Hi, I'm <span className="font-semibold text-primary">Srija Pilli</span>, a 3rd-year Computer Science Engineering student with a passion for creating beautiful and functional web experiences. I'm constantly exploring both frontend and backend development, diving deep into the world of modern web technologies.
            </p>
            <p className="text-lg md:text-xl leading-relaxed mb-6 text-foreground/90">
              What sets me apart is my enthusiasm for blending AI tools into my development workflow. I leverage technologies like ChatGPT and GitHub Copilot to write smarter, more efficient code and accelerate my learning journey.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-foreground/90">
              Currently, I'm seeking <span className="font-semibold text-accent">internship opportunities</span> where I can apply my skills, contribute to real-world projects, and grow through hands-on experience in a professional environment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;