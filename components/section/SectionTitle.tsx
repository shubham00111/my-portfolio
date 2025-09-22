import React from "react";

const SectionTitle = ({ title }: { title: React.ReactNode }) => {
  return (
    <div className="max-w-3xl mx-auto border-x screen-line-before font-bold text-3xl px-4 py-1 screen-line-after">
      {title}
    </div>
  );
};

export default SectionTitle;
