import type { Meta, StoryObj } from '@storybook/react';
import GuestModeScreen from '../pages/GuestModeScreen';

const meta = {
    title: 'Customer/Authentication/GuestModeScreen',
    component: GuestModeScreen,
    parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof GuestModeScreen>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
