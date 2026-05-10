import type {SVGProps} from 'react';
const IcSvgNotice = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    {...props}>
    <rect
      width={13}
      height={13}
      x={5.5}
      y={5.5}
      stroke='currentColor'
      rx={6.5}
    />
    <path fill='currentColor' d='M11.5 9h1v.857h-1zM11.5 10.714h1V15h-1z' />
  </svg>
);
export default IcSvgNotice;
