'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Analytics } from '@/lib/analytics';

export default function AnalyticsTracker() {
  const pathname = usePathname();

  useEffect(() => {
    // Initialize analytics on mount
    Analytics.init();
  }, []);

  useEffect(() => {
    // Track page views on route change
    Analytics.track('pageview', { page: pathname });
  }, [pathname]);

  return null;
}
