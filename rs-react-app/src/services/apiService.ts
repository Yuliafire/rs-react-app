import type { CharacterDetails, ResultItem, ApiResponse } from '../types/types';

type SuccessResponse<T> = {
  status: 'success';
  data: T;
};

type ErrorResponse = {
  status: 'error';
  message: string;
};

type ServiceResponse<T> = SuccessResponse<T> | ErrorResponse;

const API_BASE_URL =
  import.meta.env.VITE_RM_API_URL || 'https://rickandmortyapi.com/api';

class ApiService {
  private async makeRequest<T>(url: string): Promise<ServiceResponse<T>> {
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

  async searchItems(term: string = ''): Promise<ServiceResponse<ResultItem[]>> {
    const processedTerm = term.trim();

    if (!processedTerm) {
      return this.fetchAllCharacters();
    }

    const response = await this.makeRequest<ApiResponse>(
      `${API_BASE_URL}/character/?name=${encodeURIComponent(processedTerm)}&page=1`
    );

    if (response.status === 'error') {
      return response;
    }

    const successResponse = response as SuccessResponse<ApiResponse>;
    return {
      status: 'success',
      data: this.mapToResultItems(successResponse.data.results),
    };
  }

  private async fetchAllCharacters(): Promise<ServiceResponse<ResultItem[]>> {
    let allCharacters: CharacterDetails[] = [];
    let nextUrl: string | null = `${API_BASE_URL}/character/`;

    try {
      while (nextUrl) {
        const response = await this.makeRequest<ApiResponse>(nextUrl);

        if (response.status === 'error') {
          return response;
        }

        const successResponse = response as SuccessResponse<ApiResponse>;
        allCharacters = [...allCharacters, ...successResponse.data.results];
        nextUrl = successResponse.data.info.next;
      }

      return {
        status: 'success',
        data: this.mapToResultItems(allCharacters),
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

  private mapToResultItems(characters: CharacterDetails[]): ResultItem[] {
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

  async getItemDetails(id: string): Promise<ServiceResponse<CharacterDetails>> {
    const response = await this.makeRequest<CharacterDetails>(
      `${API_BASE_URL}/character/${id}`
    );

    if (response.status === 'error') {
      return response;
    }

    const successResponse = response as SuccessResponse<CharacterDetails>;
    return {
      status: 'success',
      data: {
        ...successResponse.data,
        id: successResponse.data.id.toString(),
      },
    };
  }

  async getMultipleCharacters(
    ids: number[]
  ): Promise<ServiceResponse<CharacterDetails[]>> {
    const response = await this.makeRequest<
      CharacterDetails[] | CharacterDetails
    >(`${API_BASE_URL}/character/${ids.join(',')}`);

    if (response.status === 'error') {
      return response;
    }

    const successResponse = response as SuccessResponse<
      CharacterDetails[] | CharacterDetails
    >;
    const characters = Array.isArray(successResponse.data)
      ? successResponse.data
      : [successResponse.data];

    return {
      status: 'success',
      data: characters.map((char) => ({
        ...char,
        id: char.id.toString(),
      })),
    };
  }
}

export default new ApiService();
