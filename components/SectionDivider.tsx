import React from "react";

interface SectionDividerProps {
  lineBefore?: boolean;
}
const SectionDivider = ({ lineBefore = true }: SectionDividerProps) => {
  return (
    <div
      className={`h-8 w-full ${
        lineBefore && "screen-line-before"
      } bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] [--pattern-foreground:var(--color-edge)]/56`}
    >
      <div className="mx-auto h-full max-w-3xl border-x"></div>
    </div>
  );
};

export default SectionDivider;
