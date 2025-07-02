export interface ResultItem {
  id: number;
  name: string;
  description: string;
  url: string;
  gender: string;
  image?: string;
  status?: string;
  species?: string;
  origin?: string;
  episodeCount?: number;
}

export interface ResultsSectionProps {
  results: CharacterDetails[];
  loading: boolean;
  error: string | null;
  isSearchResult: boolean;
  isPaginated?: boolean;
}

export interface AppState {
  searchTerm: string;
  results: CharacterDetails[];
  loading: boolean;
  error: string | null;
  shouldThrowError: boolean;
  isSearchResult: boolean;
}

export interface CharacterDetails {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface ApiResponse {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: CharacterDetails[];
}