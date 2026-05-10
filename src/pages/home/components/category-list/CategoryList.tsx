import {CategoryItem} from '@/pages/home/components/category-list/CategoryItem';
import type {
  Category,
  CategoryResponseData,
} from '@/pages/home/components/category-list/category-data';
import {IcSvgChevronUp} from '@/shared/icons';

const COLLAPSED_CATEGORY_COUNT = 10;

interface CategoryListProps {
  categoryData: CategoryResponseData;
  onCategoryClick?: (category: Category) => void;
  onExpandChange?: (isExpanded: boolean) => void;
}

export const CategoryList = ({
  categoryData,
  onCategoryClick,
  onExpandChange,
}: CategoryListProps) => {
  const hasExpandableCategories =
    categoryData.totalCount > COLLAPSED_CATEGORY_COUNT;

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

      <button
        type='button'
        className='text-caption-12sb mt-[34px] flex h-[38px] w-full cursor-pointer items-center justify-center gap-[4px] rounded-[8px] border border-gray-500 text-gray-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-900 disabled:cursor-not-allowed'
        aria-expanded={categoryData.isExpanded}
        disabled={!hasExpandableCategories}
        onClick={handleExpandButtonClick}>
        전체 카테고리 더보기
        <IcSvgChevronUp
          aria-hidden='true'
          className={`h-[24px] w-[24px] transition-transform ${
            categoryData.isExpanded ? '' : 'rotate-180'
          }`}
        />
      </button>
    </section>
  );
};
