import React from "react";
import SectionTitle from "./section/SectionTitle";
import SectionContainer from "./section/SectionContainer";
import SectionContent from "./section/SectionContent";
import Image from "next/image";

const ExperienceSection = () => {
  return (
    <SectionContainer>
      <SectionTitle title="Experience" />
      <SectionContent>
        <div className="flex gap-3 items-center">
          <Image
            src={"/experience/tsys.jpg"}
            alt="tsys"
            width={30}
            height={30}
            className="rounded-md"
          />
          <h1 className="font-bold">TSYS</h1>
          <span className="relative flex items-center justify-center">
            <span className="absolute inline-flex size-3 animate-ping rounded-full bg-info opacity-50" />
            <span className="relative inline-flex size-2 rounded-full bg-info" />
            <span className="sr-only">Current Employer</span>
          </span>
        </div>
      </SectionContent>
    </SectionContainer>
  );
};

export default ExperienceSection;
