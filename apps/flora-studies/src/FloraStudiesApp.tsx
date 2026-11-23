import { useInitialFragment } from '../../useInitialFragment';
import Gallery from './Gallery';
import FloraHeader from './sections/FloraHeader';
import FloraHero from './sections/FloraHero';
import FloraNote from './sections/FloraNote';
import FloraFooter from './sections/FloraFooter';

export default function FloraStudiesApp({ portfolioUrl }: { portfolioUrl: string }) {
  useInitialFragment();

  return (
    <main className="page">
      <FloraHeader portfolioUrl={portfolioUrl} />
      <FloraHero portfolioUrl={portfolioUrl} />
      <div id="flora-gallery-root"><Gallery /></div>
      <FloraNote />
      <FloraFooter portfolioUrl={portfolioUrl} />
    </main>
  );
}
