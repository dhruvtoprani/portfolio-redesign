import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Tag } from "@/components/ui/tag";
import { projects } from "@/data/site-content";

type ProjectCaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: ProjectCaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: project.name,
    description: project.summary,
  };
}

export default async function ProjectCaseStudyPage({
  params,
}: ProjectCaseStudyPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="mx-auto w-full max-w-4xl px-6 py-10 md:py-14">
      <p className="signal-label">PROJECT CASE STUDY TEMPLATE</p>
      <h1 className="mt-3 text-3xl font-semibold text-smoke md:text-5xl">
        {project.name}
      </h1>
      <p className="mt-4 text-base leading-relaxed text-smoke/75">
        {project.summary}
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>

      <div className="mt-10 grid gap-5">
        <section className="rounded-2xl border border-beaver/30 bg-black/30 p-5">
          <h2 className="text-xs tracking-[0.14em] text-beaver">1. PROBLEM</h2>
          <p className="mt-3 text-sm leading-relaxed text-smoke/70">
            Add the problem statement and constraints this project needed to solve.
          </p>
        </section>
        <section className="rounded-2xl border border-beaver/30 bg-black/30 p-5">
          <h2 className="text-xs tracking-[0.14em] text-beaver">2. INSIGHT</h2>
          <p className="mt-3 text-sm leading-relaxed text-smoke/70">
            Document what you noticed that others were likely missing.
          </p>
        </section>
        <section className="rounded-2xl border border-beaver/30 bg-black/30 p-5">
          <h2 className="text-xs tracking-[0.14em] text-beaver">3. SOLUTION</h2>
          <p className="mt-3 text-sm leading-relaxed text-smoke/70">
            Describe what you built, designed, or tested and why this direction won.
          </p>
        </section>
        <section className="rounded-2xl border border-beaver/30 bg-black/30 p-5">
          <h2 className="text-xs tracking-[0.14em] text-beaver">4. SYSTEM</h2>
          <p className="mt-3 text-sm leading-relaxed text-smoke/70">
            Explain architecture, tools, workflow, models, and implementation details.
          </p>
        </section>
        <section className="rounded-2xl border border-beaver/30 bg-black/30 p-5">
          <h2 className="text-xs tracking-[0.14em] text-beaver">5. IMPACT</h2>
          <p className="mt-3 text-sm leading-relaxed text-smoke/70">
            Add metrics, outcomes, award signal, and practical adoption where relevant.
          </p>
        </section>
        <section className="rounded-2xl border border-beaver/30 bg-black/30 p-5">
          <h2 className="text-xs tracking-[0.14em] text-beaver">6. REFLECTION</h2>
          <p className="mt-3 text-sm leading-relaxed text-smoke/70">
            Capture what you would improve next and what this project changed in your process.
          </p>
        </section>
      </div>
    </div>
  );
}
