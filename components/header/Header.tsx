"use client";
import Link from "next/link";
import React, { useContext, useState } from "react";
import headerLogo from "@/app/assets/header-logo-light.svg";
import Image from "next/image";
import { headerLinks } from "@/app/constants";
import { Icons } from "@/app/constants/icons";
import { Button } from "../ui/button";
import NavItemButton from "../NavItemButton";
import { useScroll, useMotionValueEvent } from "framer-motion";
import HeaderWrapper from "./HeaderWrapper";
import ThemeButton from "../ThemeButton";

const Header = () => {
  const [showMark, setShowMark] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    setShowMark(latest >= 100);
  });
  return (
    <HeaderWrapper className="sticky top-0 z-50 overflow-x-hidden bg-white transition-shadow duration-300 data-[affix=true]:shadow-[0_0_16px_0_black]/8">
      <div className="screen-line-before screen-line-after mx-auto flex max-w-3xl items-center justify-between border-x-1 border-x-[var(--border)] px-2">
        <div
          className={`w-10 md:w-16 ${showMark ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"} transition-all duration-300`}
        >
          <Link href={"/"}>
            <Image src={headerLogo} alt="header-logo" />
          </Link>
        </div>
        <div className="flex md:gap-4">
          <div className="hidden items-center gap-4 px-3 md:flex">
            {headerLinks.map(({ label, href }) => {
              return (
                <Link
                  key={label}
                  href={href}
                  className={` ${
                    label === "Portfolio" ? "text-black" : "text-gray-400"
                  } hover:text-black`}
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
