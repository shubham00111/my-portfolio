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
      <div className="last:before:bg-background relative last:before:absolute last:before:h-full last:before:w-4">
        <CollapsibleTrigger className="hover:before:bg-accent2 relative block w-full text-left select-none before:absolute before:-top-1 before:-right-1 before:-bottom-1.5 before:left-7 before:-z-1 before:rounded-lg">
          <div className="relative z-1 mb-1 flex gap-3">
            <div className="bg-muted text-muted-foreground border-muted-foreground/15 ring-edge ring-offset-background flex size-6 shrink-0 items-center justify-center rounded-lg border ring-1 ring-offset-1">
              <ExperiencePositionIcon className="size-4" icon={position.icon} />
            </div>

            <h2 className="flex-1 font-semibold text-balance">
              {position.title}
            </h2>
            <div
              className="text-muted-foreground shrink-0 [&_svg]:size-4"
              aria-hidden
            >
              <CollapsibleChevronsIcon />
            </div>
          </div>
          <div className="text-muted-foreground flex items-center gap-3 pl-9">
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
                  <InfinityIcon className="transalte-y-[0.5px] size-4.5 text-sm" />
                </>
              ) : (
                <span className="text-sm">{end}</span>
              )}
            </div>
          </div>
        </CollapsibleTrigger>
        <CollapsibleContent className="data-[state=closed]:animate-collapsible-fade-up data-[state=open]:animate-collapsible-fade-down overflow-hidden pt-2 duration-300">
          <ol className="list-disc pl-9 text-sm">
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
