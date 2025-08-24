import { describe, it, expect, vi } from 'vitest';
import { fileToBase64 } from '../components/Form/schema';

describe('Validator Functions', () => {
  describe('fileToBase64', () => {
    it('should convert file to base64 string', async () => {
      const mockFile = new File(['test content'], 'test.txt', {
        type: 'text/plain',
      });
      const result = await fileToBase64(mockFile);

      expect(result).toContain('data:text/plain;base64');
      expect(typeof result).toBe('string');
    });

    it('should reject on file read error', async () => {
      const mockFile = new File(['test'], 'test.txt');

      const originalFileReader = global.FileReader;
      global.FileReader = vi.fn().mockImplementation(() => ({
        readAsDataURL: function () {
          setTimeout(() => {
            if (this.onerror) {
              this.onerror(new Error('Read error') as any);
            }
          }, 0);
        },
        onload: null,
        onerror: null,
        result: null,
      })) as any;

      await expect(fileToBase64(mockFile)).rejects.toThrow('Read error');
      global.FileReader = originalFileReader;
    });
  });
});
