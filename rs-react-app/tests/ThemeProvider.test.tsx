import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeContext } from '../src/context/themeContext';
import { ThemeProvider } from '../src/context/ThemeProvider';
import { useContext } from 'react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import type { Theme } from '../src/context/ThemeProvider';

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

describe('ThemeProvider', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem: vi.fn(),
        setItem: vi.fn(),
      },
      writable: true,
    });
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('renders with initial theme value', () => {
    render(
      <ThemeProvider>
        <div>Test Child</div>
      </ThemeProvider>
    );

    expect(document.documentElement).toHaveAttribute(
      'data-testid',
      'theme-root'
    );
  });

  it('displays and updates theme value correctly', async () => {
    const TestComponent = () => {
      const { toggleTheme } = useContext(ThemeContext) as ThemeContextType;
      return (
        <button data-testid="theme-toggle" onClick={toggleTheme}>
          Toggle Theme
        </button>
      );
    };

    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    expect(document.documentElement).toHaveAttribute('data-theme', 'dark');

    await userEvent.click(screen.getByTestId('theme-toggle'));

    expect(document.documentElement).toHaveAttribute('data-theme', 'light');
  });

  it('persists theme to localStorage', async () => {
    const TestComponent = () => {
      const { toggleTheme } = useContext(ThemeContext) as ThemeContextType;
      return (
        <button data-testid="theme-toggle" onClick={toggleTheme}>
          Toggle
        </button>
      );
    };

    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    await userEvent.click(screen.getByTestId('theme-toggle'));
    expect(localStorage.setItem).toHaveBeenCalledWith('theme', 'light');
  });

  it('applies theme class to document element', async () => {
    const TestComponent = () => {
      const { toggleTheme } = useContext(ThemeContext) as ThemeContextType;
      return (
        <button data-testid="theme-toggle" onClick={toggleTheme}>
          Toggle
        </button>
      );
    };

    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    expect(document.documentElement).toHaveClass('dark');

    await userEvent.click(screen.getByTestId('theme-toggle'));
    expect(document.documentElement).toHaveClass('light');
  });
});
