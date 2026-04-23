export interface Project {
  id: string;
  title: string;
  tagline: string;
  problem: string;
  approach: string;
  outcome: string;
  tech: string[];
  github?: string;
  demo?: string;
  isPlaceholder?: boolean;
  color: string;
}

export const PROJECTS: Project[] = [
  {
    id: "figma-to-code",
    title: "Figma-to-Code GenAI POC",
    tagline: "60% effort reduction · 70% productivity gain",
    problem:
      "Designers and developers were manually translating Figma designs into React components — a slow, error-prone process that consumed significant sprint capacity.",
    approach:
      "Built a proof-of-concept pipeline using Claude (MCP server + GenAI) to parse Figma JSON and auto-generate production-ready React/TypeScript components with Tailwind styling.",
    outcome:
      "Demonstrated 60% reduction in design-to-code effort and 70% improvement in delivery speed. Adopted org-wide as a workflow accelerator.",
    tech: ["React", "TypeScript", "Claude API", "Figma API", "MCP"],
    color: "bg-[#ff90e8] dark:bg-[#c96ab8]",
  },
  {
    id: "bedrock-chatbot",
    title: "AWS Bedrock Internal Chatbot",
    tagline: "Enterprise Q&A tool · RAG pipeline on AWS",
    problem:
      "Teams were spending time searching across internal documentation, Confluence pages, and wikis — context-switching that fragmented developer focus throughout the day.",
    approach:
      "Designed and built an internal RAG-based chatbot using AWS Bedrock (Claude models), S3 document storage, and a React frontend with chunking, embedding, and retrieval pipeline.",
    outcome:
      "Delivered a working internal tool that reduced documentation lookup time significantly. Built end-to-end as a solo initiative within the GenAI tooling program.",
    tech: ["AWS Bedrock", "React", "TypeScript", "S3", "Python", "RAG"],
    color: "bg-[#99c7fb] dark:bg-[#5898d8]",
  },
  {
    id: "coming-soon",
    title: "Side Project",
    tagline: "Personal project in progress",
    problem: "",
    approach: "",
    outcome: "",
    tech: [],
    isPlaceholder: true,
    color: "bg-[#c9b1ff] dark:bg-[#9070d0]",
  },
];
