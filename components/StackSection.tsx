"use client";

import { Icon } from "@iconify/react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { SKILL_CATEGORIES, type Skill } from "@/app/data/tech-stack";

function SkillIcon({ label, icon, fallback }: Skill) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div className="size-14 bg-white dark:bg-zinc-800 border-2 border-foreground shadow-[2px_2px_0px_0px_#000] dark:shadow-[2px_2px_0px_0px_rgba(240,240,240,0.6)] flex items-center justify-center cursor-default transition-all duration-100 hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]">
          {icon ? (
            <Icon icon={icon} width={36} height={36} />
          ) : (
            <span className="text-[11px] font-black text-center leading-tight px-1 text-foreground">
              {fallback ?? label.slice(0, 4).toUpperCase()}
            </span>
          )}
        </div>
      </TooltipTrigger>
      <TooltipContent
        side="top"
        className="border-2 border-foreground bg-foreground text-background font-bold text-xs px-2 py-1 rounded-none shadow-none"
      >
        {label}
      </TooltipContent>
    </Tooltip>
  );
}

const StackSection = () => {
  return (
    <TooltipProvider delayDuration={100}>
      <section id="skills" className="border-b-3 border-foreground">
        <div className="mx-auto max-w-5xl px-5 py-16">
          <p className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-2">
            02
          </p>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-10">
            Skills
          </h2>

          <div className="space-y-6">
            {SKILL_CATEGORIES.map(({ label, color, skills }) => (
              <div key={label} className="grid sm:grid-cols-4 gap-4 items-start">
                {/* Category label */}
                <div className="sm:col-span-1">
                  <span
                    className={`${color} border-3 border-foreground px-3 py-1.5 text-xs font-black uppercase tracking-wide shadow-[2px_2px_0px_0px_#000] dark:shadow-[2px_2px_0px_0px_rgba(240,240,240,0.6)] text-black dark:text-black inline-block`}
                  >
                    {label}
                  </span>
                </div>

                {/* Icon grid */}
                <div className="sm:col-span-3 flex flex-wrap gap-3">
                  {skills.map((skill) => (
                    <SkillIcon key={skill.label} {...skill} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </TooltipProvider>
  );
};

export default StackSection;
