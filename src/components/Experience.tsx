type TimelineEntry = {
  period: string;
  title: string;
  org: string;
  summary: string;
  points?: readonly string[];
  skills?: readonly string[];
  milestone?: {
    period: string;
    title: string;
    detail: string;
    href: string;
    linkLabel: string;
  };
  accent?: boolean;
};

const TIMELINE: readonly TimelineEntry[] = [
  {
    period: "Jul – Aug 2025",
    title: "Backend Developer Intern",
    org: "Hacktiv Colab Inc.",
    summary:
      "Built a cloud-based inventory management backend in Python, deployed serverless on Azure.",
    points: [
      "Designed five domain modules (items, categories, suppliers, transactions, images) as independent Flask blueprints with Pydantic request validation.",
      "Implemented transaction integrity across Cosmos DB containers with a two-pass validate-then-mutate design and compensating rollback on failure.",
      "Integrated Azure Cosmos DB and Blob Storage, and shipped the API as an Azure Functions app via WSGI middleware.",
    ],
    skills: [
      "Python",
      "Flask",
      "Pydantic",
      "REST API design",
      "Azure Functions",
      "Cosmos DB",
      "Blob Storage",
      "Serverless architecture",
    ],
    accent: true,
  },
  {
    period: "Aug 2022 – Aug 2026",
    title: "Bachelor of Science in Computer Science — Intelligent Systems",
    org: "De La Salle University–Dasmariñas",
    summary:
      "Built a strong foundation in software development and intelligent systems, culminating in a thesis that left the lab and reached real users.",
    milestone: {
      period: "May 2025 – May 2026",
      title: "Rice Up — undergraduate thesis",
      detail:
        "CNN-powered disease detection platform for palay farmers in Naic, Cavite. 1st Place Technology Exhibit, 2nd Best Thesis.",
      href: "#projects",
      linkLabel: "read the case study",
    },
    skills: [
      "TensorFlow",
      "CNNs & transfer learning",
      "scikit-learn",
      "Pandas & NumPy",
      "Regression analysis",
      "Firebase",
      "Node.js",
      "JavaScript",
    ],
  },
] as const;

function SkillChips({ skills }: { skills: readonly string[] }) {
  return (
    <ul className="mt-4 flex max-w-2xl flex-wrap gap-2">
      {skills.map((skill) => (
        <li key={skill}>
          <a
            href="#skills"
            title={`${skill} — see skills map`}
            className="block rounded border border-hairline px-3 py-1 font-mono text-xs text-ink-muted transition-colors hover:border-accent hover:text-accent"
          >
            {skill}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default function Experience() {
  return (
    <ol className="relative ml-3 border-l border-hairline">
      {TIMELINE.map((entry, index) => (
        <li
          key={entry.title}
          className="animate-fade-settle relative pb-12 pl-8 last:pb-0"
          style={{ animationDelay: `${index * 0.15}s` }}
        >
          <span
            aria-hidden="true"
            className={`absolute top-1.5 -left-[5px] h-[9px] w-[9px] rounded-full border ${
              entry.accent
                ? "border-accent bg-accent/20"
                : "border-hairline bg-surface"
            }`}
          />
          <p className="font-mono text-xs tracking-widest text-ink-muted uppercase">
            {entry.period}
          </p>
          <h3 className="mt-2 font-medium text-ink">{entry.title}</h3>
          <p className="mt-0.5 text-sm text-ink-muted">{entry.org}</p>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-muted">
            {entry.summary}
          </p>

          {entry.points && (
            <ul className="mt-3 max-w-2xl space-y-2">
              {entry.points.map((point) => (
                <li
                  key={point}
                  className="text-sm leading-relaxed text-ink-muted"
                >
                  <span aria-hidden="true" className="mr-2 text-accent">
                    ─
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          )}

          {entry.milestone && (
            <div className="relative mt-6 ml-2 max-w-2xl border-l border-hairline pl-6">
              <span
                aria-hidden="true"
                className="absolute top-1.5 -left-[4px] h-[7px] w-[7px] rounded-full border border-accent bg-accent/20"
              />
              <p className="font-mono text-xs tracking-widest text-ink-muted uppercase">
                {entry.milestone.period}
              </p>
              <h4 className="mt-1.5 text-sm font-medium text-ink">
                {entry.milestone.title}
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {entry.milestone.detail}
              </p>
              <a
                href={entry.milestone.href}
                className="mt-2 inline-block font-mono text-xs text-accent transition-colors hover:text-ink"
              >
                {entry.milestone.linkLabel} ↑
              </a>
            </div>
          )}

          {entry.skills && <SkillChips skills={entry.skills} />}
        </li>
      ))}
    </ol>
  );
}