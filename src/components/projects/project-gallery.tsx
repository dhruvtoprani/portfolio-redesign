"use client";

import { useMemo, useState } from "react";
import clsx from "clsx";
import { ProjectCard } from "@/components/cards/project-card";
import { projectFilters } from "@/data/site-content";
import type { Project, ProjectCategory } from "@/types/site";

type ActiveFilter = ProjectCategory | "All";

type ProjectGalleryProps = {
  projects: Project[];
};

export function ProjectGallery({ projects }: ProjectGalleryProps) {
  const [activeFilter, setActiveFilter] = useState<ActiveFilter>("All");

  const visibleProjects = useMemo(() => {
    if (activeFilter === "All") {
      return projects;
    }

    return projects.filter((project) => project.categories.includes(activeFilter));
  }, [activeFilter, projects]);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {projectFilters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            className={clsx(
              "rounded-full border px-4 py-1.5 text-xs tracking-[0.12em] transition-all",
              activeFilter === filter
                ? "border-mist/62 bg-mist/14 text-smoke"
                : "border-beaver/30 bg-black/20 text-smoke/72 hover:border-mist/45 hover:text-smoke",
            )}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
