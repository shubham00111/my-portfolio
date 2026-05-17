"use client";

import { Icon } from "@iconify/react";
import {
  SKILL_CATEGORIES,
  type Skill,
  type SkillTier,
} from "@/app/data/tech-stack";

function SkillIcon({ label, icon, fallback }: Skill) {
  return (
    <div className="group bg-card border-border flex h-11 max-w-11 cursor-default items-center gap-2 overflow-hidden rounded-sm border border-dashed px-2.5 transition-[max-width,box-shadow] duration-300 ease-in-out hover:max-w-56 hover:shadow-[0_2px_14px_rgba(0,0,0,0.09)]">
      <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center transition-transform duration-300 group-hover:scale-110">
        {icon ? (
          <Icon icon={icon} width={22} height={22} />
        ) : (
          <span className="text-muted-foreground text-center text-[9px] leading-tight font-bold">
            {fallback ?? label.slice(0, 4).toUpperCase()}
          </span>
        )}
      </div>
      <span className="text-foreground/80 text-xs font-medium whitespace-nowrap opacity-0 transition-opacity delay-150 duration-150 group-hover:opacity-100">
        {label}
      </span>
    </div>
  );
}

const TIERS: { key: SkillTier; label: string }[] = [
  { key: "Primary", label: "Primary — daily use" },
  { key: "Production", label: "Production experience" },
  { key: "Familiar", label: "Familiar with" },
];

const StackSection = () => {
  return (
    <section id="skills">
      <div className="screen-line-bottom px-5 py-6">
        <p className="text-muted-foreground mb-1 text-xs font-medium tracking-widest uppercase">
          03
        </p>
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          Skills
        </h2>
      </div>

      <div className="px-5 py-10">
        <div className="space-y-10">
          {TIERS.map(({ key, label: tierLabel }) => {
            const categories = SKILL_CATEGORIES.filter((c) => c.tier === key);
            return (
              <div key={key}>
                {/* Tier heading */}
                <div className="mb-5 flex items-center gap-3">
                  <span className="text-muted-foreground text-xs font-medium tracking-widest whitespace-nowrap uppercase">
                    {tierLabel}
                  </span>
                  <div className="bg-border h-px flex-1" />
                </div>

                <div className="space-y-4">
                  {categories.map(({ label, skills }) => (
                    <div
                      key={label}
                      className="grid items-start gap-4 sm:grid-cols-4"
                    >
                      <div className="sm:col-span-1">
                        <span className="border-border bg-muted text-muted-foreground inline-block rounded-md border px-3 py-1.5 text-xs font-medium">
                          {label}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2.5 sm:col-span-3">
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
  );
};

export default StackSection;
