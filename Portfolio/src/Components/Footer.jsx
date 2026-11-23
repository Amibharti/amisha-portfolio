import { ArrowUp } from "lucide-react";
import { profile } from "../data/profile";

export const Footer = () => (
  <footer className="py-8 px-4 bg-card relative border-t border-border mt-12 flex flex-wrap justify-between items-center gap-4">
    <p className="text-sm text-foreground/60">
      &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
    </p>
    <a href="#hero" aria-label="Back to top" className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors">
      <ArrowUp size={20} />
    </a>
  </footer>
);
