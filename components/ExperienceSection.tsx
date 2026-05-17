"use client";

import { EXPERIENCES, Position } from "@/app/data/experience";
import Image from "next/image";
import { Award, GraduationCap } from "lucide-react";
import { SkillChip } from "@/components/SkillChip";

const WorkCard = ({ position }: { position: Position }) => (
  <div>
    {/* Header */}
    <div className="mb-4 flex items-start justify-between gap-4">
      <div className="min-w-0 flex-1">
        <div className="mb-1 flex flex-wrap items-center gap-2.5">
          {position.logo && (
            <Image
              src={position.logo}
              alt={position.company}
              width={22}
              height={22}
              className="border-border shrink-0 rounded border object-contain"
            />
          )}
          <h3 className="text-xl leading-tight font-bold">
            {position.company}
          </h3>
          {position.acquisitionNote && (
            <span className="text-muted-foreground flex items-center gap-1.5 text-xs font-medium">
              <Image
                src={position.acquisitionNote.logo}
                alt="FIS Global"
                width={16}
                height={16}
                className="border-border shrink-0 rounded border object-contain"
              />
              {position.acquisitionNote.text}
            </span>
          )}
          {position.isCurrent && (
            <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-green-300 bg-green-50 px-2.5 py-0.5 text-xs font-medium text-green-700 dark:border-green-800 dark:bg-green-950/40 dark:text-green-400">
              <span className="h-1.5 w-1.5 shrink-0 animate-pulse rounded-full bg-green-500" />
              Working
            </span>
          )}
        </div>
        <p className="text-muted-foreground text-sm">{position.title}</p>
      </div>

      <div className="text-muted-foreground shrink-0 text-right text-sm">
        <p>{position.period}</p>
        {position.location && (
          <p>
            {position.location}
            {position.employmentType && ` · ${position.employmentType}`}
          </p>
        )}
      </div>
    </div>

    {/* Divider */}
    <div className="border-border -mx-5 mb-6 border-t" />

    {/* Technologies & Tools */}
    <p className="mb-3 text-sm font-bold">Technologies &amp; Tools</p>
    <div className="mb-6 flex flex-wrap gap-2">
      {position.skills.map((skill) => (
        <SkillChip key={skill} label={skill} />
      ))}
    </div>

    {/* What I've done */}
    <p className="mb-3 text-sm font-bold">What I&apos;ve done</p>
    <ul className="space-y-2">
      {position.description.map((item, i) => (
        <li
          key={i}
          className="text-muted-foreground flex gap-2.5 text-sm leading-relaxed"
        >
          <span className="text-foreground/40 mt-0.5 shrink-0 select-none">
            ▪
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>

    {/* Award */}
    {position.award && (
      <div className="border-border bg-muted mt-5 flex items-start gap-2.5 rounded-lg border p-3">
        <Award
          size={15}
          className="mt-0.5 shrink-0 text-yellow-400 drop-shadow-[0_0_4px_rgba(250,204,21,0.6)]"
        />
        <p className="text-foreground text-sm">{position.award}</p>
      </div>
    )}
  </div>
);

const EducationCard = ({ position }: { position: Position }) => (
  <div>
    <div className="mb-4 flex items-start justify-between gap-4">
      <div className="min-w-0 flex-1">
        <div className="mb-1 flex flex-wrap items-center gap-2.5">
          {position.logo ? (
            <Image
              src={position.logo}
              alt={position.company}
              width={22}
              height={22}
              className="border-border shrink-0 rounded border object-contain"
            />
          ) : (
            <GraduationCap
              size={18}
              className="text-muted-foreground shrink-0"
            />
          )}
          <h3 className="text-xl leading-tight font-bold">
            {position.company}
          </h3>
          {position.grade && (
            <span className="border-border bg-muted text-muted-foreground rounded-full border px-2 py-0.5 text-xs font-medium">
              {position.grade}
            </span>
          )}
        </div>
        <p className="text-muted-foreground text-sm">{position.degree}</p>
      </div>
      <div className="text-muted-foreground shrink-0 text-right text-sm">
        <p>{position.period}</p>
        {position.location && <p>{position.location}</p>}
      </div>
    </div>

    <div className="border-border -mx-5 mb-5 border-t" />

    <ul className="space-y-2">
      {position.description.map((item, i) => (
        <p key={i} className="text-muted-foreground text-sm leading-relaxed">
          {item}
        </p>
      ))}
    </ul>
  </div>
);

const ExperienceSection = () => {
  const workExperience = EXPERIENCES.filter((p) => p.type === "work");
  const education = EXPERIENCES.filter((p) => p.type === "education");

  return (
    <section id="experience">
      <div className="screen-line-bottom px-5 py-6">
        <p className="text-muted-foreground mb-1 text-xs font-medium tracking-widest uppercase">
          01
        </p>
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          Experience
        </h2>
      </div>

      <div className="px-5 py-10">
        <div className="mb-14 space-y-12">
          {workExperience.map((position) => (
            <WorkCard key={position.id} position={position} />
          ))}
        </div>

        <h3 className="border-border -mx-5 mb-8 border-b pb-3 text-lg font-semibold tracking-tight">
          <span className="mx-5">Education</span>
        </h3>
        <div className="space-y-10">
          {education.map((position) => (
            <EducationCard key={position.id} position={position} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
