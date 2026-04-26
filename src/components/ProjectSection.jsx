import { ArrowRight, ExternalLink, Github, Sparkles } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "AppyBiz — ERP Platform",
    description:
      "Developed a responsive ERP platform for manufacturing clients with inventory, sales, and order management. Integrated n8n workflows for automated order notifications and inventory sync. Built intelligent search assistant using Claude AI reducing query time by 40%.",
    image: "/Projects/project5.png",
    tags: ["React.js", "Next.js", "n8n", "Claude API", "REST API", "Material UI"],
    demoUrl: "#projects",
    gitHubUrl: "https://github.com/Gopikrishna-Gurivisetti",
    color: "from-blue-500 to-cyan-500",
    company: "Stalwart Software Pvt Ltd",
    period: "May 2024 – Present"
  },
  {
    id: 2,
    title: "500APPS HRSprout — HR System",
    description:
      "Built attendance tracking system with approval workflows and detailed activity logs. Developed leave management module with role-based access control (ACL). Utilized Vue.js, Nuxt.js, and REST APIs for seamless HR operations.",
    image: "/Projects/500apps.png",
    tags: ["Vue.js", "Nuxt.js", "Pinia", "REST API", "Tailwind CSS"],
    demoUrl: "#projects",
    gitHubUrl: "https://github.com/Gopikrishna-Gurivisetti",
    color: "from-purple-500 to-pink-500",
    company: "Mantra Technologies Pvt Ltd",
    period: "Jun 2023 – Apr 2024"
  },
  {
    id: 3,
    title: "Float Care — Healthcare Platform",
    description:
      "Developed staff management, scheduling, and credentialing modules to automate healthcare operations. Implemented referral management workflows for timely follow-up across departments. Built responsive UI with Vue.js and modern web standards.",
    image: "/Projects/FloatCare.png",
    tags: ["Vue.js", "JavaScript", "REST API", "HTML5", "CSS3"],
    demoUrl: "#projects",
    gitHubUrl: "https://github.com/Gopikrishna-Gurivisetti",
    color: "from-emerald-500 to-teal-500",
    company: "Float Technology Solutions Pvt Ltd",
    period: "Nov 2022 – May 2023"
  },
];

export const ProjectSection = () => {
  return (
    <section id="projects" className="section-spacing bg-gradient-to-b from-transparent via-primary/5 to-transparent relative">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="space-y-4 text-center mb-12 animation-fade-in">
          <div className="inline-block badge-primary mb-4">
            <Sparkles className="inline mr-2" size={16} />
            My Work
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Featured <span className="text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Carefully crafted projects with attention to detail, performance, and user experience
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animation-slide-in">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group card-elevated border border-border hover:border-primary/50 overflow-hidden"
              style={{ animationDelay: `${key * 0.1}s` }}
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden bg-gradient-to-br from-foreground/5 to-foreground/10">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-white text-foreground hover:scale-110 transition-transform duration-300"
                      title="Visit Project"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.gitHubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-white text-foreground hover:scale-110 transition-transform duration-300"
                      title="View Code"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
                {/* Badge */}
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full bg-gradient-to-r ${project.color} text-white text-xs font-semibold`}>
                  Featured
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col h-full">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-primary/70 mb-3 font-medium">
                  {project.company} • {project.period}
                </p>
                <p className="text-muted-foreground text-sm mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project?.tags.map((tag, tagKey) => (
                    <span
                      key={tagKey}
                      className="px-2.5 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-2 border-t border-border">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 px-3 rounded-lg bg-primary/10 text-primary font-medium text-sm hover:bg-primary/20 transition-colors text-center"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.gitHubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 px-3 rounded-lg bg-secondary text-foreground font-medium text-sm hover:bg-secondary/80 transition-colors text-center"
                  >
                    Repo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 animation-fade-in-delay-3">
          <p className="text-muted-foreground mb-4">Want to see more projects?</p>
          <a
            className="cosmic-button inline-flex items-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Gopikrishna-Gurivisetti"
          >
            Visit My GitHub
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};
