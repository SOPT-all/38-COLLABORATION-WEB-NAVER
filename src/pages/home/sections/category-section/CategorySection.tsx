import {useState} from 'react';

import {getMockCategoryResponse} from '@/pages/home/api/mock';
import {CategoryList, SearchBar} from '@/pages/home/components';

export const CategorySection = () => {
  const [isCategoryExpanded, setIsCategoryExpanded] = useState(false);
  const categoryResponse = getMockCategoryResponse(isCategoryExpanded);

  return (
    <section
      aria-label='N배송 상품 검색 및 카테고리'
      className='px-[16px] pt-[40px] pb-[32px]'>
      <SearchBar />

      <div className='mt-[14px]'>
        <CategoryList
          categoryData={categoryResponse.data}
          onExpandChange={setIsCategoryExpanded}
        />
      </div>
    </section>
  );
};
