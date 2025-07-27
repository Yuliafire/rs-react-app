import type { CharacterDetails } from '../types/types';

interface ServiceResponse<T> {
  status: 'success' | 'error';
  data: T;
  message?: string;
  info?: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
}

class ApiService {
  mapToResultItems() {
    throw new Error('Method not implemented.');
  }
  private static instance: ApiService;
  private readonly baseUrl: string;
  private readonly maxRetries = 3;
  private readonly retryDelay = 1000;

  private constructor() {
    this.baseUrl = import.meta.env.VITE_RM_API_URL;
  }

  public static getInstance(): ApiService {
    if (!ApiService.instance) {
      ApiService.instance = new ApiService();
    }
    return ApiService.instance;
  }

  private async makeRequest<T>(
    url: string,
    retryCount = 0
  ): Promise<ServiceResponse<T>> {
    try {
      await new Promise((resolve) =>
        setTimeout(resolve, this.retryDelay * retryCount)
      );
      const response = await fetch(url);
      if (!response.ok) {
        if (response.status === 429 && retryCount < this.maxRetries) {
          return this.makeRequest<T>(url, retryCount + 1);
        }
        return {
          status: 'error',
          data: {} as T,
          message: this.getErrorMessage(response.status),
        };
      }
      const data = await response.json();
      return {
        status: 'success',
        data: data.results || data,
        ...(data.info && { info: data.info }),
      };
    } catch (error) {
      if (retryCount < this.maxRetries) {
        return this.makeRequest<T>(url, retryCount + 1);
      }
      return {
        status: 'error',
        data: {} as T,
        message: error instanceof Error ? error.message : 'Network error',
      };
    }
  }

  private getErrorMessage(status: number): string {
    const messages: Record<number, string> = {
      400: 'Invalid search parameters',
      404: 'No characters found',
      429: 'Too many requests, retrying...',
      500: 'Server error',
    };
    return messages[status] || `API error (${status})`;
  }

  async fetchInitialCharacters(
    page: number = 1
  ): Promise<ServiceResponse<CharacterDetails[]>> {
    return this.makeRequest<CharacterDetails[]>(
      `${this.baseUrl}/character?page=${page}`
    );
  }

  async searchCharacters(
    query: string,
    page: number = 1
  ): Promise<ServiceResponse<CharacterDetails[]>> {
    const processedQuery = query.trim();
    if (!processedQuery) {
      return this.fetchInitialCharacters(page);
    }
    const encodedQuery = encodeURIComponent(processedQuery);
    return this.makeRequest<CharacterDetails[]>(
      `${this.baseUrl}/character/?name=${encodedQuery}&page=${page}`
    );
  }

  async getCharacter(id: number): Promise<ServiceResponse<CharacterDetails>> {
    return this.makeRequest<CharacterDetails>(
      `${this.baseUrl}/character/${id}`
    );
  }
}

export default ApiService.getInstance();
