import type { StorybookConfig } from '@storybook/nextjs';

export default {
  stories: ['../**/*.stories.tsx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-themes',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
  ],
  logLevel: 'error',
  // enable the following line to serve static files from the public directory
  //staticDirs: ['../public'],
  typescript: { reactDocgen: false, check: false },
  core: { disableTelemetry: true, disableWhatsNewNotifications: true },
  framework: {
    name: '@storybook/nextjs',
    options: { builder: { useSWC: true } },
  },
  previewBody: `<style>:root { color-scheme: light; } html[data-theme="dark"] { color-scheme: dark; }
      #storybook-root {
        @apply h-screen w-screen;
      }
    </style>`,
} as StorybookConfig;
