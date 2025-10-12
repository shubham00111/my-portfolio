"use client";
import { useTheme } from "next-themes";
import React from "react";
import { Button } from "./ui/button";
import { MoonStar, Sun } from "lucide-react";

const ThemeButton = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  console.log(theme);
  return (
    <Button
      variant={"outline"}
      size={"icon"}
      asChild
      className="rounded-full"
      onClick={() => {
        setTheme(theme === "light" ? "dark" : "light");
      }}
    >
      <a>{mounted ? theme === "dark" ? <MoonStar /> : <Sun /> : null}</a>
    </Button>
  );
};

export default ThemeButton;
