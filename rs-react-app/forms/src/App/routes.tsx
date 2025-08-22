import { createBrowserRouter } from 'react-router-dom';
import Main from '../pages/Main/Main';
import ErrorPage from '../pages/404/404';

export const routes = [
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
  },
];

export const router = createBrowserRouter(routes);
