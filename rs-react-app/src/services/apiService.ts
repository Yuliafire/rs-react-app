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

const API_BASE_URL = import.meta.env.VITE_RM_API_URL;

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

  private isSuccessResponse<T>(
    response: ServiceResponse<T>
  ): response is SuccessResponse<T> {
    return response.status === 'success';
  }

  async fetchInitialCharacters(
    limit = 20
  ): Promise<ServiceResponse<CharacterDetails[]>> {
    try {
      const countResponse = await this.makeRequest<ApiResponse>(
        `${API_BASE_URL}/character`
      );
      if (!this.isSuccessResponse(countResponse)) return countResponse;

      const totalPages = Math.min(
        Math.ceil(limit / 20),
        Math.ceil(countResponse.data.info.count / 20)
      );

      const pageRequests = Array.from({ length: totalPages }, (_, i) =>
        this.makeRequest<ApiResponse>(
          `${API_BASE_URL}/character/?page=${i + 1}`
        )
      );

      const responses = await Promise.all(pageRequests);
      const characters: CharacterDetails[] = [];

      for (const response of responses) {
        if (!this.isSuccessResponse(response)) continue;
        characters.push(...response.data.results);
      }

      return {
        status: 'success',
        data: characters.slice(0, limit),
      };
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : 'Failed to load initial characters';
      return {
        status: 'error',
        message: errorMessage,
      };
    }
  }

  async searchCharacters(
    term: string
  ): Promise<ServiceResponse<CharacterDetails[]>> {
    const processedTerm = term.trim();

    if (!processedTerm) {
      return this.fetchInitialCharacters(20);
    }

    const response = await this.makeRequest<ApiResponse>(
      `${API_BASE_URL}/character/?name=${encodeURIComponent(processedTerm)}`
    );

    if (!this.isSuccessResponse(response)) return response;

    return {
      status: 'success',
      data: response.data.results,
    };
  }

  mapToResultItems(characters: CharacterDetails[]): ResultItem[] {
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

// import type { CharacterDetails, ResultItem, ApiResponse } from '../types/types';

// type SuccessResponse<T> = {
//   status: 'success';
//   data: T;
// };

// type ErrorResponse = {
//   status: 'error';
//   message: string;
// };

// type ServiceResponse<T> = SuccessResponse<T> | ErrorResponse;

// const API_BASE_URL = import.meta.env.VITE_RM_API_URL;

// class ApiService {
//   private async makeRequest<T>(url: string): Promise<ServiceResponse<T>> {
//     try {
//       const response = await fetch(url);
//       if (!response.ok) {
//         return {
//           status: 'error',
//           message: this.getErrorMessage(response.status),
//         };
//       }
//       return {
//         status: 'success',
//         data: await response.json(),
//       };
//     } catch (error) {
//       return {
//         status: 'error',
//         message: error instanceof Error ? error.message : 'Network error',
//       };
//     }
//   }

//   private getErrorMessage(status: number): string {
//     const messages: Record<number, string> = {
//       400: 'Invalid search parameters',
//       404: 'No characters found',
//       429: 'Too many requests',
//       500: 'Server error',
//     };
//     return messages[status] || `API error (${status})`;
//   }

//   private isSuccessResponse<T>(
//     response: ServiceResponse<T>
//   ): response is SuccessResponse<T> {
//     return response.status === 'success';
//   }

//   async fetchInitialCharacters(
//     page: number = 1
//   ): Promise<
//     ServiceResponse<{ characters: CharacterDetails[]; totalPages: number }>
//   > {
//     try {
//       const response = await this.makeRequest<ApiResponse>(
//         `${API_BASE_URL}/character/?page=${page}`
//       );
//       if (!this.isSuccessResponse(response)) return response;

//       return {
//         status: 'success',
//         data: {
//           characters: response.data.results,
//           totalPages: Math.ceil(response.data.info.count / 20),
//         },
//       };
//     } catch (error) {
//       const errorMessage =
//         error instanceof Error
//           ? error.message
//           : 'Failed to load initial characters';
//       return {
//         status: 'error',
//         message: errorMessage,
//       };
//     }
//   }

//   async searchCharacters(
//     term: string,
//     page: number = 1
//   ): Promise<
//     ServiceResponse<{ characters: CharacterDetails[]; totalPages: number }>
//   > {
//     const processedTerm = term.trim();

//     if (!processedTerm) {
//       return this.fetchInitialCharacters(page);
//     }

//     const response = await this.makeRequest<ApiResponse>(
//       `${API_BASE_URL}/character/?name=${encodeURIComponent(processedTerm)}&page=${page}`
//     );

//     if (!this.isSuccessResponse(response)) return response;

//     return {
//       status: 'success',
//       data: {
//         characters: response.data.results,
//         totalPages: Math.ceil(response.data.info.count / 20),
//       },
//     };
//   }

//   mapToResultItems(characters: CharacterDetails[]): ResultItem[] {
//     return characters.map((character) => ({
//       id: character.id,
//       name: character.name,
//       description: `${character.species} - ${character.status}`,
//       url: character.url,
//       gender: character.gender,
//       image: character.image,
//       status: character.status,
//       species: character.species,
//     }));
//   }
// }

// export default new ApiService();
