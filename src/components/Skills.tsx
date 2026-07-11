type SkillCluster = {
  label: string;
  skills: readonly string[];
};

const CLUSTERS: readonly SkillCluster[] = [
  {
    label: "Backend engineering",
    skills: [
      "Flask",
      "Express.js",
      "REST API design",
      "JWT authentication",
      "Pydantic validation",
      "Modular architecture",
      "Event-driven programming",
    ],
  },
  {
    label: "AI & machine learning",
    skills: [
      "TensorFlow",
      "scikit-learn",
      "CNNs & transfer learning",
      "Image classification",
      "Regression analysis",
      "Model integration",
      "Prompt engineering",
    ],
  },
  {
    label: "Cloud & databases",
    skills: [
      "Azure Functions",
      "Cosmos DB",
      "Blob Storage",
      "Firebase Auth",
      "Cloud Firestore",
      "MongoDB & Mongoose",
      "Schema design",
    ],
  },
  {
    label: "Data analysis",
    skills: [
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Jupyter Notebook",
      "Google Colab",
    ],
  },
  {
    label: "Languages & tools",
    skills: [
      "Python",
      "JavaScript",
      "HTML & CSS",
      "Java (familiar)",
      "Git & GitHub",
      "Postman",
    ],
  },
] as const;

const HOW_I_WORK = [
  "Listens first, thinks critically, stays open to better approaches.",
  "Learns independently; treats feedback as data, not criticism.",
  "Composed under pressure, curious about root causes.",
  "Follows through — on details, commitments, and teammates.",
] as const;

export default function Skills() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {CLUSTERS.map((cluster, index) => (
        <div
          key={cluster.label}
          className="animate-fade-settle rounded-lg border border-hairline bg-surface p-6"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <h3 className="font-mono text-xs tracking-widest text-accent uppercase">
            {cluster.label}
          </h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {cluster.skills.map((skill) => (
              <li
                key={skill}
                className="rounded border border-hairline px-3 py-1 font-mono text-xs text-ink-muted"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div
        className="animate-fade-settle rounded-lg border border-hairline bg-surface p-6"
        style={{ animationDelay: `${CLUSTERS.length * 0.1}s` }}
      >
        <h3 className="font-mono text-xs tracking-widest text-accent uppercase">
          How I work
        </h3>
        <ul className="mt-4 space-y-3">
          {HOW_I_WORK.map((line) => (
            <li key={line} className="text-sm leading-relaxed text-ink-muted">
              <span aria-hidden="true" className="mr-2 text-accent">
                ─
              </span>
              {line}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}