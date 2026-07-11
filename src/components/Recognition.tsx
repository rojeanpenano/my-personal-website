const AWARDS = [
  {
    title: "1st Place — Technology Exhibit",
    venue: "2nd Conference on Technology and Research for National Development and Sustainability · 2026",
    context: "Rice Up, selected over competing thesis projects within De La Salle University–Dasmariñas.",
  },
  {
    title: "2nd Place — Best Thesis",
    venue: "De La Salle University–Dasmariñas · 2026",
    context: "Second-best thesis under the Computer Science department.",
  },
  {
    title: "Best Paper Presentation — Finalist",
    venue: "International Conference on Artificial Intelligence 2026",
    context: "Rice Up, named as one of the top 5 best papers over several competing submissions.",
  },
] as const;

const CERTIFICATIONS = [
  {
    issuer: "Cisco Networking Academy",
    items: [
      "Linux Essentials",
      "Operating Systems Basics",
      "Introduction to Cybersecurity",
      "Introduction to JavaScript",
    ],
  },
  {
    issuer: "WPH Digital Workshop",
    items: [
      "Generative AI Awareness & Effective Prompting",
      "Designing for Humans — UX Psychology",
    ],
  },
  {
    issuer: "Pearson",
    items: ["Versant English Placement Test"],
  },
] as const;

export default function Recognition() {
  return (
    <div className="grid gap-16 lg:grid-cols-[1fr_minmax(280px,360px)]">
      {/* ── Awards — citation style ── */}
      <ol className="space-y-0">
        {AWARDS.map((award, index) => (
          <li
            key={award.title}
            className="animate-fade-settle grid grid-cols-[3rem_1fr] gap-4 border-b border-hairline py-8 first:pt-0 last:border-b-0"
            style={{ animationDelay: `${index * 0.12}s` }}
          >
            <span className="font-mono text-sm text-ink-muted">
              [{String(index + 1).padStart(2, "0")}]
            </span>
            <div>
              <h3 className="text-lg font-medium text-ink">{award.title}</h3>
              <p className="mt-1 font-mono text-xs tracking-widest text-accent uppercase">
                {award.venue}
              </p>
              <p className="mt-2 text-sm text-ink-muted">{award.context}</p>
            </div>
          </li>
        ))}
      </ol>

      {/* ── Certifications — compact sidebar ── */}
      <div className="h-fit border-l border-hairline pl-6">
        <h3 className="font-mono text-xs tracking-widest text-ink-muted uppercase">
          Certifications
        </h3>
        <dl className="mt-6 space-y-6">
          {CERTIFICATIONS.map((group) => (
            <div key={group.issuer}>
              <dt className="text-sm font-medium text-ink">{group.issuer}</dt>
              {group.items.map((item) => (
                <dd key={item} className="mt-1.5 font-mono text-xs text-ink-muted">
                  {item}
                </dd>
              ))}
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}