import {useState} from 'react';

import {useCategoryQuery} from '@/pages/home/api/category';
import {
  CategoryList,
  CategoryListSkeleton,
  SearchBar,
} from '@/pages/home/components';
import {AsyncBoundary} from '@/shared/components';

type CategoryContentProps = {
  isCategoryExpanded: boolean;
  onExpandChange: (isExpanded: boolean) => void;
};

const CategoryContent = ({
  isCategoryExpanded,
  onExpandChange,
}: CategoryContentProps) => {
  const {data: categoryData} = useCategoryQuery();

  return (
    <CategoryList
      categoryData={categoryData}
      isExpanded={isCategoryExpanded}
      onExpandChange={onExpandChange}
    />
  );
};

export const CategorySection = () => {
  const [isCategoryExpanded, setIsCategoryExpanded] = useState(false);

  return (
    <section
      aria-label='N배송 상품 검색 및 카테고리'
      className='px-[16px] pt-[40px] pb-[32px]'>
      <SearchBar />

      <div className='mt-[14px]'>
        <AsyncBoundary
          pendingFallback={<CategoryListSkeleton />}
          errorFallback={() => (
            <p
              role='alert'
              className='text-caption-12m py-[48px] text-center text-red-900'>
              카테고리를 불러오지 못했습니다.
            </p>
          )}>
          <CategoryContent
            isCategoryExpanded={isCategoryExpanded}
            onExpandChange={setIsCategoryExpanded}
          />
        </AsyncBoundary>
      </div>
    </section>
  );
};
