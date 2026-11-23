import { createRoot } from 'react-dom/client';
import FloraStudiesApp from './FloraStudiesApp';

declare const __PORTFOLIO_PAGE_URL__: string;

createRoot(document.getElementById('root')!).render(<FloraStudiesApp portfolioUrl={__PORTFOLIO_PAGE_URL__} />);
