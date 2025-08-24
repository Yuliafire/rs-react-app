import { describe, it, expect, vi } from 'vitest';
import { formSchema, fileToBase64 } from '../components/Form/schema';

vi.mock('../../shared/store/store', () => ({
  store: {
    getState: () => ({
      countries: {
        countries: ['us', 'gb', 'de', 'fr', 'ca', 'au', 'jp'],
      },
    }),
  },
}));

describe('Validator Functions', () => {
  describe('formSchema', () => {
    it('should reject invalid country', async () => {
      const invalidData = {
        name: 'John Doe',
        age: 25,
        email: 'john.doe@example.com',
        password: 'Password123!',
        confirmPassword: 'Password123!',
        gender: 'male',
        acceptedTC: true,
        country: 'invalid-country',
      };

      await expect(formSchema.validate(invalidData)).rejects.toThrow(
        'Invalid country'
      );
    });

    it('should reject missing required fields', async () => {
      const invalidData = {
        name: '',
        age: undefined,
        email: '',
        password: '',
        confirmPassword: '',
        gender: '',
        acceptedTC: false,
        country: '',
      };

      await expect(formSchema.validate(invalidData)).rejects.toThrow();
    });

    it('should reject non-boolean acceptedTC', async () => {
      const invalidData = {
        name: 'John Doe',
        age: 25,
        email: 'john.doe@example.com',
        password: 'Password123!',
        confirmPassword: 'Password123!',
        gender: 'male',
        acceptedTC: 'true',
        country: 'us',
      };

      await expect(formSchema.validate(invalidData)).rejects.toThrow();
    });

    it('should reject invalid base64 image string', async () => {
      const invalidData = {
        name: 'John Doe',
        age: 25,
        email: 'john.doe@example.com',
        password: 'Password123!',
        confirmPassword: 'Password123!',
        gender: 'male',
        acceptedTC: true,
        country: 'us',
        image: 'invalid-base64-string',
      };

      await expect(formSchema.validate(invalidData)).rejects.toThrow(
        'Only PNG or JPEG allowed'
      );
    });
  });

  describe('fileToBase64', () => {
    it('should convert file to base64 string', async () => {
      const mockFile = new File(['test content'], 'test.txt', {
        type: 'text/plain',
      });
      const result = await fileToBase64(mockFile);

      expect(result).toContain('data:text/plain;base64');
      expect(typeof result).toBe('string');
    });

    it('should handle empty file', async () => {
      const mockFile = new File([], 'empty.txt', {
        type: 'text/plain',
      });
      const result = await fileToBase64(mockFile);

      expect(result).toContain('data:text/plain;base64');
      expect(typeof result).toBe('string');
    });
  });
});
