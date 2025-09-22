import React from "react";
import SectionTitle from "./section/SectionTitle";
import SectionContainer from "./section/SectionContainer";
import SectionContent from "./section/SectionContent";
import { TECH_STACK, TechStack } from "@/app/data/tech-stack";
import Image from "next/image";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

const TooltipWrapper = ({
  component,
  tooltipContent,
}: {
  component: React.ReactNode;
  tooltipContent: React.ReactNode;
}) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>{component}</TooltipTrigger>
      <TooltipContent>{tooltipContent}</TooltipContent>
    </Tooltip>
  );
};

const StackSection = () => {
  return (
    <SectionContainer>
      <SectionTitle title="Stack" />
      <SectionContent className="pattern-bg">
        <div className="px-4 flex flex-wrap gap-5 py-2 ">
          {TECH_STACK.map(
            ({ categories, href, key, title, theme }: TechStack) => {
              const component = (
                <Link href={href} key={key}>
                  <Image
                    src={`/stack_icons/${key}${
                      theme != undefined ? (theme ? "-light" : "-dark") : ""
                    }.svg`}
                    width={45}
                    height={45}
                    alt="key"
                  />
                </Link>
              );
              return (
                <TooltipWrapper
                  tooltipContent={<h1 className="text-[14px]">{title}</h1>}
                  component={component}
                />
              );
            }
          )}
        </div>
      </SectionContent>
    </SectionContainer>
  );
};

export default StackSection;
