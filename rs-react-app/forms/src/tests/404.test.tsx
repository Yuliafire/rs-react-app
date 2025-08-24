import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import ErrorPage from '../pages/404/404';

vi.mock('react-router-dom', () => ({
  useRouteError: vi.fn(() => new Error('Test error message')),
}));

describe('ErrorPage', () => {
  it('renders error page with error message', () => {
    render(<ErrorPage />);
    expect(screen.getByText('Oops!')).toBeInTheDocument();
    expect(screen.getByText('Test error message')).toBeInTheDocument();
  });

  it('logs error to console', () => {
    const consoleErrorSpy = vi
      .spyOn(console, 'error')
      .mockImplementation(() => {});
    render(<ErrorPage />);
    expect(consoleErrorSpy).toHaveBeenCalledWith(
      new Error('Test error message')
    );
    consoleErrorSpy.mockRestore();
  });
});
