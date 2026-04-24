"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
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
import type { Activity } from "./kibo-ui/contribution-graph";

const GITHUB_USERNAME = "shubham00111";

const ContributionSection = () => {
  const [data, setData] = useState<Activity[]>([]);

  useEffect(() => {
    (async () => {
      const res = await fetch(
        `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`,
      );
      const json = await res.json();
      setData(json.contributions);
    })();
  }, []);

  const totalCount = data.reduce((sum, d) => sum + d.count, 0);

  return (
    <section id="contributions" className="border-b-3 border-foreground">
      <div className="mx-auto max-w-5xl px-5 py-16">
        <p className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-2">
          05
        </p>
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-10">
          Contributions
        </h2>

        <div className="nb-card flex flex-col md:flex-row">
          {/* Graph column */}
          <div className="flex-1 min-w-0 p-5">
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
                    className="no-scrollbar pt-1 [&_svg]:w-full [&_svg]:h-auto"
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
                      {({ totalCount: count, year }) => (
                        <p className="text-sm text-muted-foreground">
                          {count.toLocaleString("en")} contributions in {year} on{" "}
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

          {/* Context panel */}
          <div className="border-t-3 md:border-t-0 md:border-l-3 border-foreground w-full md:w-52 shrink-0 p-5 flex flex-col gap-5 bg-[#faf7f0] dark:bg-zinc-900">
            {/* Total count callout */}
            <div>
              <p className="text-5xl font-black leading-none text-foreground">
                {data.length > 0 ? totalCount : "—"}
              </p>
              <p className="text-xs font-black uppercase tracking-widest text-muted-foreground mt-1">
                Public contributions
              </p>
            </div>

            <div className="h-px bg-foreground/15" />

            {/* Context note */}
            <p className="text-xs text-muted-foreground leading-relaxed">
              Most day-to-day work lives in{" "}
              <span className="font-bold text-foreground">private TSYS repos</span>
              . This graph reflects personal and open-source activity only.
            </p>

            {/* GitHub CTA */}
            <a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto nb-btn-secondary px-3 py-2 text-xs justify-between"
            >
              View on GitHub
              <ArrowUpRight size={13} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContributionSection;
