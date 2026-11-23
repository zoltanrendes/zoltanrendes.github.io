export default function Strengths() {
  return (
    <section id="strengths" className="section reveal">
      <div className="section-heading">
        <p className="eyebrow">Strengths</p>
        <h2>What I tend to bring to a team.</h2>
      </div>

      <div className="strength-grid">
        <article className="strength-card">
          <h3>Architecture</h3>
          <p>
            I design frontend systems that can absorb new product
            requirements without collapsing into accidental complexity.
          </p>
        </article>
        <article className="strength-card">
          <h3>Product Thinking</h3>
          <p>
            I pay attention to how people actually use a system, not just
            whether the feature technically works.
          </p>
        </article>
        <article className="strength-card">
          <h3>Delivery</h3>
          <p>
            I work comfortably in business-critical environments where
            reliability, clarity, and stakeholder alignment matter as much
            as implementation speed.
          </p>
        </article>
        <article className="strength-card">
          <h3>Performance</h3>
          <p>
            I pay attention to responsiveness, rendering cost, and frontend
            efficiency where performance has a visible impact on product
            quality.
          </p>
        </article>
      </div>
    </section>
  );
}
