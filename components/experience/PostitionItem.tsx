import React, { useState } from "react";

import { Position } from "@/app/data/experience";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
  CollapsibleChevronsIcon,
  CollapsibleWithContext,
} from "../ui/collapsible";
import ExperiencePositionIcon from "./experience-position-icon";
import { Separator } from "../ui/separator";
import { InfinityIcon } from "lucide-react";
import { Tag } from "../tag";

const PostitionItem = ({ position }: { position: Position }) => {
  const { start, end } = position.employmentPeriod;
  const isOngoing = !end;
  return (
    <CollapsibleWithContext defaultOpen={position.isExpanded} asChild>
      <div className="relative last:before:absolute last:before:h-full last:before:w-4 last:before:bg-background">
        <CollapsibleTrigger
          className=" block w-full text-left select-none 
            relative before:absolute before:-top-1 before:-right-1 before:-bottom-1.5 before:left-7 before:-z-1 before:rounded-lg hover:before:bg-accent2"
        >
          <div className="relative z-1 mb-1 flex items-center gap-3">
            <div
              className="flex size-6 shrink-0 items-center justify-center rounded-lg
                 bg-muted text-muted-foreground 
                border border-muted-foreground/15 ring-1 ring-edge ring-offset-1 ring-offset-background"
            >
              <ExperiencePositionIcon className="size-4" icon={position.icon} />
            </div>

            <h2 className=" flex-1 font-semibold text-balance">
              {position.title}
            </h2>
            <div
              className="shrink-0 text-muted-foreground [&_svg]:size-4"
              aria-hidden
            >
              <CollapsibleChevronsIcon />
            </div>
          </div>
          <div className="flex items-center gap-3 pl-9">
            {position.employmentType && (
              <>
                <p className="text-sm">{position.employmentType}</p>
                <Separator
                  orientation="vertical"
                  className="data-[orientation=vertical]:h-4"
                />
              </>
            )}
            <div className="flex items-center gap-0.5">
              <p className="text-sm">{start}</p>
              <span className="font-mono">-</span>
              {isOngoing ? (
                <>
                  <InfinityIcon className="size-4.5 text-sm transalte-y-[0.5px]" />
                </>
              ) : (
                <span className="text-sm">{end}</span>
              )}
            </div>
          </div>
        </CollapsibleTrigger>
        <CollapsibleContent className="overflow-hidden duration-300 data-[state=closed]:animate-collapsible-fade-up data-[state=open]:animate-collapsible-fade-down  pt-2">
          <ol className="text-sm list-disc pl-9">
            {position.description &&
              position.description.map((desc, index) => {
                return <li key={index}>{desc}</li>;
              })}
          </ol>
          {Array.isArray(position.skills) && position.skills.length > 0 && (
            <ul className="flex flex-wrap gap-1.5 pt-2 pl-9">
              {position.skills.map((skill, index) => (
                <li key={index} className="flex">
                  <Tag>{skill}</Tag>
                </li>
              ))}
            </ul>
          )}
        </CollapsibleContent>
      </div>
    </CollapsibleWithContext>
  );
};

export default PostitionItem;
