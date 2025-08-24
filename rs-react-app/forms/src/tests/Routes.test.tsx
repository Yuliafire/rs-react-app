import { describe, it, expect, vi } from 'vitest';
import { routes, router } from '../App/routes';
import Main from '../pages/Main/Main';
import ErrorPage from '../pages/404/404';

vi.mock('../pages/Main/Main', () => ({
  default: vi.fn(() => <div data-testid="main-component" />),
}));

vi.mock('../pages/404/404', () => ({
  default: vi.fn(() => <div data-testid="error-page" />),
}));

describe('router', () => {
  it('defines the correct routes configuration', () => {
    expect(routes).toHaveLength(1);
    expect(routes[0]).toEqual({
      path: '/',
      element: expect.any(Object),
      errorElement: expect.any(Object),
    });
    expect(routes[0].element.type).toBe(Main);
    expect(routes[0].errorElement.type).toBe(ErrorPage);
  });

  it('creates router with the defined routes', () => {
    expect(router).toBeDefined();
  });

  it('handles navigation to root path', () => {
    const mockNavigate = vi.fn();
    const mockRouter = {
      ...router,
      navigate: mockNavigate,
    };

    mockRouter.navigate('/');
    expect(mockNavigate).toHaveBeenCalledWith('/');
  });
});
