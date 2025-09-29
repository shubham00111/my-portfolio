import React from "react";
import SectionTitle from "./section/SectionTitle";
import SectionContainer from "./section/SectionContainer";
import SectionContent from "./section/SectionContent";
import Image from "next/image";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "./ui/button";
import { ChevronsUpDown } from "lucide-react";
import { EXPERIENCES } from "@/app/data/experience";
import ExperienceItem from "./experience/ExperienceItem";

const ExperienceSection = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <SectionContainer>
      <SectionTitle title="Experience" />
      <SectionContent>
        {EXPERIENCES.map((experience) => {
          return (
            <div className="screen-line-after" key={experience.id}>
              <ExperienceItem experience={experience} />
            </div>
          );
        })}
      </SectionContent>
    </SectionContainer>
  );
};

export default ExperienceSection;
