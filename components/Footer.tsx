import Image from "next/image";
import React from "react";
import headerLogo from "@/app/assets/header-logo-light.svg";
import SectionDivider from "./SectionDivider";
import SectionContainer from "./section/SectionContainer";
import SectionTitle from "./section/SectionTitle";
import SectionContent from "./section/SectionContent";

const Footer = () => {
  return (
    <div className="px-2">
      <div className="pattern-bg border-x-[var(--border) mx-auto max-w-3xl border-x-1 px-2 [--pattern-foreground:var(--color-edge)]/56">
        <div className="mx-auto w-20 px-2 md:w-50">
          <Image src={headerLogo} alt="" className="rounded-full" />
        </div>
      </div>
      <SectionDivider />
      <SectionContainer className="screen-line-before screen-line-after">
        <SectionContent className="text-center">
          Inspired by ncdai & ui.shadcn.com.
        </SectionContent>
      </SectionContainer>
    </div>
  );
};

export default Footer;
