import {useNavigate} from 'react-router-dom';

import {ProductHeader} from '@/pages/product/components/product-header/ProductHeader';
import {ProductImageSection} from '@/pages/product/components/product-image-section/ProductImageSection';
import {ProductInfoGroup} from '@/pages/product/components/product-info-group/ProductInfoGroup';
import {PRODUCT_BENEFIT_MOCK} from '@/pages/product/mocks/product-benefit-data';
import {PRODUCT_DELIVERY_MOCK} from '@/pages/product/mocks/product-delivery-data';
import {PRODUCT_IMAGE_MOCK} from '@/pages/product/mocks/product-image-data';
import {PRODUCT_INFO_MOCK} from '@/pages/product/mocks/product-info-data';
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
      <ProductInfoGroup
        product={PRODUCT_INFO_MOCK.data}
        delivery={PRODUCT_DELIVERY_MOCK.data.delivery}
        benefit={PRODUCT_BENEFIT_MOCK}
      />
    </main>
  );
};
