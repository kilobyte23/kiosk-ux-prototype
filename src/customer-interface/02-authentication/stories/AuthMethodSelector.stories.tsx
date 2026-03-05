import type { Meta, StoryObj } from '@storybook/react';
import AuthMethodSelector from '../pages/AuthMethodSelector';

const meta = {
    title: 'Customer/Authentication/AuthMethodSelector',
    component: AuthMethodSelector,
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof AuthMethodSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
