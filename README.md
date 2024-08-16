# React + TypeScript + Vite + Hono

This template provides a minimal setup to get React working in Vite with HMR, some ESLint rules, and Hono integration for server-side rendering and API routes.

## Features

- React for building user interfaces
- TypeScript for type safety
- Vite for fast development and building
- Hono for API routes
<!-- - Hot Module Replacement (HMR) for quick updates during development -->
- ESLint for code linting

## Getting Started

1. Clone this repository
2. Run `npm install` to install dependencies
3. Run `npm run dev` to start the development server
4. Open your browser and navigate to `http://localhost:5173`
5. Open your browser and navigate to `http://localhost:3000/api/`

## Project Structure

- `src/` - Contains your React components and client-side code
- `src/api` - Contains your Hono API routes
- `public/` - Static assets that will be served directly

## Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Builds the app for production
<!-- - `npm run serve` - Serves the built app -->
- `npm run lint` - Runs ESLint to check your code

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules. Follow these steps:

1. Configure the top-level `parserOptions` property in your ESLint config file:

export default tseslint.config({
languageOptions: {
parserOptions: {
project: ['./tsconfig.node.json', './tsconfig.app.json'],
tsconfigRootDir: import.meta.dirname,
},
},
})

2. Replace `tseslint.configs.recommended` with `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
3. Optionally add `...tseslint.configs.stylisticTypeChecked`
4. Install and configure `eslint-plugin-react` for React-specific linting rules

For more information on Hono, visit the [official Hono documentation](https://hono.dev/).

Happy coding!
