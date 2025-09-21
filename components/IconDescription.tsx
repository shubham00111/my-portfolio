import React from "react";

interface IconDescriptionProps {
  title: React.ReactNode;
  icon: React.ReactNode;
}

const IconDescription = ({ title, icon }: IconDescriptionProps) => {
  return (
    <div className="flex gap-4 mb-2 items-center">
      <div className="flex size-6 bg-muted px-1 rounded-lg items-center justify-center text-[var(--muted-foreground)]">
        {icon}
      </div>
      <div className="text-[15px] flex items-center">{title}</div>
    </div>
  );
};

export default IconDescription;
