import SkillChips from "@/components/SkillsChips";

export type Project = {
  kicker: string;
  title: string;
  description: string;
  stack: readonly string[];
  links: readonly { label: string; href: string }[];
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col rounded-lg border border-hairline bg-surface p-8">
      <p className="font-mono text-xs tracking-widest text-ink-muted uppercase">
        {project.kicker}
      </p>
      <h3 className="mt-3 text-xl font-semibold text-ink">{project.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-ink-muted">
        {project.description}
      </p>

      <SkillChips skills={project.stack} />

      <div className="mt-6 flex flex-wrap items-center gap-6 pt-2">
        {project.links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-accent transition-colors hover:text-ink"
          >
            {link.label} →
          </a>
        ))}
      </div>
    </article>
  );
}