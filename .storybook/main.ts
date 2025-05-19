/** @type {import('@storybook/react').StorybookConfig} */
const config = {
  stories: [
    '../src/**/*.stories.@(tsx|mdx)',
    '../src/docs/**/*.mdx',
    '../src/stories/**/*.mdx'
  ],
  
  addons: ['@storybook/addon-essentials'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  core: {
    builder: '@storybook/builder-vite',
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
  staticDirs: ['../public'], // if you have static assets
  viteFinal: (config) => {
    config.base = '/Straight-UI/'; // Important: Your repo name with exact casing and trailing slash
    return config;
  },
};

export default config;
