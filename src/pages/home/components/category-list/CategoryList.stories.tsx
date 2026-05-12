import type {Meta, StoryObj} from '@storybook/react-vite';
import {useState} from 'react';
import {fn} from 'storybook/test';

import {CategoryItem} from '@/pages/home/components/category-list/CategoryItem';
import {CategoryList} from '@/pages/home/components/category-list/CategoryList';
import {getMockCategoryResponse} from '@/pages/home/components/category-list/category-data';

const meta = {
  title: 'Home/CategoryList',
  component: CategoryList,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div className='w-[343px] bg-white'>
        <Story />
      </div>
    ),
  ],
  args: {
    categoryData: getMockCategoryResponse(false).data,
    onCategoryClick: fn(),
    onExpandChange: fn(),
  },
} satisfies Meta<typeof CategoryList>;

export default meta;

type Story = StoryObj<typeof meta>;

const sampleCategory = getMockCategoryResponse(false).data.categories[0];

const CategoryListDemo = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const categoryResponse = getMockCategoryResponse(isExpanded);

  return (
    <CategoryList
      categoryData={categoryResponse.data}
      onCategoryClick={fn()}
      onExpandChange={setIsExpanded}
    />
  );
};

export const Item: Story = {
  render: () => (
    <ul className='grid grid-cols-1 justify-items-center'>
      <CategoryItem category={sampleCategory} onClick={fn()} />
    </ul>
  ),
};

export const Collapsed: Story = {
  args: {
    categoryData: getMockCategoryResponse(false).data,
  },
};

export const Expanded: Story = {
  args: {
    categoryData: getMockCategoryResponse(true).data,
  },
};

export const Interactive: Story = {
  render: () => <CategoryListDemo />,
};
