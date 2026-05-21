import type { Metadata } from "next";
import { ProjectGallery } from "@/components/projects/project-gallery";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Portfolio projects spanning AI systems, robotics, product strategy, hardware, and full-stack execution.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-10 md:py-14">
      <SectionHeading
        label="PROJECTS"
        title="Problem-first systems work across AI, robotics, product, and execution."
        description="Use filters to explore range. Each project card should map to a concise case-study page."
      />
      <div className="mt-8">
        <ProjectGallery projects={projects} />
      </div>
    </div>
  );
}
