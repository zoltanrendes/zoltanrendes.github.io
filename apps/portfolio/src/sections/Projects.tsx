export default function Projects() {
  return (
    <section id="projects" className="section reveal">
      <div className="section-heading">
        <p className="eyebrow">Projects</p>
        <h2>Selected work beyond day-to-day delivery.</h2>
      </div>

      <article className="project-feature">
        <div className="project-summary">
          <p className="project-kicker">Project spotlight</p>
          <h3>ESP32 Weather Stack</h3>
          <p className="project-lede">
            A personal end-to-end weather-monitoring project where I
            designed and built a small ESP32-based stack, then documented
            the work as a structured technical report rather than leaving it
            as an isolated prototype.
          </p>

          <ul
            className="project-tags"
            aria-label="Project technologies and themes"
          >
            <li>ESP32</li>
            <li>IoT</li>
            <li>Embedded integration</li>
            <li>Data reporting</li>
            <li>System design</li>
          </ul>

          <div className="project-actions">
            <a
              className="button button-primary"
              href="https://github.com/zoltanrendes/esp32-weather-stack"
              target="_blank"
              rel="noreferrer"
            >
              View repository
            </a>
          </div>
        </div>

        <div className="project-detail-grid">
          <article className="project-card">
            <p className="project-card-label">What I built</p>
            <p>
              A compact weather-monitoring stack that brings together
              ESP32-based data collection, the surrounding software needed
              to work with the readings, and a report that explains the
              system clearly from setup through results.
            </p>
          </article>

          <article className="project-card">
            <p className="project-card-label">
              Technologies and problem solved
            </p>
            <p>
              The project sits across embedded and software concerns: ESP32,
              sensor integration, IoT-style data capture, repository-based
              documentation, and the tooling needed to turn hardware output
              into something inspectable and reportable.
            </p>
            <p>
              It solves the practical problem of collecting environmental
              data in a lightweight, self-contained way, while also turning
              raw readings into something that can be understood, reviewed,
              and communicated beyond the device itself.
            </p>
          </article>

          <article className="project-card">
            <p className="project-card-label">
              What I learned and what was hard
            </p>
            <p>
              The work reinforced how different embedded projects feel from
              pure web delivery: hardware constraints surface quickly,
              observability matters more, and good reporting is part of the
              engineering work rather than an afterthought.
            </p>
            <p>
              The harder part was not just getting readings from a device,
              but making the whole stack coherent: connecting hardware
              behaviour, data flow, and explanation into a system that is
              reliable enough to demonstrate and detailed enough to present.
            </p>
          </article>
        </div>
      </article>
    </section>
  );
}
