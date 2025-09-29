"use client";
import Link from "next/link";
import React, { useContext } from "react";
import headerLogo from "@/app/assets/header-logo-light.svg";
import Image from "next/image";
import { headerLinks } from "@/app/constants";
import { Icons } from "@/app/constants/icons";
import { Button } from "./ui/button";
import NavItemButton from "./NavItemButton";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div className="sticky top-0 z-50 w-full max-w-screen screen-line-before screen-line-after ">
      <div className="w-full  max-w-3xl flex justify-between items-center mx-auto  px-2 border-x-1 border-x-[var(--border)] ">
        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={`w-10 md:block md:w-16`}
        >
          {
            <Link href={"/"}>
              <Image src={headerLogo} alt="header-logo" />
            </Link>
          }
        </motion.div>
        <div className="flex md:gap-4">
          <div className="hidden md:flex gap-4 items-center px-3">
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
            href={"https://www.linkedin.com/in/shubhamrawatdev/"}
            icon={<Icons.linkedin />}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
