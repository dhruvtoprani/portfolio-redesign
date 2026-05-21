import type { Metadata } from "next";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/section-heading";
import { aboutNarrative, activeInterests, positioningLine } from "@/data/site-content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Who Dhruv Toprani is, what he is building, and what kinds of systems problems he is drawn to.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-10 md:py-14">
      <SectionHeading
        label="ABOUT"
        title="Building at the intersection of intelligent systems, product strategy, and execution."
      />
      <div className="mt-6 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div className="grid gap-4">
          {aboutNarrative.map((paragraph) => (
            <p key={paragraph} className="max-w-4xl text-base leading-relaxed text-smoke/78">
              {paragraph}
            </p>
          ))}
          <p className="text-sm tracking-[0.12em] text-beaver">{positioningLine}</p>
        </div>

        <figure className="glass-panel p-3">
          <div className="overflow-hidden rounded-xl border border-beaver/25">
            <Image
              src="/headshot-toprani-bw.png"
              alt="Black and white headshot of Dhruv Toprani"
              width={1024}
              height={1536}
              priority
              className="h-auto w-full object-cover"
            />
          </div>
          <figcaption className="mt-3 text-xs tracking-[0.14em] text-beaver/85">
            DHRUV TOPRANI · SYSTEMS, PRODUCT, INTELLIGENCE
          </figcaption>
        </figure>
      </div>

      <section className="glass-panel mt-14 p-6 md:p-8">
        <SectionHeading
          label="WHAT I AM USUALLY THINKING ABOUT"
          title="Long-horizon systems questions with practical execution paths."
        />
        <div className="mt-5 grid gap-3 md:grid-cols-2">
          {activeInterests.map((interest) => (
            <p
              key={interest}
              className="rounded-xl border border-beaver/26 bg-black/20 px-4 py-3 text-sm text-smoke/75"
            >
              {interest}
            </p>
          ))}
        </div>
      </section>
    </div>
  );
}
