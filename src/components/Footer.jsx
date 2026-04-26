import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import React from "react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Gopikrishna-Gurivisetti",
      label: "GitHub",
      color: "hover:text-[#333333] dark:hover:text-white"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/gopikrishna-gurivisetti-software-developer",
      label: "LinkedIn",
      color: "hover:text-[#0A66C2]"
    },
    {
      icon: Mail,
      href: "mailto:gopikrishnagurivisetti@gmail.com",
      label: "Email",
      color: "hover:text-primary"
    }
  ];

  return (
    <footer className="px-6 py-12 md:py-16 bg-gradient-to-b from-transparent to-background/80 border-t border-border relative">
      <div className="container mx-auto max-w-6xl">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Left - Branding */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">
              Gopikrishna Gurivisetti
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Full-stack developer passionate about creating beautiful, functional web experiences.
            </p>
          </div>

          {/* Right - Social Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.label}
                    className={`p-2.5 rounded-lg bg-secondary hover:bg-primary/10 text-foreground transition-all duration-300 ${social.color}`}
                  >
                    <IconComponent size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-xs md:text-sm text-muted-foreground text-center sm:text-left">
            © {currentYear} <span className="font-semibold text-foreground">Gopikrishna</span>. All Rights Reserved. Crafted with <span className="text-primary">♥</span>
          </p>

          {/* Scroll To Top Button */}
          <a
            href="#hero"
            className="p-2.5 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300 hover:scale-110 hover:-translate-y-1"
            title="Back to top"
          >
            <ArrowUp size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};
