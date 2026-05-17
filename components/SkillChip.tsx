"use client";

import { Icon } from "@iconify/react";
import { SKILL_ICON_MAP } from "@/app/data/tech-stack";

export function SkillChip({ label }: { label: string }) {
  const { icon, fallback } = SKILL_ICON_MAP[label] ?? {};
  return (
    <div className="group bg-card border-border flex h-9 max-w-9 cursor-default items-center gap-1.5 overflow-hidden rounded-lg border border-dashed px-2 transition-[max-width,box-shadow] duration-300 ease-in-out hover:max-w-48 hover:shadow-[0_2px_14px_rgba(0,0,0,0.09)]">
      <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center transition-transform duration-300 group-hover:scale-110">
        {icon ? (
          <Icon icon={icon} width={17} height={17} />
        ) : (
          <span className="text-muted-foreground text-center text-[8px] leading-tight font-bold">
            {fallback ?? label.slice(0, 3).toUpperCase()}
          </span>
        )}
      </div>
      <span className="text-foreground/80 text-[11px] font-medium whitespace-nowrap opacity-0 transition-opacity delay-150 duration-150 group-hover:opacity-100">
        {label}
      </span>
    </div>
  );
}
