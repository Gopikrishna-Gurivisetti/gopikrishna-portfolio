import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  { name: "HTML/CSS", level: "95", category: "languages" },
  { name: "Javascript", level: "90", category: "languages" },
  { name: "Typescript", level: "70", category: "languages" },
  { name: "React.js", level: "90", category: "frameworks" },
  { name: "Next.js", level: "80", category: "frameworks" },
  { name: "Vue.js", level: "90", category: "frameworks" },
  { name: "Nuxt.js", level: "80", category: "frameworks" },
  { name: "Tailwind CSS", level: "85", category: "styling" },
  { name: "Bootstrap", level: "80", category: "styling" },
  { name: "Material UI", level: "80", category: "styling" },
  { name: "Git/GitHub", level: "90", category: "tools" },
  { name: "VS Code", level: "95", category: "tools" },
  { name: "Webpack/Vite", level: "75", category: "tools" },
  { name: "Postman", level: "75", category: "tools" },
  { name: "React Hook Form", level: "85", category: "libraries" },
  { name: "Tanstack Query", level: "75", category: "libraries" },
  { name: "Material UI", level: "80", category: "libraries" },
  { name: "React Router", level: "85", category: "libraries" },
  { name: "AG-Grid", level: "75", category: "libraries" },
  { name: "Axios", level: "75", category: "libraries" },
  { name: "Redux Toolkit", level: "75", category: "libraries" },
  { name: "Yup", level: "80", category: "libraries" },


];
const categories = ["all", "languages","frameworks", "styling", "libraries", "tools"];
export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "text-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>
              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
