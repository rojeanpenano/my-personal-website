export default function SkillChips({ skills }: { skills: readonly string[] }) {
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