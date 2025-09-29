import {
  BriefcaseBusinessIcon,
  Code,
  CodeXmlIcon,
  GraduationCapIcon,
  LucideProps,
} from "lucide-react";
import React from "react";

export type ExperiencePositionIcon =
  /** Icon key used to render the position category in the UI. */
  "code" | "education";

const iconMap = {
  code: CodeXmlIcon,
  education: GraduationCapIcon,
};

const ExperiencePositionIcon = ({
  icon,
  ...props
}: {
  icon: ExperiencePositionIcon;
} & LucideProps) => {
  const Icon = icon ? iconMap[icon] : BriefcaseBusinessIcon;
  return <Icon {...props} />;
};

export default ExperiencePositionIcon;
