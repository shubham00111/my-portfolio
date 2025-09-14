import React from "react";
import { Button } from "./ui/button";
import { Icons } from "@/app/constants/icons";

interface NavItemButtonProps {
  href: string;
  icon: React.ReactNode;
}

const NavItemButton = ({ href, icon }: NavItemButtonProps) => {
  return (
    <Button variant={"outline"} size={"icon"} asChild className="rounded-full">
      <a href={href} target="_blank">
        {icon}
      </a>
    </Button>
  );
};

export default NavItemButton;
