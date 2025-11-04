import React from "react";
import { cn } from "@/lib/utils";
const SectionContent = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("mx-auto max-w-3xl border-x px-4 py-2", className)}>
      {children}
    </div>
  );
};

export default SectionContent;
