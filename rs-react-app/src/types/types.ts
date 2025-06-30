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
