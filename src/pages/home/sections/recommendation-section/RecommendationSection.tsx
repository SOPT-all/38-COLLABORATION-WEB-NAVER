import {Link} from 'react-router-dom';

import {useRecommendItemQuery} from '@/pages/home/api/recommend-item/use-recommend-item-query';
import {ProductCard, RecommendListSkeleton} from '@/pages/home/components';
import {AsyncBoundary} from '@/shared/components';
import {CTAButton} from '@/shared/components/button/CTAButton';
import {createPath} from '@/shared/constants/routes';

const RecommendationContent = () => {
  const {data: recommendation} = useRecommendItemQuery();

  return (
    <>
      <h2
        id='recommended-products-heading'
        className='text-body-16b text-semi-black mb-[14px]'>
        {recommendation.title}
      </h2>

      <div className='-mx-[16px] overflow-x-auto px-[16px]'>
        <ul className='flex w-max gap-[8px]'>
          {recommendation.items.map((product) => (
            <li key={product.itemId}>
              <Link
                to={createPath.productDetail(product.itemId)}
                aria-label={`${product.name} 상세 페이지로 이동`}
                className='block no-underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-900'>
                <ProductCard
                  imageSrc={product.imageUrl}
                  imageAlt={product.name}
                  name={product.name}
                  originalPrice={product.originalPrice}
                  discountRate={product.discountRate}
                  discountedPrice={
                    product.discountedPrice ?? product.originalPrice
                  }
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export const RecommendationSection = () => {
  return (
    <section
      aria-labelledby='recommended-products-heading'
      className='px-[16px] pt-[20px]'>
      <AsyncBoundary
        pendingFallback={<RecommendListSkeleton />}
        errorFallback={() => (
          <p
            role='alert'
            className='text-caption-12m py-[48px] text-center text-red-900'>
            추천 상품을 불러오지 못했습니다.
          </p>
        )}>
        <RecommendationContent />
      </AsyncBoundary>

      <CTAButton
        id='tomorrow-delivery-products'
        className='mx-auto mt-[28px] block h-[38px] w-[320px] py-0'>
        내일배송 상품 더보기
      </CTAButton>
    </section>
  );
};
