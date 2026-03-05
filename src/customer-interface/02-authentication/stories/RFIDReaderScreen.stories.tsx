import type { Meta, StoryObj } from '@storybook/react';
import RFIDReaderScreen from '../pages/RFIDReaderScreen';

const meta = {
    title: 'Customer/Authentication/RFIDReaderScreen',
    component: RFIDReaderScreen,
    parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof RFIDReaderScreen>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
