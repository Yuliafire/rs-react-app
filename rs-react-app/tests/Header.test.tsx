import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import Header from '../src/components/layout/Header/Header';
import '@testing-library/jest-dom/vitest';

describe('Header', () => {
  it('renders without crashing', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    expect(screen.getByText('Rick and Morty Portal')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Main/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /About/i })).toBeInTheDocument();
  });
});
