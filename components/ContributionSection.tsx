"use client";
import React, { useEffect, useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { LoaderIcon } from "lucide-react";
import {
  ContributionGraph,
  ContributionGraphBlock,
  ContributionGraphCalendar,
  ContributionGraphFooter,
  ContributionGraphLegend,
  ContributionGraphTotalCount,
} from "./kibo-ui/contribution-graph";
import { eachDayOfInterval, endOfYear, formatISO, startOfYear } from "date-fns";
import SectionContainer from "./section/SectionContainer";
import { Spinner } from "./ui/spinner";
import SectionContent from "./section/SectionContent";

const ContributionSection = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const githubData = await fetch(
        `https://github-contributions-api.jogruber.de/v4/${"shubham00111"}?y=last`,
      );
      const response = await githubData.json();
      setData(response.contributions);
    })();
  }, []);

  return (
    <SectionContainer>
      <SectionContent className="screen-line-before px-3 py-2">
        {data.length > 0 ? (
          <TooltipProvider>
            <ContributionGraph
              data={data}
              blockMargin={3}
              blockSize={11}
              fontSize={14}
              blockRadius={0}
            >
              <ContributionGraphCalendar
                className="no-scrollbar pt-2"
                title="Github Contributions"
              >
                {({ activity, dayIndex, weekIndex }) => (
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <g>
                        <ContributionGraphBlock
                          activity={activity}
                          dayIndex={dayIndex}
                          weekIndex={weekIndex}
                        />
                      </g>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="font-semibold">{activity.date}</p>
                      <p>{activity.count} contributions</p>
                    </TooltipContent>
                  </Tooltip>
                )}
              </ContributionGraphCalendar>
              <ContributionGraphFooter>
                <ContributionGraphTotalCount>
                  {({ totalCount, year }) => (
                    <div className="text-muted-foreground">
                      {totalCount.toLocaleString("en")} contributions in {year}{" "}
                      on{" "}
                      <a
                        className="font-medium underline underline-offset-4"
                        href={`https://github.com/${"shubham00111"}`}
                        target="_blank"
                        rel="noopener"
                      >
                        GitHub
                      </a>
                      .
                    </div>
                  )}
                </ContributionGraphTotalCount>
                <ContributionGraphLegend />
              </ContributionGraphFooter>
            </ContributionGraph>
          </TooltipProvider>
        ) : (
          <div className="size- flex h-30 items-center justify-center">
            <Spinner className="size-8" />
          </div>
        )}
      </SectionContent>
    </SectionContainer>
  );
};

export default ContributionSection;
