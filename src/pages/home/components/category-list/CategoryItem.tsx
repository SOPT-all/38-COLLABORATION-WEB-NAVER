import type {Category} from '@/pages/home/components/category-list/category-data';

interface CategoryItemProps {
  category: Category;
  onClick?: (category: Category) => void;
}

export const CategoryItem = ({category, onClick}: CategoryItemProps) => {
  const {name, iconUrl} = category;

  return (
    <li className='flex min-w-0 justify-center'>
      <button
        type='button'
        className='flex w-[58px] cursor-pointer flex-col items-center gap-[4px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-900'
        aria-label={`${name} 카테고리 보기`}
        onClick={() => onClick?.(category)}>
        <img
          src={iconUrl}
          alt=''
          className='h-[38px] w-[38px] object-contain'
        />
        <span className='text-caption-12r text-semi-black w-full text-center break-keep'>
          {name}
        </span>
      </button>
    </li>
  );
};
