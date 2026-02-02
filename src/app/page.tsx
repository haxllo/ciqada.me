export default function Home() {
  return (
    <div className="page">
      <div className="container">
        <header className="nav reveal" style={{ animationDelay: "0.05s" }}>
          <div className="logo">Ciqada</div>
          <nav className="nav-links">
            <a href="#work">Work</a>
            <a href="#skills">Skills</a>
            <a href="#approach">Approach</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        <main>
          <section className="hero">
            <div>
              <p className="reveal" style={{ animationDelay: "0.1s" }}>
                Product designer + front-end builder focused on B2B SaaS and
                onboarding clarity.
              </p>
              <h1 className="reveal hero-title" style={{ animationDelay: "0.18s" }}>
                I design and ship interfaces that reduce friction in complex
                flows.
              </h1>
              <p className="reveal" style={{ animationDelay: "0.26s" }}>
                My work combines discovery, interface systems, and production
                build so teams can move fast without sacrificing craft. I bring
                structure, direct storytelling, and visual precision to every
                release.
              </p>
              <div className="cta-row reveal" style={{ animationDelay: "0.34s" }}>
                <a className="button primary" href="#contact">
                  Start a project
                </a>
                <a
                  className="button secondary"
                  href="mailto:hello@ciqada.me"
                >
                  hello@ciqada.me
                </a>
              </div>
            </div>

            <aside className="hero-card reveal" style={{ animationDelay: "0.22s" }}>
              <div className="hero-card-header">
                <h2>Focus Areas</h2>
                <span className="hero-card-pill">04 Tracks</span>
              </div>
              <div className="hero-card-grid">
                <div className="hero-card-item">
                  <p>Experience Design</p>
                  <span>Journeys, architecture, systems</span>
                </div>
                <div className="hero-card-item">
                  <p>Visual Craft</p>
                  <span>Type systems, hierarchy, layout</span>
                </div>
                <div className="hero-card-item">
                  <p>Front-End Build</p>
                  <span>Next.js, interaction, UI polish</span>
                </div>
                <div className="hero-card-item">
                  <p>Product Direction</p>
                  <span>Strategy, narrative, alignment</span>
                </div>
              </div>
            </aside>
          </section>

          <section id="work" className="section">
            <div className="section-head">
              <h2 className="section-title">Selected Work</h2>
              <p className="section-subtitle">
                Three recent engagements that show how I approach complex
                product flows with measurable outcomes.
              </p>
            </div>
            <div className="work-grid">
              <article className="work-card">
                <img
                  className="work-thumb"
                  src="/work/northwind-hero.svg"
                  alt="Onboarding flow interface preview"
                />
                <div>
                  <p className="work-meta">Onboarding · B2B SaaS</p>
                  <h3>Northwind Commerce</h3>
                  <p>
                    Reframed the setup flow into guided milestones, cutting
                    time-to-first-value by 31%.
                  </p>
                </div>
                <a className="work-link" href="/work/northwind-commerce">
                  View case study
                </a>
              </article>
              <article className="work-card">
                <img
                  className="work-thumb"
                  src="/work/relay-hero.svg"
                  alt="Design system component preview"
                />
                <div>
                  <p className="work-meta">Design System · Platform</p>
                  <h3>Relay Intelligence</h3>
                  <p>
                    Built a new component system that aligned six teams and
                    reduced UI drift across releases.
                  </p>
                </div>
                <a className="work-link" href="/work/relay-intelligence">
                  View case study
                </a>
              </article>
              <article className="work-card">
                <img
                  className="work-thumb"
                  src="/work/atlas-hero.svg"
                  alt="Analytics dashboard preview"
                />
                <div>
                  <p className="work-meta">Growth · Analytics</p>
                  <h3>Atlas Metrics</h3>
                  <p>
                    Redesigned the activation flow, improving trial conversion
                    by 18% within six weeks.
                  </p>
                </div>
                <a className="work-link" href="/work/atlas-metrics">
                  View case study
                </a>
              </article>
            </div>
          </section>

          <section id="skills" className="section">
            <div className="section-head">
              <h2 className="section-title">Skills</h2>
              <p className="section-subtitle">
                A balanced mix of product thinking and detailed execution.
                Every engagement starts with clarity on outcomes and ends with
                shippable assets.
              </p>
            </div>
            <div className="skills-grid">
              <article className="skill-card">
                <h3>Product Strategy</h3>
                <p>
                  Translating market signals into structured roadmaps, goal
                  hierarchies, and messaging that keeps teams aligned.
                </p>
                <div className="tag-row">
                  <span className="tag">Discovery</span>
                  <span className="tag">Positioning</span>
                  <span className="tag">Roadmaps</span>
                </div>
              </article>
              <article className="skill-card">
                <h3>Interface Systems</h3>
                <p>
                  Building reusable patterns with consistent rules for spacing,
                  typography, and motion so design scales without drift.
                </p>
                <div className="tag-row">
                  <span className="tag">Design Systems</span>
                  <span className="tag">Interaction</span>
                  <span className="tag">Documentation</span>
                </div>
              </article>
              <article className="skill-card">
                <h3>Front-End Delivery</h3>
                <p>
                  Shipping responsive, accessible UI with modern tooling and
                  clear handoff. Strong focus on maintainable structure.
                </p>
                <div className="tag-row">
                  <span className="tag">Next.js</span>
                  <span className="tag">TypeScript</span>
                  <span className="tag">Performance</span>
                </div>
              </article>
            </div>
          </section>

          <section id="approach" className="section">
            <div className="section-head">
              <h2 className="section-title">Approach</h2>
              <p className="section-subtitle">
                A tight, collaborative process designed to keep momentum and
                remove ambiguity.
              </p>
            </div>
            <div className="approach">
              <div className="approach-item">
                <strong>01. Diagnose</strong>
                I map the core problem, remove noise, and define how success is
                measured.
              </div>
              <div className="approach-item">
                <strong>02. Shape</strong>
                Systems and interfaces are prototyped in short cycles with
                continuous stakeholder feedback.
              </div>
              <div className="approach-item">
                <strong>03. Deliver</strong>
                Final assets are production-ready with documented components
                and clear next steps.
              </div>
            </div>
          </section>

          <section id="contact" className="section">
            <div className="contact">
              <div>
                <h2>Let&apos;s build the next iteration.</h2>
                <p>
                  I&apos;m available for design partnerships and focused product
                  sprints. Share the project scope and I&apos;ll respond within two
                  business days.
                </p>
                <div className="cta-row">
                  <a
                    className="button primary"
                    href="mailto:hello@ciqada.me?subject=Project%20inquiry&body=Project%20summary%3A%0ATimeline%3A%0ABudget%20range%3A%0A"
                  >
                    Send project brief
                  </a>
                  <a className="button secondary" href="/#work">
                    View work
                  </a>
                </div>
              </div>
              <div className="contact-card">
                <span>Project intake</span>
                <strong>Best responses include</strong>
                <ul className="contact-list">
                  <li>Product type + audience</li>
                  <li>Current stage and goals</li>
                  <li>Timeline and team size</li>
                  <li>Budget range and scope</li>
                </ul>
                <span>Availability</span>
                <strong>New projects from March 2026</strong>
              </div>
            </div>
          </section>
        </main>

        <footer className="footer">
          <span>© 2026 Ciqada. All rights reserved.</span>
          <span>Portfolio · Next.js · Custom fonts</span>
        </footer>
      </div>
    </div>
  );
}
