import {ProductDeliverySection} from '@/pages/product/components/product-delivery-section/ProductDeliverySection';
import {ProductBenefitSection} from '@/pages/product/components/product-benefit-section/ProductBenefitSection';
import {ProductInfoSection} from '@/pages/product/components/product-info-section/ProductInfoSection';
import {PRODUCT_BENEFIT_MOCK} from '@/pages/product/mocks/product-benefit-data';
import {PRODUCT_DELIVERY_MOCK} from '@/pages/product/mocks/product-delivery-data';
import {PRODUCT_INFO_MOCK} from '@/pages/product/mocks/product-info-data';

type ProductInfoGroupProps = {
  product: typeof PRODUCT_INFO_MOCK.data;
  delivery: typeof PRODUCT_DELIVERY_MOCK.data.delivery;
  benefit: typeof PRODUCT_BENEFIT_MOCK;
};

export const ProductInfoGroup = ({
  product,
  delivery,
  benefit,
}: ProductInfoGroupProps) => {
  return (
    <section>
      <div className='py-[1.6rem]'>
        <ProductInfoSection product={product} />
      </div>
      <div className='mx-auto w-[34.3rem] border-t border-gray-500' />
      <ProductDeliverySection delivery={delivery} />
      <div className='mx-auto w-[34.3rem] border-t border-gray-500' />
      <div className='px-[1.6rem] pt-[1.6rem] pb-[3.2rem]'>
        <ProductBenefitSection benefit={benefit} />
      </div>
    </section>
  );
};
