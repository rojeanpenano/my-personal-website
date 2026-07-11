import CopyEmailButton from "@/components/CopyEmailButton";

const ENDPOINTS = [
  {
    label: "github",
    value: "github.com/rojeanpenano",
    href: "https://github.com/rojeanpenano",
  },
  {
    label: "linkedin",
    value: "linkedin.com/in/rojeanpenano",
    href: "https://linkedin.com/in/rojeanpenano",
  },
] as const;

export default function Contact() {
  return (
    <div className="flex flex-col items-start gap-12">
      <p className="max-w-xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
        Let&apos;s build something intelligent.
      </p>

      <dl className="space-y-4 font-mono text-sm">
        <div className="flex flex-wrap items-center gap-3">
          <dt className="w-20 text-xs tracking-widest text-ink-muted uppercase">
            email
          </dt>
          <dd className="flex items-center gap-3">
            <a
              href="mailto:rojeanpenano@gmail.com"
              className="text-ink transition-colors hover:text-accent"
            >
              rojeanpenano@gmail.com
            </a>
            <CopyEmailButton />
          </dd>
        </div>

        {ENDPOINTS.map((endpoint) => (
          <div key={endpoint.label} className="flex flex-wrap items-center gap-3">
            <dt className="w-20 text-xs tracking-widest text-ink-muted uppercase">
              {endpoint.label}
            </dt>
            <dd>
              <a
                href={endpoint.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink transition-colors hover:text-accent"
              >
                {endpoint.value}
              </a>
            </dd>
          </div>
        ))}
      </dl>

      <a
        href="/ROJEAN_PENANO_Resume.pdf"
        download
        className="rounded border border-accent px-6 py-3 font-mono text-sm text-accent transition-colors hover:bg-accent hover:text-canvas"
      >
        download resume — pdf ↓
      </a>
    </div>
  );
}