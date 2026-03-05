import type { Meta, StoryObj } from '@storybook/react';
import QRScannerScreen from '../pages/QRScannerScreen';

const meta = {
    title: 'Customer/Authentication/QRScannerScreen',
    component: QRScannerScreen,
    parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof QRScannerScreen>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
