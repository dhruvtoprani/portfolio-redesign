import Link from "next/link";
import { navLinks, positioningLine } from "@/data/site-content";

export function SiteFooter() {
  return (
    <footer className="border-t border-beaver/20 bg-black/24">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-5 px-6 py-8 md:flex-row md:items-end md:justify-between">
        <div className="space-y-2">
          <p className="text-xs tracking-[0.18em] text-mist/84">CORE POSITIONING</p>
          <p className="max-w-lg text-sm leading-relaxed text-smoke/85">
            {positioningLine}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs tracking-[0.12em] text-smoke/65">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-mist transition-colors">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
