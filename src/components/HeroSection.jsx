import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export const HeroSection = () => {
  return (
    <>
      <section
        id="hero"
        className="min-h-screen relative flex flex-col items-center justify-center px-4 pt-20"
      >
        <div className="container max-w-4xl mx-auto text-center z-10">
          <div className="space-y-8 animation-fade-in">
            {/* Greeting Badge */}
            <div className="inline-block badge-primary">
              <span className="text-xs font-semibold">👋 Frontend Engineer | React • Vue • Next.js</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight">
                <span className="opacity-0 animation-fade-in">Hi, I'm </span>
                <span className="text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text opacity-0 animation-fade-in-delay-1">
                  Gopikrishna
                </span>
                <br />
                <span className="opacity-0 animation-fade-in-delay-2">
                  Gurivisetti
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto opacity-0 animation-fade-in-delay-3 leading-relaxed">
              I create <span className="text-primary font-semibold">stellar web experiences</span> with modern technologies. Specializing in front-end development, I build interfaces that are both beautiful and functional.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animation-fade-in-delay-4">
              <a href="#projects" className="cosmic-button group">
                View My Work
                <span className="inline-block transition-transform group-hover:translate-x-2 ml-2">→</span>
              </a>
              <a href="#contact" className="btn-secondary">
                Get In Touch
              </a>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-4 opacity-0 animation-fade-in-delay-4">
              <a
                href="https://github.com/Gopikrishna-Gurivisetti"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-all duration-300 hover:scale-110"
                title="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="#contact"
                className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-all duration-300 hover:scale-110"
                title="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
          <span className="text-sm text-muted-foreground mb-2 font-medium">Scroll to explore</span>
          <ArrowDown className="w-5 h-5 text-primary animate-pulse" />
        </div>
      </section>
    </>
  );
};
