"use client";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import lightModeHeaderLogo from "@/app/assets/header-logo-light.png";
import darkModeHeaderLogo from "@/app/assets/header-logo-dark.png";
const BrandImage = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    mounted && (
      <Image
        src={theme == "light" ? lightModeHeaderLogo : darkModeHeaderLogo}
        alt="Brand Logo"
        className="rounded-full transition-all duration-300"
      />
    )
  );
};

export default BrandImage;
