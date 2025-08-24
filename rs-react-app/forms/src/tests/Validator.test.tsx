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

  it('returns score 0 for empty password', () => {
    expect(calculatePasswordStrength('')).toEqual({
      score: 0,
      hasMinLength: false,
      hasUpperCase: false,
      hasLowerCase: false,
      hasNumber: false,
      hasSpecialChar: false,
    });
  });

  it('returns score 1 for lowercase only password', () => {
    expect(calculatePasswordStrength('abc')).toEqual({
      score: 1,
      hasMinLength: false,
      hasUpperCase: false,
      hasLowerCase: true,
      hasNumber: false,
      hasSpecialChar: false,
    });
  });

  it('returns score 1 for uppercase only password', () => {
    expect(calculatePasswordStrength('ABC')).toEqual({
      score: 1,
      hasMinLength: false,
      hasUpperCase: true,
      hasLowerCase: false,
      hasNumber: false,
      hasSpecialChar: false,
    });
  });

  it('returns score 1 for numbers only password', () => {
    expect(calculatePasswordStrength('123')).toEqual({
      score: 1,
      hasMinLength: false,
      hasUpperCase: false,
      hasLowerCase: false,
      hasNumber: true,
      hasSpecialChar: false,
    });
  });

  it('returns score 1 for special characters only password', () => {
    expect(calculatePasswordStrength('@#$')).toEqual({
      score: 1,
      hasMinLength: false,
      hasUpperCase: false,
      hasLowerCase: false,
      hasNumber: false,
      hasSpecialChar: true,
    });
  });

  it('returns score 2 for lowercase + uppercase password', () => {
    expect(calculatePasswordStrength('Abc')).toEqual({
      score: 2,
      hasMinLength: false,
      hasUpperCase: true,
      hasLowerCase: true,
      hasNumber: false,
      hasSpecialChar: false,
    });
  });

  it('returns score 2 for lowercase + numbers password', () => {
    expect(calculatePasswordStrength('abc123')).toEqual({
      score: 2,
      hasMinLength: false,
      hasUpperCase: false,
      hasLowerCase: true,
      hasNumber: true,
      hasSpecialChar: false,
    });
  });

  it('returns score 3 for lowercase + uppercase + numbers password', () => {
    expect(calculatePasswordStrength('Abc123')).toEqual({
      score: 3,
      hasMinLength: false,
      hasUpperCase: true,
      hasLowerCase: true,
      hasNumber: true,
      hasSpecialChar: false,
    });
  });

  it('returns score 4 for lowercase + uppercase + numbers + special chars password (without min length)', () => {
    expect(calculatePasswordStrength('Ab1@')).toEqual({
      score: 4,
      hasMinLength: false,
      hasUpperCase: true,
      hasLowerCase: true,
      hasNumber: true,
      hasSpecialChar: true,
    });
  });

  it('returns score 5 for complete strong password', () => {
    expect(calculatePasswordStrength('Password123!')).toEqual({
      score: 5,
      hasMinLength: true,
      hasUpperCase: true,
      hasLowerCase: true,
      hasNumber: true,
      hasSpecialChar: true,
    });
  });

  it('handles various special characters correctly', () => {
    const specialChars = '!@#$%^&*()_+-=[]{}|;:,.<>?/`~';

    specialChars.split('').forEach((char) => {
      const password = `A${char}1`;
      const result = calculatePasswordStrength(password);

      expect(result.hasSpecialChar).toBe(true);
    });
  });

  it('handles minimum length requirement correctly', () => {
    expect(calculatePasswordStrength('Ab1@abcd')).toEqual({
      score: 5,
      hasMinLength: true,
      hasUpperCase: true,
      hasLowerCase: true,
      hasNumber: true,
      hasSpecialChar: true,
    });
  });

  it('handles passwords with unicode characters', () => {
    expect(calculatePasswordStrength('Ab1@ñáé')).toEqual({
      score: 4,
      hasMinLength: false,
      hasUpperCase: true,
      hasLowerCase: true,
      hasNumber: true,
      hasSpecialChar: true,
    });
  });

  it('handles very long passwords correctly', () => {
    const longPassword =
      'A'.repeat(100) + 'b'.repeat(100) + '1'.repeat(100) + '@'.repeat(100);
    expect(calculatePasswordStrength(longPassword)).toEqual({
      score: 5,
      hasMinLength: true,
      hasUpperCase: true,
      hasLowerCase: true,
      hasNumber: true,
      hasSpecialChar: true,
    });
  });

  it('handles passwords with only special characters and numbers', () => {
    expect(calculatePasswordStrength('@#$123')).toEqual({
      score: 2,
      hasMinLength: false,
      hasUpperCase: false,
      hasLowerCase: false,
      hasNumber: true,
      hasSpecialChar: true,
    });
  });
});
