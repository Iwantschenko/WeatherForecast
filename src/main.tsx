import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.scss';
import { Root } from './Root';

createRoot(document.getElementById('root') as HTMLDivElement).render(
  <StrictMode>
    <Root />
  </StrictMode>,
);
