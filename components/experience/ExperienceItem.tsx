import { Experience } from "@/app/data/experience";
import Image from "next/image";
import React from "react";
import PostitionItem from "./PostitionItem";
import { Position } from "@/app/data/experience";

const ExperienceItem = ({ experience }: { experience: Experience }) => {
  return (
    <>
      <div className="flex gap-3 items-center screen">
        <Image
          src={experience.companyLogo}
          alt="tsys"
          width={30}
          height={30}
          className="rounded-md"
        />
        <h1 className="font-bold">{experience.companyName}</h1>
        {experience.isCurrentEmployer && (
          <span className="relative flex items-center justify-center">
            <span className="absolute inline-flex size-3 animate-ping rounded-full bg-info opacity-50" />
            <span className="relative inline-flex size-2 rounded-full bg-info" />
            <span className="sr-only">Current Employer</span>
          </span>
        )}
      </div>
      <div>
        {experience.positions.map((position: Position) => {
          return <PostitionItem position={position} key={position.id} />;
        })}
      </div>
    </>
  );
};
export default ExperienceItem;
