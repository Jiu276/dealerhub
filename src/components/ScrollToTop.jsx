import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * 路径变化时回到页面顶部。
 */
export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
}
