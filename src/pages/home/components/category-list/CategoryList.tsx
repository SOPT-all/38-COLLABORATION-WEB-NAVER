import {CategoryItem} from '@/pages/home/components/category-list/CategoryItem';
import type {Category, CategoryResponseData} from '@/pages/home/api/types';
import {ExpandButton} from '@/shared/components/button/ExpandButton';

const COLLAPSED_CATEGORY_COUNT = 10;

type CategoryListProps = {
  categoryData: CategoryResponseData;
  onCategoryClick?: (category: Category) => void;
  onExpandChange?: (isExpanded: boolean) => void;
};

export const CategoryList = ({
  categoryData,
  onCategoryClick,
  onExpandChange,
}: CategoryListProps) => {
  const hasExpandableCategories =
    categoryData.isExpanded ||
    categoryData.categories.length === COLLAPSED_CATEGORY_COUNT;

  const handleExpandButtonClick = () => {
    onExpandChange?.(!categoryData.isExpanded);
  };

  return (
    <section aria-label='카테고리' className='w-full'>
      <ul className='grid grid-cols-5 justify-items-center gap-y-[24px]'>
        {categoryData.categories.map((category) => (
          <CategoryItem
            key={category.categoryId}
            category={category}
            onClick={onCategoryClick}
          />
        ))}
      </ul>

      <ExpandButton
        isExpanded={categoryData.isExpanded}
        className='mt-[34px] h-[38px] w-full gap-[4px] rounded-[8px] py-0'
        disabled={!hasExpandableCategories}
        onClick={handleExpandButtonClick}>
        전체 카테고리 더보기
      </ExpandButton>
    </section>
  );
};
