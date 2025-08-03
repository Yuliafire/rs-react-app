import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, useNavigate } from 'react-router-dom';
import CharacterDetailsComponent from '../src/components/CharacterDetails/CharacterDetails';
import ApiService from '../src/shared/services/apiService';
import type { CharacterDetails } from '../src/types/types';
import { ThemeProvider } from '../src/context/ThemeProvider';
import '@testing-library/jest-dom/vitest';

interface ServiceResponse<T> {
  status: 'success' | 'error';
  message?: string;
  data: T;
}

vi.mock('react-router-dom', async (importOriginal) => {
  const actual: typeof import('react-router-dom') = await importOriginal();
  return {
    ...actual,
    useNavigate: vi.fn(),
    useSearchParams: vi.fn(() => [
      new URLSearchParams('?page=1&query=rick'),
      vi.fn(),
    ]),
    useParams: vi.fn(() => ({ id: '1' })),
    useOutletContext: vi.fn(() => ({ detailsRef: { current: null } })),
  };
});

vi.mock('../src/shared/services/apiService');

const mockCharacter: CharacterDetails = {
  id: 1,
  name: 'Rick Sanchez',
  status: 'Alive',
  species: 'Human',
  type: '',
  gender: 'Male',
  origin: {
    name: 'Earth (C-137)',
    url: 'https://rickandmortyapi.com/api/location/1',
  },
  location: {
    name: 'Citadel of Ricks',
    url: 'https://rickandmortyapi.com/api/location/3',
  },
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  episode: [],
  url: '',
  created: '',
};

describe('CharacterDetailsComponent', () => {
  const mockNavigate = vi.fn();

  beforeEach(() => {
    vi.mocked(useNavigate).mockReturnValue(mockNavigate);
    vi.mocked(ApiService.getCharacter).mockResolvedValue({
      status: 'success',
      data: mockCharacter,
    } as ServiceResponse<CharacterDetails>);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('fetches and displays character details', async () => {
    render(
      <ThemeProvider>
        <MemoryRouter initialEntries={['/home/1?page=1&query=rick']}>
          <CharacterDetailsComponent />
        </MemoryRouter>
      </ThemeProvider>
    );

    await waitFor(() => {
      expect(ApiService.getCharacter).toHaveBeenCalledWith(1);
    });

    expect(await screen.findByText('Rick Sanchez')).toBeInTheDocument();
    expect(screen.getByText('Status: Alive')).toBeInTheDocument();
    expect(screen.getByText('Species: Human')).toBeInTheDocument();
    expect(screen.getByText('Gender: Male')).toBeInTheDocument();
    expect(screen.getByText('Origin: Earth (C-137)')).toBeInTheDocument();
    expect(screen.getByText('Location: Citadel of Ricks')).toBeInTheDocument();
    expect(screen.getByAltText('Rick Sanchez')).toHaveAttribute(
      'src',
      'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
    );
  });

  it('displays error message when character fetch fails', async () => {
    vi.mocked(ApiService.getCharacter).mockResolvedValue({
      status: 'error',
      message: 'Character not found',
      data: { ...mockCharacter, id: '999' } as unknown as CharacterDetails,
    } as ServiceResponse<CharacterDetails>);

    render(
      <ThemeProvider>
        <MemoryRouter initialEntries={['/home/999?page=1&query=rick']}>
          <CharacterDetailsComponent />
        </MemoryRouter>
      </ThemeProvider>
    );

    expect(await screen.findByText('Character not found')).toBeInTheDocument();
  });

  it('handles API request failure', async () => {
    vi.mocked(ApiService.getCharacter).mockRejectedValue(
      new Error('API error')
    );

    render(
      <ThemeProvider>
        <MemoryRouter initialEntries={['/home/1?page=1&query=rick']}>
          <CharacterDetailsComponent />
        </MemoryRouter>
      </ThemeProvider>
    );

    expect(await screen.findByText('API request failed')).toBeInTheDocument();
  });

  it('navigates back with correct search params when close button is clicked', async () => {
    render(
      <ThemeProvider>
        <MemoryRouter initialEntries={['/home/1?page=1&query=rick']}>
          <CharacterDetailsComponent />
        </MemoryRouter>
      </ThemeProvider>
    );

    await waitFor(() => {
      expect(screen.getByText('Rick Sanchez')).toBeInTheDocument();
    });

    const closeButton = screen.getByRole('button', { name: /close/i });
    await userEvent.click(closeButton);

    expect(mockNavigate).toHaveBeenCalledWith('/?page=1&query=rick');
  });

  it('shows "Character not found" when character data fetch fails', async () => {
    vi.mocked(ApiService.getCharacter).mockResolvedValue({
      status: 'error',
      message: 'Character not found',
      data: { ...mockCharacter, id: '999' } as unknown as CharacterDetails,
    } as ServiceResponse<CharacterDetails>);

    render(
      <ThemeProvider>
        <MemoryRouter initialEntries={['/home/999?page=1&query=rick']}>
          <CharacterDetailsComponent />
        </MemoryRouter>
      </ThemeProvider>
    );

    expect(await screen.findByText('Character not found')).toBeInTheDocument();
  });
});
