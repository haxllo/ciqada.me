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
    slug: "ar-alphaya-jewellery",
    title: "AR Alphaya Jewellery",
    summary:
      "Production full-stack website built with Next.js, Node.js, CMS APIs, and analytics integration.",
    images: [
      {
        src: "/work/northwind-hero.svg",
        alt: "AR Alphaya production website preview",
        caption: "Live production site built and maintained end-to-end.",
      },
      {
        src: "/work/northwind-detail.svg",
        alt: "Backend and analytics integration preview",
        caption: "Backend logic + CMS API integration with analytics tracking.",
      },
    ],
    overview:
      "AR Alphaya Jewellery is a live production project where I handled both frontend and backend implementation.",
    problem:
      "The site needed a modern, responsive experience with maintainable backend integration and reliable deployment.",
    constraints: [
      "Production quality expectations",
      "Need for responsive UX across devices",
      "Real-world reliability and deployment requirements",
    ],
    approach: [
      "Developed the website using Next.js and modern frontend patterns.",
      "Implemented backend logic using Node.js and CMS APIs.",
      "Integrated analytics to monitor user behavior and performance.",
    ],
    decisions: [
      "Prioritized maintainable full-stack architecture.",
      "Used responsive-first UI decisions for cross-device support.",
      "Established a deployment flow for live production maintenance.",
    ],
    outcome: [
      "Delivered a complete production website.",
      "Improved practical full-stack implementation confidence.",
      "Built hands-on experience in live deployment and maintenance.",
    ],
  },
  {
    slug: "bit-coursework-foundation",
    title: "BIT Coursework Foundation",
    summary:
      "Academic coursework that shaped core full-stack foundations across web, systems, and communication.",
    images: [
      {
        src: "/work/relay-hero.svg",
        alt: "Coursework and web programming track preview",
        caption: "Structured academic progression in web and software topics.",
      },
      {
        src: "/work/relay-detail.svg",
        alt: "Relevant module breakdown preview",
        caption: "Modules spanning web programming, databases, and systems.",
      },
    ],
    overview:
      "My BIT studies at the University of Moratuwa provide a base for practical full-stack work.",
    problem:
      "Needed a broad technical base to support production projects and team-ready engineering work.",
    constraints: [
      "Balancing theory and practical implementation",
      "Multiple domains to learn in parallel",
      "Applying coursework directly to real project delivery",
    ],
    approach: [
      "Focused on web design/development and web programming modules.",
      "Built fundamentals in databases, systems, and design paradigms.",
      "Strengthened technical communication for project collaboration.",
    ],
    decisions: [
      "Prioritized modules directly relevant to full-stack development.",
      "Connected coursework outcomes with production project requirements.",
      "Maintained a practical learning path over purely theoretical depth.",
    ],
    outcome: [
      "Stronger full-stack readiness and technical breadth.",
      "Improved confidence in web architecture and systems thinking.",
      "Better alignment between academic work and professional goals.",
    ],
  },
  {
    slug: "tools-platform-workflow",
    title: "Tools & Platform Workflow",
    summary:
      "Self-directed tooling stack for modern collaboration, deployment, and maintainable development workflow.",
    images: [
      {
        src: "/work/atlas-hero.svg",
        alt: "Tools and platform workflow preview",
        caption: "Toolchain supporting production-oriented development habits.",
      },
      {
        src: "/work/atlas-detail.svg",
        alt: "Cloud and deployment fundamentals preview",
        caption: "Cloud + container basics integrated into project workflow.",
      },
    ],
    overview:
      "Outside coursework, I maintain a practical workflow around version control, container basics, Linux environments, and cloud platforms.",
    problem:
      "Needed job-ready development habits for collaboration, deployment, and project reliability.",
    constraints: [
      "Learning multiple platforms simultaneously",
      "Keeping tooling practical and project-focused",
      "Applying fundamentals without overengineering",
    ],
    approach: [
      "Used Git, GitHub, and GitLab in day-to-day project work.",
      "Practiced Docker basics and Linux-based development flow.",
      "Built cloud fundamentals in AWS, IBM Cloud, and Azure.",
    ],
    decisions: [
      "Prioritized repeatable tooling patterns over one-off setups.",
      "Focused on skills that support full-stack deployment workflows.",
      "Aligned tool learning with internship and junior role expectations.",
    ],
    outcome: [
      "Improved confidence in project collaboration and versioning.",
      "Practical cloud/tooling base supporting production delivery.",
      "Clear, professional full-stack workflow foundation.",
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
            Habeebur Rahman
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
            {study.slug === "ar-alphaya-jewellery" && (
              <a 
                className="button secondary" 
                href="https://www.aralphayajewellery.com/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Visit Live Site
              </a>
            )}
            <Link className="button primary" href="/#contact">
              Contact me
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}
