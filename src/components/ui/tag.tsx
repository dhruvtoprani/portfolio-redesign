import type { ReactNode } from "react";

type TagProps = {
  children: ReactNode;
};

export function Tag({ children }: TagProps) {
  return (
    <span className="rounded-full border border-beaver/30 bg-black/24 px-3 py-1 text-[11px] tracking-[0.1em] text-smoke/78">
      {children}
    </span>
  );
}
