import type { ReactNode } from "react";

type TagProps = {
  children: ReactNode;
};

export function Tag({ children }: TagProps) {
  return (
    <span className="rounded-full border border-beaver/45 bg-ink-base/40 px-3 py-1 text-[11px] tracking-[0.12em] text-smoke/80">
      {children}
    </span>
  );
}
