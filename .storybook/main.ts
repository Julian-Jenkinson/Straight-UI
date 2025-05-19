/** @type {import('@storybook/react').StorybookConfig} */
const config = {
  stories: ['../src/**/*.stories.@(tsx|mdx)'],
  addons: ['@storybook/addon-essentials'],
  framework: {
    name: '@storybook/react',
    options: {},
  },
  core: {
    builder: '@storybook/builder-vite',
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
  // Add this to tell Storybook about your base path:
  staticDirs: ['../public'], // optional if you have static assets
  viteFinal: (config) => {
    config.base = '/Straight-UI/';  // your repo name here
    return config;
  },
};

export default config;
