export interface CharacterDetails {
  id: string;
  name: string;
  yearOfBirth?: number;
  yearOfDeath?: number | null;
  gender?: string;
  maritalStatus?: string;
  serialNumber?: string;
}

export interface ResultItem {
  name: string;
  url: string;
  id: string;
  description: string;
  gender?: string;
  yearOfBirth?: number;
  yearOfDeath?: number | null;
  maritalStatus?: string;
  serialNumber?: string;
}

export interface CharacterDetails {
  id: string;
  name: string;
  yearOfBirth?: number;
  yearOfDeath?: number | null;
  gender?: string;
  maritalStatus?: string;
  serialNumber?: string;
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
