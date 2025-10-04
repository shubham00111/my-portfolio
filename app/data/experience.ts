export interface Experience {
  id: string;
  companyName: string;
  companyLogo?: string;
  positions: Position[];
  isCurrentEmployer?: boolean;
}

export interface Position {
  id?: string;
  title?: string;
  employmentPeriod: {
    start: string; // Format: "MM.YYYY" or "YYYY"
    end?: string; // Format: "MM.YYYY" or "YYYY", optional for current positions
  };
  employmentType?:
    | "Full-time"
    | "Part-time"
    | "Internship"
    | "Contract"
    | "Freelance";
  icon: "code" | "education";
  description: string[];
  skills: string[];
  isExpanded?: boolean; // Optional, default to false
}

export const EXPERIENCES: Experience[] = [
  {
    id: "tsys",
    companyName: "TSYS - Global Payments",
    companyLogo: "/experience/tsys.jpg",
    positions: [
      {
        id: "exp-tsys-frontend-2",
        title: "Software Engineer",
        employmentPeriod: {
          start: "07.2025",
        },
        employmentType: "Full-time",
        icon: "code",
        description: [
          "Engineered reusable UI framework components adopted org-wide, standardizing design and reducing code duplication; accelerated delivery timelines by ~60%.",
          "Authored Storybook documentation for legacy frontend framework, cutting onboarding/debugging time by ~60%.",
          "Led ‘Figma-to-Code’ POC using Figma MCP server + GenAI integration, cutting developer effort for new screens by ~60% and boosting productivity by ~70%.",
          "Contributed to ‘Determinator (Magnon)’—an internal UI code editor capable of running proprietary scripts, streamlining workflows and improving productivity.",
        ],
        skills: [
          "React",
          "Next.js",
          "Redux",
          "TypeScript",
          "JavaScript",
          "AWS (S3, CloudFront)",
          "Docker",
          "CI/CD",
          "Git",
          "Tailwind CSS",
          "Bootstrap",
          "Figma",
          "Storybook",
          "Jest",
          "Cypress",
          "React Testing Library",
          "Enzyme",
        ],
        isExpanded: true,
      },
      {
        id: "exp-tsys-frontend-1",
        title: "Associate Software Engineer",
        employmentPeriod: {
          start: "07.2022",
          end: "07.2025",
        },
        employmentType: "Full-time",
        icon: "code",
        description: [
          "Architected migration of Digital Engagement application from server-based deployment to AWS S3 + CloudFront, reducing infra costs by ~80% and improving scalability.",
          "Developed a brandable microsite platform configurable via CMS, reducing onboarding effort by 60%.",
          "Built SaaS application modules (e.g., Digital Admin) with a config-driven UI for scalable management.",
        ],
        skills: [
          "React",
          "Next.js",
          "Redux",
          "TypeScript",
          "JavaScript",
          "AWS (S3, CloudFront)",
          "Docker",
          "CI/CD",
          "Git",
          "Tailwind CSS",
          "Bootstrap",
          "Figma",
          "Storybook",
          "Jest",
          "Cypress",
          "React Testing Library",
          "Enzyme",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "education",
    companyName: "Education",
    positions: [
      {
        id: "edu-amity",
        title: "Amity University",
        employmentPeriod: {
          start: "2018",
          end: "2022",
        },
        icon: "education",
        description: [
          "B.Tech in Computer Science and Engineering.",
          "Graduated with a CGPA of 8.69.",
          "Core subjects included Data Structures, Algorithms, and Software Engineering.",
        ],
        skills: [
          "JavaScript",
          "TypeScript",
          "Java",
          "HTML",
          "CSS",
          "Data Structures",
          "Algorithms",
          "Software Engineering",
        ],
      },
    ],
  },
];
