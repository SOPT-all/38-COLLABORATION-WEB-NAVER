import type {SVGProps} from 'react';
const IcSvgCheckSm = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    {...props}>
    <rect
      width={15}
      height={15}
      x={4.5}
      y={4.5}
      stroke='currentColor'
      rx={7.5}
    />
    <path
      fill='currentColor'
      d='M15.636 8.78a.5.5 0 0 1 .728.686l-5.266 5.596a1 1 0 0 1-1.486-.032l-1.99-2.307a.5.5 0 0 1 .757-.653l1.99 2.307z'
    />
  </svg>
);
export default IcSvgCheckSm;
