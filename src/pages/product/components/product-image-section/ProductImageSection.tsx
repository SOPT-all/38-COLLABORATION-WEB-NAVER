import {useState} from 'react';

import {ProductMembershipBadge} from './ProductMembershipBadge';

type ProductImageSectionProps = {
  imageUrl: string;
  productName: string;
  membershipText: string;
};

export const ProductImageSection = ({
  imageUrl,
  productName,
  membershipText,
}: ProductImageSectionProps) => {
  const [hasImageError, setHasImageError] = useState(false);

  return (
    <div className='relative aspect-square w-full overflow-hidden bg-gray-300'>
      {!hasImageError && (
        <img
          src={imageUrl}
          alt={productName}
          className='size-full object-cover'
          onError={() => setHasImageError(true)}
        />
      )}
      <div className='absolute bottom-[1.2rem] left-[1.6rem]'>
        <ProductMembershipBadge text={membershipText} />
      </div>
    </div>
  );
};
