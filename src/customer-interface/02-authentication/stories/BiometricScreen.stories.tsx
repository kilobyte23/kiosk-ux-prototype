import type { Meta, StoryObj } from '@storybook/react';
import BiometricScreen from '../pages/BiometricScreen';

const meta = {
    title: 'Customer/Authentication/BiometricScreen',
    component: BiometricScreen,
    parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof BiometricScreen>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
