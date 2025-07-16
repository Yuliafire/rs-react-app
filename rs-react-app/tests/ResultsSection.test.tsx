import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import ResultsSection from '../src/components/ResultsSection/ResultsSection';
import type { CharacterDetails } from '../src/types/types';
import '@testing-library/jest-dom/vitest';

// Mock child components
vi.mock('../ui/Loader/Loader', () => ({
  default: () => (
    <div data-testid="loader" role="status">
      Loading...
    </div>
  ),
}));

vi.mock('../ui/CardList/CardList', () => ({
  default: ({ characters }: { characters: CharacterDetails[] }) => (
    <ul role="list">
      {characters.map((char) => (
        <li key={char.id} role="listitem">
          {char.name}
        </li>
      ))}
    </ul>
  ),
}));

describe('ResultsSection Component', () => {
  const mockCharacters: CharacterDetails[] = [
    {
      id: 1,
      name: 'Rick Sanchez',
      status: 'Alive',
      species: 'Human',
      type: '',
      gender: '',
      origin: {
        name: '',
        url: '',
      },
      location: {
        name: '',
        url: '',
      },
      image: '',
      episode: [],
      url: '',
      created: '',
    },
    {
      id: 2,
      name: 'Morty Smith',
      status: 'Alive',
      species: 'Human',
      type: '',
      gender: '',
      origin: {
        name: '',
        url: '',
      },
      location: {
        name: '',
        url: '',
      },
      image: '',
      episode: [],
      url: '',
      created: '',
    },
  ];

  describe('Rendering States', () => {
    it('displays error message when error exists', () => {
      const errorMessage = 'API Error';
      render(
        <ResultsSection loading={false} error={errorMessage} results={[]} />
      );
      expect(screen.getByText(errorMessage)).toBeInTheDocument();
    });

    it('displays "no results" message when results are empty', () => {
      render(<ResultsSection loading={false} error={null} results={[]} />);
      expect(screen.getByText(/No characters found/i)).toBeInTheDocument();
    });

    it('renders CardList with results when data exists', () => {
      render(
        <ResultsSection loading={false} error={null} results={mockCharacters} />
      );
      expect(screen.getByRole('list')).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('has proper aria attributes for loading state', () => {
      render(<ResultsSection loading={true} error={null} results={[]} />);
      const section = screen.getByRole('alert').closest('section');
      expect(section).toHaveAttribute('aria-live', 'polite');
    });

    it('marks error message as alert', () => {
      render(<ResultsSection loading={false} error="Error" results={[]} />);
      expect(screen.getByRole('paragraph')).toBeInTheDocument();
    });
  });

  describe('Component Behavior', () => {
    it('does not show loader when not loading', () => {
      render(
        <ResultsSection loading={false} error={null} results={mockCharacters} />
      );
      expect(screen.queryByTestId('loader')).not.toBeInTheDocument();
    });

    it('does not show error when none exists', () => {
      render(
        <ResultsSection loading={false} error={null} results={mockCharacters} />
      );
      expect(screen.queryByRole('alert')).not.toBeInTheDocument();
    });

    it('does not show "no results" when results exist', () => {
      render(
        <ResultsSection loading={false} error={null} results={mockCharacters} />
      );
      expect(
        screen.queryByText(/No characters found/i)
      ).not.toBeInTheDocument();
    });
  });
});
