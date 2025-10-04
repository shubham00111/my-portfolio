"use client";
import { SOCIAL_LINKS } from "@/app/data/Socials";
import { SocialLink } from "@/app/data/Socials";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const LinksSection = () => {
  return (
    <div className="relative  screen-line-before">
      <div className="pointer-events-none absolute inset-0 -z-1 grid grid-cols-1 gap-4 max-sm:hidden sm:grid-cols-2">
        <div className="border-r border-edge"></div>
        <div className="border-l border-edge"></div>
      </div>
      <div className="max-w-3xl mx-auto grid grid-cols-2 gap-4 border-x-1">
        {SOCIAL_LINKS.map(
          ({ icon, title, description, href }: SocialLink, index) => {
            return (
              <Link href={href} key={index} target="_blank">
                <div className="group  screen-line-before screen-line-after p-3 flex gap-3 relative">
                  <div className="absolute top-1/2 -translate-y-1/2 right-2 ">
                    <ArrowUpRight size={15} color="var(--muted-foreground)" />
                  </div>
                  <div className="">
                    <Image
                      src={icon}
                      color="var(--muted-foreground)"
                      alt={description}
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="flex flex-col ">
                    <h2 className="group-hover:underline underline-offset-3 font-bold">
                      {title}
                    </h2>
                    <h3 className="text-[var(--muted-foreground)]">
                      {description}
                    </h3>
                  </div>
                </div>
              </Link>
            );
          }
        )}
      </div>
    </div>
  );
};

export default LinksSection;
