import type {Category, CategoryResponse} from '@/pages/home/api/types';
import imgEvent from '@/shared/assets/images/img-event.png';

const MOCK_CATEGORIES: Category[] = [
  {
    categoryId: 1,
    name: '행사',
    iconUrl: imgEvent,
  },
  {
    categoryId: 2,
    name: '새벽배송',
    iconUrl: imgEvent,
  },
  {
    categoryId: 3,
    name: '간편조리/밀키트',
    iconUrl: imgEvent,
  },
  {
    categoryId: 4,
    name: '음료/커피/전통주',
    iconUrl: imgEvent,
  },
  {
    categoryId: 5,
    name: '스낵/빵/떡',
    iconUrl: imgEvent,
  },
  {
    categoryId: 6,
    name: '세제/세정제',
    iconUrl: imgEvent,
  },
  {
    categoryId: 7,
    name: '화장지/물티슈',
    iconUrl: imgEvent,
  },
  {
    categoryId: 8,
    name: '건강/다이어트',
    iconUrl: imgEvent,
  },
  {
    categoryId: 9,
    name: '생활/주방',
    iconUrl: imgEvent,
  },
  {
    categoryId: 10,
    name: '라면/면',
    iconUrl: imgEvent,
  },
  {
    categoryId: 11,
    name: '헤어/바디/구강',
    iconUrl: imgEvent,
  },
  {
    categoryId: 12,
    name: '건강용품',
    iconUrl: imgEvent,
  },
  {
    categoryId: 13,
    name: '방향/살충',
    iconUrl: imgEvent,
  },
  {
    categoryId: 14,
    name: '조미료/소스',
    iconUrl: imgEvent,
  },
  {
    categoryId: 15,
    name: '축산/농수산',
    iconUrl: imgEvent,
  },
  {
    categoryId: 16,
    name: '생리대/패드',
    iconUrl: imgEvent,
  },
  {
    categoryId: 17,
    name: '기저귀/분유',
    iconUrl: imgEvent,
  },
  {
    categoryId: 18,
    name: '유아용품',
    iconUrl: imgEvent,
  },
  {
    categoryId: 19,
    name: '유아동패션',
    iconUrl: imgEvent,
  },
  {
    categoryId: 20,
    name: '가전',
    iconUrl: imgEvent,
  },
  {
    categoryId: 21,
    name: 'PC/태블릿',
    iconUrl: imgEvent,
  },
  {
    categoryId: 22,
    name: '휴대폰/웨어러블',
    iconUrl: imgEvent,
  },
  {
    categoryId: 23,
    name: '남성패션',
    iconUrl: imgEvent,
  },
  {
    categoryId: 24,
    name: '여성패션',
    iconUrl: imgEvent,
  },
  {
    categoryId: 25,
    name: '희망일설치',
    iconUrl: imgEvent,
  },
];

export const getMockCategoryResponse = (expand = false): CategoryResponse => {
  return {
    success: true,
    status: 200,
    message: '요청이 성공했습니다.',
    data: {
      categories: expand ? MOCK_CATEGORIES : MOCK_CATEGORIES.slice(0, 10),
      totalCount: MOCK_CATEGORIES.length,
      isExpanded: expand,
    },
  };
};
