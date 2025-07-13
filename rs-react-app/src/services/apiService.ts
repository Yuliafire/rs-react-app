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

const API_BASE_URL = import.meta.env.VITE_RM_API_URL || 'https://rickandmortyapi.com/api';

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
      return {
        status: 'success',
        data: await response.json(),
      };
    } catch (error) {
      return {
        status: 'error',
        message: error instanceof Error ? error.message : 'Network error',
      };
    }
  }

  private getErrorMessage(status: number): string {
    const messages: Record<number, string> = {
      400: 'Invalid search parameters',
      404: 'No characters found',
      429: 'Too many requests',
      500: 'Server error',
    };
    return messages[status] || `API error (${status})`;
  }

  private isSuccessResponse<T>(response: ServiceResponse<T>): response is SuccessResponse<T> {
    return response.status === 'success';
  }

  async fetchPaginatedCharacters(pageCount: number): Promise<ServiceResponse<CharacterDetails[]>> {
    try {
      const pages = Array.from({ length: pageCount }, (_, i) => 
        this.makeRequest<ApiResponse>(`${API_BASE_URL}/character/?page=${i + 1}`)
      );

      const responses = await Promise.all(pages);
      const characters: CharacterDetails[] = [];

      for (const response of responses) {
        if (!this.isSuccessResponse(response)) {
          continue;
        }
        characters.push(...response.data.results);
      }

      return {
        status: 'success',
        data: characters.slice(0, pageCount * 20),
      };
    } catch (error) {
      return {
        status: 'error',
        message: 'Failed to fetch characters',
      };
    }
  }

  async searchItems(term: string = ''): Promise<ServiceResponse<ResultItem[]>> {
    const processedTerm = term.trim();
    
    if (!processedTerm) {
      const response = await this.fetchPaginatedCharacters(5);
      if (!this.isSuccessResponse(response)) {
        return response;
      }
      return {
        status: 'success',
        data: this.mapToResultItems(response.data),
      };
    }

    const response = await this.makeRequest<ApiResponse>(
      `${API_BASE_URL}/character/?name=${encodeURIComponent(processedTerm)}`
    );

    if (!this.isSuccessResponse(response)) {
      return response;
    }
    return {
      status: 'success',
      data: this.mapToResultItems(response.data.results),
    };
  }

  private mapToResultItems(characters: CharacterDetails[]): ResultItem[] {
    return characters.map((character) => ({
      id: character.id,
      name: character.name,
      description: `${character.species} - ${character.status}`,
      url: character.url,
      gender: character.gender,
      image: character.image,
      status: character.status,
      species: character.species,
    }));
  }
}

export default new ApiService();