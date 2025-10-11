import { div } from "framer-motion/client";
import React from "react";

const LinkEffect = ({ children }: { children: React.ReactNode }) => {
  return (
    <p className="cursor-pointer underline-offset-3 hover:underline">
      {children}
    </p>
  );
};

export default LinkEffect;
