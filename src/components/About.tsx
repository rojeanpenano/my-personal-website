const FACTS = [
  { key: "location", value: "Tagaytay City, Cavite, Philippines" },
  { key: "degree", value: "Bachelor of Science in Computer Science at De La Salle University - Dasmariñas" },
  { key: "focus", value: "Backend · AI/ML · Cloud" },
  { key: "status", value: "Open to opportunities" },
] as const;

export default function About() {
  return (
    <div className="grid gap-12 md:grid-cols-[1fr_minmax(260px,320px)] md:gap-16">
      <div className="space-y-4 text-ink-muted leading-relaxed">
        <p>
          I build systems where machine learning leaves the notebook and meets
          real users. My thesis project, Rice Up, put CNN-based crop disease
          detection and price forecasting in the hands of Filipino rice
          farmers — and taught me that the hard part of AI isn&apos;t the
          model, it&apos;s the engineering around it.
        </p>
        <p>
          My foundation is backend architecture: Python services, REST APIs,
          cloud deployment on Azure and Firebase. I care about modular design,
          clean interfaces, and code that the next engineer can read without
          asking me what it does.
        </p>
        <p>
          I&apos;d rather solve a problem with a simple system that works than
          an impressive one that doesn&apos;t.
        </p>
      </div>

      <dl className="h-fit space-y-4 border-l border-hairline pl-6 font-mono text-sm">
        {FACTS.map((fact) => (
          <div key={fact.key}>
            <dt className="text-xs tracking-widest text-ink-muted uppercase">
              {fact.key}
            </dt>
            <dd className="mt-1 text-ink">{fact.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}