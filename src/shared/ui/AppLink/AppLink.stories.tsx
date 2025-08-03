import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { ThemeDecorator } from 'shared/config/storubook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { AppLink, AppLinkTheme } from './AppLink';

const meta = {
  title: 'shared/AppLink',
  component: AppLink,
  tags: ['autodocs'],
  args: {
    to: '/',
    children: 'Text',
  },
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    theme: AppLinkTheme.PRIMARY
  },  
};

export const Secondary: Story = {
  args: {
    theme: AppLinkTheme.SECONDARY
  },  
};

export const Red: Story = {
  args: {
    theme: AppLinkTheme.RED
  },  
};

export const PrimaryDark: Story = {
  args: {
    theme: AppLinkTheme.PRIMARY
  },  
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const SecondaryDark: Story = {
  args: {
    theme: AppLinkTheme.SECONDARY
  },  
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const RedDark: Story = {
  args: {
    theme: AppLinkTheme.RED
  },  
    decorators: [ThemeDecorator(Theme.DARK)],
};