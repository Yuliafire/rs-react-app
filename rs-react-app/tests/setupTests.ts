import { afterEach, beforeEach, vi } from 'vitest';
import '@testing-library/jest-dom';

beforeEach(() => {
  vi.spyOn(console, 'error').mockImplementation(() => {});
});

afterEach(() => {
  vi.restoreAllMocks();
});
