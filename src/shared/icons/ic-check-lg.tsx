import type {SVGProps} from 'react';
const IcSvgCheckLg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    {...props}>
    <rect
      width={19}
      height={19}
      x={2.5}
      y={2.5}
      stroke='currentColor'
      rx={9.5}
    />
    <path
      fill='currentColor'
      d='M16.156 8.738a.5.5 0 0 1 .688.726l-5.995 5.662a1 1 0 0 1-1.405-.03l-2.302-2.374a.5.5 0 0 1 .716-.696l2.304 2.373z'
    />
  </svg>
);
export default IcSvgCheckLg;
