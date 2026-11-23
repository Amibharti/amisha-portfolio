import { Briefcase, Code, User } from "lucide-react";
import { profile } from "../data/profile";

const cards = [
  { icon: Code, title: "Web Development", text: "Building responsive, performant websites and web apps with modern tools." },
  { icon: User, title: "UI / UX Focus", text: "Clean, intuitive interfaces that feel great on every screen size." },
  { icon: Briefcase, title: "Project Experience", text: "Hands-on projects from idea to deployment, with version control." },
];

export const AboutSection = () => (
  <section id="about" className="py-24 px-4 relative">
    <div className="container max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        About <span className="text-primary">Me</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-left">
          <h3 className="text-2xl font-semibold">Passionate Web Developer</h3>
          {profile.about.map((p, i) => (
            <p key={i} className="text-foreground/70">{p}</p>
          ))}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center sm:justify-start">
            <a href="#contact" className="cosmic-button">Get In Touch</a>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6">
          {cards.map((c) => (
            <div key={c.title} className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4 text-left">
                <div className="p-3 rounded-full bg-primary/10">
                  <c.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">{c.title}</h4>
                  <p className="text-foreground/70">{c.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
