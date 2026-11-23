export default function Experience() {
  return (
    <section id="experience" className="section reveal">
      <div className="section-heading">
        <p className="eyebrow">Experience</p>
        <h2>
          Experience across enterprise software, fintech, SaaS, and
          long-lived systems.
        </h2>
      </div>

      <div className="timeline">
        <article className="timeline-item">
          <div className="timeline-meta">
            <p>2023 - Present</p>
            <span>Remote</span>
          </div>
          <div className="timeline-body">
            <h3>
              Senior Developer <span>Eclipse Veterinary Ltd</span>
            </h3>
            <p>
              I build the React frontend and supporting 4D backend functionality for Eclipse’s Hospital Module, designed for equine
              veterinary clinics. Integrated with the existing practice management platform, the module brings admission, treatment,
              monitoring and discharge into a connected workflow, giving clinical teams a shared view of each patient’s hospital stay.
            </p>
            <br />
            <p>
              The product supports treatment planning, medication and care instructions, task tracking and the recording of clinical
              observations. A central patient whiteboard helps staff see current information and outstanding care tasks, while browser
              and tablet access supports clinicians during their rounds. My work involves translating these detailed veterinary
              processes into practical interfaces, working closely with stakeholders and product teams.
            </p>
            <br />
            <p>
              Across the frontend and backend, I implement the functionality and integrations needed to keep hospital workflows
              connected to the wider system. I designed the separation between server and client state and implemented modular Zustand
              stores with local-storage hydration. I collaborated on the TanStack Query implementation for server state, including
              cached and conditional API queries, mutations, polling and targeted query invalidation. This structure keeps data
              fetching and application state clearly separated, while working across React and 4D allows me to investigate issues end
              to end and keep interface behaviour aligned with backend logic.
            </p>
            <br />
            <p>
              Tech: React, JavaScript, TypeScript, TanStack Query, Zustand, 4D, Responsive Design, Mobile Development
            </p>
            <br />
            <p>Product Overview:<a href="https://www.eclipsesoftware.info/veterinary/hospital-module" target="_blank" rel="noopener noreferrer">
              Eclipse Hospital Module
            </a>
              </p>
          </div>
        </article>

        <article className="timeline-item">
          <div className="timeline-meta">
            <p>2019 - 2022</p>
            <span>Remote</span>
          </div>
          <div className="timeline-body">
            <h3>Senior Frontend Engineer <span>Iotic Labs</span></h3>
            <p>
              I built React and TypeScript applications that helped users explore engineering telemetry, including live train data
              streamed through WebSockets. I integrated Google Maps to show train positions and developed configurable dashboard
              components presenting temperature, station information and other telemetry. These complementary views helped users
              explore different aspects of the data and focus on the information relevant to their needs.
            </p>
            <br />
            <p>
              To keep the applications responsive as data changed continuously, I identified unnecessary React rendering and
              restructured how updates reached the interface. I also developed reusable components and shared patterns that reduced
              duplication and made new features easier to build consistently.
            </p>
            <br />
            <p>
              Alongside the frontend work, I built Python services with Django and Flask and worked with backend engineers on APIs and
              reliable data flow.
            </p>
            <br />
            <p>
              Tech: React, TypeScript, Redux, React Testing Library, Jest, Python, Django, Flask, PostgreSQL, Cypress
            </p>
          </div>
        </article>

        <article className="timeline-item">
          <div className="timeline-meta">
            <p>2018 - 2019</p>
            <span>London</span>
          </div>
          <div className="timeline-body">
            <h3>Front-End Developer <span>Smart Pension Ltd</span></h3>
            <p>
              I developed React and Ember features for Smart Pension’s member-facing platform, helping people view and manage their
              workplace pensions. My work included pension balance visualisations and interfaces supporting contribution, investment
              and pension management workflows.
            </p>
            <br />
            <p>
              I also built the frontend experience for annual pension statements, presenting members’ yearly pension information in a
              clear, readable format.
            </p>
            <br />
            <p>
              The focus was on making detailed financial information easier to understand and act on. Through balance charts, annual
              statements and clearly organised pension-related actions, I helped members understand their savings and navigate the
              options available to them.
            </p>
            <br />
            <p>
              Tech: React, Ember, Redux, TypeScript, Cypress, Responsive Design
            </p>
          </div>
        </article>

        <article className="timeline-item">
          <div className="timeline-meta">
            <p>2014 - 2018</p>
            <span>Royston</span>
          </div>
          <div className="timeline-body">
            <h3>Software Developer <span>KM Software Systems</span></h3>
            <p>
              Developed enterprise software modules, integrations, and
              reporting tools to improve operational visibility and support
              business decisions.
            </p>
          </div>
        </article>

        <article className="timeline-item">
          <div className="timeline-meta">
            <p>2013 - 2014</p>
            <span>Budapest</span>
          </div>
          <div className="timeline-body">
            <h3>Software Engineer <span>EPAM Systems</span></h3>
            <p>
              Built frontend tools and integrations for stock exchange
              connectivity and market-data-driven financial systems.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
