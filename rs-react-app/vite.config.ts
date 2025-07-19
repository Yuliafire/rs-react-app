/// <reference types="vitest/config" />

import { defineConfig, type UserConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';

export default defineConfig(({ mode }) => {
  const config: UserConfig = {
    plugins: [react(), svgr(), tsconfigPaths()],
    build: {
      target: 'es2022',
    },
    test: {
      environment: 'jsdom',
      globals: true,
      setupFiles: './tests/setupTests.ts',
      include: ['**/*.{test,spec}.{js,jsx,ts,tsx}'],
      exclude: ['**/node_modules/**', '**/dist/**'],
      coverage: {
        provider: 'istanbul',
        enabled: true,
        reporter: ['text', 'json', 'html'],
        reportsDirectory: './coverage',
        include: ['src/**/*.{js,jsx,ts,tsx}', 'tests/**/*.{js,jsx,ts,tsx}'],
        exclude: [
          'src/**/*.d.ts',
          'src/**/*.test.{js,jsx,ts,tsx}',
          'src/**/*.spec.{js,jsx,ts,tsx}',
          'src/index.{js,jsx,ts,tsx}',
          'src/setupTests.{js,ts}',
          '**/*.config.ts',
          'src/constants/**',
          'src/types/**',
          'src/main.{js,jsx,ts,tsx}',
        ],
        thresholds: {
          global: {
            statements: 80,
            branches: 50,
            functions: 50,
            lines: 50,
          },
        },
      },
    },
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, './src/components'),
        '@services': path.resolve(__dirname, './src/services'),
      },
    },
  };

  if (mode === 'production') {
    config.base = './';
  }

  return config;
});
