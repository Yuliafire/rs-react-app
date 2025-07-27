import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect, vi } from 'vitest';
import { NotFound } from '../src/pages/not-found/Notfound';
import '@testing-library/jest-dom/vitest';

vi.mock('../src/pages/not-found/Notfound.module.scss', () => ({
  default: {
    notFound: 'notFound',
    homeLink: 'homeLink',
  },
}));

describe('NotFound Component', () => {
  it('renders without crashing', () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );

    expect(screen.getByText('04 - Page Not Found')).toBeInTheDocument();
    expect(
      screen.getByText("The page you're looking for doesn't exist.")
    ).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: 'Return to Home' })
    ).toBeInTheDocument();
  });

  it('applies correct CSS classes', () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );

    const notFoundDiv = screen.getByText('04 - Page Not Found').closest('div');
    expect(notFoundDiv).toHaveClass('notFound');

    const homeLink = screen.getByRole('link', { name: 'Return to Home' });
    expect(homeLink).toHaveClass('homeLink');
  });

  it('renders home link with correct route', () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );

    const homeLink = screen.getByRole('link', { name: 'Return to Home' });
    expect(homeLink).toHaveAttribute('href', '/');
  });
});
