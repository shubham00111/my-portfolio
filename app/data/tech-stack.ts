export interface Skill {
  label: string;
  icon?: string;     // Iconify icon ID
  fallback?: string; // Short text shown when no icon available
}

export interface SkillCategory {
  label: string;
  color: string; // Tailwind bg class
  skills: Skill[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    label: "Languages",
    color: "bg-[#ff90e8] dark:bg-[#c96ab8]",
    skills: [
      { label: "TypeScript",        icon: "devicon:typescript" },
      { label: "JavaScript (ES6+)", icon: "devicon:javascript" },
      { label: "Java",              icon: "devicon:java" },
    ],
  },
  {
    label: "Frontend",
    color: "bg-[#ffde59] dark:bg-[#c9a830]",
    skills: [
      { label: "React.js",  icon: "devicon:react" },
      { label: "Redux",     icon: "devicon:redux" },
      { label: "Storybook", icon: "devicon:storybook" },
      { label: "Bootstrap", icon: "devicon:bootstrap" },
      { label: "HTML5",     icon: "devicon:html5" },
      { label: "CSS3",      icon: "devicon:css3" },
      { label: "SASS",      icon: "devicon:sass" },
      { label: "Socket.io", icon: "devicon:socketio" },
      { label: "Next.js",   icon: "devicon:nextjs" },
    ],
  },
  {
    label: "Backend",
    color: "bg-[#72ef36] dark:bg-[#52b825]",
    skills: [
      { label: "Java Spring Boot", icon: "devicon:spring" },
      { label: "REST APIs",        fallback: "REST" },
    ],
  },
  {
    label: "Testing",
    color: "bg-[#ffc59b] dark:bg-[#c88050]",
    skills: [
      { label: "Jest",                   icon: "logos:jest", fallback:"JEST" },
      { label: "Cypress",                icon: "logos:cypress-icon" },
      { label: "React Testing Library",  fallback: "RTL" },
      { label: "Enzyme",                 fallback: "ENZ" },
    ],
  },
  {
    label: "Cloud & DevOps",
    color: "bg-[#99c7fb] dark:bg-[#5898d8]",
    skills: [
      { label: "AWS (S3 · CloudFront · Bedrock)", icon: "logos:aws" },
      { label: "Docker",                           icon: "devicon:docker" },
      { label: "Git",                              icon: "devicon:git" },
      { label: "CI/CD",                            icon: "logos:github-actions" },
    ],
  },
  {
    label: "Tools",
    color: "bg-[#c9b1ff] dark:bg-[#9070d0]",
    skills: [
      { label: "Figma",          icon: "devicon:figma" },
      { label: "VS Code",        icon: "devicon:vscode" },
      { label: "Postman",        icon: "devicon:postman" },
      { label: "Chrome DevTools",icon: "devicon:chrome" },
    ],
  },
];
