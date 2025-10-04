import React from "react";
import SectionTitle from "./section/SectionTitle";
import SectionContainer from "./section/SectionContainer";
import SectionContent from "./section/SectionContent";
import { EXPERIENCES } from "@/app/data/experience";
import ExperienceItem from "./experience/ExperienceItem";

const ExperienceSection = () => {
  return (
    <SectionContainer>
      <SectionTitle title="Experience" />
      <SectionContent>
        {EXPERIENCES.map((experience, index) => {
          return (
            <div
              className={`${
                index !== EXPERIENCES.length - 1 && "screen-line-after"
              }`}
              key={experience.id}
            >
              <ExperienceItem experience={experience} />
            </div>
          );
        })}
      </SectionContent>
    </SectionContainer>
  );
};

export default ExperienceSection;
