import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";

const PLANNED_POSTS = [
  {
    title: "How we migrated legacy apps from on-prem to S3 + CloudFront",
    description:
      "A walkthrough of the AWS migration strategy, IaC decisions, and the 80% infrastructure cost reduction we achieved at TSYS.",
    tags: ["AWS", "S3", "CloudFront", "DevOps"],
    color: "bg-[#99c7fb] dark:bg-[#5898d8]",
  },
  {
    title: "Building Figma-to-Code with MCP server and GenAI",
    description:
      "How we used Claude's MCP server to parse Figma designs and auto-generate production React/TypeScript components — cutting design-to-code effort by 60%.",
    tags: ["GenAI", "MCP", "React", "Figma", "Claude"],
    color: "bg-[#ff90e8] dark:bg-[#c96ab8]",
  },
  {
    title: "Lessons from shipping a design system adopted org-wide",
    description:
      "What worked, what didn't, and how we got cross-team buy-in for a shared component library built with Storybook at TSYS.",
    tags: ["Design System", "Storybook", "React", "TypeScript"],
    color: "bg-[#ffde59] dark:bg-[#c9a830]",
  },
];

const BlogPage = () => {
  return (
    <main>
      <section className="border-foreground border-b-3">
        <div className="mx-auto max-w-4xl px-5 py-16">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-sm font-bold transition-colors hover:text-[#ff90e8] dark:hover:text-[#c96ab8]"
          >
            <ArrowLeft size={14} />
            Back to portfolio
          </Link>

          <p className="text-muted-foreground mb-2 text-xs font-black tracking-widest uppercase">
            Writing
          </p>
          <h1 className="mb-3 text-4xl font-black tracking-tight uppercase md:text-5xl">
            Blog
          </h1>
          <p className="text-muted-foreground mb-10 text-sm font-medium">
            Engineering notes on frontend, cloud, and GenAI tooling. Posts
            coming soon.
          </p>

          <div className="space-y-4">
            {PLANNED_POSTS.map(({ title, description, tags, color }) => (
              <div key={title} className="nb-card flex flex-col sm:flex-row">
                {/* Color accent strip */}
                <div
                  className={`${color} border-foreground w-full shrink-0 border-b-3 sm:w-2 sm:border-r-3 sm:border-b-0`}
                />

                <div className="flex flex-1 flex-col items-start justify-between gap-4 p-5 sm:flex-row">
                  <div className="min-w-0 flex-1">
                    <h2 className="mb-2 text-base leading-snug font-black">
                      {title}
                    </h2>
                    <p className="text-muted-foreground mb-3 text-sm leading-relaxed">
                      {description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {tags.map((t) => (
                        <span key={t} className="nb-tag text-[10px]">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <span className="border-foreground bg-muted text-muted-foreground inline-flex shrink-0 items-center gap-1.5 border-3 px-3 py-1.5 text-xs font-black shadow-[2px_2px_0px_0px_#000] dark:shadow-[2px_2px_0px_0px_rgba(240,240,240,0.6)]">
                    <Clock size={11} />
                    Coming soon
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default BlogPage;
