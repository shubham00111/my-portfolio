import { user } from "@/app/data/user";

const AboutSection = () => {
  return (
    <section id="about" className="border-b-3 border-foreground">
      <div className="mx-auto max-w-5xl px-5 py-16">
        <p className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-2">
          01
        </p>
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-10">
          About
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Bio */}
          <div className="md:col-span-2 space-y-4">
            <p className="text-base leading-relaxed font-medium">{user.bio}</p>
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
              <div key={label} className="border-3 border-foreground p-3 bg-muted">
                <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-0.5">
                  {label}
                </p>
                {href ? (
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="font-semibold text-sm hover:text-[#ff90e8] transition-colors break-all"
                  >
                    {value}
                  </a>
                ) : (
                  <p className="font-semibold text-sm">{value}</p>
                )}
              </div>
            ))}

            {/* Status badge */}
            <div className="border-3 border-foreground bg-[#72ef36] p-3 shadow-[3px_3px_0px_0px_#000]">
              <p className="text-[10px] font-black uppercase tracking-widest mb-0.5">
                Status
              </p>
              <p className="font-black text-sm flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-black animate-pulse shrink-0" />
                Open to opportunities
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
