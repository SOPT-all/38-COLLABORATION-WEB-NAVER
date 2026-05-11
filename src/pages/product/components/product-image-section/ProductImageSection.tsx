import {ProductMembershipBadge} from './ProductMembershipBadge';

type ProductImageSectionProps = {
  imageUrl: string;
  productName: string;
  membershipText: string;
};

export function ProductImageSection({
  imageUrl,
  productName,
  membershipText,
}: ProductImageSectionProps) {
  return (
    <section className='relative aspect-square w-full overflow-hidden bg-gray-300'>
      <img
        src={imageUrl}
        alt={productName}
        className='size-full object-cover'
      />
      <div className='absolute bottom-[1.2rem] left-[1.6rem]'>
        <ProductMembershipBadge text={membershipText} />
      </div>
    </section>
  );
}
