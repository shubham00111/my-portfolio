import { PROJECTS } from "@/app/data/projects";
import { ArrowUpRight, Github, Hammer } from "lucide-react";
import Link from "next/link";

const ProjectsSection = () => {
  return (
    <section id="projects" className="border-b-3 border-foreground">
      <div className="mx-auto max-w-5xl px-5 py-16">
        <p className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-2">
          04
        </p>
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-2">
          Projects
        </h2>
        <p className="text-muted-foreground text-sm font-medium mb-10">
          Selected work — case studies from TSYS and personal builds
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROJECTS.map(({ id, title, tagline, problem, approach, outcome, tech, github, demo, isPlaceholder, color }) => (
            <div key={id} className="nb-card flex flex-col">
              {/* Color header */}
              <div className={`${color} border-b-3 border-foreground px-4 py-3`}>
                <p className="font-black text-sm text-black uppercase tracking-tight leading-snug">
                  {title}
                </p>
                <p className="text-[11px] font-semibold text-black/70 mt-0.5">{tagline}</p>
              </div>

              {isPlaceholder ? (
                <div className="flex-1 flex flex-col items-center justify-center gap-3 p-8 text-center">
                  <Hammer size={28} className="text-muted-foreground" />
                  <p className="text-muted-foreground text-sm font-semibold">
                    Personal project coming soon
                  </p>
                  <p className="text-muted-foreground text-xs">
                    Currently building something with AI agents
                  </p>
                </div>
              ) : (
                <div className="flex-1 p-4 space-y-3">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1">
                      Problem
                    </p>
                    <p className="text-xs leading-relaxed text-foreground/80">{problem}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1">
                      Approach
                    </p>
                    <p className="text-xs leading-relaxed text-foreground/80">{approach}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1">
                      Outcome
                    </p>
                    <p className="text-xs leading-relaxed font-semibold">{outcome}</p>
                  </div>
                  {tech.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {tech.map((t) => (
                        <span key={t} className="nb-tag text-[10px]">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {(github || demo) && (
                <div className="border-t-3 border-foreground flex">
                  {github && (
                    <Link
                      href={github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 py-2.5 text-xs font-bold hover:bg-foreground hover:text-background transition-colors duration-100 border-r-3 border-foreground"
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
                      className="flex-1 flex items-center justify-center gap-1.5 py-2.5 text-xs font-bold hover:bg-foreground hover:text-background transition-colors duration-100"
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
