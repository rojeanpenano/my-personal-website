import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

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
        <Hero />

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