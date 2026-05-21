import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ExperienceCard } from "@/components/cards/experience-card";
import { ProjectCard } from "@/components/cards/project-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { TemplateStack } from "@/components/visuals/template-stack";
import {
  experience,
  positioningLine,
  projects,
  signalHighlights,
} from "@/data/site-content";

export default function Home() {
  const featuredProjects = projects.slice(0, 3);
  const featuredExperience = experience.slice(0, 3);

  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-8 md:py-12">
      <section className="glass-panel mint-ring relative overflow-hidden p-6 md:p-8">
        <div className="grid gap-8 md:grid-cols-[1.08fr_0.92fr] md:items-center">
          <div className="space-y-6">
            <p className="signal-label">PERSONALFOLIO TEMPLATE · CUSTOMIZED FOR DHRUV</p>
            <h1 className="max-w-3xl text-4xl font-semibold leading-[1.03] text-smoke md:text-6xl">
              Portfolio where strategy, systems, and technical depth feel obvious.
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-smoke/72">
              I’m Dhruv Toprani, a Computer Engineering student at Michigan State
              University building AI systems, robotics workflows, product
              operations, and execution frameworks that turn complexity into
              leverage.
            </p>
            <p className="text-sm tracking-[0.12em] text-mist/92">{positioningLine}</p>

            <div className="flex flex-wrap items-center gap-3 text-xs tracking-[0.12em]">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-full border border-mist/40 bg-mist/16 px-5 py-2.5 text-smoke transition-colors hover:bg-mist/24"
              >
                View Projects
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

      <section className="mt-8 grid gap-4 md:grid-cols-3">
        <article className="glass-panel p-5">
          <p className="text-xs tracking-[0.14em] text-mist/85">FOCUS</p>
          <p className="mt-2 text-sm leading-relaxed text-smoke/76">
            Intelligent systems across product, robotics, and technical program
            execution.
          </p>
        </article>
        <article className="glass-panel p-5">
          <p className="text-xs tracking-[0.14em] text-mist/85">SIGNAL</p>
          <p className="mt-2 text-sm leading-relaxed text-smoke/76">
            UURAF first-place awards in both engineering and business categories.
          </p>
        </article>
        <article className="glass-panel p-5">
          <p className="text-xs tracking-[0.14em] text-mist/85">MINDSET</p>
          <p className="mt-2 text-sm leading-relaxed text-smoke/76">
            Confident systems thinking with practical build velocity.
          </p>
        </article>
      </section>

      <section className="mt-10 glass-panel p-5 md:p-7">
        <p className="signal-label">SIGNAL STRIP</p>
        <div className="mt-4 grid gap-2 md:grid-cols-2">
          {signalHighlights.map((highlight) => (
            <p key={highlight} className="text-sm text-smoke/76">
              {highlight}
            </p>
          ))}
        </div>
      </section>

      <section className="mt-16 space-y-6">
        <SectionHeading
          label="FEATURED PROJECTS"
          title="Selected work with system clarity and measurable outcomes."
          description="Drafting this in a Personalfolio-inspired visual style with sharper hierarchy and cleaner card rhythm."
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
          label="EXPERIENCE PREVIEW"
          title="Execution across product operations, software systems, and research."
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
          label="RESEARCH + SYSTEMS"
          title="I’m interested in systems where architecture and human behavior are inseparable."
        />
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-smoke/70">
          This section stays as a modular slot for deeper writing on AI agents,
          human-robot collaboration, and operational design patterns. We can drop
          in diagrams, experiment snapshots, and synthesis notes next.
        </p>
      </section>

      <section className="mt-16 mb-8 glass-panel p-6 md:p-8">
        <SectionHeading
          label="CONTACT"
          title="Let’s build something with edge."
          description="Open to conversations around product systems, AI operations, robotics, and high-leverage technical execution."
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
