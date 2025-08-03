import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect, vi } from 'vitest';
import { NotFound } from '../src/pages/not-found/Notfound';
import '@testing-library/jest-dom/vitest';
import { ThemeProvider } from '../src/context/ThemeProvider';

vi.mock('../src/pages/not-found/Notfound.module.scss', () => ({
  default: {
    notFound: 'notFound',
    homeLink: 'homeLink',
  },
}));

describe('NotFound Component', () => {
  it('renders without crashing', () => {
    render(
      <ThemeProvider>
        <MemoryRouter>
          <NotFound />
        </MemoryRouter>
      </ThemeProvider>
    );

    expect(screen.getByText('404 - Page Not Found')).toBeInTheDocument();
    expect(
      screen.getByText("The page you're looking for doesn't exist.")
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: 'Return to Home' })
    ).toBeInTheDocument();
  });

  it('applies correct CSS classes', () => {
    render(
      <ThemeProvider>
        <MemoryRouter>
          <NotFound />
        </MemoryRouter>
      </ThemeProvider>
    );

    const notFoundDiv = screen.getByText('404 - Page Not Found').closest('div');
    expect(notFoundDiv).toHaveClass('notFound');

    const homeLink = screen.getByRole('link', { name: 'Return to Home' });
    expect(homeLink).toHaveClass('homeLink');
  });

  it('renders home link with correct route', () => {
    render(
      <ThemeProvider>
        <MemoryRouter>
          <NotFound />
        </MemoryRouter>
      </ThemeProvider>
    );

    const homeLink = screen.getByRole('link', { name: 'Return to Home' });
    expect(homeLink).toHaveAttribute('href', '/');
  });
});
