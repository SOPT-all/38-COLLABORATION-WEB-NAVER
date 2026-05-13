import {
  IcSvgChevronDownSm,
  IcSvgDelivery,
  IcSvgNotice,
  IcSvgStar,
} from '@/shared/icons';

import {ProductCouponButton} from '@/pages/product/components/product-info-section/ProductCouponButton';

type ProductDetailData = {
  productName: string;
  reviewScore: number;
  recentReviewScore: number;
  reviewCount: number;
  discountRate: number;
  originalPrice: number;
  salePrice: number;
  memberPrice: number;
  couponAvailable: boolean;
  couponDday: number;
  unitPrice: number;
  unitQuantity: number;
  unit: string;
  delivery: {
    isFreeDelivery: boolean;
  };
};

type ProductInfoSectionProps = {
  product: ProductDetailData;
};

const PRODUCT_OPTION_START_PATTERN = ' (유 ';

const getProductNameLines = (productName: string) => {
  const optionStartIndex = productName.indexOf(PRODUCT_OPTION_START_PATTERN);

  if (optionStartIndex === -1) {
    return [productName, ''];
  }

  return [
    productName.slice(0, optionStartIndex),
    productName.slice(optionStartIndex + 1),
  ];
};

export const ProductInfoSection = ({product}: ProductInfoSectionProps) => {
  const [productName, optionName] = getProductNameLines(product.productName);
  const deliveryFeeText = product.delivery.isFreeDelivery
    ? '무료배송'
    : '배송비 별도';
  const unitPriceText = `${product.unitQuantity}${product.unit}당 ${product.unitPrice.toLocaleString()}원`;

  return (
    <section className='w-full bg-white px-[1.6rem]'>
      <div className='flex w-full flex-col gap-[0.8rem]'>
        <p className='text-body-16m h-[1.9rem] leading-[100%] tracking-[0px] text-black'>
          {productName}
        </p>
        <p className='text-body-16m h-[1.9rem] leading-[100%] tracking-[0px] text-black'>
          {optionName}
        </p>

        <div className='flex h-[2.4rem] w-[27.2rem] items-center gap-[0.6rem]'>
          <IcSvgStar aria-hidden='true' className='h-[2.4rem] w-[2.4rem]' />
          <span className='flex cursor-pointer items-center gap-[0.6rem]'>
            <span className='text-body-14sb text-semi-black flex h-[1.7rem] w-[2.8rem] items-center leading-[100%] tracking-[0px]'>
              {product.reviewScore}
            </span>
            <span className='text-caption-12m flex h-[2.4rem] items-center gap-[0.1rem] leading-[100%] tracking-[0px] whitespace-nowrap text-gray-900'>
              <span>(최근 6개월 {product.recentReviewScore}</span>
              <IcSvgNotice
                aria-hidden='true'
                className='h-[2.4rem] w-[2.4rem] text-gray-700'
              />
              <span>)</span>
            </span>
          </span>
          <span className='h-[1.2rem] w-px shrink-0 bg-gray-500' />
          <span className='text-caption-12m h-[1.4rem] w-[8rem] shrink-0 cursor-pointer leading-[100%] tracking-[0px] whitespace-nowrap text-gray-900'>
            {product.reviewCount.toLocaleString()}건 리뷰
          </span>
        </div>

        <div className='flex min-h-[7.1rem] w-full items-end justify-between'>
          <div className='flex flex-col'>
            <div className='flex h-[1.9rem] w-[8.4rem] items-center gap-[0.2rem] whitespace-nowrap'>
              <span className='text-body-16b h-[1.9rem] w-[2.6rem] leading-[100%] tracking-[0px] text-gray-800'>
                {product.discountRate}%
              </span>
              <span className='text-body-14m h-[1.9rem] leading-[100%] tracking-[0px] text-gray-700'>
                {product.originalPrice.toLocaleString()}원
              </span>
            </div>
            <span className='text-display-22b h-[2.6rem] w-[7.3rem] leading-[100%] tracking-[0px] whitespace-nowrap text-black'>
              {product.salePrice.toLocaleString()}
              <span className='text-body-16r leading-[100%] tracking-[0px] text-black'>
                원
              </span>
            </span>
            <div className='flex h-[2.3rem] items-center whitespace-nowrap'>
              <span className='text-display-22b h-[2.6rem] leading-[100%] tracking-[0px] text-red-900'>
                {product.memberPrice.toLocaleString()}
              </span>
              <span className='text-body-16m mr-[0.8rem] h-[1.9rem] leading-[100%] tracking-[0px] text-red-900'>
                원
              </span>
              <button
                type='button'
                className='flex h-[2.4rem] items-center'
                aria-label='나의 할인가 자세히 보기'>
                <span className='text-body-16m h-[1.9rem] leading-[100%] tracking-[0px] text-red-900'>
                  나의 할인가
                </span>
                <IcSvgChevronDownSm
                  aria-hidden='true'
                  className='h-[2.4rem] w-[2.4rem]'
                />
              </button>
            </div>
          </div>
          {product.couponAvailable && (
            <ProductCouponButton
              dDay={`D-${product.couponDday}`}
              label='쿠폰 받기'
            />
          )}
        </div>
        <div className='flex h-[2.4rem] items-center gap-[0.4rem]'>
          <IcSvgDelivery aria-hidden='true' className='h-[2.4rem] w-[2.4rem]' />
          <span className='text-caption-12m h-[1.4rem] w-[4.2rem] leading-[100%] tracking-[0px] text-gray-900'>
            {deliveryFeeText}
          </span>
          <span className='h-[1.2rem] w-px bg-gray-500' />
          <span className='text-caption-12m h-[1.4rem] w-[7.2rem] leading-[100%] tracking-[0px] text-gray-900'>
            {unitPriceText}
          </span>
        </div>
      </div>
    </section>
  );
};
