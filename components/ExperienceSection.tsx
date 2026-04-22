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
              width={26}
              height={26}
              className="border-2 border-foreground object-contain shrink-0"
            />
          )}
          <h3 className="font-black text-lg leading-tight">{position.company}</h3>
          {position.acquisitionNote && (
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium">
              <Image
                src={position.acquisitionNote.logo}
                alt="FIS Global"
                width={26}
                height={26}
                className="border-2 border-foreground object-contain shrink-0"
              />
              {position.acquisitionNote.text}
            </span>
          )}
          {position.isCurrent && (
            <span className="border-3 border-foreground bg-[#ff90e8] dark:bg-[#c96ab8] px-2 py-0.5 text-xs font-black uppercase text-black shadow-[2px_2px_0px_0px_#000] dark:shadow-[2px_2px_0px_0px_rgba(240,240,240,0.6)] shrink-0">
              Current
            </span>
          )}
        </div>
        <p className="font-bold text-base">{position.title}</p>
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
        <li key={i} className="flex gap-2.5 text-sm leading-relaxed">
          <span className="text-[#ff90e8] font-black mt-0.5 shrink-0 text-base leading-none">
            →
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>

    {/* Award */}
    {position.award && (
      <div className="flex items-start gap-2.5 mb-5 border-3 border-foreground bg-[#ffde59] dark:bg-[#c9a830] p-3 shadow-[3px_3px_0px_0px_#000] dark:shadow-[3px_3px_0px_0px_rgba(240,240,240,0.6)]">
        <Award size={16} className="shrink-0 mt-0.5 text-black" />
        <p className="text-sm font-semibold text-black">{position.award}</p>
      </div>
    )}

    {/* Skills */}
    <div className="flex flex-wrap gap-2">
      {position.skills.map((skill) => (
        <span key={skill} className="nb-tag text-xs">
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
          width={26}
          height={26}
          className="border-2 border-foreground object-contain shrink-0 mt-0.5"
        />
      ) : (
        <GraduationCap
          size={22}
          className="shrink-0 mt-0.5 text-muted-foreground"
        />
      )}
      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-center gap-2 mb-0.5">
          <h3 className="font-black text-base">{position.company}</h3>
          {position.grade && (
            <span className="border-3 border-foreground bg-[#99c7fb] dark:bg-[#5898d8] px-2 py-0.5 text-xs font-black text-black shadow-[2px_2px_0px_0px_#000] dark:shadow-[2px_2px_0px_0px_rgba(240,240,240,0.6)]">
              {position.grade}
            </span>
          )}
        </div>
        <p className="font-semibold text-sm">{position.degree}</p>
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
    <section id="experience" className="border-b-3 border-foreground">
      <div className="mx-auto max-w-5xl px-5 py-16">
        <p className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-2">
          03
        </p>
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-10">
          Experience
        </h2>

        <div className="space-y-5 mb-12">
          {workExperience.map((position) => (
            <WorkCard key={position.id} position={position} />
          ))}
        </div>

        <h3 className="text-xl font-black uppercase tracking-tight border-b-3 border-foreground pb-3 mb-5">
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
