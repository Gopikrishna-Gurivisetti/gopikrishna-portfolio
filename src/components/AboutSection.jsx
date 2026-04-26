import { Briefcase, Code, User, GraduationCap, Download, Sparkles } from "lucide-react";

export const AboutSection = () => {
  const skills = [
    {
      icon: Code,
      title: "Web Development",
      description: "Creating responsive websites and web applications with modern frameworks.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: User,
      title: "UI/UX Design",
      description: "Designing intuitive user interfaces and seamless experiences.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Briefcase,
      title: "Project Management",
      description: "Leading projects from conception to completion using Agile methodologies.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: GraduationCap,
      title: "Education",
      description: "B.Tech in Mechanical Engineering, KKR & KSR Institute of Technology and Sciences, Guntur (2017-2020) | 73%",
      color: "from-emerald-500 to-teal-500"
    }
  ];

  return (
    <section id="about" className="section-spacing bg-gradient-to-b from-transparent via-primary/5 to-transparent relative">
      <div className="container mx-auto max-w-5xl">
        <div className="space-y-4 text-center mb-12 animation-fade-in">
          <div className="inline-block badge-primary mb-4">
            <Sparkles className="inline mr-2" size={16} />
            About Me
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Passionate <span className="text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text">Web Developer</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Building elegant solutions to complex problems
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* LEFT SIDE TEXT */}
          <div className="space-y-6 animation-slide-in">
            <div className="space-y-4">
              <p className="text-lg text-foreground leading-relaxed">
                <span className="font-semibold text-primary">Frontend Engineer</span> with 3+ years of experience delivering scalable, high-performance web applications using React.js, Vue.js, Next.js, and TypeScript.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                Experienced in AI-assisted development workflows using Claude AI and GitHub Copilot, and in building automated business workflows with n8n. Skilled in state management, component reusability, and performance optimization — consistently improving speed and maintainability by up to 40%.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Adept at Agile environments, REST API integration, and delivering clean, production-ready code that scales.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 py-4">
              <div className="p-4 rounded-lg bg-primary/5 border border-primary/10">
                <div className="text-2xl font-bold text-primary">3+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="p-4 rounded-lg bg-primary/5 border border-primary/10">
                <div className="text-2xl font-bold text-primary">40%</div>
                <div className="text-sm text-muted-foreground">Performance Gain</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#contact" className="cosmic-button text-center">
                Get In Touch
              </a>
              <a
                href="/Gopi_Resume.pdf"
                download="Gopikrishna_Resume.pdf"
                rel="noopener noreferrer"
                className="btn-secondary text-center flex items-center justify-center gap-2"
              >
                <Download className="h-4 w-4" />
                Download CV
              </a>
            </div>
          </div>

          {/* RIGHT SIDE CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div
                  key={index}
                  className="group card-elevated p-6 border border-border hover:border-primary/50 animation-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col gap-4 h-full">
                    <div className={`p-3 rounded-lg w-fit bg-gradient-to-br ${skill.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg group-hover:text-primary transition-colors">{skill.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
