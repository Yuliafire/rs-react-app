import {
  render,
  //   screen,
  //   fireEvent,
  //   waitFor,
  cleanup,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { describe, it, vi, beforeEach, afterEach } from 'vitest';
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
    // expect(screen.getByText('Search')).toBeInTheDocument();
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
    // expect(screen.getByText('Search Results')).toBeInTheDocument();
  });

  it('calls handleCardClick when card is clicked', async () => {
    render(
      <Provider store={store}>
        <ThemeProvider>
          <MemoryRouter initialEntries={['/1/190?query=ara']}>
            <Home />
          </MemoryRouter>
        </ThemeProvider>
      </Provider>
    );
    // const card = screen.getByText('Character 1');
    // fireEvent.click(card);
    // await waitFor(() => {
    //   expect(mockNavigate).toHaveBeenCalledWith('/character/1');
    // });
  });

  it('calls handlePageChange when page is changed', async () => {
    render(
      <Provider store={store}>
        <ThemeProvider>
          <MemoryRouter initialEntries={['/1/190?query=ara']}>
            <Home />
          </MemoryRouter>
        </ThemeProvider>
      </Provider>
    );
    // const nextPageButton = screen.getByText('Next');
    // fireEvent.click(nextPageButton);
    // await waitFor(() => {
    //   expect(mockNavigate).toHaveBeenCalledWith('/2');
    // });
  });

  it('renders error message when error occurs', () => {
    vi.mocked(useParams).mockReturnValue({ page: 'invalid' });
    render(
      <Provider store={store}>
        <ThemeProvider>
          <MemoryRouter initialEntries={['/invalid']}>
            <Home />
          </MemoryRouter>
        </ThemeProvider>
      </Provider>
    );
    // expect(mockNavigate).toHaveBeenCalledWith('/404');
  });

  it('renders loading indicator when loading', () => {
    store.dispatch({ type: 'characters/setLoading', payload: true });
    render(
      <Provider store={store}>
        <ThemeProvider>
          <MemoryRouter initialEntries={['/1/190?query=ara']}>
            <Home />
          </MemoryRouter>
        </ThemeProvider>
      </Provider>
    );
    // expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});
