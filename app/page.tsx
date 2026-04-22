import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Download, Github, Mail, MapPin } from "lucide-react";
import profileImage from "@/app/assets/profile_pic.png";
import AboutSection from "@/components/AboutSection";
import StackSection from "@/components/StackSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContributionSection from "@/components/ContributionSection";
import LinksSection from "@/components/LinksSection";
import FloatingShapes from "@/components/FloatingShapes";
import { user } from "./data/user";

const STATS = [
  {
    value: "80%",
    label: "Infra Cost Reduction",
    bg: "bg-[#ff90e8] dark:bg-[#c96ab8]",
  },
  {
    value: "60%",
    label: "Faster Delivery",
    bg: "bg-[#ffde59] dark:bg-[#c9a830]",
  },
  {
    value: "90%",
    label: "Security Vulns Fixed",
    bg: "bg-[#72ef36] dark:bg-[#52b825]",
  },
];

export default function Portfolio() {
  return (
    <main>
      {/* ── HERO ── */}
      <section className="border-b-3 border-foreground relative overflow-hidden">
        {/* Floating decorative shapes — hidden on mobile to avoid clutter */}
        <div className="hidden md:block">
          <FloatingShapes />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-5 py-14 md:py-20">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">

            {/* Left */}
            <div className="flex-1 min-w-0">
              {/* Open-to-work badge */}
              <span className="mb-6 inline-flex items-center gap-2 border-3 border-foreground bg-[#72ef36] dark:bg-[#52b825] px-3 py-1 text-xs font-black uppercase tracking-wide text-black shadow-[2px_2px_0px_0px_#000] dark:shadow-[2px_2px_0px_0px_rgba(240,240,240,0.6)]">
                <span className="h-1.5 w-1.5 rounded-full bg-black" />
                Open to opportunities
              </span>

              {/* Name */}
              <h1 className="text-[clamp(3rem,10vw,5.5rem)] font-black leading-[0.92] tracking-tighter uppercase mt-4 mb-6">
                Shubham
                <br />
                <span className="relative inline-block">
                  Rawat
                  <span
                    className="absolute -bottom-1 left-0 h-[6px] w-full bg-[#ff90e8] dark:bg-[#c96ab8]"
                    aria-hidden
                  />
                </span>
              </h1>

              {/* Title + location */}
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="border-3 border-foreground bg-[#ff90e8] dark:bg-[#c96ab8] px-4 py-1.5 text-sm font-black uppercase tracking-wide text-black shadow-[2px_2px_0px_0px_#000] dark:shadow-[2px_2px_0px_0px_rgba(240,240,240,0.6)]">
                  Software Engineer
                </span>
                <span className="flex items-center gap-1.5 text-muted-foreground font-semibold text-sm">
                  <MapPin size={14} className="shrink-0" />
                  {user.location}
                </span>
              </div>

              {/* Stack line */}
              <p className="text-muted-foreground font-medium text-sm mb-10">
                React · TypeScript · AWS · Java Spring Boot · 3.5 Years in Fintech
              </p>

              {/* Impact stats */}
              <div className="grid grid-cols-3 gap-3 max-w-xs mb-10">
                {STATS.map(({ value, label, bg }) => (
                  <div
                    key={label}
                    className={`${bg} border-3 border-foreground p-3 shadow-[3px_3px_0px_0px_#000] dark:shadow-[3px_3px_0px_0px_rgba(240,240,240,0.6)]`}
                  >
                    <p className="text-xl font-black leading-none mb-1 text-black">
                      {value}
                    </p>
                    <p className="text-[11px] font-semibold leading-tight text-black">
                      {label}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3">
                <a
                  href={user.resumePath}
                  download
                  className="nb-btn-primary px-5 py-2.5 text-sm"
                >
                  <Download size={15} />
                  Download Resume
                </a>
                <Link
                  href={user.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nb-btn-secondary px-5 py-2.5 text-sm"
                >
                  <Github size={15} />
                  GitHub
                  <ArrowUpRight size={14} />
                </Link>
                <Link
                  href={user.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nb-btn-secondary px-5 py-2.5 text-sm"
                >
                  LinkedIn
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>

            {/* Right — profile + contact */}
            <div className="flex flex-col items-center md:items-end gap-4 shrink-0">
              <div
                className="border-3 border-foreground shadow-[5px_5px_0px_0px_#000] dark:shadow-[5px_5px_0px_0px_rgba(240,240,240,0.6)] overflow-hidden"
              >
                <Image
                  src={profileImage}
                  alt="Shubham Rawat"
                  width={210}
                  height={210}
                  className="object-cover block"
                  priority
                />
              </div>
              <a
                href={`mailto:${user.email}`}
                className="nb-btn-secondary px-4 py-2 text-xs"
              >
                <Mail size={13} />
                {user.email}
              </a>
            </div>
          </div>
        </div>
      </section>

      <AboutSection />
      <StackSection />
      <ExperienceSection />
      <ContributionSection />
      <LinksSection />
    </main>
  );
}
