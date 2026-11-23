import { createRoot } from 'react-dom/client';
import PortfolioApp from './PortfolioApp';

declare const __FLORA_PAGE_URL__: string;

createRoot(document.getElementById('root')!).render(<PortfolioApp floraUrl={__FLORA_PAGE_URL__} />);
