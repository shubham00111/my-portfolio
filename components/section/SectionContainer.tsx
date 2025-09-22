import React from "react";

const SectionContainer = ({
  children,
  className = "",
}: {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
}) => {
  return <div className={"w-full " + className}>{children}</div>;
};

export default SectionContainer;
