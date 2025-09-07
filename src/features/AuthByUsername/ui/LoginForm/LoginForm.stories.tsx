import type { Meta, StoryObj } from '@storybook/react-webpack5';


import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import LoginForm from './LoginForm';

const meta = {
    title: 'features/LoginForm',
    component: LoginForm,
    tags: ['autodocs'],
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Primary: Story = {
    args: {},
    decorators: [StoreDecorator({ loginForm: { username: 'test', password: 'test' } })],
};
export const WithError: Story = {
    args: {},
    decorators: [StoreDecorator({ loginForm: { username: 'test', password: 'test', error: 'error' } })],
};

export const Loading: Story = {
    args: {},
    decorators: [StoreDecorator({ loginForm: { isLoading: true } })],
};