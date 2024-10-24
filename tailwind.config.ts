import type { Config } from 'tailwindcss';

export default {
  content: [
    './.storybook/**/*.stories.tsx',
    './app/**/*.tsx',
    './components/**/*.tsx',
  ],
  darkMode:
    process.env.BUILD_ENV === 'storybook'
      ? ['class', '[data-theme="dark"]']
      : 'media',
} as Config;
