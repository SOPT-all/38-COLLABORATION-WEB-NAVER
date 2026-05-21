import {lazy, Suspense, useEffect, useRef, useState} from 'react';
import {useQueryClient} from '@tanstack/react-query';

import {promotionsQueryOptions} from '@/pages/home/api/promotion/promotion-query-options';
import {SpecialDealSectionSkeleton} from '@/pages/home/components/deal-timer/SpecialDealSectionSkeleton';

const SPECIAL_DEAL_PREFETCH_OFFSET = 160;
const SPECIAL_DEAL_PLACEHOLDER_CLASS_NAME = 'min-h-[560px]';

const LazySpecialDealSection = lazy(() =>
  import('@/pages/home/sections/special-deal-section/SpecialDealSection').then(
    (module) => ({
      default: module.SpecialDealSection,
    })
  )
);

export const DeferredPromotionSection = () => {
  const queryClient = useQueryClient();
  const prefetchTargetRef = useRef<HTMLDivElement>(null);
  const hasRequestedPromotionsRef = useRef(false);
  const [shouldLoadSpecialDealSection, setShouldLoadSpecialDealSection] =
    useState(false);

  useEffect(() => {
    const prefetchTarget = prefetchTargetRef.current;

    const loadSpecialDealSection = () => {
      if (hasRequestedPromotionsRef.current) return;

      hasRequestedPromotionsRef.current = true;
      setShouldLoadSpecialDealSection(true);
      void queryClient.prefetchQuery(promotionsQueryOptions());
    };

    if (shouldLoadSpecialDealSection) return;

    if (!prefetchTarget) return;

    const tryLoadSpecialDealSection = () => {
      const isUserScrolled = window.scrollY > 0;
      const isSpecialDealNearViewport =
        prefetchTarget.getBoundingClientRect().top <=
        window.innerHeight + SPECIAL_DEAL_PREFETCH_OFFSET;

      if (!isUserScrolled || !isSpecialDealNearViewport) return;

      loadSpecialDealSection();
    };

    window.addEventListener('scroll', tryLoadSpecialDealSection, {
      passive: true,
    });
    tryLoadSpecialDealSection();

    return () =>
      window.removeEventListener('scroll', tryLoadSpecialDealSection);
  }, [queryClient, shouldLoadSpecialDealSection]);

  return (
    <>
      <div ref={prefetchTargetRef} className='h-px' aria-hidden='true' />

      {shouldLoadSpecialDealSection && (
        <Suspense fallback={<SpecialDealSectionSkeleton />}>
          <LazySpecialDealSection />
        </Suspense>
      )}

      {!shouldLoadSpecialDealSection && (
        <div
          className={SPECIAL_DEAL_PLACEHOLDER_CLASS_NAME}
          aria-hidden='true'
        />
      )}
    </>
  );
};
