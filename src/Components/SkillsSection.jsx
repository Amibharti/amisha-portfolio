import { useState } from "react";
import { skills } from "../data/profile";

const categories = ["All", ...new Set(skills.map((s) => s.category))];

export const SkillsSection = () => {
  const [active, setActive] = useState("All");
  const filtered = skills.filter((s) => active === "All" || s.category === active);

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-5 py-2 rounded-full transition-colors duration-300 capitalize ${
                active === c ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((s) => (
            <div key={s.name} className="bg-card p-6 rounded-lg shadow-xs card-hover text-left">
              <div className="flex justify-between mb-3">
                <h3 className="font-semibold">{s.name}</h3>
                <span className="text-sm text-foreground/60">{s.level}%</span>
              </div>
              <div className="w-full bg-secondary h-2 rounded-full overflow-hidden">
                <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]" style={{ width: s.level + "%" }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
