export default function Footer() {
  return (
    <footer className="border-t border-hairline">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <p className="font-mono text-xs text-ink-muted">
          © 2026 Rojean Peñano — engineered with intent
        </p>
        <ul className="flex items-center gap-6">
          <li>
            <a
              href="https://github.com/rojeanpenano"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-ink-muted transition-colors hover:text-ink"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/rojeanpenano"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-ink-muted transition-colors hover:text-ink"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="mailto:rojeanpenano@gmail.com"
              className="text-xs text-ink-muted transition-colors hover:text-ink"
            >
              Email
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}