import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
import config from '@samhenrytech/eslint-config';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default [
  ...config,
  {
    ignores: [
      '**/*.config.ts',
      '**/*.config.js',
      '**/*.config.mjs',
      'dist/**',
      'node_modules/**',
    ],
  },
  // Source files - with type checking
  {
    files: ['src/**/*.ts', 'src/**/*.tsx'],
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
      },
    },
    rules: {
      // Your custom rules here
      'react/react-in-jsx-scope': 'off', // Not needed with React 17+ JSX transform
    },
  },
];
