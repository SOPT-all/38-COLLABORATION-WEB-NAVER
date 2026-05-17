import {useNavigate} from 'react-router-dom';

import {ProductHeader} from '@/pages/product/components/product-header/ProductHeader';
import {ProductBenefitSection} from '@/pages/product/components/product-benefit-section/ProductBenefitSection';
import {ProductDeliverySection} from '@/pages/product/components/product-delivery-section/ProductDeliverySection';
import {ProductImageSection} from '@/pages/product/components/product-image-section/ProductImageSection';
import {ProductInfoSection} from '@/pages/product/components/product-info-section/ProductInfoSection';
import {PRODUCT_IMAGE_MOCK} from '@/pages/product/mocks/product-image-data';
import {ROUTES} from '@/shared/constants/routes';

export const ProductDetailPage = () => {
  const navigate = useNavigate();

  return (
    <main className='min-h-screen w-full bg-white'>
      <div className='sticky top-0 z-10'>
        <ProductHeader
          storeName='광동제약 직영스토어'
          cartCount={1}
          onBackClick={() => navigate(-1)}
          onCartClick={() => navigate(ROUTES.CART)}
        />
      </div>

      <ProductImageSection
        imageUrl={PRODUCT_IMAGE_MOCK.imageUrl}
        productName={PRODUCT_IMAGE_MOCK.productName}
        membershipText={PRODUCT_IMAGE_MOCK.membershipText}
      />

      <section className='w-full bg-white'>
        <div className='py-[1.6rem]'>
          <ProductInfoSection />
        </div>
        <div className='mx-auto w-[34.3rem] border-t border-gray-500' />
        <ProductDeliverySection />
        <div className='mx-auto w-[34.3rem] border-t border-gray-500' />
        <div className='px-[1.6rem] pt-[1.6rem] pb-[3.2rem]'>
          <ProductBenefitSection />
        </div>
      </section>
    </main>
  );
};
