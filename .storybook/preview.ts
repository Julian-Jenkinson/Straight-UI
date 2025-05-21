import type { Preview } from '@storybook/react'

const preview: Preview = {
  parameters: {
    a11y: {
      // axe-core options
      config: {
        rules: [
          { id: 'color-contrast', enabled: true },
        ],
      },
    },
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export default preview;