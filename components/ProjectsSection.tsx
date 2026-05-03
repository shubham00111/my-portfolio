import { PROJECTS } from "@/app/data/projects";
import { ArrowUpRight, Github, Hammer } from "lucide-react";
import Link from "next/link";

const ProjectsSection = () => {
  return (
    <section id="projects" className="border-b border-border">
      <div className="mx-auto max-w-5xl px-5 py-16">
        <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-2">
          04
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
          Projects
        </h2>
        <p className="text-muted-foreground text-sm mb-10">
          Selected work — case studies from TSYS and personal builds
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROJECTS.map(({ id, title, tagline, problem, approach, outcome, tech, github, demo, isPlaceholder }) => (
            <div key={id} className="nb-card flex flex-col">
              {/* Header */}
              <div className="px-4 py-3 border-b border-border">
                <p className="font-semibold text-sm leading-snug">
                  {title}
                </p>
                <p className="text-[11px] text-muted-foreground mt-0.5">{tagline}</p>
              </div>

              {isPlaceholder ? (
                <div className="flex-1 flex flex-col items-center justify-center gap-3 p-8 text-center">
                  <Hammer size={24} className="text-muted-foreground" />
                  <p className="text-muted-foreground text-sm">
                    Personal project coming soon
                  </p>
                  <p className="text-muted-foreground text-xs">
                    Currently building something with AI agents
                  </p>
                </div>
              ) : (
                <div className="flex-1 p-4 space-y-3">
                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground mb-1">
                      Problem
                    </p>
                    <p className="text-xs leading-relaxed text-muted-foreground">{problem}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground mb-1">
                      Approach
                    </p>
                    <p className="text-xs leading-relaxed text-muted-foreground">{approach}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground mb-1">
                      Outcome
                    </p>
                    <p className="text-xs leading-relaxed font-medium text-foreground">{outcome}</p>
                  </div>
                  {tech.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {tech.map((t) => (
                        <span key={t} className="nb-tag">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {(github || demo) && (
                <div className="border-t border-border flex rounded-b-xl overflow-hidden">
                  {github && (
                    <Link
                      href={github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 py-2.5 text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors duration-100 border-r border-border"
                    >
                      <Github size={12} />
                      Code
                    </Link>
                  )}
                  {demo && (
                    <Link
                      href={demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 py-2.5 text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors duration-100"
                    >
                      Demo
                      <ArrowUpRight size={12} />
                    </Link>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
