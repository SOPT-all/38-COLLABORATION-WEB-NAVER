import {Link} from 'react-router-dom';

import {usePromotionsQuery} from '@/pages/home/api/promotion';
import {
  ProductCard,
  SpecialDealSectionSkeleton,
  SpecialDealTimer,
} from '@/pages/home/components';

import {AsyncBoundary} from '@/shared/components';
import {createPath} from '@/shared/constants/routes';

type BadgeVariant = 'brand-day' | 'plus-sale';

const TAG_TO_BADGE: Record<string, BadgeVariant> = {
  브랜드데이: 'brand-day',
  '+세일': 'plus-sale',
};

const SpecialDealContent = () => {
  const {data} = usePromotionsQuery();

  // TODO: 임시 고정 날짜 — 실제 배포 시 `new Date()`로 교체
  const today = new Date('2026-05-23');

  const todayPromotion = data.promotions.find((p) => {
    const endsAt = new Date(p.endsAt);
    return (
      endsAt.getFullYear() === today.getFullYear() &&
      endsAt.getMonth() === today.getMonth() &&
      endsAt.getDate() === today.getDate()
    );
  });

  if (!todayPromotion) return null;

  return (
    <>
      <SpecialDealTimer endsAt={todayPromotion.endsAt} />

      <section
        aria-label='특가 상품 목록'
        className='flex items-center justify-center px-[16px] pt-[10px] pb-[24px]'>
        <ul className='grid grid-cols-3 gap-x-2 gap-y-[1.6rem]' role='list'>
          {todayPromotion.items.map((product) => (
            <li key={product.itemId}>
              <Link to={createPath.productDetail(product.itemId)}>
                <ProductCard
                  imageSrc={product.imageUrl}
                  imageAlt={product.name}
                  name={product.name}
                  originalPrice={product.originalPrice}
                  discountRate={product.discountRate}
                  discountedPrice={product.discountedPrice}
                  badge={TAG_TO_BADGE[product.tag ?? ''] ?? 'brand-day'}
                />
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export const SpecialDealSection = () => {
  return (
    <AsyncBoundary
      pendingFallback={<SpecialDealSectionSkeleton />}
      errorFallback={() => (
        <p
          role='alert'
          className='text-caption-12m py-[48px] text-center text-red-900'>
          보장 특가를 불러오지 못했습니다.
        </p>
      )}>
      <SpecialDealContent />
    </AsyncBoundary>
  );
};
