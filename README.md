# Browser Extension Manager

## Overview

Browser Extension Manager is a React and TypeScript interface for managing a catalog of browser-development extensions. It presents extension cards with descriptions, lets users filter the catalog by status, enables or disables individual extensions, removes extensions from the current list, and provides a light/dark theme toggle.

The project is a client-side Vite application. Its initial catalog is bundled locally from JSON; it does not currently connect to an API, use routing, or include a browser-extension manifest.

## Features

- Displays 12 locally defined browser-development extensions with logos, names, descriptions, and status values.
- Filters the displayed catalog with `All`, `Active`, and `Inactive` controls.
- Toggles an extension's active state with a Radix UI switch.
- Removes an extension from the current in-memory list.
- Switches between light and dark themes from the header.
- Persists the selected theme in `localStorage` under the `theme` key.
- Uses responsive Tailwind CSS grid and spacing utilities for mobile, tablet, and desktop layouts.
- Includes keyboard-focus styles and an accessible label for the theme toggle.

## Technologies

- React 19 and React DOM
- TypeScript 6
- Vite 8
- Tailwind CSS 4 with `@tailwindcss/vite`
- `tw-animate-css`
- Radix UI primitives
- Class Variance Authority for button variants
- `cn` utility package for class-name composition
- shadcn configuration and generated UI components
- Geist Variable font package and Noto Sans loaded in `index.html`
- ESLint with TypeScript, React Hooks, and React Refresh plugins

## Project Structure

```text
.
├── public/
│   └── images/                 # Logo, theme icons, favicon, and extension assets
├── src/
│   ├── components/
│   │   ├── container/
│   │   │   └── Container.tsx   # Shared max-width page container
│   │   ├── context/
│   │   │   └── ExtensionContext.tsx
│   │   │                         # Catalog, filter, and theme state
│   │   ├── header/
│   │   │   └── Header.tsx      # Logo and light/dark theme control
│   │   ├── main/
│   │   │   ├── FiltersSection.tsx
│   │   │   ├── Lists.tsx       # Extension cards and item actions
│   │   │   ├── ListsSection.tsx
│   │   │   ├── Main.tsx
│   │   │   └── mainTypes.ts    # Filter button values
│   │   └── ui/
│   │       ├── button.tsx      # Button variants and sizing
│   │       └── switch.tsx      # Radix-based switch wrapper
│   ├── data/
│   │   └── data.json           # Initial extension catalog
│   ├── lib/
│   │   └── utils.ts            # Re-exported class-name helper
│   ├── App.tsx                 # Application composition
│   ├── index.css               # Tailwind imports, design tokens, and theme styles
│   └── main.tsx                # React entry point
├── components.json             # shadcn UI configuration
├── eslint.config.js            # ESLint flat configuration
├── index.html                  # HTML shell, favicon, font, and page title
├── package.json                # Dependencies and npm scripts
├── tsconfig*.json              # TypeScript project configurations
└── vite.config.ts              # React, Tailwind, and path-alias configuration
```

There are currently no `pages/`, `hooks/`, API, or routing directories in the project.

## How It Works

### Component relationships

`main.tsx` mounts `App` inside React `StrictMode`. `App` wraps the page in `ExtensionProvider`, then renders the shared `Container`, `Header`, and `Main` components.

`Main` renders the filter controls and the extension grid. `ListsSection` owns the grid layout, while `Lists` renders one card for each item that matches the selected filter.

### State management

`ExtensionContext.tsx` defines the `Data` interface:

```ts
interface Data {
  logo: string;
  name: string;
  description: string;
  isActive: boolean;
}
```

The provider initializes the catalog from `src/data/data.json` and exposes:

- `isActive` and `setIsActive` for the current extension list
- `filter` and `setFilter` for the selected filter
- `isDark` and `toggleTheme` for the current color theme

`useExtension` is the shared context accessor. It throws an error when used outside `ExtensionProvider`, making the provider boundary explicit.

### Filtering and item actions

`FiltersSection` renders the values from `filterBtns` and updates the context filter. `Lists` derives a filtered array from the context, then uses immutable array operations to toggle an item's `isActive` value or remove an item by name.

The catalog and item changes exist only in client-side React state. Reloading the page restores the original JSON catalog. Theme selection is the only state persisted between sessions, using `localStorage`; the provider also adds or removes the `dark` class on the document root so Tailwind's custom dark variant can apply.

### Reusable UI components

The `Button` component uses Class Variance Authority for reusable variants and sizes and supports Radix Slot composition through its `asChild` prop. `Switch` wraps the Radix switch primitive and adds project-specific sizing, focus, checked, and unchecked styles.

## Installation

Requirements:

- Node.js with npm

Install dependencies from the repository root:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Vite will print the local development URL in the terminal.

## Available Scripts

| Command           | Description                                                                 |
| ----------------- | --------------------------------------------------------------------------- |
| `npm run dev`     | Starts the Vite development server.                                         |
| `npm run build`   | Runs the TypeScript project build, then creates the Vite production bundle. |
| `npm run lint`    | Runs ESLint across the repository.                                          |
| `npm run preview` | Serves the generated production bundle locally with Vite Preview.           |

## Development

The project uses Vite's bundler-oriented TypeScript configuration with strict unused-local and unused-parameter checks. The `@/*` alias resolves to `src/*` in both TypeScript and Vite configuration.

When adding extension records, preserve the `Data` shape and place their logo files in `public/images`. Public assets are referenced from the site root, for example `/images/logo-devlens.svg`.

When adding shared state, extend `ExtensionContextType` and its provider value so consumers receive a typed API. Keep presentation concerns in the component folders and shared primitive behavior in `components/ui`.

The dark theme is class-based. Theme-aware styles should use Tailwind `dark:` variants, and global theme tokens belong in `src/index.css`.

## Build

Create the production build with:

```bash
npm run build
```

This runs `tsc -b` using the application and Vite configuration references, followed by `vite build`. The generated output is written to `dist/`, which ESLint ignores.

## Responsive Design

The layout uses Tailwind responsive utilities. The extension grid renders one column by default, two columns at the `md` breakpoint, and three columns at the `lg` breakpoint. Header and filter layouts also adjust at the medium breakpoint, while the container applies responsive padding and a `max-w-300` width constraint.

## Accessibility

- The document declares `lang="en"` and includes a viewport meta tag.
- The theme control is a native button with an action-specific `aria-label`.
- Extension images include alternative text, and the decorative theme icon uses an empty `alt` attribute.
- Buttons and switches include visible focus styling through the component classes and Radix primitives.
- Native button and switch semantics are preserved for keyboard interaction.

## Future Improvements

The following are potential improvements based on the current client-side architecture and are not implemented features:

- Correct and formalize the active/inactive filter mapping so the labels align unambiguously with `isActive` values.
- Persist extension activation and removal changes if state should survive page reloads.
- Add tests for filtering, toggling, removal, and theme persistence.
- Add an empty-state view when a filter has no matching extensions.
- Replace the bundled JSON source with an API or browser-extension storage layer if the catalog becomes dynamic.
- Add a browser-extension manifest and extension runtime integration if this UI is intended to ship as an installable browser extension.

## Author

Created by [Demetre Berdzenadze](https://github.com/DemetreBerdzenadze7).

Repository: [DemetreBerdzenadze7/browser-extension](https://github.com/DemetreBerdzenadze7/browser-extension)
