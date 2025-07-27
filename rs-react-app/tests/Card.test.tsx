import { render, screen } from '@testing-library/react';
import Card from '../src/components/ui/Card/Card';
import type { CharacterDetails } from '../src/types/types';
import '@testing-library/jest-dom/vitest';
import { describe, expect, it, vi } from 'vitest';

vi.mock('./Card.module.scss', () => ({
  card: 'card',
  cardImage: 'cardImage',
  statusBadge: 'statusBadge',
  cardContent: 'cardContent',
  details: 'details',
  episodes: 'episodes',
  alive: '_alive_312e77',
  dead: '_dead_312e77',
  unknown: '_unknown_312e77',
}));

const createTestCharacter = (
  overrides?: Partial<CharacterDetails>
): CharacterDetails => ({
  id: 1,
  name: 'Test Character',
  status: 'Alive',
  species: 'Test Species',
  type: '',
  gender: 'Genderless',
  origin: { name: 'Test Origin', url: '' },
  location: { name: 'Test Location', url: '' },
  image: 'test-image.jpg',
  episode: ['ep1', 'ep2'],
  url: '',
  created: '',
  ...overrides,
});

describe('Card Component', () => {
  it('handles missing image', () => {
    const testCharacter = createTestCharacter({ image: '' });
    render(
      <Card
        character={testCharacter}
        onClick={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
    );
    expect(screen.getByAltText(testCharacter.name)).toBeInTheDocument();
  });

  describe('Displays item name and description correctly', () => {
    it('should render character name prominently', () => {
      const testCharacter = createTestCharacter({ name: 'Rick Sanchez' });
      render(
        <Card
          character={testCharacter}
          onClick={function (): void {
            throw new Error('Function not implemented.');
          }}
        />
      );

      const nameElement = screen.getByRole('heading', { level: 3 });
      expect(nameElement).toBeInTheDocument();
      expect(nameElement).toHaveTextContent('Rick Sanchez');
    });

    it('should display all character details in correct structure', () => {
      const testCharacter = createTestCharacter({
        species: 'Human',
        gender: 'Male',
        origin: { name: 'Earth', url: '' },
        location: { name: 'Citadel of Ricks', url: '' },
      });
      render(
        <Card
          character={testCharacter}
          onClick={function (): void {
            throw new Error('Function not implemented.');
          }}
        />
      );
      expect(screen.getByText(/Species:/)).toBeInTheDocument();
      expect(screen.getByText(/Gender:/)).toBeInTheDocument();
      expect(screen.getByText(/Origin:/)).toBeInTheDocument();
      expect(screen.getByText(/Location:/)).toBeInTheDocument();
    });
  });

  describe('Status Badge', () => {
    it('should display status with correct attributes', () => {
      const testCharacter = createTestCharacter({ status: 'Dead' });
      render(
        <Card
          character={testCharacter}
          onClick={function (): void {
            throw new Error('Function not implemented.');
          }}
        />
      );

      const statusBadge = screen.getByTestId('status-badge');
      expect(statusBadge).toBeInTheDocument();
    });
  });

  describe('Episode Count', () => {
    it('should display correct episode count', () => {
      const testCharacter = createTestCharacter({
        episode: ['ep1', 'ep2', 'ep3'],
      });
      render(
        <Card
          character={testCharacter}
          onClick={function (): void {
            throw new Error('Function not implemented.');
          }}
        />
      );

      expect(screen.getByText(/Episodes:/)).toHaveTextContent('3');
    });

    it('should handle empty episode list', () => {
      const testCharacter = createTestCharacter({ episode: [] });
      render(
        <Card
          character={testCharacter}
          onClick={function (): void {
            throw new Error('Function not implemented.');
          }}
        />
      );

      expect(screen.getByText(/Episodes:/)).toHaveTextContent('0');
    });
  });
});
