import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Modal } from './Modal';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
    title: 'shared/Modal',
    component: Modal,
    tags: ['autodocs'],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {
        isOpen: true,
        children: 'это тест модалки'
    },
};

export const Dark: Story = {
    args: {
        isOpen: true,
        children: 'это тест модалки',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
