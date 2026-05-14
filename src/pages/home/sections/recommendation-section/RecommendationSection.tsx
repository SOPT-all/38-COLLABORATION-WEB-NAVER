import {getMockRecommendationResponse} from '@/pages/home/api/mock';
import {ProductCard} from '@/pages/home/components';
import {CTAButton} from '@/shared/components/button/CTAButton';

export const RecommendationSection = () => {
  const recommendationResponse = getMockRecommendationResponse();

  return (
    <section
      aria-labelledby='recommended-products-heading'
      className='px-[16px] pt-[20px]'>
      <h2
        id='recommended-products-heading'
        className='text-body-16b text-semi-black mb-[14px]'>
        {recommendationResponse.data.title}
      </h2>

      <div className='-mx-[16px] overflow-x-auto px-[16px]'>
        <ul className='flex w-max gap-[8px]'>
          {recommendationResponse.data.items.map((product) => (
            <li key={product.itemId}>
              <ProductCard
                imageSrc={product.imageUrl}
                imageAlt={product.imageAlt}
                name={product.name}
                originalPrice={product.originalPrice}
                discountRate={product.discountRate}
                discountedPrice={product.discountedPrice}
              />
            </li>
          ))}
        </ul>
      </div>

      <CTAButton
        id='tomorrow-delivery-products'
        className='mx-auto mt-[28px] block h-[38px] w-[320px] py-0'>
        내일배송 상품 더보기
      </CTAButton>
    </section>
  );
};
