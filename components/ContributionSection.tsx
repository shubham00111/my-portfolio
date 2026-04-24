"use client";

import { useEffect, useState } from "react";
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
import { Spinner } from "./ui/spinner";

const GITHUB_USERNAME = "shubham00111";

const ContributionSection = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch(
        `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`,
      );
      const json = await res.json();
      setData(json.contributions);
    })();
  }, []);

  return (
    <section id="contributions" className="border-b-3 border-foreground">
      <div className="mx-auto max-w-5xl px-5 py-16">
        <p className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-2">
          05
        </p>
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-10">
          Contributions
        </h2>

        <div className="nb-card p-5 overflow-x-auto">
          {data.length > 0 ? (
            <TooltipProvider>
              <ContributionGraph
                data={data}
                blockMargin={2}
                blockSize={12}
                fontSize={12}
                blockRadius={0}
              >
                <ContributionGraphCalendar
                  className="no-scrollbar pt-1"
                  title="GitHub Contributions"
                >
                  {({ activity, dayIndex, weekIndex }) => (
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <g>
                          <ContributionGraphBlock
                            className="stroke-foreground/10 stroke-[0.5px]"
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
                      <p className="text-sm text-muted-foreground">
                        {totalCount.toLocaleString("en")} contributions in{" "}
                        {year} on{" "}
                        <a
                          href={`https://github.com/${GITHUB_USERNAME}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-bold underline underline-offset-2"
                        >
                          GitHub
                        </a>
                        .
                      </p>
                    )}
                  </ContributionGraphTotalCount>
                  <ContributionGraphLegend />
                </ContributionGraphFooter>
              </ContributionGraph>
            </TooltipProvider>
          ) : (
            <div className="flex h-32 items-center justify-center">
              <Spinner className="size-8" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContributionSection;
