"use client";
import Link from "next/link";
import React, { useContext, useState } from "react";
import lightModeHeaderLogo from "@/app/assets/header-logo-light.png";
import darkModeHeaderLogo from "@/app/assets/header-logo-dark.png";
import Image from "next/image";
import { headerLinks } from "@/app/constants";
import { Icons } from "@/app/constants/icons";
import { Button } from "../ui/button";
import NavItemButton from "../NavItemButton";
import { useScroll, useMotionValueEvent } from "framer-motion";
import HeaderWrapper from "./HeaderWrapper";
import ThemeButton from "../ThemeButton";
import { useTheme } from "next-themes";

const Header = () => {
  const { theme } = useTheme();
  const [showMark, setShowMark] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    setShowMark(latest >= 100);
  });
  return (
    <HeaderWrapper className="dark:bg-background sticky top-0 z-50 overflow-x-hidden overflow-y-hidden bg-white px-2 pt-2 transition-shadow duration-300 data-[affix=true]:shadow-[0_0_16px_0_black]/8 dark:text-white">
      <div className="screen-line-before screen-line-after mx-auto flex h-15 items-center justify-between border-x-1 border-x-[var(--border)] px-2 md:max-w-3xl">
        <div
          className={`w-10 md:w-16 ${showMark ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"} transition-all duration-300`}
        >
          <Link href={"/"}>
            <Image
              src={theme == "light" ? lightModeHeaderLogo : darkModeHeaderLogo}
              alt="header-logo"
            />
          </Link>
        </div>
        <div className="flex gap-2 md:gap-4">
          <div className="dark: hidden items-center px-3 sm:gap-4 md:flex">
            {headerLinks.map(({ label, href }) => {
              return (
                <Link
                  key={label}
                  href={href}
                  className={` ${
                    label === "Portfolio" ? "text-black" : "text-gray-400"
                  } dark:hover:text-ba text-black transition-colors duration-300 hover:text-neutral-400 dark:text-white dark:hover:text-neutral-400`}
                >
                  {label}
                </Link>
              );
            })}
          </div>
          <NavItemButton
            href={"https://github.com/shubham00111"}
            icon={<Icons.github />}
          />

          <ThemeButton />
        </div>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
