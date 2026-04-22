import { SOCIAL_LINKS } from "@/app/data/Socials";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const CARD_ACCENTS = [
  "hover:bg-[#ff90e8]",
  "hover:bg-[#ffde59]",
  "hover:bg-[#72ef36]",
  "hover:bg-[#99c7fb]",
];

const LinksSection = () => {
  return (
    <section id="connect" className="border-b-3 border-foreground">
      <div className="mx-auto max-w-5xl px-5 py-16">
        <p className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-2">
          05
        </p>
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-10">
          Connect
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {SOCIAL_LINKS.map(({ icon, title, description, href }, index) => (
            <Link
              key={title}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`nb-card-hover p-4 group flex items-center gap-4 bg-card ${CARD_ACCENTS[index % CARD_ACCENTS.length]}`}
            >
              <div className="size-11 shrink-0 border-3 border-foreground overflow-hidden bg-muted flex items-center justify-center">
                <Image
                  src={icon}
                  alt={title}
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-black text-sm">{title}</p>
                <p className="text-muted-foreground text-xs truncate">
                  {description}
                </p>
              </div>
              <ArrowUpRight
                size={18}
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
