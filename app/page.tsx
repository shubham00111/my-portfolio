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
import GutterSeparator from "@/components/GutterSeparator";
import { user } from "./data/user";

export default function Portfolio() {
  return (
    <main>
      {/* ── HERO ── */}
      <section className="screen-line-top">
        <div className="px-5 py-16 md:py-16">
          <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
            {/* Left */}
            <div className="min-w-0 flex-1">
              {/* Open-to-work badge */}
              <span className="border-border bg-muted text-muted-foreground mb-6 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium">
                <span className="h-1.5 w-1.5 shrink-0 animate-pulse rounded-full bg-green-500" />
                Open to SDE-2 / Senior Frontend roles
              </span>

              {/* Name */}
              <h1 className="mt-4 mb-5 text-[clamp(2.75rem,9vw,5rem)] leading-[0.95] font-bold tracking-tight">
                Shubham
                <br />
                <span className="text-muted-foreground">Rawat</span>
              </h1>

              {/* Title + location */}
              <div className="mb-4 flex flex-wrap items-center gap-2.5">
                <span className="text-foreground text-sm font-medium">
                  Software Engineer
                </span>
                <span className="bg-border h-1 w-1 rounded-full" />
                <span className="text-muted-foreground flex items-center gap-1 text-sm">
                  <MapPin size={13} className="shrink-0" color="#cc2727" />
                  {user.location}
                </span>
              </div>

              {/* Stack line */}
              <p className="text-muted-foreground mb-10 text-sm">
                React · TypeScript · AWS · Java Spring Boot · 3.5 Years in
                Fintech
              </p>

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
              <p className="text-muted-foreground border-border mt-6 border-l-2 pl-3 text-xs font-medium">
                Currently: exploring AI agent frameworks · building with AWS
                Bedrock · reading DDIA
              </p>
            </div>

            {/* Right — profile + contact */}
            <div className="flex shrink-0 flex-col items-center gap-4 md:items-end">
              <div className="border-border overflow-hidden rounded-2xl border shadow-sm">
                <Image
                  src={profileImage}
                  alt="Shubham Rawat"
                  width={200}
                  height={200}
                  className="block object-cover"
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

      <GutterSeparator />
      <ExperienceSection />
      <GutterSeparator />
      <AboutSection />
      <GutterSeparator />
      <StackSection />
      <GutterSeparator />
      <ProjectsSection />
      <GutterSeparator />
      <ContributionSection />
      <GutterSeparator />
      <LinksSection />
    </main>
  );
}
