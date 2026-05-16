"use client";

import Link from "next/link";
import { Download, Github } from "lucide-react";
import ThemeButton from "../ThemeButton";
import { user } from "@/app/data/user";

const NAV_LINKS = [
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
  { label: "Blog", href: "/blog" },
  { label: "Connect", href: "/#connect" },
];

const Header = () => {
  return (
    <header className="bg-background sticky top-0 z-50 overflow-x-hidden px-2 pt-2">
      <div className="screen-line-top screen-line-bottom border-line mx-auto flex h-14 max-w-4xl items-center justify-between gap-4 border-x px-5">
        {/* Logo */}

        {/* Center nav */}
        <nav className="hidden items-center gap-0.5 md:flex">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-muted-foreground hover:text-foreground hover:bg-muted rounded-md px-3 py-1.5 text-sm font-medium transition-colors duration-150"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex shrink-0 items-center gap-2">
          <a
            href={user.resumePath}
            download
            className="nb-btn-primary hidden px-3 py-1.5 text-sm sm:flex"
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
