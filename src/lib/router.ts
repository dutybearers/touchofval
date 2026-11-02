import { useCallback, useEffect, useState } from 'react';

export type PageId =
  | 'home'
  | 'about'
  | 'properties'
  | 'land-banking'
  | 'services'
  | 'testimonials'
  | 'contact';

const PAGE_PATHS: Record<PageId, string> = {
  home: '/',
  about: '/about',
  properties: '/properties',
  'land-banking': '/land-banking',
  services: '/services',
  testimonials: '/testimonials',
  contact: '/contact',
};

function pageFromPathname(pathname: string): PageId {
  const normalized = pathname.replace(/\/+$/, '') || '/';
  const match = (Object.keys(PAGE_PATHS) as PageId[]).find(
    (id) => PAGE_PATHS[id] === normalized,
  );
  return match ?? 'home';
}

export function useCurrentPage() {
  const [page, setPage] = useState<PageId>(() =>
    pageFromPathname(window.location.pathname),
  );

  useEffect(() => {
    const handlePopState = () =>
      setPage(pageFromPathname(window.location.pathname));
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = useCallback((next: PageId) => {
    window.history.pushState(null, '', PAGE_PATHS[next]);
    setPage(next);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return { page, navigate };
}
