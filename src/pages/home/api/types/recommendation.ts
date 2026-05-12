export interface RecommendationItem {
  itemId: number;
  name: string;
  imageUrl: string;
  imageAlt: string;
  originalPrice: number;
  discountRate: number;
  discountedPrice: number;
  isTomorrowDelivery: boolean;
}

export interface RecommendationResponseData {
  title: string;
  items: RecommendationItem[];
}
