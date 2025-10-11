import React from "react";

const SectionTitle = ({ title }: { title: React.ReactNode }) => {
  return (
    <div className="screen-line-before screen-line-after mx-auto max-w-3xl border-x px-4 py-1 text-3xl font-bold">
      {title}
    </div>
  );
};

export default SectionTitle;
