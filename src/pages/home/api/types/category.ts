export interface Category {
  categoryId: number;
  name: string;
  iconUrl: string;
}

export interface CategoryResponseData {
  categories: Category[];
  totalCount: number;
  isExpanded: boolean;
}
