import Link from "next/link";
import React from "react";
import headerLogo from "@/app/assets/header-logo-light.svg";
import Image from "next/image";
import { headerLinks } from "@/app/constants";
import { Icons } from "@/app/constants/icons";
import { Button } from "./ui/button";
import NavItemButton from "./NavItemButton";

const Header = () => {
  return (
    <div className="grid grid-cols-[1fr_2fr_1fr]  border-1 border-[var(--border)] max-w-screen">
      <div />
      <div className="flex justify-between items-center px-2 border-x-1 border-x-[var(--border)] ">
        <div>
          <Link href={"/"}>
            <Image src={headerLogo} alt="header-logo" width={60} />
          </Link>
        </div>
        <div className="flex gap-4">
          <div className="flex gap-4 items-center px-3">
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
          <NavItemButton
            href={"https://www.linkedin.com/in/shubham00111/"}
            icon={<Icons.linkedin />}
          />
        </div>
      </div>
      <div />
    </div>
  );
};

export default Header;
