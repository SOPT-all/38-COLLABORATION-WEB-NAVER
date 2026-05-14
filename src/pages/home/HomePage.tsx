import {
  DeliveryBanner,
  HomeBanner,
  HomeHeader,
  Location,
} from '@/pages/home/components';
import {
  CategorySection,
  RecommendationSection,
  SpecialDealSection,
} from '@/pages/home/sections';

export const HomePage = () => {
  return (
    <div className='min-h-screen bg-white'>
      <HomeHeader />

      <main>
        <Location className='h-[40px] px-[16px]' />
        <div className='h-[8px] bg-gray-500' />
        <HomeBanner href='#tomorrow-delivery-products' />

        <RecommendationSection />
        <CategorySection />

        <DeliveryBanner />

        <SpecialDealSection />
      </main>
    </div>
  );
};
