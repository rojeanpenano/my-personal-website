export default function Hero() {
  return (
    <section
      aria-label="Introduction"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden"
    >
      {/* Engineering grid — decorative, hidden from screen readers */}
      <div aria-hidden="true" className="grid-bg absolute inset-0" />

      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <p className="font-mono text-xs tracking-[0.3em] text-ink-muted uppercase">
          Backend · AI/ML · Cloud
        </p>

        <h1 className="mt-6 text-5xl font-semibold tracking-tight text-ink sm:text-7xl">
          ROJEAN PEÑANO
        </h1>

        <p className="mt-4 text-lg text-ink-muted sm:text-xl">
          Software Engineer — Backend &amp; Intelligent Systems
        </p>

        <p className="mt-8 max-w-md text-sm leading-relaxed text-ink-muted">
          I don&apos;t just write code. I engineer systems.
        </p>
      </div>

      {/* Schematic line inviting the scroll */}
      <svg
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 -translate-x-1/2"
        width="2"
        height="120"
        viewBox="0 0 2 120"
        fill="none"
      >
        <line
          x1="1"
          y1="0"
          x2="1"
          y2="120"
          stroke="var(--color-accent)"
          strokeWidth="1"
          className="animate-line-draw"
          style={{ "--line-length": 120 } as React.CSSProperties}
        />
      </svg>
    </section>
  );
}