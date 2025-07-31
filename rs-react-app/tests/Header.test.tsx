import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import Header from '../src/components/layout/Header/Header';
import '@testing-library/jest-dom/vitest';
import { ThemeProvider } from '../src/context/ThemeProvider';

describe('Header', () => {
  it('renders without crashing', () => {
    render(
      <ThemeProvider>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </ThemeProvider>
    );

    expect(screen.getByText('Rick and Morty Portal')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /About/i })).toBeInTheDocument();
  });
});
