'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Analytics } from '@/lib/analytics';

export default function AnalyticsTracker() {
  const pathname = usePathname();

  useEffect(() => {
    // Initialize analytics on mount (client-side only)
    if (typeof window !== 'undefined') {
      Analytics.init();
    }
  }, []);

  useEffect(() => {
    // Track page views on route change
    if (typeof window !== 'undefined') {
      Analytics.track('pageview', { page: pathname });
    }
  }, [pathname]);

  return null;
}
