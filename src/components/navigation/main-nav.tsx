"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FileText } from "lucide-react";
import { navLinks } from "@/data/site-content";

export function MainNav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-beaver/30 bg-ink-base/80 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        <Link href="/" className="text-sm font-semibold tracking-[0.24em] text-smoke/95">
          DHRUV TOPRANI
        </Link>
        <nav className="flex flex-wrap items-center gap-2">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname?.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  "rounded-full border px-4 py-1.5 text-xs tracking-[0.16em] transition-all",
                  isActive
                    ? "border-mist/60 bg-mist/10 text-mist"
                    : "border-beaver/40 text-smoke/75 hover:border-mist/40 hover:text-smoke",
                )}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-burgundy bg-burgundy px-4 py-1.5 text-xs font-medium tracking-[0.12em] text-smoke transition-colors hover:bg-walnut"
          >
            <FileText className="size-3.5" />
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
