import {CategoryItem} from '@/pages/home/components/category-list/CategoryItem';
import {COLLAPSED_CATEGORY_COUNT} from '@/pages/home/components/category-list/category-list.constants';
import type {Category, CategoryResponseData} from '@/pages/home/api/types';
import {ExpandButton} from '@/shared/components/button/ExpandButton';

type CategoryListProps = {
  categoryData: CategoryResponseData;
  isExpanded: boolean;
  onCategoryClick?: (category: Category) => void;
  onExpandChange?: (isExpanded: boolean) => void;
};

export const CategoryList = ({
  categoryData,
  isExpanded,
  onCategoryClick,
  onExpandChange,
}: CategoryListProps) => {
  const hasExpandableCategories =
    categoryData.categories.length > COLLAPSED_CATEGORY_COUNT;
  const visibleCategories = isExpanded
    ? categoryData.categories
    : categoryData.categories.slice(0, COLLAPSED_CATEGORY_COUNT);

  const handleExpandButtonClick = () => {
    onExpandChange?.(!isExpanded);
  };

  return (
    <section aria-label='카테고리' className='w-full'>
      <ul className='grid grid-cols-5 justify-items-center gap-y-[24px]'>
        {visibleCategories.map((category) => (
          <CategoryItem
            key={category.categoryId}
            category={category}
            onClick={onCategoryClick}
          />
        ))}
      </ul>

      <ExpandButton
        isExpanded={isExpanded}
        className='mt-[34px] h-[38px] w-full gap-[4px] rounded-[8px] py-0'
        disabled={!hasExpandableCategories}
        onClick={handleExpandButtonClick}>
        전체 카테고리 더보기
      </ExpandButton>
    </section>
  );
};
