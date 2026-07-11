import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const SECTIONS = [
  { id: "about", title: "About" },
  { id: "projects", title: "Projects" },
  { id: "experience", title: "Experience" },
  { id: "skills", title: "Skills" },
  { id: "recognition", title: "Recognition" },
  { id: "contact", title: "Contact" },
] as const;

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top">
        {/* Hero — built in Task 3 */}
        <section
          aria-label="Introduction"
          className="flex min-h-screen items-center justify-center"
        >
          <p className="font-mono text-sm tracking-widest text-ink-muted uppercase">
            hero: pending
          </p>
        </section>

        {SECTIONS.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="mx-auto max-w-6xl scroll-mt-14 px-6 py-32"
          >
            <h2 className="font-mono text-sm tracking-widest text-accent uppercase">
              {section.title}
            </h2>
            <p className="mt-4 text-ink-muted">Module pending.</p>
          </section>
        ))}
      </main>
      <Footer />
    </>
  );
}