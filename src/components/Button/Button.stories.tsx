import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    primary: {
      name: 'primary / secondary',
      description: 'Whether the button is styled as primary or secondary',
      defaultValue: true,
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
      control: { type: 'boolean' },
    },
    onClick: {
      description: 'Optional click handler',
      action: 'clicked',
      table: {
        disable: false, // set to true to hide from table
      },
    },
    label: {
      description: 'Text shown inside the button',
      table: {
        type: { summary: 'string' },
      },
    },
    ariaLabel: {
      description: 'A value for the aria label to be used by screen readers ',
      table: {
        type: { summary: 'string' },
      },
    },
  },
};


export default meta;

type Story = StoryObj<typeof Button>;

// Default button story
export const Default: Story = {
  args: {
    label: 'Button',
  },
};

// Primary button
export const Primary: Story = {
  args: {
    label: 'Primary Button',
    primary: true,
  },
};

//Secondary button
export const Secondary: Story = {
  args: {
    label: 'Secondary Button',
    primary: false,
  },
};

// Button with an action
export const WithAction: Story = {
  args: {
    label: 'Click Me',
  },
};
