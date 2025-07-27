import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import ResultsSection from '../src/components/ResultsSection/ResultsSection';
import type { CharacterDetails } from '../src/types/types';
import '@testing-library/jest-dom/vitest';

vi.mock('../ui/Loader/Loader', () => ({
  default: ({ loading }: { loading: boolean }) =>
    loading ? (
      <div data-testid="loader" role="status">
        Loading...
      </div>
    ) : null,
}));

vi.mock('../ui/CardList/CardList', () => ({
  default: ({ characters }: { characters: CharacterDetails[] }) => (
    <ul data-testid="card-list">
      {characters.map((char) => (
        <li key={char.id} data-testid="card">
          {char.name}
        </li>
      ))}
    </ul>
  ),
}));

const mockCharacters: CharacterDetails[] = [
  {
    id: 1,
    name: 'Rick Sanchez',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: '',
    origin: { name: '', url: '' },
    location: { name: '', url: '' },
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
    origin: { name: '', url: '' },
    location: { name: '', url: '' },
    image: '',
    episode: [],
    url: '',
    created: '',
  },
];

describe('ResultsSection Component', () => {
  describe('Initial States', () => {
    it('shows error message', () => {
      const error = 'Test error';
      render(
        <ResultsSection
          loading={false}
          error={error}
          results={[]}
          onResultClick={function (): void {
            throw new Error('Function not implemented.');
          }}
        />
      );
      expect(screen.getByText(error)).toBeInTheDocument();
    });

    it('shows empty state', () => {
      render(
        <ResultsSection
          loading={false}
          error={null}
          results={[]}
          onResultClick={function (): void {
            throw new Error('Function not implemented.');
          }}
        />
      );
      expect(screen.getByText(/no characters found/i)).toBeInTheDocument();
    });
  });

  describe('With Data', () => {
    it('renders character cards', () => {
      render(
        <ResultsSection
          loading={false}
          error={null}
          results={mockCharacters}
          onResultClick={function (): void {
            throw new Error('Function not implemented.');
          }}
        />
      );
      expect(screen.getAllByTestId('card')).toHaveLength(2);
    });

    it('handles missing data gracefully', () => {
      const incompleteChars = [{ ...mockCharacters[0], name: '' }];
      render(
        <ResultsSection
          results={incompleteChars}
          loading={false}
          error={null}
          onResultClick={function (): void {
            throw new Error('Function not implemented.');
          }}
        />
      );
      expect(screen.getAllByTestId('card')).toHaveLength(1);
    });
  });
});

describe('Error Handling', () => {
  const errorCases = [
    { type: 'Network', message: 'Network Error' },
    { type: 'Not Found', message: '404: Not Found' },
    { type: 'Server', message: '500: Server Error' },
  ];

  errorCases.forEach(({ type, message }) => {
    it(`handles ${type} errors`, () => {
      render(
        <ResultsSection
          error={message}
          results={[]}
          loading={false}
          onResultClick={function (): void {
            throw new Error('Function not implemented.');
          }}
        />
      );
      expect(screen.getByText(message)).toBeInTheDocument();
    });
  });
});
