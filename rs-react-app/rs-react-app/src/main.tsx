import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './global.scss';
import App from './App/App.tsx';
import ErrorBoundary from './ui/ErrorBoundary/ErrorBoundary.tsx';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Root element not found');

createRoot(rootElement).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>
);
