import React, { useState } from "react";

import { Position } from "@/app/data/experience";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "../ui/collapsible";
import ExperiencePositionIcon from "./experience-position-icon";

const PostitionItem = ({ position }: { position: Position }) => {
  const [isOpen, setIsOpen] = useState(position.isExpanded || false);
  return (
    <div className="mt-5 mb-5">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger asChild>
          <div className="flex items-center">
            <div
              className="flex size-6 shrink-0 items-center justify-center rounded-lg
                 bg-muted text-muted-foreground 
                border border-muted-foreground/15 ring-1 ring-edge ring-offset-1 ring-offset-background"
            >
              <ExperiencePositionIcon className="size-4" icon={position.icon} />
            </div>
            {position.title && (
              <h2 className="font-semibold">{position.title}</h2>
            )}
          </div>
        </CollapsibleTrigger>
      </Collapsible>
    </div>
  );
};

export default PostitionItem;
