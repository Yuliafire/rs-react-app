import { render, screen, waitFor } from '@testing-library/react';
import App from '../src/App';
import { vi, describe, beforeEach, it, expect } from 'vitest';
import type { CharacterDetails } from '../src/types/types';
import ApiService from '../src/services/apiService';

vi.mock('../src/components/layout/Header/Header', () => ({
  default: () => <header>Header Mock</header>,
}));

vi.mock('../src/components/layout/Footer/Footer', () => ({
  default: () => <footer>Footer Mock</footer>,
}));

vi.mock('../src/components/SearchSection/SearchSection', () => ({
  default: () => <div>SearchSection Mock</div>,
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

vi.mock('../src/services/apiService', () => ({
  default: {
    fetchInitialCharacters: vi.fn(),
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
  });

  describe('Initial State', () => {
    it('renders header and footer', () => {
      render(<App />);
      expect(screen.getByText('Header Mock')).toBeInTheDocument();
      expect(screen.getByText('Footer Mock')).toBeInTheDocument();
    });
  });

  describe('Data Loading', () => {
    it('shows loading state initially', async () => {
      vi.mocked(ApiService.fetchInitialCharacters).mockImplementation(
        () => new Promise(() => {})
      );

      render(<App />);
      expect(screen.getByText('Loading...')).toBeInTheDocument();
    });

    it('loads initial characters successfully', async () => {
      render(<App />);

      await waitFor(() => {
        expect(screen.getByText('Results: 1')).toBeInTheDocument();
      });
      expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
    });

    it('handles initial load error', async () => {
      vi.mocked(ApiService.fetchInitialCharacters).mockResolvedValue({
        status: 'error',
        message: 'Failed to load',
      });

      render(<App />);

      await waitFor(() => {
        expect(screen.getByText('Failed to load')).toBeInTheDocument();
      });
    });
  });
});
