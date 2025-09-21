import React from "react";

const SectionDivider = () => {
  return (
    <div className="w-full  h-8 screen-line-before bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px]">
      <div className="mx-auto h-full border-x max-w-3xl"></div>
    </div>
  );
};

export default SectionDivider;
