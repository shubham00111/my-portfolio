import React from "react";

interface IconDescriptionProps {
  title: React.ReactNode;
  icon: React.ReactNode;
}

const IconDescription = ({ title, icon }: IconDescriptionProps) => {
  return (
    <div className="mb-2 flex items-center gap-4">
      <div className="bg-muted flex size-6 items-center justify-center rounded-lg px-1 text-[var(--muted-foreground)]">
        {icon}
      </div>
      <div className="flex items-center text-[15px]">{title}</div>
    </div>
  );
};

export default IconDescription;
