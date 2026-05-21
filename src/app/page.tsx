import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ExperienceCard } from "@/components/cards/experience-card";
import { ProjectCard } from "@/components/cards/project-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { SignalField } from "@/components/visuals/signal-field";
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
    <div className="mx-auto w-full max-w-6xl px-6 py-10 md:py-14">
      <section className="grid gap-8 md:grid-cols-[1.35fr_1fr] md:items-center">
        <div className="space-y-6">
          <p className="signal-label">SYSTEMS · AI · ROBOTICS · PRODUCT</p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-[1.05] text-smoke md:text-6xl">
            I build systems where product, engineering, and intelligence meet.
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-smoke/72">
            I’m Dhruv Toprani, a Computer Engineering student at Michigan State
            University building across product management, AI systems, robotics,
            technical program management, and human-centered research.
          </p>
          <p className="text-sm tracking-[0.12em] text-beaver">{positioningLine}</p>
          <div className="flex flex-wrap items-center gap-3 text-xs tracking-[0.12em]">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full border border-burgundy bg-burgundy px-5 py-2.5 text-smoke transition-colors hover:bg-walnut"
            >
              View Projects
              <ArrowUpRight className="size-3.5" />
            </Link>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-beaver/40 px-5 py-2.5 text-smoke/80 hover:border-mist/50 hover:text-smoke"
            >
              View Resume
            </a>
            <Link
              href="/contact"
              className="rounded-full border border-beaver/40 px-5 py-2.5 text-smoke/80 hover:border-mist/50 hover:text-smoke"
            >
              Contact Me
            </Link>
          </div>
        </div>
        <SignalField />
      </section>

      <section className="mt-14 rounded-2xl border border-beaver/30 bg-black/30 p-5 md:p-7">
        <p className="signal-label">SIGNAL STRIP</p>
        <div className="mt-4 grid gap-2 md:grid-cols-2">
          {signalHighlights.map((highlight) => (
            <p key={highlight} className="text-sm text-smoke/75">
              {highlight}
            </p>
          ))}
        </div>
      </section>

      <section className="mt-16 space-y-6">
        <SectionHeading
          label="FEATURED PROJECTS"
          title="Technical depth, product taste, and execution speed."
          description="Each project should communicate the problem, the system, and the impact in under two minutes."
        />
        <div className="grid gap-4 md:grid-cols-3">
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
          title="Execution across product, software, analytics, and research."
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

      <section className="mt-16 rounded-2xl border border-beaver/30 bg-black/30 p-6 md:p-8">
        <SectionHeading
          label="RESEARCH + SYSTEMS"
          title="I’m interested in systems where technical architecture and human behavior are inseparable."
        />
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-smoke/70">
          This section is scaffolded for deeper writing on AI agents, human-robot
          collaboration, and operational design. We will fill this with project
          snippets and reflections after content lock.
        </p>
      </section>

      <section className="mt-16 mb-8 rounded-2xl border border-burgundy/40 bg-burgundy/18 p-6 md:p-8">
        <SectionHeading
          label="CONTACT"
          title="Let’s build something with edge."
          description="Open to conversations around product, AI systems, robotics, technical program management, research, and startup work."
        />
        <div className="mt-5 flex flex-wrap gap-3 text-xs tracking-[0.12em]">
          <Link
            href="/contact"
            className="rounded-full border border-mist/60 bg-mist/10 px-5 py-2.5 text-mist hover:bg-mist/15"
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
