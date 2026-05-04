import { SOCIAL_LINKS } from "@/app/data/Socials";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const LinksSection = () => {
  return (
    <section id="connect">
      <div className="screen-line-bottom px-5 py-6">
        <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-1">
          06
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Connect
        </h2>
      </div>

      <div className="px-5 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {SOCIAL_LINKS.map(({ icon, title, description, href }) => (
            <Link
              key={title}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="nb-card-hover p-4 flex items-center gap-4"
            >
              <div className="size-10 shrink-0 rounded-lg border border-border overflow-hidden bg-muted flex items-center justify-center">
                <Image
                  src={icon}
                  alt={title}
                  width={28}
                  height={28}
                  className="object-contain"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-sm">{title}</p>
                <p className="text-muted-foreground text-xs truncate">
                  {description}
                </p>
              </div>
              <ArrowUpRight
                size={16}
                className="shrink-0 text-muted-foreground"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LinksSection;
