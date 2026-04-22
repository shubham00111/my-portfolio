export interface Position {
  id: string;
  title: string;
  type: "work" | "education";
  company: string;
  companyUrl?: string;
  logo?: string;
  acquisitionNote?: { text: string; logo: string };
  period: string;
  employmentType?: string;
  location?: string;
  isCurrent?: boolean;
  description: string[];
  skills: string[];
  award?: string;
  degree?: string;
  grade?: string;
}

export const EXPERIENCES: Position[] = [
  {
    id: "tsys-se",
    type: "work",
    title: "Software Engineer",
    company: "TSYS – Global Payments",
    companyUrl: "https://www.tsys.com/",
    logo: "/experience/tsys.jpg",
    acquisitionNote: {
      text: "Acquired by FIS Global, 2026",
      logo: "/experience/fis.png",
    },
    period: "Jul 2025 – Present",
    employmentType: "Full-time",
    location: "Noida, India",
    isCurrent: true,
    description: [
      "Architected migration of Digital Engagement apps from on-prem servers to AWS S3 + CloudFront, reducing infrastructure costs by ~80% and improving scalability.",
      "Engineered reusable UI framework components adopted org-wide, standardizing design and reducing code duplication; accelerated feature delivery by ~60%.",
      "Authored detailed Storybook documentation for legacy frontend framework, reducing onboarding/debugging time by ~60%.",
      "Fixed UI framework security vulnerabilities, resolving 90% of identified issues through systematic testing and code remediation.",
      "Optimized React application performance using useMemo, useCallback, React.memo, and React.lazy, reducing render times.",
      "Implemented WebSocket integration using Socket.io for real-time frontend data updates.",
      "Built a chatbot for Digital Admin using AWS Bedrock and S3 vector store for embeddings.",
      "Developed REST APIs with Java Spring Boot for centralized user management across all applications.",
    ],
    skills: [
      "React",
      "TypeScript",
      "Redux",
      "Java Spring Boot",
      "AWS S3",
      "AWS CloudFront",
      "AWS Bedrock",
      "Socket.io",
      "Storybook",
      "Jest",
      "Cypress",
      "Docker",
      "CI/CD",
      "Figma",
    ],
  },
  {
    id: "tsys-ase",
    type: "work",
    title: "Associate Software Engineer",
    company: "TSYS – Global Payments",
    companyUrl: "https://www.tsys.com/",
    logo: "/experience/tsys.jpg",
    period: "Jul 2022 – Jul 2025",
    employmentType: "Full-time",
    location: "Noida, India",
    description: [
      "Developed SaaS modules (e.g., Digital Admin) with a config-driven UI enabling scalable user/application management.",
      "Led 'Figma-to-Code' POC integrating Figma MCP server + GenAI, reducing developer effort for new screens by ~60% and improving productivity by ~70%.",
      "Built 'Determinator (Magnon)'—an internal UI code editor running proprietary scripts—streamlining internal team workflows.",
      "Designed and implemented User Management Wave screens including Role Association view and Edit functionality.",
      "Delivered end-to-end Microsite development with comprehensive testing coverage including Jest unit tests and Cypress E2E implementation.",
    ],
    skills: [
      "React",
      "TypeScript",
      "JavaScript",
      "Redux",
      "Bootstrap",
      "React Bootstrap",
      "Jest",
      "Cypress",
      "React Testing Library",
      "Enzyme",
      "Figma",
      "Git",
    ],
    award:
      "Bravo Award for exceptional dedication and taking on additional project responsibilities beyond core assignments.",
  },
  {
    id: "amity",
    type: "education",
    title: "Bachelor of Technology — Computer Science & Engineering",
    company: "Amity University",
    logo: "/experience/amity.png",
    period: "2018 – 2022",
    location: "Noida, India",
    degree: "B.Tech in Computer Science & Engineering",
    grade: "CGPA: 8.69 / 10",
    description: [
      "Relevant Coursework: Data Structures & Algorithms, Databases, Operating Systems, Computer Networks, Machine Learning, Data Mining, Advanced Algorithms.",
    ],
    skills: [
      "Data Structures",
      "Algorithms",
      "Databases",
      "Operating Systems",
      "Computer Networks",
      "Machine Learning",
    ],
  },
];
