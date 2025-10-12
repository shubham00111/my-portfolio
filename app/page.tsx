"use client";
import Header from "@/components/header/Header";
import headerLogo from "@/app/assets/header-logo-light.svg";
import profileImage from "@/app/assets/profile_pic.png";
import Image from "next/image";
import SectionDivider from "@/components/SectionDivider";
import { inter } from "@/app/fonts";
import { CodeXml, MapIcon } from "lucide-react";
import IconDescription from "@/components/IconDescription";
import { user } from "./data/user";
import LinksSection from "@/components/LinksSection";
import AboutMe from "@/components/AboutSection";
import StackSection from "@/components/StackSection";
import ExperienceSection from "@/components/ExperienceSection";

export default function Portfolio() {
  return (
    <div className="border-1-[transparent] screen-line-after overflow-x-hidden px-2">
      <div className="pattern-bg border-x-[var(--border) mx-auto max-w-3xl border-x-1 px-2 select-none">
        <div className="mx-auto w-40 md:w-50">
          <Image src={headerLogo} alt="" className="rounded-full" />
        </div>
      </div>
      <div className="screen-line-before mx-auto flex max-w-3xl border-x-1 border-x-[var(--border)]">
        <div className="w-20 border-r p-0.5 md:w-30 xl:w-45">
          <Image
            src={profileImage}
            alt="profile_pic"
            className="ring-border rounded-full ring ring-offset-2 select-none"
          />
        </div>
        <div className="flex flex-1 flex-col">
          <div className="grow bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px]"></div>
          <div className="border-t p-2 text-2xl font-bold">Shubham Rawat</div>
          <div className="border-t p-2 text-gray-600">Front End Developer</div>
        </div>
      </div>
      <SectionDivider />
      <div className="screen-line-before">
        <div className={`mx-auto h-full max-w-3xl border-x p-5`}>
          {user.about?.map(({ icon, title }: any, index) => (
            <IconDescription key={index} icon={icon} title={title} />
          ))}
        </div>
      </div>
      <SectionDivider />
      <LinksSection />
      <SectionDivider lineBefore={false} />
      <AboutMe />
      <SectionDivider />
      <StackSection />
      <SectionDivider />
      <ExperienceSection />
      <SectionDivider />
    </div>
  );
}
