import type {SVGProps} from 'react';
const IcSvgClose = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    {...props}>
    <path
      fill='currentColor'
      d='M19.646 3.646a.5.5 0 0 1 .707.708L12.708 12l7.647 7.647a.5.5 0 0 1-.708.707L12 12.707l-7.647 7.647a.5.5 0 1 1-.707-.707L11.293 12 3.646 4.354a.5.5 0 1 1 .707-.708L12 11.293z'
    />
  </svg>
);
export default IcSvgClose;
