import type {SVGProps} from 'react';
const IcSvgPlus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    {...props}>
    <path
      fill='currentColor'
      d='M11.071 6.414a1 1 0 1 1 2 0v4.657h4.657a1 1 0 1 1 0 2H13.07v4.657a1 1 0 1 1-2 0V13.07H6.414a1 1 0 1 1 0-2h4.657z'
    />
  </svg>
);
export default IcSvgPlus;
