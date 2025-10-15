"use client";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { MoonStar, Sun } from "lucide-react";
import soundManager from "@/lib/SoundManger";

const ThemeButton = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const switchTheme = () => {
    soundManager.playClick();
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <Button
      variant={"outline"}
      size={"icon"}
      asChild
      className="cursor-pointer rounded-full"
      onClick={switchTheme}
    >
      <a>{mounted ? theme === "dark" ? <MoonStar /> : <Sun /> : null}</a>
    </Button>
  );
};

export default ThemeButton;
