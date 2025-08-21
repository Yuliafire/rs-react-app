import { createBrowserRouter } from 'react-router-dom';
import Main from '../pages/Main/Main';
import ErrorPage from '../pages/404/404';
import ControlledForm from '../components/Form/controllers/Controlled/Controlled';
import Uncontrolled from '../components/Form/controllers/Uncontrolled/Uncontrolled';
// import type { FormSchemaType } from '../components/Form/schema';
// import type { FormData } from '../components/Form/Fields/FormFields';

export const routes = [
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'form',
    element: (
      <ControlledForm
        onSubmit={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
    ),
  },

  {
    path: 'uncontrolled-form',
    element: (
      <Uncontrolled
        onSubmit={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
    ),
  },
];
export const router = createBrowserRouter(routes);
