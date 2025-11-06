# SWAPI + React

A Single Page Application (SPA) built with React and TypeScript that uses the Star Wars API (SWAPI) as a data source.

## Features

### Main Page

* Display a table of Star Wars characters
* Pagination support using the API
* Search functionality to find characters by name

### Character Details Modal Window

* View detailed information about a selected character
* Edit character information locally
* Save changes to local storage (no server updates)
* Persist edited data across sessions

## Installation

```bash
# Clone the repository
git clone https://github.com/caffellatte/swapi-react

# Navigate to project directory
cd swapi-react

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

## Stack

* Data source: [Star Wars API (SWAPI)](https://swapi.dev/)
* Package manager: [pnpm](https://pnpm.io/)
* Builder: [Vite](https://vite.dev/)
* Render: [React](https://react.dev/)
* UI: [shadcn/ui](https://ui.shadcn.com/)
* Fetching/Caching: [TanStack Query](https://tanstack.com/query/latest)
* Lint: [typescript-eslint](https://typescript-eslint.io/)
* Validation: [Zod](https://zod.dev/)
* State: [Jotai](https://jotai.org/)
* Forms: [React Hook Form](https://www.react-hook-form.com/)
* Storage: [React Native Async Storage](https://react-native-async-storage.github.io/async-storage/)

## Todos

* [x] Create persistent [storage](https://tanstack.com/query/latest/docs/framework/react/plugins/createAsyncStoragePersister)
* [x] Create custom `DialogClose` component for shadcn/ui
* [x] Create script for generate `Zod` scheme & type form JSON scheme
* [ ] Implement `useDebounceValue` [hook](https://www.shadcn.io/hooks/use-debounce-value)
* [ ] Create `Wookiee` mode
* [ ] Create `Settings` modal for reset cached data & etc.
* [ ] Implement `.env`
* [ ] Test with jest/vitest
