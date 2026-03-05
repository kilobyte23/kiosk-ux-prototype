import type { Meta, StoryObj } from '@storybook/react';
import NFCTapScreen from '../pages/NFCTapScreen';

const meta = {
    title: 'Customer/Authentication/NFCTapScreen',
    component: NFCTapScreen,
    parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof NFCTapScreen>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
