import type {Preview} from '@storybook/react-vite';
import {createElement} from 'react';
import {QueryProvider} from '@/app/providers/QueryProvider';
import '../src/shared/styles/global.css';

const preview: Preview = {
  decorators: [
    (Story) => createElement(QueryProvider, null, createElement(Story)),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    tags: ['autodocs'],
  },
};

export default preview;
