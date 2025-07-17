import { render, screen } from '@testing-library/react';
import CardList from '../src/components/ui/CardList/CardList';
import type { CharacterDetails } from '../src/types/types';
import { vi, describe, it, expect } from 'vitest';

vi.mock('../Card/Card', () => ({
  default: ({ character }: { character: CharacterDetails }) => (
    <div data-testid="card">{character.id}</div>
  ),
}));

describe('CardList Component', () => {
  const generateMockCharacters = (count: number): CharacterDetails[] =>
    Array.from({ length: count }, (_, i) => ({
      id: i + 1,
      name: `Character ${i + 1}`,
      status: 'Unknown',
      species: 'Unknown',
      type: '',
      gender: 'Unknown',
      image: '',
      url: '',
      created: new Date().toISOString(),
      origin: { name: 'Unknown', url: '' },
      location: { name: 'Unknown', url: '' },
      episode: [],
    }));

  describe('Rendering Behavior', () => {
    it('renders one card when given one character', () => {
      render(<CardList characters={generateMockCharacters(1)} />);
      expect(screen.getAllByTestId('card')).toHaveLength(1);
    });

    it('renders multiple cards when given multiple characters', () => {
      const testCount = 3;
      render(<CardList characters={generateMockCharacters(testCount)} />);
      expect(screen.getAllByTestId('card')).toHaveLength(testCount);
    });
  });

  describe('Data Handling', () => {
    it('passes character data correctly to each Card', () => {
      const testData = generateMockCharacters(3);
      render(<CardList characters={testData} />);

      const cards = screen.getAllByTestId('card');
      testData.forEach((character, index) => {
        expect(cards[index]).toHaveTextContent(String(character.id));
      });
    });

    it('handles missing optional fields gracefully', () => {
      const incompleteData = [
        { ...generateMockCharacters(1)[0], name: undefined, image: undefined },
      ] as unknown as CharacterDetails[];

      render(<CardList characters={incompleteData} />);
      expect(screen.getByTestId('card')).toBeInTheDocument();
    });
  });

  describe('Performance', () => {
    it('renders large lists without crashing', () => {
      const largeList = generateMockCharacters(100);
      expect(() => render(<CardList characters={largeList} />)).not.toThrow();
    });
  });
});
