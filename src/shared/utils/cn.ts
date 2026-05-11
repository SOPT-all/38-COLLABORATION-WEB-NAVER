import {clsx, type ClassValue} from 'clsx';
import {extendTailwindMerge} from 'tailwind-merge';

const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'font-size': [
        {
          text: [
            'display-24sb',
            'display-22b',
            'display-20sb',
            'title-18b',
            'title-18sb',
            'body-16b',
            'body-16m',
            'body-16r',
            'body-14b',
            'body-14sb',
            'body-14m',
            'caption-13sb',
            'caption-12sb',
            'caption-12m',
            'caption-12r',
            'caption-10r',
          ],
        },
      ],
    },
  },
});

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));
