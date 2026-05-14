import {getMockSpecialDealResponse} from '@/pages/home/api/mock';
import {ProductCard, SpecialDealTimer} from '@/pages/home/components';

export const SpecialDealSection = () => {
  const specialDealResponse = getMockSpecialDealResponse();

  return (
    <>
      <SpecialDealTimer />

      <section
        aria-label='특가 상품 목록'
        className='flex items-center justify-center px-[16px] pt-[10px] pb-[24px]'>
        <ul className='grid grid-cols-3 gap-x-2 gap-y-[1.6rem]' role='list'>
          {specialDealResponse.data.items.map((product) => (
            <li key={product.itemId}>
              <ProductCard
                imageSrc={product.imageUrl}
                imageAlt={product.imageAlt}
                name={product.name}
                originalPrice={product.originalPrice}
                discountRate={product.discountRate}
                discountedPrice={product.discountedPrice}
                badge={product.badge}
              />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};
