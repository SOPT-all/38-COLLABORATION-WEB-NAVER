import {useNavigate, useParams} from 'react-router-dom';

import {useProductDetailQuery} from '@/pages/product/api/product-detail';
import {ProductBenefitSection} from '@/pages/product/components/product-benefit-section/ProductBenefitSection';
import {ProductDetailSkeleton} from '@/pages/product/components/product-detail-skeleton/ProductDetailSkeleton';
import {ProductDeliverySection} from '@/pages/product/components/product-delivery-section/ProductDeliverySection';
import {ProductHeader} from '@/pages/product/components/product-header/ProductHeader';
import {ProductImageSection} from '@/pages/product/components/product-image-section/ProductImageSection';
import {ProductInfoSection} from '@/pages/product/components/product-info-section/ProductInfoSection';
import {AsyncBoundary} from '@/shared/components/boundary/AsyncBoundary';
import {ROUTES} from '@/shared/constants/routes';

const MEMBERSHIP_TEXT = '멤버십은 1회 무료교환반품';

type ProductDetailContentProps = {
  productId: number;
};

const ProductDetailContent = ({productId}: ProductDetailContentProps) => {
  const {data} = useProductDetailQuery(productId);

  return (
    <>
      <ProductImageSection
        imageUrl={data.thumbnailImageUrl}
        productName={data.productName}
        membershipText={MEMBERSHIP_TEXT}
      />

      <section className='w-full bg-white'>
        <div className='py-[1.6rem]'>
          <ProductInfoSection product={data} />
        </div>
        <div className='mx-auto w-[34.3rem] border-t border-gray-500' />
        <ProductDeliverySection delivery={data.delivery} />
        <div className='mx-auto w-[34.3rem] border-t border-gray-500' />
        <div className='px-[1.6rem] pt-[1.6rem] pb-[3.2rem]'>
          <ProductBenefitSection
            pointBenefit={data.pointBenefit}
            cardBenefits={data.cardBenefits}
          />
        </div>
      </section>
    </>
  );
};

export const ProductDetailPage = () => {
  const navigate = useNavigate();
  const {id} = useParams<{id: string}>();
  const productId = Number(id);

  return (
    <main className='min-h-screen w-full bg-white'>
      <div className='sticky top-0 z-10'>
        <ProductHeader
          storeName='광동제약 직영스토어'
          cartCount={1}
          onBackClick={() => navigate(ROUTES.HOME)}
          onCartClick={() => navigate(ROUTES.CART)}
        />
      </div>

      <AsyncBoundary
        pendingFallback={<ProductDetailSkeleton />}
        errorFallback={() => (
          <p
            role='alert'
            className='text-caption-12m py-[4.8rem] text-center text-red-900'>
            상품 정보를 불러오지 못했습니다.
          </p>
        )}>
        <ProductDetailContent productId={productId} />
      </AsyncBoundary>
    </main>
  );
};
