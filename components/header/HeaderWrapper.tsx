"use client";

import React, { useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";

const HeaderWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) => {
  const [affix, setAffix] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setAffix(latest >= 8);
  });
  return (
    <header className={className} data-affix={affix}>
      {children}
    </header>
  );
};

export default HeaderWrapper;
