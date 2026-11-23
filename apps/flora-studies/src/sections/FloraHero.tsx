import flora001 from '../images/Flora 001.png';
import flora007 from '../images/Flora 007.png';
import flora008 from '../images/Flora 008.png';

export default function FloraHero({ portfolioUrl }: { portfolioUrl: string }) {
  return (
    <section className="hero">
      <div>
        <p className="eyebrow">Garden photography</p>
        <h1>Flora Studies</h1>
        <p className="lead">
          A personal flower photography series focused on garden details, natural textures, and
          the way soft light changes the shape of a small subject.
        </p>
        <div className="hero-actions">
          <a className="button button-primary" href="#gallery">Open photos</a>
          <a className="button" href={portfolioUrl}>Back to portfolio</a>
        </div>
      </div>

      <div className="hero-stack" aria-label="Featured flower photographs">
        <figure className="hero-photo primary">
          <img src={flora001} alt="Close flower photograph with soft garden light" />
        </figure>
        <figure className="hero-photo secondary">
          <img src={flora007} alt="Flower photograph with natural contrast" />
        </figure>
        <figure className="hero-photo tertiary">
          <img src={flora008} alt="Circular cropped flower detail" />
        </figure>
      </div>
    </section>
  );
}
