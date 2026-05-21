export type NavLink = {
  href: string;
  label: string;
};

export type ProjectCategory =
  | "AI Systems"
  | "Product"
  | "Robotics"
  | "Research"
  | "Full Stack"
  | "Hardware"
  | "Data and Analytics";

export type Project = {
  slug: string;
  name: string;
  summary: string;
  tags: string[];
  role: string;
  impact: string;
  categories: ProjectCategory[];
  caseStudyHref: string;
  githubHref?: string;
  demoHref?: string;
};

export type ExperienceItem = {
  organization: string;
  role: string;
  dateRange: string;
  location: string;
  bullets: string[];
  skills: string[];
};

export type LeadershipItem = {
  organization: string;
  role: string;
  summary: string;
};

export type ContactMethod = {
  label: string;
  href: string;
};
