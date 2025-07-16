import { render, screen } from '@testing-library/react';
import Card from '../src/components/ui/Card/Card';
import type { CharacterDetails } from '../src/types/types';
import '@testing-library/jest-dom/vitest';
import { describe, expect, it } from 'vitest';

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
    render(<Card character={testCharacter} />);
    expect(screen.getByAltText(testCharacter.name)).toBeInTheDocument();
  });
});
