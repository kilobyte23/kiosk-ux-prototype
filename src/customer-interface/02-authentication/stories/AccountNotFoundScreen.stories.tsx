import type { Meta, StoryObj } from '@storybook/react';
import AccountNotFoundScreen from '../pages/AccountNotFoundScreen';

const meta = {
    title: 'Customer/Authentication/AccountNotFoundScreen',
    component: AccountNotFoundScreen,
    parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof AccountNotFoundScreen>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
