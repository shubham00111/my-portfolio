"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MoonStar, Sun } from "lucide-react";

const ThemeButton = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="nb-btn-secondary p-1.5 cursor-pointer"
      aria-label="Toggle theme"
    >
      {mounted ? (
        theme === "dark" ? (
          <MoonStar size={18} />
        ) : (
          <Sun size={18} />
        )
      ) : (
        <span className="size-[18px] block" />
      )}
    </button>
  );
};

export default ThemeButton;
