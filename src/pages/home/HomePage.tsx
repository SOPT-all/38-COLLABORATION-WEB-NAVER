import {useNavigate} from 'react-router-dom';

import {
  DeliveryBanner,
  HomeBanner,
  HomeHeader,
  Location,
} from '@/pages/home/components';
import {CategorySection} from '@/pages/home/sections/category-section/CategorySection';
import {DeferredPromotionSection} from '@/pages/home/sections/promotion-section/DeferredPromotionSection';
import {RecommendationSection} from '@/pages/home/sections/recommendation-section/RecommendationSection';
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
        <DeferredPromotionSection />
      </main>
    </div>
  );
};
