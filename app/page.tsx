"use client";
import Header from "@/components/Header";
import headerLogo from "@/app/assets/header-logo-light.svg";
import profileImage from "@/app/assets/profile_pic.png";
import Image from "next/image";
import SectionDivider from "@/components/SectionDivider";
import { inter } from "@/app/fonts";
import { CodeXml, MapIcon } from "lucide-react";
import IconDescription from "@/components/IconDescription";
import { user } from "./data/user";
import LinksSection from "@/components/LinksSection";

export default function Portfolio() {
  {
    console.log(user.about);
  }
  return (
    <div className="max-w-screen border-1-[transparent] screen-line-after ">
      <div className="max-w-3xl mx-auto pattern-bg  border-x-1 border-x-[var(--border)">
        <div className="mx-auto w-20 md:w-60">
          <Image src={headerLogo} alt="" className="rounded-full" />
        </div>
      </div>
      <div className="max-w-3xl flex mx-auto screen-line-before border-x-1 border-x-[var(--border)]">
        <div className="border-r p-0.5 md:w-45">
          <Image
            src={profileImage}
            alt="profile_pic"
            className="rounded-full ring ring-border ring-offset-2"
          />
        </div>
        <div className="flex flex-1 flex-col ">
          <div className="grow bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] "></div>
          <div className="border-t text-2xl p-2 font-bold">Shubham Rawat</div>
          <div className="p-2 border-t text-gray-600">Front End Developer</div>
        </div>
      </div>
      <SectionDivider />
      <div className="w-full  screen-line-before">
        <div className={`mx-auto h-full border-x max-w-3xl p-5 `}>
          {user.about?.map(({ icon, title }: any, index) => (
            <IconDescription key={index} icon={icon} title={title} />
          ))}
        </div>
      </div>
      <SectionDivider />
      <LinksSection />
    </div>
  );
}
