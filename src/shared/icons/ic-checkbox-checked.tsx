import type {SVGProps} from 'react';
const IcSvgCheckboxChecked = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    {...props}>
    <rect width={17} height={17} x={3.5} y={3.5} fill='currentColor' rx={3.5} />
    <rect
      width={17}
      height={17}
      x={3.5}
      y={3.5}
      stroke='currentColor'
      rx={3.5}
    />
    <path
      fill='white'
      d='M16.793 7.647a1 1 0 1 1 1.414 1.414l-6.146 6.146a1.5 1.5 0 0 1-2.121 0l-3.147-3.146a1 1 0 1 1 1.414-1.415L11 13.44z'
    />
  </svg>
);
export default IcSvgCheckboxChecked;
