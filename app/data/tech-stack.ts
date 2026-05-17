export type SkillTier = "Primary" | "Production" | "Familiar";

export interface Skill {
  label: string;
  icon?: string;     // Iconify icon ID
  fallback?: string; // Short text shown when no icon available
}

export interface SkillCategory {
  label: string;
  color: string; // Tailwind bg class
  tier: SkillTier;
  skills: Skill[];
}

export const SKILL_ICON_MAP: Record<string, { icon?: string; fallback?: string }> = {
  "React":                 { icon: "devicon:react" },
  "TypeScript":            { icon: "devicon:typescript" },
  "JavaScript":            { icon: "devicon:javascript" },
  "Redux":                 { icon: "devicon:redux" },
  "Java Spring Boot":      { icon: "devicon:spring" },
  "AWS S3":                { icon: "logos:aws" },
  "AWS CloudFront":        { icon: "logos:aws" },
  "AWS Bedrock":           { fallback: "BDK" },
  "Socket.io":             { icon: "devicon:socketio" },
  "Storybook":             { icon: "devicon:storybook" },
  "Jest":                  { icon: "logos:jest" },
  "Cypress":               { icon: "logos:cypress-icon" },
  "Docker":                { icon: "devicon:docker" },
  "CI/CD":                 { icon: "logos:github-actions" },
  "Figma":                 { icon: "devicon:figma" },
  "Bootstrap":             { icon: "devicon:bootstrap" },
  "React Bootstrap":       { icon: "devicon:bootstrap" },
  "React Testing Library": { fallback: "RTL" },
  "Enzyme":                { fallback: "ENZ" },
  "Git":                   { icon: "devicon:git" },
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    label: "Languages",
    color: "bg-[#ff90e8] dark:bg-[#c96ab8]",
    tier: "Primary",
    skills: [
      { label: "TypeScript",        icon: "devicon:typescript" },
      { label: "JavaScript (ES6+)", icon: "devicon:javascript" },
      { label: "Java",              icon: "devicon:java" },
    ],
  },
  {
    label: "Frontend",
    color: "bg-[#ffde59] dark:bg-[#c9a830]",
    tier: "Primary",
    skills: [
      { label: "React.js",  icon: "devicon:react" },
      { label: "Next.js",   icon: "devicon:nextjs" },
      { label: "Redux",     icon: "devicon:redux" },
      { label: "HTML5",     icon: "devicon:html5" },
      { label: "CSS3",      icon: "devicon:css3" },
      { label: "SASS",      icon: "devicon:sass" },
    ],
  },
  {
    label: "Backend",
    color: "bg-[#72ef36] dark:bg-[#52b825]",
    tier: "Production",
    skills: [
      { label: "Java Spring Boot", icon: "devicon:spring" },
      { label: "REST APIs",        fallback: "REST" },
      { label: "Socket.io",        icon: "devicon:socketio" },
    ],
  },
  {
    label: "Cloud & DevOps",
    color: "bg-[#99c7fb] dark:bg-[#5898d8]",
    tier: "Production",
    skills: [
      { label: "AWS S3 · CloudFront",  icon: "logos:aws" },
      { label: "AWS Bedrock",          fallback: "BDK" },
      { label: "Docker",               icon: "devicon:docker" },
      { label: "Git",                  icon: "devicon:git" },
      { label: "CI/CD",                icon: "logos:github-actions" },
    ],
  },
  {
    label: "Testing",
    color: "bg-[#ffc59b] dark:bg-[#c88050]",
    tier: "Production",
    skills: [
      { label: "Jest",                   icon: "logos:jest", fallback: "JEST" },
      { label: "React Testing Library",  fallback: "RTL" },
      { label: "Storybook",              icon: "devicon:storybook" },
      { label: "Cypress",                icon: "logos:cypress-icon" },
    ],
  },
  {
    label: "Tools & Design",
    color: "bg-[#c9b1ff] dark:bg-[#9070d0]",
    tier: "Familiar",
    skills: [
      { label: "Figma",           icon: "devicon:figma" },
      { label: "Bootstrap",       icon: "devicon:bootstrap" },
      { label: "Enzyme",          fallback: "ENZ" },
      { label: "VS Code",         icon: "devicon:vscode" },
      { label: "Postman",         icon: "devicon:postman" },
      { label: "Chrome DevTools", icon: "devicon:chrome" },
    ],
  },
];
