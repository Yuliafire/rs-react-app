/// <reference types="vitest/config" />

import { defineConfig, type UserConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';

export default defineConfig(({ mode }) => {
  const config: UserConfig = {
    plugins: [react(), svgr()],
    build: {
      target: 'es2022',
    },
    test: {
      environment: 'jsdom',
      globals: true,
      setupFiles: './tests/setupTests.ts',
      coverage: {
        include: ['src/**/*.{js,jsx,ts,tsx}'],
        provider: 'istanbul',
        reporter: ['text', 'json', 'html'],
        exclude: [
          '**/*.d.ts',
          '**/*.config.ts',
          'tests/**',
          'src/constants/**',
          'src/types/**',
          'dist',
          'coverage',
          'src/**/*.test.{js,jsx,ts,tsx}',
          'src/**/*.spec.{js,jsx,ts,tsx}',
          'src/index.{js,jsx,ts,tsx}',
          'src/setupTests.{js,ts}',
          'src/**/*.d.ts'
        ],
        thresholds: {
          global: {
            statements: 80,
            branches: 50,
            functions: 50,
            lines: 50
          }
        }
      },
    },
  };

  if (mode === 'production') {
    config.base = './';
  }

  return config;
});