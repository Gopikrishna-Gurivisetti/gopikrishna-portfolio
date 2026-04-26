import { Award, CheckCircle2 } from "lucide-react";

const certifications = [
  {
    id: 1,
    title: "React.js Developer Assessment",
    issuer: "LearnTube.ai",
    date: "Jan 2026",
    icon: "⚛️",
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    title: "Front End Development Libraries",
    issuer: "freeCodeCamp",
    date: "May 2025",
    icon: "🎓",
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 3,
    title: "AI Agents for Developers",
    issuer: "Simplilearn",
    date: "2025",
    icon: "🤖",
    color: "from-emerald-500 to-teal-500"
  },
  {
    id: 4,
    title: "Generative AI Tools Workshop",
    issuer: "Skill Nation",
    date: "Jul 2025",
    icon: "✨",
    color: "from-orange-500 to-red-500"
  }
];

export const CertificationsSection = () => {
  return (
    <section id="certifications" className="section-spacing relative">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="space-y-4 text-center mb-12 animation-fade-in">
          <div className="inline-block badge-primary mb-4">
            <Award className="inline mr-2" size={16} />
            Certifications
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Professional <span className="text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text">Credentials</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Continuous learning and industry-recognized certifications
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={cert.id}
              className="card-elevated border border-border hover:border-primary/50 p-6 group animation-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className={`text-4xl flex-shrink-0 p-3 rounded-lg bg-gradient-to-br ${cert.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                  {cert.icon}
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-primary font-semibold mb-2">
                    {cert.issuer}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <CheckCircle2 size={14} />
                    Issued {cert.date}
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
