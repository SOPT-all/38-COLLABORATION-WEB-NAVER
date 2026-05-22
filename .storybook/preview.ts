import type {Preview} from '@storybook/react-vite';
import {createElement, useEffect, type ReactNode} from 'react';
import {QueryProvider} from '../src/app/providers/QueryProvider';
import '../src/shared/styles/global.css';

const installStableTime = (freezeTime: string) => {
  const fixedTime = new Date(freezeTime).getTime();
  const originalDateNow = Date.now;
  const originalSetInterval = window.setInterval;

  Date.now = () => fixedTime;
  window.setInterval = ((() => 0) as unknown) as typeof window.setInterval;

  return () => {
    Date.now = originalDateNow;
    window.setInterval = originalSetInterval;
  };
};

let restoreStableTime: (() => void) | undefined;

const StableTimeBoundary = ({
  children,
  restore,
}: {
  children: ReactNode;
  restore: () => void;
}) => {
  useEffect(
    () => () => {
      restore();

      if (restoreStableTime === restore) {
        restoreStableTime = undefined;
      }
    },
    [restore]
  );

  return children;
};

const preview: Preview = {
  decorators: [
    (Story, context) => {
      restoreStableTime?.();

      const freezeTime = context.parameters.freezeTime as string | undefined;

      if (!freezeTime) {
        return createElement(Story);
      }

      restoreStableTime = installStableTime(freezeTime);

      return createElement(
        StableTimeBoundary,
        {
          restore: restoreStableTime,
          children: createElement(Story),
        }
      );
    },
    (Story) => createElement(QueryProvider, null, createElement(Story)),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
