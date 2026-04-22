import { SKILL_CATEGORIES } from "@/app/data/tech-stack";

const CATEGORY_COLORS: Record<string, string> = {
  Languages: "bg-[#ff90e8]",
  Frontend: "bg-[#ffde59]",
  Backend: "bg-[#72ef36]",
  Testing: "bg-[#ffc59b]",
  "Cloud & DevOps": "bg-[#99c7fb]",
  Tools: "bg-[#c9b1ff]",
};

const StackSection = () => {
  return (
    <section id="skills" className="border-b-3 border-foreground">
      <div className="mx-auto max-w-5xl px-5 py-16">
        <p className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-2">
          02
        </p>
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-10">
          Skills
        </h2>

        <div className="space-y-5">
          {SKILL_CATEGORIES.map(({ label, skills }) => {
            const colorClass = CATEGORY_COLORS[label] ?? "bg-[#f4f4f0]";
            return (
              <div
                key={label}
                className="grid sm:grid-cols-4 gap-3 items-start"
              >
                <div className="sm:col-span-1">
                  <span
                    className={`${colorClass} border-3 border-foreground px-3 py-1.5 text-xs font-black uppercase tracking-wide shadow-[2px_2px_0px_0px_#000] inline-block`}
                  >
                    {label}
                  </span>
                </div>
                <div className="sm:col-span-3 flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span key={skill} className="nb-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StackSection;
