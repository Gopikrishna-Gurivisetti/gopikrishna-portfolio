import { ArrowUp } from "lucide-react";
import React from "react";

export const Footer = () => {
  return (
    <footer className="px-6 py-10 bg-card border-t border-border mt-16 relative">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Copyright */}
        <p className="text-sm text-muted-foreground text-center md:text-left">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold">Gopikrishna</span>. All Rights
          Reserved.
        </p>

        {/* Scroll To Top */}
        <a
          href="#hero"
          className="
            p-3 rounded-full 
            bg-primary/10 
            hover:bg-primary/20 
            text-primary 
            transition-all 
            hover:-translate-y-1 
            shadow-sm
          "
        >
          <ArrowUp size={18} />
        </a>
      </div>
    </footer>
  );
};
