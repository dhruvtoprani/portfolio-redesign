type SectionHeadingProps = {
  label: string;
  title: string;
  description?: string;
};

export function SectionHeading({
  label,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="space-y-3">
      <p className="signal-label">{label}</p>
      <h2 className="max-w-3xl text-2xl font-semibold leading-tight text-smoke md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-3xl text-sm leading-relaxed text-smoke/70 md:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}
