import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="page">
      <div className="container">
        <header className="nav reveal" style={{ animationDelay: "0.05s" }}>
          <div className="logo">Habeebur Rahman</div>
          <nav className="nav-links">
            <a href="#work">Work</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        <main>
          <section className="hero">
            <div>
              <p className="reveal" style={{ animationDelay: "0.1s" }}>
                Full-stack developer and BIT undergraduate at the University of
                Moratuwa, focused on production-ready web applications.
              </p>
              <h1 className="reveal hero-title" style={{ animationDelay: "0.18s" }}>
                I build complete web products from frontend UI to backend APIs.
              </h1>
              <p className="reveal" style={{ animationDelay: "0.26s" }}>
                My core stack includes HTML, CSS, JavaScript, TypeScript,
                Tailwind, React, Next.js, and Node.js, with practical
                experience in deployment and live maintenance.
              </p>
              <div className="cta-row reveal" style={{ animationDelay: "0.34s" }}>
                <a className="button primary" href="#contact">
                  Contact me
                </a>
                <a
                  className="button secondary"
                  href="/Muhammad-Siraj-Habeebur-Rahman-CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download CV
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
                  <strong>01</strong>
                  <p>Backend Development</p>
                  <span>Node.js, REST APIs, auth, PostgreSQL basics</span>
                </div>
                <div className="hero-card-item">
                  <strong>02</strong>
                  <p>Frontend Development</p>
                  <span>Next.js, React, responsive component architecture</span>
                </div>
                <div className="hero-card-item">
                  <strong>03</strong>
                  <p>UI Engineering</p>
                  <span>Tailwind CSS, responsive layout, UX polish</span>
                </div>
                <div className="hero-card-item">
                  <strong>04</strong>
                  <p>Cloud & Tooling</p>
                  <span>Git, Docker (basic), AWS, IBM Cloud, Azure</span>
                </div>
              </div>
            </aside>
          </section>

          <section className="snapshot reveal" style={{ animationDelay: "0.38s" }}>
            <div className="snapshot-grid">
              <article className="snapshot-card">
                <span>Current Role</span>
                <strong>Full-Stack Developer</strong>
                <p>BIT undergraduate, University of Moratuwa</p>
                <em>Primary focus: production-grade web delivery</em>
              </article>
              <article className="snapshot-card">
                <span>Availability</span>
                <strong>Open to Internships</strong>
                <p>Entry-level and trainee software roles</p>
                <em>Ready for remote or on-site collaboration</em>
              </article>
              <article className="snapshot-card">
                <span>Core Stack</span>
                <strong>Node · Next · TS · Tailwind</strong>
                <p>React + REST APIs + deployment workflow</p>
                <em>Tooling: Git, Docker, Linux, cloud fundamentals</em>
              </article>
            </div>
          </section>

          <section id="work" className="section">
            <div className="section-head">
              <h2 className="section-title">Featured Work</h2>
              <p className="section-subtitle">
                Production project and technical tracks aligned with my current
                CV profile.
              </p>
            </div>
            <div className="work-grid">
              <article className="work-card">
                <Image
                  className="work-thumb"
                  src="/work/northwind-hero.svg"
                  alt="Programming and fundamentals study project visual"
                  width={1200}
                  height={700}
                />
                <div>
                  <p className="work-meta">Production Project</p>
                  <h3>AR Alphaya Jewellery Website</h3>
                  <p>
                    Built and deployed a live full-stack website using Next.js,
                    Node.js, CMS APIs, responsive UI, and analytics.
                  </p>
                </div>
                <Link className="work-link" href="/work/ar-alphaya-jewellery">
                  View details
                </Link>
              </article>
              <article className="work-card">
                <Image
                  className="work-thumb"
                  src="/work/relay-hero.svg"
                  alt="Web design and front-end learning project visual"
                  width={1200}
                  height={700}
                />
                <div>
                  <p className="work-meta">Academic Track</p>
                  <h3>BIT Coursework Foundation</h3>
                  <p>
                    Coursework in web design/programming, databases, systems,
                    and communication that supports end-to-end development.
                  </p>
                </div>
                <Link className="work-link" href="/work/bit-coursework-foundation">
                  View details
                </Link>
              </article>
              <article className="work-card">
                <Image
                  className="work-thumb"
                  src="/work/atlas-hero.svg"
                  alt="Cloud and tooling self-learning track visual"
                  width={1200}
                  height={700}
                />
                <div>
                  <p className="work-meta">Cloud + Tooling</p>
                  <h3>Tools & Platform Workflow</h3>
                  <p>
                    Working with Git/GitHub/GitLab, Docker (basic), Linux, and
                    cloud fundamentals in AWS, IBM Cloud, and Azure.
                  </p>
                </div>
                <Link className="work-link" href="/work/tools-platform-workflow">
                  View details
                </Link>
              </article>
            </div>
          </section>

          <section id="skills" className="section">
            <div className="section-head">
              <h2 className="section-title">Skills</h2>
              <p className="section-subtitle">
                Core technical capabilities from coursework and independent
                study.
              </p>
            </div>
            <div className="skills-grid">
              <article className="skill-card">
                <h3>Backend & Programming</h3>
                <p>
                  Building backend features with Node.js, REST APIs, and basic
                  authentication and database integration patterns.
                </p>
                <div className="tag-row">
                  <span className="tag">Node.js</span>
                  <span className="tag">JavaScript</span>
                  <span className="tag">REST APIs</span>
                  <span className="tag">PostgreSQL</span>
                </div>
              </article>
              <article className="skill-card">
                <h3>Next.js Frontend</h3>
                <p>
                  Developing performant, component-driven interfaces in Next.js
                  with responsive layouts and clean UX structure.
                </p>
                <div className="tag-row">
                  <span className="tag">Next.js</span>
                  <span className="tag">React</span>
                  <span className="tag">Routing / App Structure</span>
                </div>
              </article>
              <article className="skill-card">
                <h3>TypeScript, Tailwind & Tooling</h3>
                <p>
                  Using TypeScript for safer code and Tailwind CSS for fast,
                  consistent UI systems, supported by Git and cloud-native
                  tooling.
                </p>
                <div className="tag-row">
                  <span className="tag">TypeScript</span>
                  <span className="tag">Tailwind CSS</span>
                  <span className="tag">AWS / IBM Cloud / Azure</span>
                  <span className="tag">Docker (basic)</span>
                </div>
              </article>
            </div>
          </section>

          <section id="experience" className="section">
            <div className="section-head">
              <h2 className="section-title">Education & Experience</h2>
              <p className="section-subtitle">
                Academic background, current study track, and role preferences.
              </p>
            </div>
            <div className="approach">
              <div className="approach-item">
                <strong>University of Moratuwa</strong>
                Bachelor of Information Technology (BIT), August 2024 to present.
                Completed modules include Fundamentals of Programming, Web
                Design, Mathematics and Statistics for IT, Communication Skills,
                and Computing Systems.
              </div>
              <div className="approach-item">
                <strong>Self-Directed Learning</strong>
                Actively studying AWS, IBM Cloud, Docker, Git, React.js, and
                Linux while applying them through practical project work.
              </div>
              <div className="approach-item">
                <strong>Career Objective</strong>
                Seeking internship or entry-level opportunities to apply
                technical knowledge, contribute to a team, and grow through
                real-world engineering work.
              </div>
            </div>
          </section>

          <section id="contact" className="section">
            <div className="contact">
              <div>
                <h2>Open to internships and entry-level roles.</h2>
                <p>
                  If your team is hiring for a junior developer, intern, or
                  trainee role, I&apos;d be glad to share more details and discuss
                  how I can contribute.
                </p>
                <div className="cta-row">
                  <a
                    className="button primary"
                    href="mailto:MSH.Rahman.email@gmail.com?subject=Internship%20Opportunity&body=Hi%20Muhammad%20Siraj%2C%0A%0AWe%20would%20like%20to%20discuss%20an%20opportunity.%0A"
                  >
                    Send email
                  </a>
                  <a
                    className="button secondary"
                    href="/Muhammad-Siraj-Habeebur-Rahman-CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View CV
                  </a>
                </div>
              </div>
              <div className="contact-card">
                <span>Email</span>
                <strong>MSH.Rahman.email@gmail.com</strong>
                <span>Phone</span>
                <strong>+94 78 691 2901</strong>
                <span>Languages</span>
                <strong>English, Sinhala, Tamil</strong>
                <span>Location</span>
                <strong>Kengalla, Sri Lanka</strong>
              </div>
            </div>
          </section>
        </main>

        <footer className="footer">
          <span>© 2026 Muhammad Siraj Habeebur Rahman.</span>
          <span>Portfolio · Next.js</span>
        </footer>
      </div>
    </div>
  );
}
