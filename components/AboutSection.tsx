import React from "react";
import { user } from "@/app/data/user";
import SectionTitle from "./section/SectionTitle";
import SectionContent from "./section/SectionContent";
import SectionContainer from "./section/SectionContainer";

const AboutMe = () => {
  return (
    <SectionContainer>
      <SectionTitle title="About" />
      <SectionContent className={"flex flex-col gap-4"}>
        {user.aboutUser.map((textContent, index) => (
          <div key={index}>{textContent}</div>
        ))}
      </SectionContent>
    </SectionContainer>
  );
};

export default AboutMe;
