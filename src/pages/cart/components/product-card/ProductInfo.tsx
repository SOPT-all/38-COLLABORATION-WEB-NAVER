import nPayImage from '@/shared/assets/images/img-Npay.png';

export type ProductInfoProps = {
  imageUrl: string;
  imageAlt: string;
  payBadge?: boolean;
  title: string;
  discountRate?: number;
  price: number;
  originalPrice?: number;
  giftable?: boolean;
};

const formatPrice = (price: number) => `${price.toLocaleString()}원`;

export const ProductInfo = ({
  imageUrl,
  imageAlt,
  title,
  discountRate,
  price,
  originalPrice,
  giftable = false,
  payBadge = false,
}: ProductInfoProps) => {
  return (
    <div className='flex h-[76px] gap-[8px] pr-[18px]'>
      <img
        className='h-[76px] w-[76px] rounded-[4px]'
        src={imageUrl}
        alt={imageAlt}
      />
      <div className='flex flex-col gap-[4px]'>
        <p className='text-caption-12m leading-[16px]'>
          {payBadge && (
            <img
              className='mr-[2px] inline-block h-[13px] w-[50px]'
              src={nPayImage}
              alt='Npay'
            />
          )}
          {title}
        </p>
        <div className='flex flex-col gap-[4px]'>
          <div className='flex items-center gap-[2px]'>
            {discountRate !== undefined && (
              <span className='text-body-14sb text-red-900'>
                {discountRate}%
              </span>
            )}
            <span className='text-body-14sb'>{formatPrice(price)}</span>
            {originalPrice !== undefined && (
              <span className='text-caption-10r text-gray-700 line-through'>
                {formatPrice(originalPrice)}
              </span>
            )}
          </div>
          {giftable && (
            <span className='text-caption-10r w-fit rounded-[4px] border border-gray-500 px-[3px] py-[2px] text-gray-800'>
              선물가능상품
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
