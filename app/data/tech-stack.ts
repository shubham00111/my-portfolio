export interface SkillCategory {
  label: string;
  skills: string[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    label: "Languages",
    skills: ["TypeScript", "JavaScript (ES6+)", "Java"],
  },
  {
    label: "Frontend",
    skills: [
      "React.js",
      "Redux",
      "Storybook",
      "Bootstrap",
      "HTML5",
      "CSS3",
      "SASS",
      "Socket.io",
      "Next.js",
    ],
  },
  {
    label: "Backend",
    skills: ["Java Spring Boot", "REST APIs"],
  },
  {
    label: "Testing",
    skills: ["Jest", "Cypress", "React Testing Library", "Enzyme"],
  },
  {
    label: "Cloud & DevOps",
    skills: [
      "AWS S3",
      "AWS CloudFront",
      "AWS Bedrock",
      "Docker",
      "Git",
      "CI/CD",
    ],
  },
  {
    label: "Tools",
    skills: ["Figma", "VS Code", "Postman", "Chrome DevTools"],
  },
];
