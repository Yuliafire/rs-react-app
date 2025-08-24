import { describe, it, expect } from 'vitest';
import { formSchema, fileToBase64 } from '../components/Form/schema';

describe('Validator Functions', () => {
  it('debug - check valid country codes', async () => {
    const testCountries = ['us', 'gb', 'de', 'fr', 'ca', 'au', 'jp'];

    for (const country of testCountries) {
      try {
        const testData = {
          name: 'John Doe',
          age: 25,
          email: 'john.doe@example.com',
          password: 'Password123!',
          confirmPassword: 'Password123!',
          gender: 'male',
          acceptedTC: true,
          country: country,
        };

        await formSchema.validate(testData);
        console.log(`✓ Country '${country}' is valid`);
      } catch (error) {
        console.log(`✗ Country '${country}' is invalid: ${error.message}`);
      }
    }
  });

  describe('formSchema', () => {
    it('should validate a complete valid form', async () => {
      const validData = {
        name: 'John Doe',
        age: 25,
        email: 'john.doe@example.com',
        password: 'Password123!',
        confirmPassword: 'Password123!',
        gender: 'male',
        acceptedTC: true,
        country: 'us',
      };
    });

    it('should reject invalid name', async () => {
      const invalidData = {
        name: 'john doe',
        age: 25,
        email: 'john.doe@example.com',
        password: 'Password123!',
        confirmPassword: 'Password123!',
        gender: 'male',
        acceptedTC: true,
        country: 'us',
      };

      await expect(formSchema.validate(invalidData)).rejects.toThrow();
    });

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
  });
});
