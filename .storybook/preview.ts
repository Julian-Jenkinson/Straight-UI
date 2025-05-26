import type { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    a11y: {
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
    options: {
      storySort: {
        order: ['Getting Started','Colours', 'Components'], // Ensures Introduction comes first
      },
    },
  },
};

export default preview;
