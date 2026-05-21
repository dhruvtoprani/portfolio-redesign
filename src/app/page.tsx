import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ExperienceCard } from "@/components/cards/experience-card";
import { ProjectCard } from "@/components/cards/project-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { TemplateStack } from "@/components/visuals/template-stack";
import {
  aboutNarrative,
  educationHighlights,
  experience,
  positioningLine,
  projects,
  toolsAndSkills,
} from "@/data/site-content";

export default function Home() {
  const featuredProjects = projects.slice(0, 3);
  const featuredExperience = experience.slice(0, 3);

  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-8 md:py-12">
      <section className="glass-panel mint-ring relative overflow-hidden p-6 md:p-8">
        <div className="grid gap-8 md:grid-cols-[1.08fr_0.92fr] md:items-center">
          <div className="space-y-6">
            <p className="signal-label">TEMPLATE DIRECTION · GREEN + BLACK</p>
            <h1 className="max-w-3xl text-4xl font-semibold leading-[1.03] text-smoke md:text-6xl">
              I build intelligent systems that turn complexity into leverage.
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-smoke/72">
              Computer Engineering student at Michigan State University working
              across product, AI systems, robotics, and technical execution.
            </p>
            <p className="text-sm tracking-[0.12em] text-mist/92">{positioningLine}</p>

            <div className="flex flex-wrap items-center gap-3 text-xs tracking-[0.12em]">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-full border border-mist/40 bg-mist/16 px-5 py-2.5 text-smoke transition-colors hover:bg-mist/24"
              >
                View Work
                <ArrowUpRight className="size-3.5" />
              </Link>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-beaver/35 px-5 py-2.5 text-smoke/82 hover:border-mist/45 hover:text-smoke"
              >
                View Resume
              </a>
              <Link
                href="/contact"
                className="rounded-full border border-beaver/35 px-5 py-2.5 text-smoke/82 hover:border-mist/45 hover:text-smoke"
              >
                Contact Me
              </Link>
            </div>
          </div>

          <TemplateStack />
        </div>
      </section>

      <section className="mt-8 grid gap-4 lg:grid-cols-[1.25fr_0.75fr]">
        <article className="glass-panel p-6">
          <SectionHeading
            label="ABOUT ME"
            title="Building where product strategy meets technical systems."
          />
          <div className="mt-4 grid gap-4">
            {aboutNarrative.slice(0, 2).map((paragraph) => (
              <p key={paragraph} className="text-sm leading-relaxed text-smoke/75">
                {paragraph}
              </p>
            ))}
          </div>
        </article>

        <article className="glass-panel p-6">
          <p className="signal-label">EDUCATION</p>
          <div className="mt-4 space-y-3">
            {educationHighlights.map((item) => (
              <p key={item} className="text-sm leading-relaxed text-smoke/75">
                {item}
              </p>
            ))}
          </div>
        </article>
      </section>

      <section className="mt-16 space-y-6">
        <SectionHeading
          label="SELECTED WORK"
          title="Projects with clear system design and practical impact."
          description="Focused sample set from AI systems, research, hardware, and product execution."
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-xs tracking-[0.12em] text-mist hover:text-smoke"
        >
          See all projects
          <ArrowUpRight className="size-3.5" />
        </Link>
      </section>

      <section className="mt-16 space-y-6">
        <SectionHeading
          label="EXPERIENCE"
          title="Execution across software, product systems, and applied research."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {featuredExperience.map((item) => (
            <ExperienceCard
              key={`${item.organization}-${item.role}`}
              item={item}
            />
          ))}
        </div>
        <Link
          href="/experience"
          className="inline-flex items-center gap-2 text-xs tracking-[0.12em] text-mist hover:text-smoke"
        >
          View full experience timeline
          <ArrowUpRight className="size-3.5" />
        </Link>
      </section>

      <section className="mt-16 glass-panel p-6 md:p-8">
        <SectionHeading
          label="TOOLS & SKILLS"
          title="Technical stack and operating capabilities."
        />
        <div className="mt-5 flex flex-wrap gap-2.5">
          {toolsAndSkills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-beaver/30 bg-black/20 px-3.5 py-1.5 text-xs tracking-[0.1em] text-smoke/80"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="mt-16 mb-8 glass-panel p-6 md:p-8">
        <SectionHeading
          label="CONTACT"
          title="Open to product, AI systems, and engineering conversations."
          description="If you're building something ambitious that needs strategy and execution, let's connect."
        />
        <div className="mt-5 flex flex-wrap gap-3 text-xs tracking-[0.12em]">
          <Link
            href="/contact"
            className="rounded-full border border-mist/58 bg-mist/10 px-5 py-2.5 text-mist hover:bg-mist/15"
          >
            Open Contact Page
          </Link>
          <a
            href="mailto:dhruv@example.com"
            className="rounded-full border border-beaver/45 px-5 py-2.5 text-smoke/85 hover:border-mist/45 hover:text-smoke"
          >
            Email Me
          </a>
        </div>
      </section>
    </div>
  );
}
