import type { Meta, StoryObj } from '@storybook/react';
import MobileOTPScreen from '../pages/MobileOTPScreen';

const meta = {
    title: 'Customer/Authentication/MobileOTPScreen',
    component: MobileOTPScreen,
    parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof MobileOTPScreen>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
