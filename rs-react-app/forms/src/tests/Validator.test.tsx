import { describe, it, expect } from 'vitest';
import { calculatePasswordStrength } from '../shared/lib/validator/validator';

describe('calculatePasswordStrength', () => {
  it('handles special characters correctly', () => {
    expect(calculatePasswordStrength('Ab1@')).toEqual({
      score: 4,
      hasMinLength: false,
      hasUpperCase: true,
      hasLowerCase: true,
      hasNumber: true,
      hasSpecialChar: true,
    });
    expect(calculatePasswordStrength('Ab1 ')).toEqual({
      score: 4,
      hasMinLength: false,
      hasUpperCase: true,
      hasLowerCase: true,
      hasNumber: true,
      hasSpecialChar: true,
    });
  });
});
