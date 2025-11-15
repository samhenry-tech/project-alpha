# Project Alpha

A modern React application built with Vite, TypeScript, and Tailwind CSS 4, following atomic design principles.

## Features

- ⚡️ **Vite** - Next generation frontend tooling
- ⚛️ **React 18** - Latest React features
- 🎨 **Tailwind CSS 4** - Utility-first CSS framework
- 📘 **TypeScript** - Type-safe development
- 🏗️ **Atomic Design** - Organized component structure

## Project Structure

```
src/
├── components/
│   ├── atoms/          # Basic building blocks (Button, Input, Typography)
│   ├── molecules/      # Simple component groups (Card, SearchBar)
│   ├── organisms/      # Complex components (Header, Footer)
│   └── pages/          # Page components (HomePage)
├── types/              # TypeScript type definitions
├── utils/              # Utility functions
├── App.tsx             # Main app component
├── main.tsx            # Application entry point
└── index.css           # Global styles with Tailwind
```

## Getting Started

### Install Dependencies

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Atomic Design Structure

- **Atoms**: Basic HTML elements (buttons, inputs, labels)
- **Molecules**: Simple combinations of atoms (search bar, card)
- **Organisms**: Complex UI components (header, footer, forms)
- **Pages**: Specific page implementations

