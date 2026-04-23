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
      <section className="border-b-3 border-foreground">
        <div className="mx-auto max-w-5xl px-5 py-16">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-bold mb-8 hover:text-[#ff90e8] dark:hover:text-[#c96ab8] transition-colors"
          >
            <ArrowLeft size={14} />
            Back to portfolio
          </Link>

          <p className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-2">
            Writing
          </p>
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-3">
            Blog
          </h1>
          <p className="text-muted-foreground font-medium text-sm mb-10">
            Engineering notes on frontend, cloud, and GenAI tooling. Posts coming soon.
          </p>

          <div className="space-y-4">
            {PLANNED_POSTS.map(({ title, description, tags, color }) => (
              <div key={title} className="nb-card flex flex-col sm:flex-row">
                {/* Color accent strip */}
                <div
                  className={`${color} border-b-3 sm:border-b-0 sm:border-r-3 border-foreground w-full sm:w-2 shrink-0`}
                />

                <div className="flex-1 p-5 flex flex-col sm:flex-row items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <h2 className="font-black text-base mb-2 leading-snug">{title}</h2>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">
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

                  <span className="shrink-0 inline-flex items-center gap-1.5 border-3 border-foreground px-3 py-1.5 text-xs font-black bg-muted text-muted-foreground shadow-[2px_2px_0px_0px_#000] dark:shadow-[2px_2px_0px_0px_rgba(240,240,240,0.6)]">
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
