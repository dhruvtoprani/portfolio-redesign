import type { Metadata } from "next";
import type { ReactNode } from "react";
import { ArrowUpRight, Globe, Link2, Mail, MapPin } from "lucide-react";
import { contactMethods } from "@/data/site-content";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach out to Dhruv Toprani for opportunities in product, AI systems, robotics, and technical leadership.",
};

const iconMap: Record<string, ReactNode> = {
  Email: <Mail className="size-4" />,
  LinkedIn: <Link2 className="size-4" />,
  GitHub: <Globe className="size-4" />,
  Resume: <ArrowUpRight className="size-4" />,
  Calendly: <Link2 className="size-4" />,
};

export default function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-10 md:py-14">
      <SectionHeading
        label="CONTACT"
        title="Let’s build something with edge."
        description="Open to conversations around product, AI systems, robotics, technical program management, research, startups, and ambitious execution."
      />

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {contactMethods.map((method) => (
          <a
            key={method.label}
            href={method.href}
            target={method.href.startsWith("http") ? "_blank" : undefined}
            rel={method.href.startsWith("http") ? "noreferrer" : undefined}
            className="glass-panel group flex items-center justify-between p-5 transition-all hover:-translate-y-0.5 hover:border-mist/55"
          >
            <span className="inline-flex items-center gap-3 text-sm text-smoke/80">
              {iconMap[method.label] ?? <ArrowUpRight className="size-4" />}
              {method.label}
            </span>
            <ArrowUpRight className="size-4 text-beaver transition-colors group-hover:text-mist" />
          </a>
        ))}
      </div>

      <div className="glass-panel mt-10 p-6">
        <p className="signal-label">LOCATION</p>
        <p className="mt-3 inline-flex items-center gap-2 text-sm text-smoke/72">
          <MapPin className="size-4 text-mist" />
          East Lansing / Auburn Hills, Michigan
        </p>
      </div>
    </div>
  );
}
