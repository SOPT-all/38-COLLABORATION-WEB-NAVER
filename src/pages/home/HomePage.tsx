import {useState} from 'react';

import {CategoryList} from './components/category-list/CategoryList';
import {getMockCategoryResponse} from './components/category-list/category-data';

export const HomePage = () => {
  const [isCategoryExpanded, setIsCategoryExpanded] = useState(false);
  const categoryResponse = getMockCategoryResponse(isCategoryExpanded);

  return (
    <main className='min-h-dvh bg-white px-[16px] py-[24px]'>
      <CategoryList
        categoryData={categoryResponse.data}
        onExpandChange={setIsCategoryExpanded}
      />
    </main>
  );
};
