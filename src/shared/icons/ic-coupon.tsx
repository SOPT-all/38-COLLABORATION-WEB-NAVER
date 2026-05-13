import type {SVGProps} from 'react';
const IcSvgCoupon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    {...props}>
    <path
      fill='currentColor'
      d='M20 5H4c-.552 0-1 .464-1 1.037v11.926C3 18.536 3.448 19 4 19h16c.552 0 1-.464 1-1.037v-2.307c0-.473-.317-.89-.693-1.158-.559-.4-1.253-1.209-1.253-2.757s.694-2.357 1.253-2.757c.376-.27.693-.685.693-1.159V6.037C21 5.464 20.552 5 20 5'
    />
    <path
      fill='white'
      d='M15 16h-1.531l-2.591-4.32h-.048V16H9V8h1.56l2.552 4.298h.058V8H15z'
    />
  </svg>
);
export default IcSvgCoupon;
