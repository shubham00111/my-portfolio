"use client";

import { Icon } from "@iconify/react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { SKILL_CATEGORIES, type Skill, type SkillTier } from "@/app/data/tech-stack";

function SkillIcon({ label, icon, fallback }: Skill) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div className="size-12 bg-card border border-border rounded-lg flex items-center justify-center cursor-default transition-colors duration-150 hover:bg-muted">
          {icon ? (
            <Icon icon={icon} width={28} height={28} />
          ) : (
            <span className="text-[10px] font-medium text-center leading-tight px-1 text-muted-foreground">
              {fallback ?? label.slice(0, 4).toUpperCase()}
            </span>
          )}
        </div>
      </TooltipTrigger>
      <TooltipContent
        side="top"
        className="text-xs font-medium"
      >
        {label}
      </TooltipContent>
    </Tooltip>
  );
}

const TIERS: { key: SkillTier; label: string }[] = [
  { key: "Primary",    label: "Primary — daily use" },
  { key: "Production", label: "Production experience" },
  { key: "Familiar",   label: "Familiar with" },
];

const StackSection = () => {
  return (
    <TooltipProvider delayDuration={100}>
      <section id="skills" className="border-b border-border">
        <div className="mx-auto max-w-5xl px-5 py-16">
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-2">
            02
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10">
            Skills
          </h2>

          <div className="space-y-10">
            {TIERS.map(({ key, label: tierLabel }) => {
              const categories = SKILL_CATEGORIES.filter((c) => c.tier === key);
              return (
                <div key={key}>
                  {/* Tier heading */}
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground whitespace-nowrap">
                      {tierLabel}
                    </span>
                    <div className="flex-1 h-px bg-border" />
                  </div>

                  <div className="space-y-4">
                    {categories.map(({ label, skills }) => (
                      <div key={label} className="grid sm:grid-cols-4 gap-4 items-start">
                        <div className="sm:col-span-1">
                          <span className="border border-border bg-muted px-3 py-1.5 text-xs font-medium rounded-md text-muted-foreground inline-block">
                            {label}
                          </span>
                        </div>
                        <div className="sm:col-span-3 flex flex-wrap gap-2.5">
                          {skills.map((skill) => (
                            <SkillIcon key={skill.label} {...skill} />
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </TooltipProvider>
  );
};

export default StackSection;
