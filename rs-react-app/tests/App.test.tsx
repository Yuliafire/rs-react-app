import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { vi, describe, beforeEach, it, expect } from 'vitest';
import App from '../src/App';
import type { CharacterDetails } from '../src/types/types';
import ApiService from '../src/services/apiService';
import '@testing-library/jest-dom/vitest';

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

vi.mock('../src/services/apiService', () => ({
  default: {
    fetchInitialCharacters: vi.fn(),
    searchCharacters: vi.fn(),
  },
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
    vi.mocked(ApiService.fetchInitialCharacters).mockResolvedValue({
      status: 'success',
      data: [mockCharacter],
    });
    vi.mocked(ApiService.searchCharacters).mockResolvedValue({
      status: 'success',
      data: [mockCharacter],
    });
  });

  it('renders Header, Footer, and HomePage on default route', async () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  });

  it('renders About page on /about route', async () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText('About Page')).toBeInTheDocument();
    expect(screen.getByText('Header Mock')).toBeInTheDocument();
    expect(screen.getByText('Footer Mock')).toBeInTheDocument();
  });

  it('renders NotFound page on invalid route', async () => {
    render(
      <MemoryRouter initialEntries={['/invalid']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText('Header Mock')).toBeInTheDocument();
    expect(screen.getByText('Footer Mock')).toBeInTheDocument();
  });

  it('handles initial load error', async () => {
    vi.mocked(ApiService.fetchInitialCharacters).mockResolvedValue({
      status: 'error',
      message: 'Failed to load',
      data: [],
    });

    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  });

  it('handles search error from SearchSection', async () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    fireEvent.click(screen.getByText('Trigger Search Error'));

    await waitFor(() => {
      expect(screen.getByText('Search failed')).toBeInTheDocument();
      expect(screen.queryByText('Results: 1')).not.toBeInTheDocument();
    });
  });
});
