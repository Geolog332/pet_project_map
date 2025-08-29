import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { Text, TextTheme } from './Text';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';


const meta = {
    title: 'shared/Text',
    component: Text,
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        titel: 'Titel loren ipsum',
        text: 'Description loren ipsum',
    },
};

export const Error: Story = {
    args: {
        titel: 'Titel loren ipsum',
        text: 'Description loren ipsum',
        theme: TextTheme.ERROR,
    },
};

export const onlyTitel: Story = {
    args: {
        titel: 'Titel loren ipsum',
    },
};

export const onlyText: Story = {
    args: {
        text: 'Description loren ipsum',
    },
};

export const PrimaryDark: Story = {
    args: {
        titel: 'Titel loren ipsum',
        text: 'Description loren ipsum',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const onlyTitelDark: Story = {
    args: {
        titel: 'Titel loren ipsum',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const onlyTextDark: Story = {
    args: {
        text: 'Description loren ipsum',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
