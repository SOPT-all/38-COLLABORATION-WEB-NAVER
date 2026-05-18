import {useNavigate} from 'react-router-dom';

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
import {ROUTES} from '@/shared/constants/routes';

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className='min-h-screen bg-white'>
      <HomeHeader onCartClick={() => navigate(ROUTES.CART)} />

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
