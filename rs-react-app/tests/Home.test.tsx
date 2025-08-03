import { render, screen, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { describe, it, vi, beforeEach, afterEach, expect } from 'vitest';
import { MemoryRouter, useNavigate, useParams } from 'react-router-dom';
import Home from '../src/pages/home/Home';
import charactersReducer from '../src/store/charactersSlice';
import { ThemeProvider } from '../src/context/ThemeProvider';
import '@testing-library/jest-dom/vitest';

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useParams: vi.fn(() => ({ page: '1', id: '190' })),
    useSearchParams: vi.fn(() => [{ get: vi.fn(() => 'ara') }]),
    useNavigate: vi.fn(),
  };
});

vi.mock('../../shared/hooks/useTheme', () => ({
  useTheme: vi.fn(() => ({ theme: 'light' })),
}));

describe('Home component', () => {
  let store: ReturnType<typeof configureStore>;
  let mockNavigate: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        characters: charactersReducer,
      },
    });
    mockNavigate = vi.fn();
    vi.mocked(useNavigate).mockReturnValue(mockNavigate);
    vi.mocked(useParams).mockReturnValue({ page: '1', id: '190' });
    vi.clearAllMocks();
  });

  afterEach(() => {
    cleanup();
  });

  it('renders search section', () => {
    render(
      <Provider store={store}>
        <ThemeProvider>
          <MemoryRouter initialEntries={['/1/190?query=ara']}>
            <Home />
          </MemoryRouter>
        </ThemeProvider>
      </Provider>
    );
    expect(screen.getByTestId('search-section')).toBeInTheDocument();
  });

  it('renders results section', () => {
    render(
      <Provider store={store}>
        <ThemeProvider>
          <MemoryRouter initialEntries={['/1/190?query=ara']}>
            <Home />
          </MemoryRouter>
        </ThemeProvider>
      </Provider>
    );
    expect(screen.getByTestId('results-section')).toBeInTheDocument();
  });
});
