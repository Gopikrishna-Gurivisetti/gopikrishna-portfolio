import { useState } from "react";
import { cn } from "@/lib/utils";
import { Zap } from "lucide-react";

const skills = [
  // Languages
  { name: "JavaScript (ES6+)", level: "95", category: "languages" },
  { name: "TypeScript", level: "85", category: "languages" },
  { name: "HTML5", level: "95", category: "languages" },
  { name: "CSS3", level: "90", category: "languages" },
  
  // Frameworks & Libraries
  { name: "React.js", level: "95", category: "frameworks" },
  { name: "Next.js", level: "88", category: "frameworks" },
  { name: "Vue.js", level: "92", category: "frameworks" },
  { name: "Nuxt.js", level: "85", category: "frameworks" },
  { name: "Material UI", level: "88", category: "styling" },
  { name: "Tailwind CSS", level: "90", category: "styling" },
  { name: "React Hook Form", level: "90", category: "libraries" },
  { name: "TanStack Query", level: "85", category: "libraries" },
  { name: "Material React Table", level: "88", category: "libraries" },
  { name: "Vuex", level: "85", category: "libraries" },
  { name: "Pinia", level: "88", category: "libraries" },
  
  // AI Tools
  { name: "Claude API", level: "85", category: "ai" },
  { name: "GitHub Copilot", level: "90", category: "ai" },
  
  // Automation & Workflows
  { name: "n8n Automation", level: "82", category: "automation" },
  
  // Tools
  { name: "Git/GitHub", level: "92", category: "tools" },
  { name: "VS Code", level: "95", category: "tools" },
  { name: "NPM/Yarn", level: "90", category: "tools" },
  { name: "Postman", level: "85", category: "tools" },
  { name: "Chrome DevTools", level: "88", category: "tools" },
  
  // Core Skills
  { name: "REST API Integration", level: "90", category: "core" },
  { name: "State Management", level: "90", category: "core" },
  { name: "Performance Optimization", level: "88", category: "core" },
  { name: "Responsive Design", level: "92", category: "core" },
  { name: "Component Reusability", level: "90", category: "core" },
  { name: "Agile/Scrum", level: "85", category: "core" },
];

const categories = ["all", "languages", "frameworks", "styling", "libraries", "ai", "automation", "tools", "core"];

const getGradientColor = (level) => {
  if (level >= 90) return "from-emerald-500 to-teal-500";
  if (level >= 80) return "from-blue-500 to-cyan-500";
  if (level >= 70) return "from-purple-500 to-pink-500";
  return "from-orange-500 to-red-500";
};

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="section-spacing bg-gradient-to-b from-transparent via-primary/5 to-transparent relative">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="space-y-4 text-center mb-12 animation-fade-in">
          <div className="inline-block badge-primary mb-4">
            <Zap className="inline mr-2" size={16} />
            Technical Skills
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            My <span className="text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive set of technologies and tools I master
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animation-slide-in">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-4 py-2 rounded-full font-medium transition-all duration-300 capitalize text-sm",
                activeCategory === category
                  ? "cosmic-button shadow-glow-md"
                  : "bg-secondary/50 text-foreground/70 hover:bg-secondary hover:text-foreground border border-border"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="group card-elevated p-6 border border-border hover:border-primary/50 animation-scale-in"
              style={{ animationDelay: `${(index % 6) * 0.05}s` }}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-base group-hover:text-primary transition-colors">
                    {skill.name}
                  </h3>
                  <span className="text-xs font-bold text-primary">
                    {skill.level}%
                  </span>
                </div>

                {/* Animated Progress Bar */}
                <div className="relative h-2.5 bg-secondary/50 rounded-full overflow-hidden">
                  <div
                    className={cn(
                      "h-full rounded-full bg-gradient-to-r transition-all duration-1000 ease-out origin-left",
                      getGradientColor(parseInt(skill.level))
                    )}
                    style={{
                      width: `${skill.level}%`,
                      animation: `grow 1.5s ease-out forwards`
                    }}
                  />
                  {/* Shine effect */}
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    style={{
                      animation: "shimmer 2s infinite",
                      width: "${skill.level}%"
                    }}
                  />
                </div>

                {/* Category Badge */}
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground capitalize px-2 py-1 rounded-full bg-primary/10 text-primary">
                    {skill.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredSkills.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No skills found in this category.</p>
          </div>
        )}
      </div>

      <style>{`
        @keyframes grow {
          from {
            width: 0;
          }
          to {
            width: var(--skill-level);
          }
        }
        @keyframes shimmer {
          0% {
            left: -100%;
          }
          100% {
            left: 100%;
          }
        }
      `}</style>
    </section>
  );
};
