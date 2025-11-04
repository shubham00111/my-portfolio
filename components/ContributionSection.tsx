"use client";
import React, { useEffect, useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
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
import SectionTitle from "./section/SectionTitle";
import SectionContent from "./section/SectionContent";

const ContributionSection = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const githubData = await fetch(
        `https://github-contributions-api.jogruber.de/v4/${"shubham00111"}?y=last`,
      );
      const response = await githubData.json();
      console.log(response);
      setData(response.contributions);
    })();
  }, []);

  return (
    <SectionContainer>
      <SectionContent className="screen-line-before py-2">
        <TooltipProvider>
          <ContributionGraph
            data={data}
            blockMargin={3}
            blockSize={11}
            fontSize={14}
            blockRadius={0}
          >
            <ContributionGraphCalendar
              className="no-scrollbar px-2 pt-2"
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
            <ContributionGraphFooter className="px-2">
              <ContributionGraphTotalCount>
                {({ totalCount, year }) => (
                  <div className="text-muted-foreground">
                    {totalCount.toLocaleString("en")} contributions in {year} on{" "}
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
      </SectionContent>
    </SectionContainer>
  );
};

export default ContributionSection;
