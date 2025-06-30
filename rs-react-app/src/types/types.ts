export interface ResultItem {
  id: string;
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

export interface CharacterDetails {
  id: string;
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

export interface ResultsSectionProps {
  results: CharacterDetails[];
  loading: boolean;
  error: string | null;
}

export interface AppState {
  searchTerm: string;
  results: CharacterDetails[];
  loading: boolean;
  error: string | null;
  shouldThrowError: boolean;
}
