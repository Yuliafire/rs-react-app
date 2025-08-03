import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { vi, describe, beforeEach, it, expect } from 'vitest';
import App from '../src/App';
import type { CharacterDetails } from '../src/types/types';
import '@testing-library/jest-dom/vitest';
import { ThemeProvider } from '../src/context/ThemeProvider';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import charactersReducer from '../src/store/charactersSlice';

const createTestStore = () => {
  return configureStore({
    reducer: {
      characters: charactersReducer,
    },
    preloadedState: {
      characters: {
        selectedCharacters: [],
      },
    },
  });
};

vi.mock('../src/components/layout/Header/Header', () => ({
  default: () => <div>Header Mock</div>,
}));

vi.mock('../src/components/layout/Footer/Footer', () => ({
  default: () => <div>Footer Mock</div>,
}));

vi.mock('../src/components/SearchSection/SearchSection', () => ({
  default: ({
    onSearchResults,
    onLoadingChange,
    onErrorChange,
  }: {
    onSearchResults: (results: CharacterDetails[], searchTerm: string) => void;
    onLoadingChange: (loading: boolean) => void;
    onErrorChange: (error: string | null) => void;
  }) => (
    <div>
      SearchSection Mock
      <button
        onClick={() => {
          onLoadingChange(true);
          setTimeout(() => {
            onSearchResults([], 'test');
            onLoadingChange(false);
            onErrorChange('Search failed');
          }, 0);
        }}
      >
        Trigger Search Error
      </button>
    </div>
  ),
}));

vi.mock('../src/components/ResultsSection/ResultsSection', () => ({
  default: ({
    results,
    loading,
    error,
  }: {
    results: CharacterDetails[];
    loading: boolean;
    error: string | null;
  }) => (
    <div>
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {results.length > 0 && <div>Results: {results.length}</div>}
    </div>
  ),
}));

vi.mock('../src/pages/about/About', () => ({
  About: () => <div>About Page</div>,
}));

vi.mock('../src/pages/not-found/Notfound', () => ({
  NotFound: () => <div>NotFound Page</div>,
}));

const mockApiService = {
  fetchInitialCharacters: vi.fn(),
  searchCharacters: vi.fn(),
};

vi.doMock('../src/services/apiService', () => ({
  default: mockApiService,
}));

describe('App Component', () => {
  const mockCharacter: CharacterDetails = {
    id: 1,
    name: 'Rick Sanchez',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Male',
    image: '',
    url: '',
    created: new Date().toISOString(),
    origin: { name: 'Earth', url: '' },
    location: { name: 'Earth', url: '' },
    episode: [],
  };

  beforeEach(() => {
    vi.clearAllMocks();
    mockApiService.fetchInitialCharacters.mockResolvedValue({
      status: 'success',
      data: [mockCharacter],
    });
    mockApiService.searchCharacters.mockResolvedValue({
      status: 'success',
      data: [mockCharacter],
    });
  });

  const renderApp = (initialEntries = ['/']) => {
    const store = createTestStore();
    return render(
      <Provider store={store}>
        <ThemeProvider>
          <MemoryRouter initialEntries={initialEntries}>
            <App />
          </MemoryRouter>
        </ThemeProvider>
      </Provider>
    );
  };

  it('renders Header, Footer, and HomePage on default route', async () => {
    renderApp();
    await waitFor(() => {
      expect(screen.getByText('Header Mock')).toBeInTheDocument();
      expect(screen.getByText('Footer Mock')).toBeInTheDocument();
      expect(screen.getByText('SearchSection Mock')).toBeInTheDocument();
    });
  });

  it('renders About page on /about route', async () => {
    renderApp(['/about']);
    expect(screen.getByText('About Page')).toBeInTheDocument();
    expect(screen.getByText('Header Mock')).toBeInTheDocument();
    expect(screen.getByText('Footer Mock')).toBeInTheDocument();
  });

  it('renders NotFound page on invalid route', async () => {
    renderApp(['/invalid']);
    expect(screen.getByText('Header Mock')).toBeInTheDocument();
    expect(screen.getByText('Footer Mock')).toBeInTheDocument();
  });

  it('handles search error from SearchSection', async () => {
    renderApp();
    fireEvent.click(screen.getByText('Trigger Search Error'));
    await waitFor(() => {
      expect(screen.getByText('Search failed')).toBeInTheDocument();
      expect(screen.queryByText('Results: 1')).not.toBeInTheDocument();
    });
  });
});
