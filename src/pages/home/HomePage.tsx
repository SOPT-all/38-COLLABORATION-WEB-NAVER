import {CartHeader} from '@/pages/cart/components/cart-header/CartHeader';
import {HomeHeader} from '@/pages/home/components/home-header/HomeHeader';
import {OrderSheetHeader} from '@/pages/order-sheet/components/order-sheet-header/OrderSheetHeader';
import {ProductHeader} from '@/pages/product/components/product-header/ProductHeader';

const TYPOGRAPHY_ITEMS = [
  {
    name: 'display-24sb',
    className: 'text-display-24sb',
    description: '24px / 600',
  },
  {
    name: 'display-22b',
    className: 'text-display-22b',
    description: '22px / 700',
  },
  {
    name: 'display-20sb',
    className: 'text-display-20sb',
    description: '20px / 600',
  },
  {
    name: 'title-18b',
    className: 'text-title-18b',
    description: '18px / 700',
  },
  {
    name: 'title-18sb',
    className: 'text-title-18sb',
    description: '18px / 600',
  },
  {
    name: 'body-16b',
    className: 'text-body-16b',
    description: '16px / 700',
  },
  {
    name: 'body-16m',
    className: 'text-body-16m',
    description: '16px / 500',
  },
  {
    name: 'body-16r',
    className: 'text-body-16r',
    description: '16px / 400',
  },
  {
    name: 'body-14b',
    className: 'text-body-14b',
    description: '14px / 700',
  },
  {
    name: 'body-14sb',
    className: 'text-body-14sb',
    description: '14px / 600',
  },
  {
    name: 'body-14m',
    className: 'text-body-14m',
    description: '14px / 500',
  },
  {
    name: 'caption-13sb',
    className: 'text-caption-13sb',
    description: '13px / 600',
  },
  {
    name: 'caption-12sb',
    className: 'text-caption-12sb',
    description: '12px / 600',
  },
  {
    name: 'caption-12m',
    className: 'text-caption-12m',
    description: '12px / 500',
  },
  {
    name: 'caption-12r',
    className: 'text-caption-12r',
    description: '12px / 400',
  },
  {
    name: 'caption-10r',
    className: 'text-caption-10r',
    description: '10px / 400',
  },
];

export const HomePage = () => {
  return (
    <main className='flex min-h-dvh flex-col gap-[42px] bg-[#080d13] px-[18px] py-[25px]'>
      <section
        aria-label='기본 N배송 헤더'
        className='w-full max-w-[652px] overflow-hidden rounded-xl'>
        <HomeHeader />
      </section>

      <section
        aria-label='스토어 상세 헤더'
        className='w-full max-w-[668px] overflow-hidden rounded-xl'>
        <ProductHeader storeName='광동제약 직영스토어' cartCount={1} />
      </section>

      <section
        aria-label='장바구니 헤더'
        className='w-full max-w-[614px] overflow-hidden rounded-xl'>
        <CartHeader />
      </section>

      <section
        aria-label='주문 결제 헤더'
        className='w-full max-w-[856px] overflow-hidden rounded-xl'>
        <OrderSheetHeader />
      </section>

      <section
        aria-labelledby='typography-sample-title'
        className='w-full max-w-[652px] rounded-xl bg-white px-[20px] py-[18px]'>
        <h2 id='typography-sample-title' className='text-title-18b text-black'>
          Typography
        </h2>

        <ul className='mt-[16px] flex flex-col gap-[14px]'>
          {TYPOGRAPHY_ITEMS.map(({name, className, description}) => {
            return (
              <li
                key={name}
                className='flex items-center justify-between gap-[16px] border-b border-gray-500 pb-[10px] last:border-b-0 last:pb-0'>
                <div className='min-w-0'>
                  <p className={`${className} truncate text-black`}>
                    N배송 광동제약 직영스토어
                  </p>
                  <p className='text-caption-12m mt-[4px] text-gray-900'>
                    {description}
                  </p>
                </div>

                <code className='text-caption-12r shrink-0 text-gray-900'>
                  {name}
                </code>
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
};
