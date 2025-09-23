import React from "react";

const SectionContent = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={"max-w-3xl py-2 mx-auto border-x px-4 " + className}>
      {children}
    </div>
  );
};

export default SectionContent;
