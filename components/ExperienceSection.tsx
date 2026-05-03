import { EXPERIENCES, Position } from "@/app/data/experience";
import Image from "next/image";
import { Award, GraduationCap } from "lucide-react";

const WorkCard = ({ position }: { position: Position }) => (
  <div className="nb-card p-6">
    {/* Header */}
    <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-3 mb-1.5 flex-wrap">
          {position.logo && (
            <Image
              src={position.logo}
              alt={position.company}
              width={24}
              height={24}
              className="rounded border border-border object-contain shrink-0"
            />
          )}
          <h3 className="font-semibold text-base leading-tight">{position.company}</h3>
          {position.acquisitionNote && (
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium">
              <Image
                src={position.acquisitionNote.logo}
                alt="FIS Global"
                width={22}
                height={22}
                className="rounded border border-border object-contain shrink-0"
              />
              {position.acquisitionNote.text}
            </span>
          )}
          {position.isCurrent && (
            <span className="border border-border bg-muted px-2 py-0.5 text-xs font-medium rounded-full text-muted-foreground shrink-0">
              Current
            </span>
          )}
        </div>
        <p className="font-medium text-base">{position.title}</p>
        <p className="text-muted-foreground text-sm mt-0.5">
          {position.period}
          {position.employmentType && ` · ${position.employmentType}`}
          {position.location && ` · ${position.location}`}
        </p>
      </div>
    </div>

    {/* Bullets */}
    <ul className="space-y-2 mb-5">
      {position.description.map((item, i) => (
        <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground">
          <span className="text-foreground/40 mt-0.5 shrink-0 select-none">–</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>

    {/* Award */}
    {position.award && (
      <div className="flex items-start gap-2.5 mb-5 border border-border rounded-lg bg-muted p-3">
        <Award size={15} className="shrink-0 mt-0.5 text-muted-foreground" />
        <p className="text-sm text-foreground">{position.award}</p>
      </div>
    )}

    {/* Skills */}
    <div className="flex flex-wrap gap-2">
      {position.skills.map((skill) => (
        <span key={skill} className="nb-tag">
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const EducationCard = ({ position }: { position: Position }) => (
  <div className="nb-card p-5">
    <div className="flex items-start gap-3">
      {position.logo ? (
        <Image
          src={position.logo}
          alt={position.company}
          width={24}
          height={24}
          className="rounded border border-border object-contain shrink-0 mt-0.5"
        />
      ) : (
        <GraduationCap
          size={20}
          className="shrink-0 mt-0.5 text-muted-foreground"
        />
      )}
      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-center gap-2 mb-0.5">
          <h3 className="font-semibold text-base">{position.company}</h3>
          {position.grade && (
            <span className="border border-border bg-muted px-2 py-0.5 text-xs font-medium rounded-full text-muted-foreground">
              {position.grade}
            </span>
          )}
        </div>
        <p className="font-medium text-sm">{position.degree}</p>
        <p className="text-muted-foreground text-sm">{position.period}{position.location && ` · ${position.location}`}</p>
        {position.description.map((item, i) => (
          <p key={i} className="text-sm text-muted-foreground mt-2 leading-relaxed">
            {item}
          </p>
        ))}
      </div>
    </div>
  </div>
);

const ExperienceSection = () => {
  const workExperience = EXPERIENCES.filter((p) => p.type === "work");
  const education = EXPERIENCES.filter((p) => p.type === "education");

  return (
    <section id="experience" className="border-b border-border">
      <div className="mx-auto max-w-5xl px-5 py-16">
        <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-2">
          03
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-10">
          Experience
        </h2>

        <div className="space-y-5 mb-12">
          {workExperience.map((position) => (
            <WorkCard key={position.id} position={position} />
          ))}
        </div>

        <h3 className="text-lg font-semibold tracking-tight border-b border-border pb-3 mb-5">
          Education
        </h3>
        <div className="space-y-4">
          {education.map((position) => (
            <EducationCard key={position.id} position={position} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
