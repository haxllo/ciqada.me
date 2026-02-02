import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="page">
      <div className="container">
        <header className="nav reveal" style={{ animationDelay: "0.05s" }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div className="logo">Habeebur Rahman</div>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              <a 
                href="https://github.com/haxllo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="GitHub"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a 
                href="https://linkedin.com/in/msh-rahman" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="LinkedIn"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a 
                href="https://instagram.com/habeeb.codes" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon"
                aria-label="Instagram"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
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
                  href="/cv.pdf"
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
                  <p className="work-meta">Client Project</p>
                  <h3>AR Alphaya Jewellery Website</h3>
                  <p>
                    Developed and deployed a live e-commerce website for AR Alphaya Jewellery
                    using Next.js, Node.js, CMS integration, responsive design, and analytics.
                  </p>
                </div>
                <a 
                  className="work-link" 
                  href="https://www.aralphayajewellery.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Visit Live Site
                </a>
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
                    href="/cv.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View CV
                  </a>
                </div>
              </div>
              <div className="contact-card">
                <span>Email</span>
                <strong>
                  <a href="mailto:MSH.Rahman.email@gmail.com" style={{ color: 'inherit' }}>
                    MSH.Rahman.email@gmail.com
                  </a>
                </strong>
                <span>Phone</span>
                <strong>
                  <a href="tel:+94786912901" style={{ color: 'inherit' }}>
                    +94 78 691 2901
                  </a>
                </strong>
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
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <span>Portfolio · Next.js</span>
            <a href="https://github.com/haxllo" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent)' }}>
              GitHub
            </a>
            <a href="https://linkedin.com/in/msh-rahman" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent)' }}>
              LinkedIn
            </a>
            <a href="https://instagram.com/habeeb.codes" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent)' }}>
              Instagram
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
