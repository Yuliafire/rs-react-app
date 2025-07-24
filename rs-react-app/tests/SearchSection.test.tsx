// import { render, screen } from '@testing-library/react';
// import { beforeEach, describe, expect, it, vi } from 'vitest';
// import SearchSection from '../src/components/SearchSection/SearchSection';
// import { useStorage } from '../src/services/storageService';
// import '@testing-library/jest-dom/vitest';
// import userEvent from '@testing-library/user-event';

// interface CharacterResult {
//   id: number;
//   name: string;
// }

// interface ApiResponse {
//   status: string;
//   data: CharacterResult[];
// }

// interface SearchSectionProps {
//   onSearchResults: (results: CharacterResult[], searchTerm: string) => void;
//   onLoadingChange: (isLoading: boolean) => void;
//   onErrorChange: (error: string | null) => void;
// }

// vi.mock('../src/services/storageService', () => ({
//   default: {
//     getSearchTerm: vi.fn(() => ''),
//     saveSearchTerm: vi.fn(() => Promise.resolve()),
//   },
// }));

// vi.mock('../src/services/apiService', () => ({
//   searchCharacters: vi.fn(() =>
//     Promise.resolve<ApiResponse>({
//       status: 'success',
//       data: [],
//     })
//   ),
// }));

// const mockProps: SearchSectionProps = {
//   onSearchResults: vi.fn(),
//   onLoadingChange: vi.fn(),
//   onErrorChange: vi.fn(),
// };

// describe('SearchSection Component', () => {
//   beforeEach(() => {
//     vi.clearAllMocks();
//     vi.mocked(useStorage.getSearchTerm).mockReturnValue('');
//   });

//   describe('Rendering', () => {
//     it('renders search input and button', () => {
//       render(<SearchSection {...mockProps} />);
//       expect(screen.getByRole('textbox')).toBeInTheDocument();
//       expect(
//         screen.getByRole('button', { name: /search/i })
//       ).toBeInTheDocument();
//     });

//     it('shows empty input when no saved term exists', () => {
//       render(<SearchSection {...mockProps} />);
//       expect(screen.getByRole('textbox')).toHaveValue('');
//     });
//   });

//   describe('Behavior', () => {
//     it('displays saved search term', () => {
//       vi.mocked(useStorage.getSearchTerm).mockReturnValue('Rick');
//       render(<SearchSection {...mockProps} />);
//       expect(screen.getByRole('textbox')).toHaveValue('Rick');
//     });

//     it('updates input value on typing', async () => {
//       const user = userEvent.setup();
//       render(<SearchSection {...mockProps} />);
//       const input = screen.getByRole('textbox');
//       await user.type(input, 'Morty');
//       expect(input).toHaveValue('Morty');
//     });

//     it('triggers search on button click', async () => {
//       const user = userEvent.setup();
//       render(<SearchSection {...mockProps} />);
//       await user.type(screen.getByRole('textbox'), 'Rick');
//       await user.click(screen.getByRole('button', { name: /search/i }));
//       expect(mockProps.onSearchResults).toHaveBeenCalled();
//     });
//   });
// });

import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { vi, describe, it, expect, beforeEach } from 'vitest';
import SearchSection from '../src/components/SearchSection/SearchSection';
import { useStorage } from '../src/services/storageService';
import ApiService from '../src/services/apiService';
import type { CharacterDetails } from '../src/types/types';
import '@testing-library/jest-dom/vitest';
import userEvent from '@testing-library/user-event';

// Mock Button component
// vi.mock('../src/components/ui/Button/Button', () => ({
//   default: ({
//     children,
//     disabled,
//     onClick,
//     type,
//     'aria-label': ariaLabel,
//   }: unknown) => (
//     <button
//       disabled={disabled}
//       onClick={onClick}
//       type={type}
//       aria-label={ariaLabel}
//     >
//       {children}
//     </button>
//   ),
// }));

// Mock useStorage hook
vi.mock('../src/services/storageService', () => ({
  useStorage: vi.fn(),
}));

// Mock ApiService
vi.mock('../src/services/apiService', () => ({
  default: {
    searchCharacters: vi.fn(),
  },
}));

describe('SearchSection Component', () => {
  const mockOnSearchResults = vi.fn();
  const mockOnLoadingChange = vi.fn();
  const mockOnErrorChange = vi.fn();

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
    vi.mocked(useStorage).mockReturnValue({
      getSearchTerm: vi.fn().mockReturnValue(''),
      saveSearchTerm: vi.fn(),
      clearSearchTerm: vi.fn(),
      getSearchHistory: vi.fn().mockReturnValue([]),
      clearSearchHistory: vi.fn(),
    });
    vi.mocked(ApiService.searchCharacters).mockResolvedValue({
      status: 'success',
      data: [mockCharacter],
    });
  });

  describe('Rendering', () => {
    it('renders search input and button', () => {
      render(
        <BrowserRouter>
          <SearchSection
            onSearchResults={mockOnSearchResults}
            onLoadingChange={mockOnLoadingChange}
            onErrorChange={mockOnErrorChange}
          />
        </BrowserRouter>
      );

      expect(
        screen.getByPlaceholderText('Search characters...')
      ).toBeInTheDocument();
      expect(
        screen.getByRole('button', { name: /Search/i })
      ).toBeInTheDocument();
    });

    it('shows empty input when no saved term exists', () => {
      render(
        <BrowserRouter>
          <SearchSection
            onSearchResults={mockOnSearchResults}
            onLoadingChange={mockOnLoadingChange}
            onErrorChange={mockOnErrorChange}
          />
        </BrowserRouter>
      );

      expect(screen.getByPlaceholderText('Search characters...')).toHaveValue(
        ''
      );
    });
  });

  describe('Behavior', () => {
    it('displays saved search term', () => {
      vi.mocked(useStorage).mockReturnValue({
        getSearchTerm: vi.fn().mockReturnValue('Rick'),
        saveSearchTerm: vi.fn(),
        clearSearchTerm: vi.fn(),
        getSearchHistory: vi.fn().mockReturnValue([]),
        clearSearchHistory: vi.fn(),
      });

      render(
        <BrowserRouter>
          <SearchSection
            onSearchResults={mockOnSearchResults}
            onLoadingChange={mockOnLoadingChange}
            onErrorChange={mockOnErrorChange}
          />
        </BrowserRouter>
      );

      expect(screen.getByPlaceholderText('Search characters...')).toHaveValue(
        'Rick'
      );
    });

    it('updates input value on typing', async () => {
      const user = userEvent.setup();
      render(
        <BrowserRouter>
          <SearchSection
            onSearchResults={mockOnSearchResults}
            onLoadingChange={mockOnLoadingChange}
            onErrorChange={mockOnErrorChange}
          />
        </BrowserRouter>
      );

      const input = screen.getByPlaceholderText('Search characters...');
      await user.type(input, 'Morty');
      expect(input).toHaveValue('Morty');
    });

    it('triggers search on button click', async () => {
      const user = userEvent.setup();
      render(
        <BrowserRouter>
          <SearchSection
            onSearchResults={mockOnSearchResults}
            onLoadingChange={mockOnLoadingChange}
            onErrorChange={mockOnErrorChange}
          />
        </BrowserRouter>
      );

      const input = screen.getByPlaceholderText('Search characters...');
      const button = screen.getByRole('button', { name: /Search/i });

      await user.type(input, 'Rick');
      await user.click(button);

      await waitFor(() => {
        expect(mockOnLoadingChange).toHaveBeenCalledWith(true);
        expect(ApiService.searchCharacters).toHaveBeenCalledWith('Rick');
        expect(mockOnSearchResults).toHaveBeenCalledWith(
          [mockCharacter],
          'Rick'
        );
        expect(mockOnLoadingChange).toHaveBeenCalledWith(false);
        expect(
          vi.mocked(useStorage).mock.results[0].value.saveSearchTerm
        ).toHaveBeenCalledWith('Rick');
      });
    });
  });
});
