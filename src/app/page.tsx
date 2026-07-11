import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import About from "@/components/About";
import RiceUpCaseStudy from "@/components/RiceUpCaseStudy";
import ProjectCard, { type Project } from "@/components/ProjectCard";
import Experience from "@/components/Experience";
import Reveal from "@/components/Reveal";
import Skills from "@/components/Skills";
import Recognition from "@/components/Recognition";
import Contact from "@/components/Contact";

const PROJECTS: readonly Project[] = [
  {
    kicker: "Internship · Hacktiv Colab Inc. · 2025",
    title: "Inventory Management API",
    description:
      "Cloud-based inventory backend built during my internship: five domain modules (items, categories, suppliers, transactions, image uploads) as independent Flask blueprints with Pydantic request validation, deployed serverless on Azure Functions with Cosmos DB and Blob Storage.",
    stack: ["Python", "Flask", "Pydantic", "Azure Functions", "Cosmos DB", "Blob Storage"],
    links: [
      {
        label: "view repository",
        href: "https://github.com/rojeanpenano/python-flask-inventory-api",
      },
    ],
  },
  {
    kicker: "Course Project · Software Engineering · 2024",
    title: "XPENDITURE",
    description:
      "Expense management platform where I owned the backend: REST APIs for budgets, expense tracking, group budgeting, and transactions, with JWT authentication, middleware-based input validation, and endpoints verified through Postman.",
    stack: ["Node.js", "Express", "MongoDB", "Mongoose", "JWT"],
    links: [
      {
        label: "view repository",
        href: "https://github.com/rojeanpenano/xpenditure",
      },
    ],
  },
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
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>
        <section id="experience" className="mx-auto max-w-6xl scroll-mt-14 px-6 py-32">
          <h2 className="font-mono text-sm tracking-widest text-accent uppercase">
            Experience
          </h2>
          <div className="mt-10">
            <Reveal>
              <Experience />
            </Reveal>
          </div>
        </section>
        <section id="skills" className="mx-auto max-w-6xl scroll-mt-14 px-6 py-32">
          <h2 className="font-mono text-sm tracking-widest text-accent uppercase">
            Skills
          </h2>
          <div className="mt-10">
            <Reveal>
              <Skills />
            </Reveal>
          </div>
        </section>
        <section id="recognition" className="mx-auto max-w-6xl scroll-mt-14 px-6 py-32">
          <h2 className="font-mono text-sm tracking-widest text-accent uppercase">
            Recognition
          </h2>
          <div className="mt-10">
            <Reveal>
              <Recognition />
            </Reveal>
          </div>
        </section><section id="contact" className="mx-auto max-w-6xl scroll-mt-14 px-6 py-32">
          <h2 className="font-mono text-sm tracking-widest text-accent uppercase">
            Contact
          </h2>
          <div className="mt-10">
            <Contact />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}