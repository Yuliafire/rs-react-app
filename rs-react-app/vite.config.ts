// /// <reference types="vitest/config" />

// import { defineConfig, type UserConfig } from 'vite';
// import react from '@vitejs/plugin-react-swc';
// import svgr from 'vite-plugin-svgr';

// import tsconfigPaths from 'vite-tsconfig-paths';
// import path from 'path';

// export default defineConfig(({ mode }) => {
//   const config: UserConfig = {
//     plugins: [react(), svgr(), tsconfigPaths()],
//     build: {
//       target: 'es2022',
//     },
//     test: {
//       environment: 'jsdom',
//       globals: true,
//       setupFiles: './tests/setupTests.ts',
//       coverage: {
//         include: ['**/*.{test,spec}.{js,jsx,ts,tsx}'],
//         provider: 'istanbul',
//         reporter: ['text', 'json', 'html'],
//         // exclude: [
//         //   '**/*.d.ts',
//         //   '**/*.config.ts',
//         //   'src/constants/**',
//         //   'src/types/**',
//         //   'dist',
//         //   'coverage',
//         //   // 'src/**/*.test.{js,jsx,ts,tsx}',
//         //   'src/**/*.spec.{js,jsx,ts,tsx}',
//         //   'src/index.{js,jsx,ts,tsx}',
//         //   'src/setupTests.{js,ts}',
//         //   'src/**/*.d.ts'
//         // ],
//         thresholds: {
//           global: {
//             statements: 80,
//             branches: 50,
//             functions: 50,
//             lines: 50
//           }
//         }

//       },
//     },

//     resolve: {
//     alias: {
//       '@assets': path.resolve(__dirname, './src/assets'),
//       '@components': path.resolve(__dirname, './src/components'),
//       '@pages': path.resolve(__dirname, './src/pages'),
//       '@services': path.resolve(__dirname, './src/services'),
//       '@shared': path.resolve(__dirname, './src/shared'),
//     },
//   },
//   };

//   if (mode === 'production') {
//     config.base = './';
//   }

//   return config;
// });

/// <reference types="vitest/config" />

import { defineConfig, type UserConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path'; // Make sure this is at the top with other imports

export default defineConfig(({ mode }) => {
  const config: UserConfig = {
    plugins: [
      react(),
      svgr(),
      tsconfigPaths(), // This handles tsconfig.json paths
    ],
    build: {
      target: 'es2022',
    },
    test: {
      environment: 'jsdom',
      globals: true,
      setupFiles: './tests/setupTests.ts',
      include: ['**/*.{test,spec}.{js,jsx,ts,tsx}'], // Critical for finding test files
      exclude: ['**/node_modules/**', '**/dist/**'], // Default exclusions
      coverage: {
        provider: 'istanbul', // or 'v8' if you prefer
        enabled: true,
        reporter: ['text', 'json', 'html'],
        reportsDirectory: './coverage',
        include: ['src/**/*.{js,jsx,ts,tsx}'],
        exclude: [
          '**/*.d.ts',
          '**/*.config.ts',
          'tests/**',
          'src/constants/**',
          'src/types/**',
          'src/index.{js,jsx,ts,tsx}',
          'src/setupTests.{js,ts}',
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
