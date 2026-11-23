export default function Stack() {
  return (
    <section id="stack" className="section reveal">
      <div className="section-heading">
        <p className="eyebrow">Stack</p>
        <h2>Core tools and technologies.</h2>
      </div>

      <div className="stack-layout">
        <div className="stack-group">
          <h3>Core frontend</h3>
          <p>
            React, TypeScript, JavaScript, Redux, Redux-Saga, Zustand, React Hooks, TanStack Query,
            Ember, React Native
          </p>
        </div>
        <div className="stack-group">
          <h3>Additional backend experience</h3>
          <p>Python, Django, Flask</p>
        </div>
        <div className="stack-group">
          <h3>Quality</h3>
          <p>Jest, React Testing Library, Cypress, Pytest</p>
        </div>
        <div className="stack-group">
          <h3>Platform</h3>
          <p>
            PostgreSQL, SQLite, Git, GitHub Actions, CI/CD pipelines, GoCD
          </p>
        </div>
      </div>
    </section>
  );
}
