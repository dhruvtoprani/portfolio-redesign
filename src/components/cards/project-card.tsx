import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Tag } from "@/components/ui/tag";
import type { Project } from "@/types/site";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="glass-panel group p-5 transition-all hover:-translate-y-0.5 hover:border-mist/45">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-medium text-smoke">{project.name}</h3>
        <ArrowUpRight className="size-4 text-beaver transition-colors group-hover:text-mist" />
      </div>
      <p className="mt-3 text-sm leading-relaxed text-smoke/74">{project.summary}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
      <div className="mt-4 space-y-1 text-xs">
        <p className="tracking-[0.12em] text-mist/85">ROLE · {project.role}</p>
        <p className="tracking-[0.1em] text-smoke/72">IMPACT · {project.impact}</p>
      </div>
      <div className="mt-5 flex flex-wrap gap-4 text-xs tracking-[0.12em]">
        <Link href={project.caseStudyHref} className="text-mist hover:text-smoke">
          Case Study
        </Link>
        {project.githubHref ? (
          <a
            href={project.githubHref}
            target="_blank"
            rel="noreferrer"
            className="text-smoke/75 hover:text-smoke"
          >
            GitHub
          </a>
        ) : null}
        {project.demoHref ? (
          <a
            href={project.demoHref}
            target="_blank"
            rel="noreferrer"
            className="text-smoke/75 hover:text-smoke"
          >
            Demo
          </a>
        ) : null}
      </div>
    </article>
  );
}
