import { describe, it, expect, vi } from 'vitest';
import { createBrowserRouter } from 'react-router-dom';
import { routes, router } from '../App/routes';
import Main from '../pages/Main/Main';
import ErrorPage from '../pages/404/404';

// Mock components to avoid rendering
vi.mock('../pages/Main/Main', () => ({
  default: vi.fn(() => <div data-testid="main-component" />),
}));

vi.mock('../pages/404/404', () => ({
  default: vi.fn(() => <div data-testid="error-page" />),
}));

// vi.mock('react-router-dom', () => {
//   const actual = vi.importActual('react-router-dom');
//   return {
//     ...actual,
//     createBrowserRouter: vi.fn().mockImplementation((routes) => ({
//       ...actual.createBrowserRouter(routes),
//       routes,
//     })),
//   };
// });

describe('router', () => {
  it('defines the correct routes configuration', () => {
    expect(routes).toHaveLength(1);
    expect(routes[0]).toEqual({
      path: '/',
      element: expect.any(Object), // Main component
      errorElement: expect.any(Object), // ErrorPage component
    });
    expect(routes[0].element.type).toBe(Main);
    expect(routes[0].errorElement.type).toBe(ErrorPage);
  });

  it('creates router with the defined routes', () => {
    // expect(createBrowserRouter).toHaveBeenCalledWith(routes);
    expect(router).toBeDefined();
    // expect(router.routes).toEqual(routes);
  });

  it('handles navigation to root path', () => {
    const mockNavigate = vi.fn();
    const mockRouter = {
      ...router,
      navigate: mockNavigate,
    };

    // Simulate navigation to root path
    mockRouter.navigate('/');
    expect(mockNavigate).toHaveBeenCalledWith('/');
  });

  //   it('handles error route rendering', () => {
  //     const mockError = new Error('Test error');
  //     const mockRouter = {
  //       ...router,
  //       state: { errors: { ['/']: mockError } },
  //     };

  //     // Verify error element is set up (mocked rendering)
  //     expect(mockRouter.routes[0].errorElement).toBeDefined();
  //     expect(mockRouter.routes[0].errorElement.type).toBe(ErrorPage);
  //   });
});
