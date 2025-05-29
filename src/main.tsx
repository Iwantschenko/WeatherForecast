import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.scss';
import { Root } from './Root';
import { ThemeProvider } from './context/ThemeProvider';

createRoot(document.getElementById('root') as HTMLDivElement).render(
  <StrictMode>
    <ThemeProvider>
      <Root />
    </ThemeProvider>
  </StrictMode>,
);
