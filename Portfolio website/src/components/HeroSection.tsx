export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-32 md:pt-20"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground">
            <span className="block">Hi, I'm </span>
            <span className="text-primary">Zeidan </span>
            <span className="text-primary">Chabo</span>
          </h1>

          <p className="text-xl md:text-2xl text-foreground/80 mb-4">
            Software Developer
          </p>
          <p className="text-lg text-foreground/80 mb-8 font-medium">
            Scroll down to know me!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a
              href="#projects"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-border text-foreground rounded-lg hover:bg-background/50 transition-colors font-medium"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
