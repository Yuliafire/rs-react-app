# Rick and Morty

This project is a web application built using React, designed to manage character data from an API, such as the Rick and Morty API, with features like search, pagination, and detailed views.

It was developed to showcase modern web development techniques, including component-based architecture, state management, and API integration. The app is intended for developers, project managers, and enthusiasts who want to explore a scalable frontend project or adapt it for their own use cases.

### Stack

- Frontend: React, TypeScript
- Build Tool: Vite
- Testing: Vitest, Jest, RTL
- Code Quality: ESLint, Prettier
- Git Hooks: Husky
- Package Manager: npm

### Prerequisites

Ensure you have the following installed:

- Node.js (version >= 18.x)
- npm (version >= 9.x)

### Setup and Running

1. Clone the repository:
   `$ git clone https://github.com/Yuliafire/rs-react-app.git`.
2. Navigate to the project directory:
   `$ cd rs-react-app`
3. Install dependencies:
   `$ npm install`
4. Start the development server:
   `$ npm run dev`
5. Build the project for production:
   `$ npm run build`
6. Run ESLint to check for linting issues and automatically fix them:
   `$ npm run lint`
7. Formats the codebase using Prettier:
   `$ npm run format:fix`
8. Preview the production build locally using Vite:
   ```$ npm run preview`
9. Prepares the project for Git hooks using Husky:
   ```$ npm run prepare`
10. Run the test suite using Vitest:
    ```$ npm run test`
11. Run the test suite and generate a code coverage report:
    ```$ npm run test:coverage`

### Contributing

- Fork the repository.
- Create a feature branch (git checkout -b feature/YourFeature).
- Commit your changes (git commit -m 'Add YourFeature').
- Push to the branch (git push origin feature/YourFeature).
- Open a pull request to `develop` branch.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x';
import reactDom from 'eslint-plugin-react-dom';

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```
