"use client";

import Link from "next/link";
import { useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { Download, Github } from "lucide-react";
import ThemeButton from "../ThemeButton";
import { user } from "@/app/data/user";

const NAV_LINKS = [
  { label: "About", href: "#about", hoverBg: "hover:bg-[#ff90e8] dark:hover:bg-[#c96ab8] hover:text-black" },
  { label: "Skills", href: "#skills", hoverBg: "hover:bg-[#ffde59] dark:hover:bg-[#c9a830] hover:text-black" },
  { label: "Experience", href: "#experience", hoverBg: "hover:bg-[#72ef36] dark:hover:bg-[#52b825] hover:text-black" },
  { label: "Connect", href: "#connect", hoverBg: "hover:bg-[#99c7fb] dark:hover:bg-[#5898d8] hover:text-black" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest >= 60);
  });

  return (
    <header className={`sticky top-0 z-50 bg-background transition-shadow duration-200 ${scrolled ? "shadow-[0_5px_0_0_#000] dark:shadow-[0_5px_0_0_rgba(240,240,240,0.5)]" : ""}`}>
      {/* Colorful strip */}
      <div className="flex h-[5px] border-b-3 border-foreground">
        <div className="flex-1 bg-[#ff90e8] dark:bg-[#c96ab8]" />
        <div className="flex-1 bg-[#ffde59] dark:bg-[#c9a830]" />
        <div className="flex-1 bg-[#72ef36] dark:bg-[#52b825]" />
        <div className="flex-1 bg-[#99c7fb] dark:bg-[#5898d8]" />
        <div className="flex-1 bg-[#c9b1ff] dark:bg-[#9070d0]" />
        <div className="flex-1 bg-[#ffc59b] dark:bg-[#c88050]" />
      </div>

      {/* Nav bar */}
      <div className="border-b-3 border-foreground">
        <div className="mx-auto max-w-5xl px-5 h-14 flex items-center justify-between gap-4">

          {/* Logo + name */}
          <Link href="/" className="flex items-center gap-3 select-none shrink-0">
            <span className="font-black text-xl tracking-tighter">
              S<span className="text-[#ff90e8] dark:text-[#c96ab8]">R</span>
            </span>
            <span className="hidden sm:block w-px h-5 bg-foreground/30" />
            <span className="hidden sm:block text-sm font-bold tracking-tight">
              Shubham Rawat
            </span>
          </Link>

          {/* Center nav */}
          <nav className="hidden md:flex items-center gap-0.5">
            {NAV_LINKS.map(({ label, href, hoverBg }) => (
              <a
                key={label}
                href={href}
                className={`px-3 py-1.5 text-sm font-bold border-2 border-transparent ${hoverBg} hover:border-foreground hover:shadow-[2px_2px_0px_0px_#000] dark:hover:shadow-[2px_2px_0px_0px_rgba(240,240,240,0.6)] transition-all duration-100`}
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
      </div>
    </header>
  );
};

export default Header;
