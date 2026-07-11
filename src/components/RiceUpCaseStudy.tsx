const DISEASE_CLASSES = [
  "Bacterial Leaf Blight",
  "Brown Spot",
  "Healthy Rice Leaf",
  "Leaf Blast",
  "Leaf Scald",
  "Narrow Brown Leaf Spot",
  "Rice Hispa",
  "Sheath Blight",
  "Tungro",
] as const;

const METRICS = [
  {
    value: "76%",
    label: "Disease classifier accuracy",
    detail: "9-class VGG16 · 10,689 images",
  },
  {
    value: "95%",
    label: "Pest model v2 accuracy",
    detail: "Up from 87% after dataset rebalancing",
  },
  {
    value: "5.03%",
    label: "Price forecast MAPE",
    detail: "226 records · significant at 95% CI",
  },
  {
    value: "4.22/5",
    label: "ISO/IEC 25010 quality score",
    detail: "55 respondents · all 9 categories rated High",
  },
] as const;

const SUPPORT_MODULES = [
  {
    title: "Pest detection",
    detail:
      "A separate binary CNN answering the question farmers actually asked: is there pest damage, yes or no? Deliberately simple to keep the diagnostic flow accessible.",
  },
  {
    title: "AskJuan — Filipino-language assistant",
    detail:
      "Structured library of predefined, selectable Filipino Q&As curated from DA–PhilRice, the IRRI Rice Knowledge Bank, and extension-worker interviews — chosen over a free-form chatbot to guarantee accuracy.",
  },
  {
    title: "Farming calendar",
    detail:
      "Per-user task scheduling (Magtanim, Mag-abono, Magpatubig, Mag-ani) on Firebase Authentication and Firestore, guided by documented Philippine rice crop durations.",
  },
  {
    title: "Price listing & forecasting",
    detail:
      "Node.js backend serving cleaned Department of Agriculture Bantay Presyo data, with a linear regression module (R² 0.56, MAPE 5.03%, p < 0.05) estimating short-term price movement.",
  },
] as const;

const AWARDS = [
  "1st Place — Technology Exhibit at CONTRENDS 2026",
  "2nd Place — Best Thesis under the Department of Computer Science (DLSU-D), 2026",
  "Best Paper Presentation Finalist — ICAI 2026",
] as const;

export default function RiceUpCaseStudy() {
  return (
    <article className="rounded-lg border border-hairline bg-surface p-8 sm:p-12">
      {/* ── Header ── */}
      <header>
        <p className="font-mono text-xs tracking-widest text-ink-muted uppercase">
          Flagship · Undergraduate Thesis · 3-person team · 2025–2026
        </p>
        <h3 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">
          Rice Up
        </h3>
        <p className="mt-2 text-lg text-ink-muted">
          A Web Application for Rice Leaf Disease Detection Using CNN and Farming Support for Filipino Palay Farmers in Naic, Cavite.
        </p>
      </header>

      {/* ── Problem ── */}
      <div className="mt-10 max-w-2xl space-y-4 text-ink-muted leading-relaxed">
        <p>
          Rice diseases are cheapest to fight when caught early — but palay
          farmers in Naic diagnose by eye and memory, with occasional
          technician visits. Existing agri-apps go unused because they assume
          connectivity, devices, and digital literacy rural farmers don&apos;t
          have. Rice Up puts a disease diagnosis in a farmer&apos;s pocket:
          photograph a rice leaf, get a classification — entirely in Filipino,
          designed with the farmers and the Municipal Agriculturist of Naic.
        </p>
      </div>

      {/* ── Architecture schematic — built in 5.2 ── */}
      <div className="mt-12 flex min-h-64 items-center justify-center rounded border border-dashed border-hairline">
        <p className="font-mono text-xs tracking-widest text-ink-muted uppercase">
          schematic: pending
        </p>
      </div>

      {/* ── Core feature: disease detection ── */}
      <div className="mt-12">
        <h4 className="font-mono text-xs tracking-widest text-accent uppercase">
          Core feature — disease detection
        </h4>
        <div className="mt-6 max-w-2xl space-y-4 text-sm leading-relaxed text-ink-muted">
          <p>
            The heart of Rice Up is a VGG16 transfer-learning classifier
            trained on 10,689 rice leaf images across nine disease
            categories, referenced against the DA–PhilRice field guide to
            keep every diagnosis aligned with officially recognized agronomy.
            VGG16 was selected after head-to-head evaluation against ResNet50
            and EfficientNetB4 — it converged most reliably and produced the
            most stable validation scores under our compute constraints.
          </p>
          <p>
            A farmer uploads a leaf photo; the frontend sends it to the
            isolated Flask inference service, where the image is resized,
            normalized, and edge-enhanced to amplify lesion and streak
            patterns before classification. The model performs strongest on
            diseases with distinct visual signatures — Tungro, Brown Spot,
            Leaf Scald — and the confusion matrix shows exactly where it
            struggles: visually overlapping lesion types like Leaf Blast and
            Narrow Brown Leaf Spot, the known frontier for expanding the
            dataset.
          </p>
        </div>
        <ul className="mt-6 flex max-w-2xl flex-wrap gap-2">
          {DISEASE_CLASSES.map((diseaseClass) => (
            <li
              key={diseaseClass}
              className="rounded border border-hairline px-3 py-1 font-mono text-xs text-ink-muted"
            >
              {diseaseClass}
            </li>
          ))}
        </ul>
      </div>

      {/* ── Measured results ── */}
      <div className="mt-12">
        <h4 className="font-mono text-xs tracking-widest text-accent uppercase">
          Measured results
        </h4>
        <dl className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded border border-hairline bg-hairline lg:grid-cols-4">
          {METRICS.map((metric) => (
            <div key={metric.label} className="bg-surface p-5">
              <dd className="text-2xl font-semibold text-ink">
                {metric.value}
              </dd>
              <dt className="mt-1 text-sm text-ink-muted">{metric.label}</dt>
              <p className="mt-2 font-mono text-xs text-ink-muted">
                {metric.detail}
              </p>
            </div>
          ))}
        </dl>
      </div>

      {/* ── Engineering highlight ── */}
      <div className="mt-12 border-l-2 border-accent pl-6">
        <h4 className="font-mono text-xs tracking-widest text-accent uppercase">
          Engineering highlight — reading past the headline metric
        </h4>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-muted">
          Pest model v1 reported 87% accuracy — but its precision–recall
          asymmetry revealed overfitting to a 2,000-vs-300 class imbalance:
          the model rarely missed pests because it called nearly everything a
          pest. We rebuilt the dataset to a near 1:1 ratio, applied heavy
          augmentation, and retrained. v2 reached 95% accuracy with balanced
          per-class F1 — a reminder that a single headline number can hide a
          model that doesn&apos;t generalize.
        </p>
      </div>

      {/* ── Supporting modules ── */}
      <div className="mt-12">
        <h4 className="font-mono text-xs tracking-widest text-accent uppercase">
          Supporting modules
        </h4>
        <dl className="mt-6 grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {SUPPORT_MODULES.map((module) => (
            <div key={module.title}>
              <dt className="font-medium text-ink">{module.title}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-ink-muted">
                {module.detail}
              </dd>
            </div>
          ))}
        </dl>
        <p className="mt-8 max-w-2xl text-sm leading-relaxed text-ink-muted">
          My role: backend architecture, database design, and cloud
          implementation; building and integrating the VGG16 disease model
          into the Flask REST API; and developing the price regression module,
          AskJuan, and the farming calendar — in a three-person thesis team.
        </p>
      </div>

      {/* ── Recognition ── */}
      <div className="mt-12 border-t border-hairline pt-8">
        <h4 className="font-mono text-xs tracking-widest text-accent uppercase">
          Recognition
        </h4>
        <ul className="mt-4 space-y-2">
          {AWARDS.map((award) => (
            <li key={award} className="text-sm text-ink-muted">
              {award}
            </li>
          ))}
        </ul>
        <p className="mt-6 max-w-2xl font-mono text-xs leading-relaxed text-ink-muted">
          Scoped honestly: Rice Up is a supplementary decision-support tool —
          it does not replace agronomists, field technicians, or laboratory
          diagnostics.
        </p>
      </div>

      {/* ── Links ── */}
      <div className="mt-10">
        <div className="flex flex-wrap items-center gap-8">
          <a
            href="https://riceup-dev.github.io/riceup-app/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-accent transition-colors hover:text-ink"
          >
            live demo →
          </a>
          <a
            href="https://github.com/rojeanpenano/rice-up-web"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-ink-muted transition-colors hover:text-ink"
          >
            view repository →
          </a>
        </div>
        <p className="mt-4 max-w-2xl font-mono text-xs leading-relaxed text-ink-muted">
          demo note: the platform is fully live; disease and pest inference
          runs on an on-demand cloud runtime — heavyweight CNN models exceed
          free-tier hosting, so inference was isolated as a separate service
          and the platform degrades gracefully when it&apos;s offline.
        </p>
      </div>
    </article>
  );
}