import { Outlet, useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { SocialWidget } from './SocialWidget';
import { BackToTop } from './BackToTop';
import { ScrollToTop } from './ScrollToTop';

/**
 * 全站框架：页头、页脚、社交小部件与返回顶部。
 */
export function Layout() {
  const { pathname } = useLocation();
  const home = pathname === '/';

  return (
    <div className="dh-shell">
      <a className="dh-skip" href="#main">Skip to content</a>
      <ScrollToTop />
      <Header />
      <main id="main" key={pathname} className={home ? 'dh-main dh-main--home' : 'dh-main'}>
        <Outlet />
      </main>
      <Footer />
      <SocialWidget />
      <BackToTop />
    </div>
  );
}
