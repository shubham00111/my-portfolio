import { Experience } from "@/app/data/experience";
import Image from "next/image";
import React from "react";
import PostitionItem from "./PostitionItem";
import { Position } from "@/app/data/experience";
import { School } from "lucide-react";

const ExperienceItem = ({ experience }: { experience: Experience }) => {
  return (
    <div className="py-2">
      <div className="flex items-center gap-3 py-4">
        {experience.companyLogo ? (
          <Image
            src={experience.companyLogo}
            alt="tsys"
            width={30}
            height={30}
            className="rounded-md"
          />
        ) : (
          <School className="text-muted-foreground" />
        )}
        <h1 className="font-bold">{experience.companyName}</h1>
        {experience.isCurrentEmployer && (
          <span className="relative flex items-center justify-center">
            <span className="bg-info absolute inline-flex size-3 animate-ping rounded-full opacity-50" />
            <span className="bg-info relative inline-flex size-2 rounded-full" />
            <span className="sr-only">Current Employer</span>
          </span>
        )}
      </div>
      <div className="before:bg-border relative space-y-4 before:absolute before:left-3 before:h-full before:w-px">
        {experience.positions.map((position: Position) => {
          return <PostitionItem position={position} key={position.id} />;
        })}
      </div>
    </div>
  );
};
export default ExperienceItem;
