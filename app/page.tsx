import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Download, Github, Mail, MapPin } from "lucide-react";
import profileImage from "@/app/assets/profile_pic.png";
import AboutSection from "@/components/AboutSection";
import StackSection from "@/components/StackSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContributionSection from "@/components/ContributionSection";
import LinksSection from "@/components/LinksSection";
import { user } from "./data/user";

const STATS = [
  {
    value: "80%",
    label: "Infra Cost Reduction",
    subtitle: "AWS migration",
  },
  {
    value: "60%",
    label: "Faster Delivery",
    subtitle: "Figma-to-Code POC",
  },
  {
    value: "90%",
    label: "Security Vulns Fixed",
    subtitle: "Remediation sprint",
  },
];

export default function Portfolio() {
  return (
    <main>
      {/* ── HERO ── */}
      <section className="border-b border-border">
        <div className="mx-auto max-w-5xl px-5 py-16 md:py-24">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12">

            {/* Left */}
            <div className="flex-1 min-w-0">
              {/* Open-to-work badge */}
              <span className="mb-6 inline-flex items-center gap-2 border border-border bg-muted px-3 py-1 text-xs font-medium rounded-full text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse shrink-0" />
                Open to SDE-2 / Senior Frontend roles
              </span>

              {/* Name */}
              <h1 className="text-[clamp(2.75rem,9vw,5rem)] font-bold leading-[0.95] tracking-tight mt-4 mb-5">
                Shubham
                <br />
                <span className="text-muted-foreground">Rawat</span>
              </h1>

              {/* Title + location */}
              <div className="flex flex-wrap items-center gap-2.5 mb-4">
                <span className="text-sm font-medium text-foreground">
                  Software Engineer
                </span>
                <span className="h-1 w-1 rounded-full bg-border" />
                <span className="flex items-center gap-1 text-muted-foreground text-sm">
                  <MapPin size={13} className="shrink-0" />
                  {user.location}
                </span>
              </div>

              {/* Stack line */}
              <p className="text-muted-foreground text-sm mb-10">
                React · TypeScript · AWS · Java Spring Boot · 3.5 Years in Fintech
              </p>

              {/* Impact stats */}
              <div className="flex flex-wrap gap-4 mb-10">
                {STATS.map(({ value, label, subtitle }) => (
                  <a
                    key={label}
                    href="#experience"
                    className="group flex flex-col gap-0.5 px-4 py-3 rounded-xl border border-border bg-card hover:bg-muted transition-colors duration-150 min-w-[96px]"
                  >
                    <p className="text-2xl font-bold leading-none text-foreground">
                      {value}
                    </p>
                    <p className="text-xs font-medium leading-tight text-foreground/80 mt-1">
                      {label}
                    </p>
                    <p className="text-[11px] leading-tight text-muted-foreground">
                      {subtitle}
                    </p>
                  </a>
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

              {/* Now strip */}
              <p className="text-xs text-muted-foreground font-medium mt-6 border-l-2 border-border pl-3">
                Currently: exploring AI agent frameworks · building with AWS Bedrock · reading DDIA
              </p>
            </div>

            {/* Right — profile + contact */}
            <div className="flex flex-col items-center md:items-end gap-4 shrink-0">
              <div className="rounded-2xl border border-border overflow-hidden shadow-sm">
                <Image
                  src={profileImage}
                  alt="Shubham Rawat"
                  width={200}
                  height={200}
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
      <ProjectsSection />
      <ContributionSection />
      <LinksSection />
    </main>
  );
}
