import { Briefcase, CheckCircle } from "lucide-react";

const experiences = [
  {
    id: 1,
    position: "Software Engineer",
    company: "Stalwart Software Pvt Ltd",
    period: "May 2024 – Present",
    location: "Hyderabad, India",
    color: "from-blue-500 to-cyan-500",
    highlights: [
      "Led development of scalable web apps using React.js, Next.js, Material UI, improving form submission accuracy by 25%",
      "Built complex data tables supporting 10K+ records with Material React Table with advanced filtering and pagination",
      "Integrated TanStack Query for optimized server-state management, reducing redundant API calls by 40%",
      "Developed and automated business workflows using n8n, reducing manual processing time by 60%",
      "Accelerated development velocity by 35% using GitHub Copilot for code generation and test writing",
      "Built AI-powered features using Claude API for intelligent form assistants and smart data summarization",
      "Collaborated with backend teams to reduce API response time by 30%; mentored junior developers"
    ]
  },
  {
    id: 2,
    position: "Software Engineer",
    company: "Mantra Technologies Pvt Ltd",
    period: "Jun 2023 – Apr 2024",
    location: "Hyderabad, India",
    color: "from-purple-500 to-pink-500",
    highlights: [
      "Designed and developed dynamic UIs using Vue.js and JavaScript (ES6+), ensuring responsive experiences",
      "Migrated Vuex-based applications to Pinia, reducing boilerplate code and improving productivity by 20%",
      "Built and optimized server-rendered apps with Nuxt.js, improving SEO performance and initial page load times",
      "Styled UI components using Tailwind CSS, reducing CSS bloat and improving design consistency by 25%",
      "Owned end-to-end feature delivery, reducing release cycle from 2 weeks to 5 days through improved sprint planning"
    ]
  },
  {
    id: 3,
    position: "Associate Engineer",
    company: "Float Technology Solutions Pvt Ltd",
    period: "Nov 2022 – May 2023",
    location: "Hyderabad, India",
    color: "from-emerald-500 to-teal-500",
    highlights: [
      "Developed responsive UIs using Vue.js, JavaScript (ES6+), HTML5, and CSS3 with component-based architecture",
      "Assisted in state management using Vuex and client-side routing with Vue Router",
      "Implemented layouts and styling with Bootstrap; integrated API calls to display dynamic content"
    ]
  }
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="section-spacing bg-gradient-to-b from-transparent via-primary/5 to-transparent relative">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="space-y-4 text-center mb-12 animation-fade-in">
          <div className="inline-block badge-primary mb-4">
            <Briefcase className="inline mr-2" size={16} />
            Work Experience
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Professional <span className="text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text">Journey</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            3+ years of delivering scalable solutions and driving innovation
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="animation-slide-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="card-elevated border border-border hover:border-primary/50 overflow-hidden transition-all duration-300 group">
                {/* Header Bar */}
                <div className={`h-1 bg-gradient-to-r ${exp.color}`} />
                
                <div className="p-8">
                  {/* Title Section */}
                  <div className="mb-6">
                    <div className="flex items-start justify-between gap-4 mb-3 flex-wrap">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {exp.position}
                        </h3>
                        <p className="text-lg text-primary font-semibold mt-1">{exp.company}</p>
                      </div>
                      <div className={`px-4 py-2 rounded-lg bg-gradient-to-r ${exp.color} text-white text-sm font-medium whitespace-nowrap`}>
                        {exp.period}
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm">📍 {exp.location}</p>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-6" />

                  {/* Highlights */}
                  <div className="space-y-3">
                    {exp.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex gap-3 items-start">
                        <CheckCircle className={`w-5 h-5 flex-shrink-0 mt-0.5 text-primary`} />
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {highlight}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
