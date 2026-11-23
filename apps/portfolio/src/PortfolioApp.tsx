import { useRef } from 'react';
import { useInitialFragment } from '../../useInitialFragment';
import { useScrollReveal } from './scroll-reveal';
import PortfolioHeader from './sections/PortfolioHeader';
import Hero from './sections/Hero';
import Introduction from './sections/Introduction';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Photography from './sections/Photography';
import Stack from './sections/Stack';
import Strengths from './sections/Strengths';
import Contact from './sections/Contact';

export default function PortfolioApp({ floraUrl }: { floraUrl: string }) {
  const page = useRef<HTMLDivElement>(null);
  useScrollReveal(page);
  useInitialFragment();

  return (
    <div className="page-shell" ref={page}>
      <PortfolioHeader />
      <main id="home">
        <Hero />
        <Introduction />
        <Experience />
        <Projects />
        <Photography floraUrl={floraUrl} />
        <Stack />
        <Strengths />
      </main>
      <Contact />
    </div>
  );
}
