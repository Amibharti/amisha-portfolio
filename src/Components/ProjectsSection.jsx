import { ArrowRight, ExternalLink } from "lucide-react";
import { profile, projects } from "../data/profile";

const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.02 1.76 2.68 1.25 3.34.96.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.75.11 3.04.74.81 1.19 1.83 1.19 3.09 0 4.42-2.7 5.4-5.27 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
  </svg>
);

export const ProjectsSection = () => (
  <section id="projects" className="py-24 px-4 relative">
    <div className="container max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
        Featured <span className="text-primary">Projects</span>
      </h2>
      <p className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto">
        A few things I've built recently. Each one taught me something new.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p) => (
          <div key={p.title} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover text-left">
            <div className="h-40 bg-linear-to-br from-primary/30 to-primary/5 flex items-center justify-center text-4xl font-bold text-primary/60">
              {p.title.charAt(0)}
            </div>
            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tags.map((t) => (
                  <span key={t} className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">{t}</span>
                ))}
              </div>
              <h3 className="text-xl font-semibold mb-1">{p.title}</h3>
              <p className="text-foreground/70 text-sm mb-4">{p.description}</p>
              <div className="flex gap-4">
                {p.demo && (
                  <a href={p.demo} target="_blank" rel="noreferrer" aria-label={`${p.title} live demo`} className="text-foreground/70 hover:text-primary transition-colors">
                    <ExternalLink size={20} />
                  </a>
                )}
                {p.github && (
                  <a href={p.github} target="_blank" rel="noreferrer" aria-label={`${p.title} source code`} className="text-foreground/70 hover:text-primary transition-colors">
                    <GithubIcon className="h-5 w-5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      {profile.socials.github && (
        <div className="text-center mt-12">
          <a href={profile.socials.github} target="_blank" rel="noreferrer" className="cosmic-button inline-flex items-center gap-2">
            Check My GitHub <ArrowRight size={16} />
          </a>
        </div>
      )}
    </div>
  </section>
);
