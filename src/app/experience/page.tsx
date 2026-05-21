import type { Metadata } from "next";
import { ExperienceCard } from "@/components/cards/experience-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { experience, leadership } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Professional experience across technical program management, product, software, analytics, and applied research.",
};

export default function ExperiencePage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-10 md:py-14">
      <SectionHeading
        label="EXPERIENCE"
        title="Professional credibility built through execution and systems ownership."
        description="Timeline cards are scaffolded for final bullet refinements once resume metrics are locked."
      />
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {experience.map((item) => (
          <ExperienceCard key={`${item.organization}-${item.role}`} item={item} />
        ))}
      </div>

      <section className="glass-panel mt-14 p-6">
        <SectionHeading
          label="LEADERSHIP"
          title="Leading teams, operations, and high-trust communities."
        />
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {leadership.map((item) => (
            <article
              key={`${item.organization}-${item.role}`}
              className="rounded-xl border border-beaver/24 bg-black/24 p-4"
            >
              <p className="text-xs tracking-[0.12em] text-mist/85">{item.role}</p>
              <h3 className="mt-2 text-base font-medium text-smoke">
                {item.organization}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-smoke/70">
                {item.summary}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
