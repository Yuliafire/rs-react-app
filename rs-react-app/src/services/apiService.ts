import type { ResultItem, CharacterDetails } from '../types/types';

interface CharacterApiResponse {
  uid: string;
  name: string;
  gender?: string;
  yearOfBirth?: number;
  yearOfDeath?: number | null;
  maritalStatus?: string;
  serialNumber?: string;
}

interface CharacterListResponse {
  characters: CharacterApiResponse[];
}

interface SingleCharacterResponse {
  character: CharacterApiResponse;
}

type SuccessResponse<T> = {
  status: 'success';
  data: T;
};

type ErrorResponse = {
  status: 'error';
  message: string;
};

type ModResponse<T> = SuccessResponse<T> | ErrorResponse;

const API_BASE_URL =
  import.meta.env.VITE_API_URL || 'https://stapi.co/api/v1/rest';

class ApiService {
  private async makeRequest<T>(url: string): Promise<ModResponse<T>> {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        return {
          status: 'error',
          message: this.getErrorMessage(response.status),
        };
      }

      const data: T = await response.json();
      return {
        status: 'success',
        data,
      };
    } catch (error) {
      return {
        status: 'error',
        message:
          error instanceof Error ? error.message : 'Network error occurred',
      };
    }
  }

  private getErrorMessage(status: number): string {
    switch (status) {
      case 400:
        return 'Invalid search parameters';
      case 404:
        return 'No characters found';
      case 429:
        return 'Too many requests - please wait';
      case 500:
        return 'Star wars database unavailable';
      default:
        return `Star wars communications error (${status})`;
    }
  }

  async searchItems(term: string = ''): Promise<ModResponse<ResultItem[]>> {
    const response = await this.makeRequest<CharacterListResponse>(
      `${API_BASE_URL}/character/search?name=${encodeURIComponent(term)}`
    );

    if (response.status === 'error') {
      return response;
    }

    const filteredCharacters = term
      ? response.data.characters.filter((character) =>
          character.name.toLowerCase().includes(term.toLowerCase())
        )
      : response.data.characters;

    const results: ResultItem[] = filteredCharacters.map(
      (character): ResultItem => ({
        id: character.uid,
        name: character.name,
        description: '',
        url: `${API_BASE_URL}/character?uid=${character.uid}`,
        gender: character.gender || 'Unknown',
        yearOfBirth: character.yearOfBirth,
        yearOfDeath: character.yearOfDeath,
        maritalStatus: character.maritalStatus || 'Unknown',
      })
    );

    return {
      status: 'success',
      data: results,
    };
  }

  async getItemDetails(id: string): Promise<ModResponse<CharacterDetails>> {
    const response = await this.makeRequest<SingleCharacterResponse>(
      `${API_BASE_URL}/character?uid=${id}`
    );

    if (response.status === 'error') {
      return response;
    }

    if (!response.data.character) {
      return {
        status: 'error',
        message: 'Character data not found in response',
      };
    }

    const character = response.data.character;
    const details: CharacterDetails = {
      id: character.uid,
      name: character.name,
      gender: character.gender || 'Unknown',
      yearOfBirth: character.yearOfBirth,
      yearOfDeath: character.yearOfDeath,
      maritalStatus: character.maritalStatus || 'Unknown',
      serialNumber: character.serialNumber,
    };

    return {
      status: 'success',
      data: details,
    };
  }
}

export default new ApiService();
