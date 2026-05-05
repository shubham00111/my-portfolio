"use client";

import Link from "next/link";
import { Download, Github } from "lucide-react";
import ThemeButton from "../ThemeButton";
import { user } from "@/app/data/user";

const NAV_LINKS = [
  { label: "About",      href: "/#about" },
  { label: "Skills",     href: "/#skills" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects",   href: "/#projects" },
  { label: "Blog",       href: "/blog" },
  { label: "Connect",    href: "/#connect" },
];

const Header = () => {
  return (
    <header className="sticky top-0 z-50 overflow-x-hidden bg-background px-2 pt-2">
      <div className="screen-line-top screen-line-bottom mx-auto flex h-14 items-center justify-between gap-4 border-x border-line px-5 max-w-5xl">
        {/* Logo */}
        <Link href="/" className="flex items-center select-none shrink-0">
          <span className="font-bold text-base tracking-tight">
            Shubham Rawat
          </span>
        </Link>

        <div className="flex-1" />

        {/* Center nav */}
        <nav className="hidden md:flex items-center gap-0.5">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground rounded-md hover:bg-muted transition-colors duration-150"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-2 shrink-0">
          <a
            href={user.resumePath}
            download
            className="hidden sm:flex nb-btn-primary px-3 py-1.5 text-sm"
          >
            <Download size={14} />
            Resume
          </a>
          <Link
            href={user.github}
            target="_blank"
            rel="noopener noreferrer"
            className="nb-btn-secondary px-3 py-1.5 text-sm"
          >
            <Github size={14} />
            <span className="hidden lg:inline">GitHub</span>
          </Link>
          <ThemeButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
