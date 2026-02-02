import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

type CaseStudy = {
  slug: string;
  title: string;
  summary: string;
  images: { src: string; alt: string; caption: string }[];
  overview: string;
  problem: string;
  constraints: string[];
  approach: string[];
  decisions: string[];
  outcome: string[];
};

const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "northwind-commerce",
    title: "Northwind Commerce",
    summary:
      "Reframed a complex onboarding flow into guided milestones, cutting time-to-first-value by 31%.",
    images: [
      {
        src: "/work/northwind-hero.svg",
        alt: "Onboarding milestones layout",
        caption: "Milestone-driven onboarding with persistent progress rail.",
      },
      {
        src: "/work/northwind-detail.svg",
        alt: "Setup checklist view",
        caption: "Contextual checklist reducing ambiguity during setup.",
      },
    ],
    overview:
      "Northwind is a mid-market commerce platform with a multi-step setup for inventory, tax, and shipping. The existing flow forced users into a linear form with no sense of progress.",
    problem:
      "Activation was stalling because teams couldn’t see how close they were to go-live. Completion dropped sharply after step three.",
    constraints: [
      "Legacy admin UI with limited component library",
      "No ability to change backend validation rules",
      "Ship within one quarter without major re-platforming",
    ],
    approach: [
      "Mapped the onboarding journey into four milestones with clear readiness states.",
      "Introduced a persistent progress rail and contextual save states.",
      "Built a scoped UI kit to standardize panels, inputs, and status badges.",
    ],
    decisions: [
      "Kept core data requirements intact, but re-ordered steps by dependency.",
      "Added a “skip for now” mechanic with explicit risk messaging.",
      "Integrated inline error surfaces rather than modal blockers.",
    ],
    outcome: [
      "Time-to-first-value reduced by 31%.",
      "Support tickets for onboarding dropped by 22%.",
      "Engineering reported 40% fewer ad-hoc UI changes.",
    ],
  },
  {
    slug: "relay-intelligence",
    title: "Relay Intelligence",
    summary:
      "Built a new component system that aligned six teams and reduced UI drift across releases.",
    images: [
      {
        src: "/work/relay-hero.svg",
        alt: "Design system component library",
        caption: "Component library audit distilled into a scalable system.",
      },
      {
        src: "/work/relay-detail.svg",
        alt: "Token documentation preview",
        caption: "Tokens and usage rules documented for consistent delivery.",
      },
    ],
    overview:
      "Relay is a data platform used across multiple internal teams. The interface had grown inconsistent after repeated feature launches.",
    problem:
      "Teams were shipping UI variations every sprint, slowing engineering and eroding brand trust.",
    constraints: [
      "Existing backlog of in-flight features",
      "Need to support both light and dark data dashboards",
      "Low tolerance for breaking changes",
    ],
    approach: [
      "Audited 130+ screens to group patterns into reusable components.",
      "Built tokens for spacing, color, and typography with strict usage rules.",
      "Paired with engineering to ship a “drop-in” starter kit.",
    ],
    decisions: [
      "Set three border radii and locked them in the tokens.",
      "Documented motion rules to reduce inconsistent hover states.",
      "Created a migration checklist for product teams.",
    ],
    outcome: [
      "Six teams aligned on one UI standard within two releases.",
      "Design review cycles dropped from 8 days to 3 days.",
      "New features shipped 20% faster after rollout.",
    ],
  },
  {
    slug: "atlas-metrics",
    title: "Atlas Metrics",
    summary:
      "Redesigned the activation flow, improving trial conversion by 18% within six weeks.",
    images: [
      {
        src: "/work/atlas-hero.svg",
        alt: "Analytics activation preview",
        caption: "Activation flow with a guided two-step starter path.",
      },
      {
        src: "/work/atlas-detail.svg",
        alt: "Interactive report preview",
        caption: "Live preview reducing uncertainty during setup.",
      },
    ],
    overview:
      "Atlas is an analytics suite for product teams. Users needed to configure tracking before seeing value.",
    problem:
      "Trial users were dropping before seeing their first report because setup felt heavy and uncertain.",
    constraints: [
      "Limited engineering bandwidth for net-new features",
      "Had to keep the existing pricing and trial length",
      "Data collection pipeline could not be modified",
    ],
    approach: [
      "Simplified setup to a two-step starter path with guided defaults.",
      "Added an interactive preview that updated as settings changed.",
      "Introduced a “first report” checklist on the dashboard.",
    ],
    decisions: [
      "Replaced the settings wall with a progressive disclosure layout.",
      "Used inline validation to reduce error loops.",
      "Added an in-product “next best action” prompt.",
    ],
    outcome: [
      "Trial conversion increased by 18% in six weeks.",
      "Average setup time dropped from 27 minutes to 14 minutes.",
      "Support requests about setup fell by 35%.",
    ],
  },
];

export const dynamicParams = false;

export function generateStaticParams() {
  return CASE_STUDIES.map((study) => ({ slug: study.slug }));
}

export default function CaseStudyPage({
  params,
}: {
  params: { slug: string };
}) {
  const study = CASE_STUDIES.find((item) => item.slug === params.slug);

  if (!study) {
    notFound();
  }

  return (
    <div className="page">
      <div className="container">
        <header className="nav">
          <Link className="logo" href="/">
            Ciqada
          </Link>
          <nav className="nav-links">
            <Link href="/#work">Work</Link>
            <Link href="/#skills">Skills</Link>
            <Link href="/#contact">Contact</Link>
          </nav>
        </header>

        <main className="case">
          <p className="case-kicker">Case Study</p>
          <h1>{study.title}</h1>
          <p className="case-summary">{study.summary}</p>

          <section className="case-gallery">
            {study.images.map((image) => (
              <figure className="case-figure" key={image.src}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={1200}
                  height={700}
                  className="case-image"
                />
                <figcaption>{image.caption}</figcaption>
              </figure>
            ))}
          </section>

          <section className="case-block">
            <h2>Overview</h2>
            <p>{study.overview}</p>
          </section>

          <section className="case-block">
            <h2>Problem</h2>
            <p>{study.problem}</p>
          </section>

          <section className="case-block">
            <h2>Constraints</h2>
            <ul>
              {study.constraints.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="case-block">
            <h2>Approach</h2>
            <ul>
              {study.approach.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="case-block">
            <h2>Key Decisions</h2>
            <ul>
              {study.decisions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="case-block">
            <h2>Outcome</h2>
            <ul>
              {study.outcome.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <div className="case-footer">
            <Link className="button secondary" href="/#work">
              Back to work
            </Link>
            <Link className="button primary" href="/#contact">
              Start a project
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}
