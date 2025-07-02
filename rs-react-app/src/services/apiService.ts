import type { ResultItem, CharacterDetails } from '../types/types';

interface RickAndMortyCharacter {
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

interface RickAndMortyApiResponse {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: RickAndMortyCharacter[];
}

type SuccessResponse<T> = {
  status: 'success';
  data: T;
};

type ErrorResponse = {
  status: 'error';
  message: string;
};

type ApiResponse<T> = SuccessResponse<T> | ErrorResponse;

const API_BASE_URL =
  import.meta.env.VITE_RM_API_URL || 'https://rickandmortyapi.com/api';

class ApiService {
  private async makeRequest<T>(url: string): Promise<ApiResponse<T>> {
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
        return 'No characters found in the multiverse';
      case 429:
        return 'Too many requests - portal gun cooling down';
      case 500:
        return 'Central Finite Curve is unstable';
      default:
        return `Interdimensional cable error (${status})`;
    }
  }

  async searchItems(term: string = ''): Promise<ApiResponse<ResultItem[]>> {
    const processedTerm = term.trim();

    if (!processedTerm) {
      return this.fetchAllCharacters();
    }

    const response = await this.makeRequest<RickAndMortyApiResponse>(
      `${API_BASE_URL}/character/?name=${encodeURIComponent(processedTerm)}&page=1`
    );

    if (response.status === 'error') {
      return response;
    }

    return {
      status: 'success',
      data: this.mapCharactersToResultItems(response.data.results),
    };
  }

  private async fetchAllCharacters(): Promise<ApiResponse<ResultItem[]>> {
    let allCharacters: RickAndMortyCharacter[] = [];
    let nextUrl: string | null = `${API_BASE_URL}/character/`;

    try {
      while (nextUrl) {
        const response =
          await this.makeRequest<RickAndMortyApiResponse>(nextUrl);

        if (response.status === 'error') {
          return response;
        }

        const successResponse =
          response as SuccessResponse<RickAndMortyApiResponse>;
        allCharacters = [...allCharacters, ...successResponse.data.results];
        nextUrl = successResponse.data.info.next;
      }

      return {
        status: 'success',
        data: this.mapCharactersToResultItems(allCharacters),
      };
    } catch (error) {
      return {
        status: 'error',
        message:
          error instanceof Error
            ? error.message
            : 'Failed to fetch all characters',
      };
    }
  }

  private mapCharactersToResultItems(
    characters: RickAndMortyCharacter[]
  ): ResultItem[] {
    return characters.map(
      (character): ResultItem => ({
        id: character.id,
        name: character.name,
        description: `${character.species} - ${character.status}`,
        url: character.url,
        gender: character.gender,
        image: character.image,
        status: character.status,
        species: character.species,
        origin: character.origin.name,
        episodeCount: character.episode.length,
      })
    );
  }
  async getItemDetails(id: string): Promise<ApiResponse<CharacterDetails>> {
    const response = await this.makeRequest<RickAndMortyCharacter>(
      `${API_BASE_URL}/character/${id}`
    );

    if (response.status === 'error') {
      return response;
    }

    const character = response.data;
    const details: CharacterDetails = {
      id: character.id.toString(),
      name: character.name,
      status: character.status,
      species: character.species,
      type: character.type,
      gender: character.gender,
      origin: character.origin,
      location: character.location,
      image: character.image,
      episode: character.episode,
      url: character.url,
      created: character.created,
    };

    return {
      status: 'success',
      data: details,
    };
  }

  async getMultipleCharacters(
    ids: number[]
  ): Promise<ApiResponse<CharacterDetails[]>> {
    const response = await this.makeRequest<RickAndMortyCharacter[]>(
      `${API_BASE_URL}/character/${ids.join(',')}`
    );

    if (response.status === 'error') {
      return response;
    }

    const characters = Array.isArray(response.data)
      ? response.data
      : [response.data];

    const details: CharacterDetails[] = characters.map((character) => ({
      id: character.id.toString(),
      name: character.name,
      status: character.status,
      species: character.species,
      type: character.type,
      gender: character.gender,
      origin: character.origin,
      location: character.location,
      image: character.image,
      episode: character.episode,
      url: character.url,
      created: character.created,
    }));

    return {
      status: 'success',
      data: details,
    };
  }
}

export default new ApiService();
