"use client";
import React from "react";
import SectionDivider from "./SectionDivider";
import SectionContainer from "./section/SectionContainer";
import SectionContent from "./section/SectionContent";
import BrandImage from "./BrandImage";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Footer = () => {
  return (
    <div className="px-2">
      <div className="pattern-bg border-x-[var(--border) mx-auto max-w-3xl border-x-1 px-2 [--pattern-foreground:var(--color-edge)]/56">
        <div className="mx-auto w-20 px-2 md:w-50">
          <BrandImage />
        </div>
      </div>
      <SectionDivider />
      <SectionContainer className="screen-line-before screen-line-after">
        <SectionContent className="text-muted-foreground text-md flex items-center justify-center gap-2">
          <p>Inspired by</p>
          <Link
            href="https://chanhdai.com/"
            className={cn("hover:underline", "underline-offset-3")}
          >
            {"ncdai"}
          </Link>
          <p>&</p>
          <Link
            href="https://ui.shadcn.com/"
            className={cn("line-heig underline-offset-3 hover:underline")}
          >
            {"ui.shadcn.com"}
          </Link>
        </SectionContent>
      </SectionContainer>
    </div>
  );
};

export default Footer;
