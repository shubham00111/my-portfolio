import React from "react";

const SectionContent = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={"mx-auto max-w-3xl border-x px-4 py-2 " + className}>
      {children}
    </div>
  );
};

export default SectionContent;
