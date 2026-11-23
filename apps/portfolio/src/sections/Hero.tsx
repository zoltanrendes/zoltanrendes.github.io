export default function Hero() {
  return (
    <section className="hero reveal">
      <div className="hero-copy">
        <div className="identity-row">
          <img
            className="profile-photo"
            src="/1523917606743.jpg"
            alt="Portrait of Zoltan Rendes" />
          <div className="identity-copy">
            <p className="eyebrow">Senior Frontend Engineer</p>
            <p className="identity-name">Zoltan Rendes</p>
          </div>
        </div>
        <h1>
          I build complex web products that are clear to use and solid under
          pressure.
        </h1>
        <p className="lede">
          Senior Frontend Engineer specialising in React and TypeScript,
          with 10+ years of software engineering experience building web,
          desktop, and data-driven applications.
        </p>

        <div className="hero-actions">
          <a
            className="button button-primary"
            href="/CV%20Zoltan%20Rendes%202026.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Open CV
          </a>
          <a className="button button-secondary" href="#contact">
            Get in touch
          </a>
        </div>

        <ul className="meta-list">
          <li>Royston, Hertfordshire, UK</li>
          <li>10+ years building production software</li>
          <li>Remote-first since 2019</li>
        </ul>

        <div className="social-strip">
          <a
            href="https://www.linkedin.com/in/zoltanrendes"
            target="_blank"
            rel="noreferrer"
            >LinkedIn</a
          >
          <a
            href="https://github.com/zoltanrendes"
            target="_blank"
            rel="noreferrer"
            >GitHub</a
          >
        </div>
      </div>

      <aside className="hero-panel">
        <div className="panel-card">
          <p className="panel-label">Current focus</p>
          <ul className="focus-list">
            <li>React and TypeScript platforms</li>
            <li>Frontend architecture for evolving products</li>
            <li>Complex workflows and user-facing product logic</li>
            <li>Performance and rendering efficiency</li>
            <li>Practical delivery within enterprise constraints</li>
            <li>
              Growing depth in backend development across data and
              application layers
            </li>
          </ul>
        </div>
        <div className="panel-accent">
          <span>Enterprise</span>
          <span>Fintech</span>
          <span>SaaS</span>
          <span>Healthcare</span>
        </div>
      </aside>
    </section>
  );
}
