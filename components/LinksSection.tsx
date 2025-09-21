import React from "react";

const LinksSection = () => {
  return (
    <div className="relative w-full screen-line-before">
      <div className="pointer-events-none absolute inset-0 -z-1 grid grid-cols-1 gap-4 max-sm:hidden sm:grid-cols-2">
        <div className="border-r border-edge"></div>
        <div className="border-l border-edge"></div>
      </div>
      <div className="max-w-3xl mx-auto grid grid-cols-2 gap-4 border-x-1">
        <div className="screen-line-after screen-line-before">fdsfa</div>
        <div className="screen-line-after screen-line-before">fdasfa</div>
        <div className="screen-line-after screen-line-before">fdasfa</div>
        <div className="screen-line-after screen-line-before">fdasfa</div>
      </div>
    </div>
  );
};

export default LinksSection;
