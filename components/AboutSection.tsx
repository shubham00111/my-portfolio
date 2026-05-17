import { user } from "@/app/data/user";

const AboutSection = () => {
  return (
    <section id="about">
      <div className="screen-line-bottom px-5 py-6">
        <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-1">
          02
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          About
        </h2>
      </div>

      <div className="px-5 py-10">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Bio */}
          <div className="md:col-span-2 space-y-4">
            <p className="text-base leading-relaxed">{user.bio}</p>
            <p className="text-muted-foreground leading-relaxed text-sm">
              I thrive at the intersection of design and engineering — building
              systems that are fast, accessible, and a joy to maintain. Beyond
              React and TypeScript, I have hands-on AWS cloud experience and
              have led GenAI tooling initiatives that measurably moved the
              needle.
            </p>
          </div>

          {/* Info cards */}
          <div className="space-y-2">
            {[
              { label: "Email", value: user.email, href: `mailto:${user.email}` },
              { label: "Location", value: user.location },
              { label: "Experience", value: "3.5 Years" },
              { label: "Website", value: user.website, href: `https://${user.website}` },
            ].map(({ label, value, href }) => (
              <div key={label} className="border border-border rounded-lg p-3 bg-card">
                <p className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground mb-0.5">
                  {label}
                </p>
                {href ? (
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="font-medium text-sm hover:underline underline-offset-2 break-all"
                  >
                    {value}
                  </a>
                ) : (
                  <p className="font-medium text-sm">{value}</p>
                )}
              </div>
            ))}

            {/* Status badge */}
            <div className="border border-border rounded-lg p-3 bg-card">
              <p className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground mb-0.5">
                Status
              </p>
              <p className="font-medium text-sm flex items-start gap-2">
                <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse shrink-0 mt-1" />
                <span>Open to SDE-2 / Senior Frontend — remote or hybrid (Noida · Gurgaon · Bengaluru)</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
