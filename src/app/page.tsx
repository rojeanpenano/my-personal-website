import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import About from "@/components/About";
import RiceUpCaseStudy from "@/components/RiceUpCaseStudy";

const SECTIONS = [
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
        <section id="about" className="mx-auto max-w-6xl scroll-mt-14 px-6 py-32">
          <h2 className="font-mono text-sm tracking-widest text-accent uppercase">
            About
          </h2>
          <div className="mt-10">
            <About />
          </div>
        </section>
        <section id="projects" className="mx-auto max-w-6xl scroll-mt-14 px-6 py-32">
          <h2 className="font-mono text-sm tracking-widest text-accent uppercase">
            Projects
          </h2>
          <div className="mt-10">
            <RiceUpCaseStudy />
          </div>
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