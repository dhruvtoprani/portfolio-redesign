import type {
  ContactMethod,
  ExperienceItem,
  LeadershipItem,
  NavLink,
  Project,
  ProjectCategory,
} from "@/types/site";

export const positioningLine =
  "I build intelligent systems that turn complexity into leverage.";

export const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const signalHighlights = [
  "Software TPM Intern, Whisker",
  "Product Management Intern, MSU Research Foundation",
  "Applications and Analytics Intern, Consumers Energy",
  "UURAF First Place Winner, Engineering",
  "UURAF First Place Winner, Business and Entrepreneurship",
  "President, Tower Guard Honor Society",
];

export const projectFilters: Array<ProjectCategory | "All"> = [
  "All",
  "AI Systems",
  "Product",
  "Robotics",
  "Research",
  "Full Stack",
  "Hardware",
  "Data and Analytics",
];

export const projects: Project[] = [
  {
    slug: "aligning-human-robot-preferences",
    name: "Aligning Human-Robot Preferences",
    summary:
      "MILP-based task allocation system that aligns agent behavior with human preferences under real-world constraints.",
    tags: ["MILP", "Human-Robot Interaction", "Optimization", "Research"],
    role: "Research Intern",
    impact: "UURAF First Place Winner (Engineering)",
    categories: ["AI Systems", "Robotics", "Research"],
    caseStudyHref: "/projects/aligning-human-robot-preferences",
  },
  {
    slug: "rethinking-work-design-ai-workforce",
    name: "Rethinking Work Design for the AI Workforce",
    summary:
      "Framework for AI agent workflows that improves cost-performance tradeoffs in cross-functional operations.",
    tags: ["AI Agents", "Work Design", "Research", "Product Strategy"],
    role: "Technical Innovation Fellow",
    impact: "UURAF First Place Winner (Business & Entrepreneurship)",
    categories: ["AI Systems", "Product", "Research"],
    caseStudyHref: "/projects/rethinking-work-design-ai-workforce",
  },
  {
    slug: "6dot",
    name: "6Dot",
    summary:
      "Pocket-sized Braille phone attachment for discreet non-audio accessibility in everyday use.",
    tags: ["Accessibility", "Hardware", "Arduino", "Product Design"],
    role: "Product Builder",
    impact: "Designathon winner",
    categories: ["Product", "Hardware", "Research"],
    caseStudyHref: "/projects/6dot",
  },
  {
    slug: "wattx",
    name: "WattX",
    summary:
      "Automated peer-to-peer microgrid simulation built as a full-stack MVP for energy scenario planning.",
    tags: ["Python", "Flask", "Supabase", "Energy", "Simulation"],
    role: "Full-Stack Developer",
    impact: "Built and demoed MVP simulation platform",
    categories: ["Full Stack", "Data and Analytics", "Product"],
    caseStudyHref: "/projects/wattx",
  },
  {
    slug: "hexaflow",
    name: "Hexaflow",
    summary:
      "Redesigned server rack concept built and validated in a 36-hour venture sprint.",
    tags: ["Venture Design", "Hardware", "Thermal Systems", "Startup"],
    role: "Venture Sprint Builder",
    impact: "Validated concept under compressed build window",
    categories: ["Hardware", "Product"],
    caseStudyHref: "/projects/hexaflow",
  },
  {
    slug: "docflow-mcp",
    name: "DocFlow MCP",
    summary:
      "MCP-based documentation ingestion tool designed to improve AI coding context quality.",
    tags: ["MCP", "Developer Tools", "RAG", "Context Engineering"],
    role: "Founding Developer",
    impact: "Shipped developer-facing workflow accelerator",
    categories: ["AI Systems", "Full Stack", "Product"],
    caseStudyHref: "/projects/docflow-mcp",
  },
  {
    slug: "nubo",
    name: "Nubo",
    summary:
      "Premium lifestyle shoe concept built around spring-assisted walking and comfort architecture.",
    tags: ["Product Strategy", "Brand", "Hardware", "Consumer Design"],
    role: "Concept Strategist",
    impact: "Built end-to-end product and brand direction",
    categories: ["Product", "Hardware"],
    caseStudyHref: "/projects/nubo",
  },
  {
    slug: "quoz",
    name: "Quoz",
    summary:
      "Luxury candle system exploring scent, ritual, and premium home experience.",
    tags: ["Brand Strategy", "Consumer Product", "Luxury", "Entrepreneurship"],
    role: "Product and Brand Lead",
    impact: "Developed premium product system narrative",
    categories: ["Product", "Research"],
    caseStudyHref: "/projects/quoz",
  },
];

export const experience: ExperienceItem[] = [
  {
    organization: "Whisker",
    role: "Software Technical Program Management Intern",
    dateRange: "2026",
    location: "Auburn Hills, MI",
    bullets: [
      "Supported release execution across mobile, firmware, quality, and AI initiatives.",
      "Improved launch readiness through structured sprint rituals and dependency tracking.",
      "Built TPM operating workflows that scaled coordination across technical teams.",
    ],
    skills: ["TPM", "Release Management", "Agile Operations", "Cross-Functional"],
  },
  {
    organization: "MSU Research Foundation / Spartan Innovations",
    role: "Product Management Intern / Technical Innovation Fellow",
    dateRange: "2025 - 2026",
    location: "East Lansing, MI",
    bullets: [
      "Led user research with 15+ users to uncover onboarding friction and product opportunities.",
      "Designed Salesforce CRM funnel logic to improve venture pipeline visibility.",
      "Built Power BI dashboards to support internal decision-making and program operations.",
    ],
    skills: ["Product Management", "User Research", "Salesforce", "Power BI"],
  },
  {
    organization: "Consumers Energy",
    role: "Applications and Analytics Intern",
    dateRange: "2025",
    location: "Jackson, MI",
    bullets: [
      "Built automation and analytics tools across Power BI, .NET, SQL, and enterprise systems.",
      "Developed internal tooling to improve storm crew operational visibility.",
      "Supported AI-enabled rebate eligibility analysis using historical claims and structured criteria.",
    ],
    skills: ["Power BI", ".NET", "SQL", "Automation", "Analytics"],
  },
  {
    organization: "Honda",
    role: "Virtual Maturation / AI Solutions and Delivery Intern",
    dateRange: "2024",
    location: "Torrance, CA",
    bullets: [
      "Explored data and AI workflows across virtual maturation and enterprise delivery contexts.",
      "Evaluated tooling patterns to increase engineering insight and data usability.",
      "Collaborated on operational workflows for more reliable delivery and handoffs.",
    ],
    skills: ["AI Workflows", "Systems Thinking", "Process Design"],
  },
  {
    organization: "D-CYPHER Lab",
    role: "Research Intern",
    dateRange: "2024 - Present",
    location: "East Lansing, MI",
    bullets: [
      "Built AI-assisted experiment validation systems for human-robot interaction research.",
      "Developed interfaces for task allocation and team decision-making under uncertainty.",
      "Used optimization and simulation methods to evaluate agent behavior.",
    ],
    skills: ["HRI", "Optimization", "Simulation", "AI Systems"],
  },
  {
    organization: "Li Lab",
    role: "Research Assistant",
    dateRange: "2023 - 2024",
    location: "East Lansing, MI",
    bullets: [
      "Contributed to nanoelectronics, biosensing, and precision drug delivery research.",
      "Designed experimental hardware including a microneedle curing stand.",
      "Supported interdisciplinary engineering across mechanical, electronics, and biomedical work.",
    ],
    skills: ["Biomedical Systems", "Hardware Prototyping", "Interdisciplinary Research"],
  },
];

export const leadership: LeadershipItem[] = [
  {
    organization: "Tower Guard Honor Society",
    role: "President",
    summary:
      "Led one of MSU’s most selective service organizations, coordinating large-scale volunteer and fundraising operations.",
  },
  {
    organization: "Humanity First MSU",
    role: "Events Chair",
    summary:
      "Organized high-impact service and fundraising initiatives supporting medical missions and prosthetic outreach.",
  },
  {
    organization: "Vector Consulting Club",
    role: "Co-President",
    summary:
      "Built training and project pipelines connecting early-career engineering students with startup consulting work.",
  },
];

export const aboutNarrative = [
  "I’m Dhruv Toprani, a Computer Engineering student at Michigan State University working across product, AI systems, robotics, and applied research.",
  "I’m drawn to problems where the technical system is only half the story. The other half is behavior, decision-making, operational friction, and whether a system truly helps people move faster and think clearer.",
  "Across my work, the pattern is consistent: I build systems that turn complexity into clarity.",
];

export const activeInterests = [
  "AI agents and work design",
  "Human-robot collaboration",
  "Technical program systems",
  "Product strategy",
  "Accessibility technology",
  "Consumer products with hidden technical depth",
  "Tools that make people faster, sharper, and more capable",
];

export const contactMethods: ContactMethod[] = [
  { label: "Email", href: "mailto:dhruv@example.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/" },
  { label: "GitHub", href: "https://github.com/" },
  { label: "Resume", href: "/resume.pdf" },
  { label: "Calendly", href: "https://calendly.com/" },
];
