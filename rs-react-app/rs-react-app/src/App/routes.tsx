import { createBrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';
import Main from '../pages/Main/Main';
import ErrorPage from '../pages/404/404';
import ErrorBoundary from '../ui/ErrorBoundary/ErrorBoundary';

export const routes = [
  {
    path: '/',
    element:(

      <ErrorBoundary>
        <Suspense fallback={<div className="loader">Loading data... (This may take a moment)</div>}>
        <Main />
        </Suspense>
      </ErrorBoundary>
    ),
    errorElement: <ErrorPage />,
  },
];

export const router = createBrowserRouter(routes);
