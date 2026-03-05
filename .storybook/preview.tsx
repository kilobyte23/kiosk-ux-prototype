import type { Preview } from '@storybook/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import '../src/index.css';
import KioskShell from '../src/components/KioskShell';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'fullscreen',
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
      <div style= {{ padding: '24px', backgroundColor: '#111', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
  <div style={{ transform: 'scale(0.45)', transformOrigin: 'center' }}>
    <KioskShell>
    <Story />
    </KioskShell>
    </div>
    </div>
    </MemoryRouter>
    ),
  ],
};

export default preview;