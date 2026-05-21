import type { ExperienceItem } from "@/types/site";
import { Tag } from "@/components/ui/tag";

type ExperienceCardProps = {
  item: ExperienceItem;
};

export function ExperienceCard({ item }: ExperienceCardProps) {
  return (
    <article className="glass-panel p-5">
      <div className="space-y-1">
        <p className="text-xs tracking-[0.12em] text-mist/85">{item.dateRange}</p>
        <h3 className="text-lg font-semibold text-smoke">{item.role}</h3>
        <p className="text-sm text-smoke/80">{item.organization}</p>
        <p className="text-xs tracking-[0.08em] text-smoke/62">{item.location}</p>
      </div>
      <ul className="mt-4 space-y-2 text-sm leading-relaxed text-smoke/74">
        {item.bullets.map((bullet) => (
          <li key={bullet} className="pl-4 relative">
            <span className="absolute left-0 top-[0.45rem] h-1.5 w-1.5 rounded-full bg-mist/80" />
            {bullet}
          </li>
        ))}
      </ul>
      <div className="mt-4 flex flex-wrap gap-2">
        {item.skills.map((skill) => (
          <Tag key={skill}>{skill}</Tag>
        ))}
      </div>
    </article>
  );
}
