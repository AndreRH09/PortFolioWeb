interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  github: string;
  live: string;
}

export default function ProjectCard({
  title,
  description,
  tags,
  github,
  live,
}: ProjectCardProps) {
  return (
    <div className="group border border-border p-8 hover:border-foreground/50 transition-colors">
      <div className="space-y-4">
        <h3 className="text-lg font-medium tracking-tight">{title}</h3>

        <p className="text-base leading-relaxed text-muted">{description}</p>

        <div className="flex flex-wrap gap-2 pt-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium text-muted border border-border px-2.5 py-1"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4 pt-4">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-foreground hover:opacity-60 transition-opacity"
          >
            GitHub →
          </a>
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-foreground hover:opacity-60 transition-opacity"
          >
            Live →
          </a>
        </div>
      </div>
    </div>
  );
}
