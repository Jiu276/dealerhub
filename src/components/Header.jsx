import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { navItems } from '../data/site';
import { Logo } from './Logo';

/**
 * 固定页头。首页顶部叠在主视觉上，滚动或打开菜单后变为实底。
 */
export function Header() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const home = pathname === '/';
  const solid = !home || scrolled || open;

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className={solid ? 'dh-header is-solid' : 'dh-header is-overlay'}>
      <div className="dh-header__bar">
        <Logo />
        <button
          type="button"
          className={open ? 'dh-burger is-open' : 'dh-burger'}
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="dh-sr">{open ? 'Close menu' : 'Open menu'}</span>
          <span className="dh-burger__bar" />
          <span className="dh-burger__bar" />
          <span className="dh-burger__bar" />
        </button>
        <nav id="site-nav" className={open ? 'dh-nav is-open' : 'dh-nav'} aria-label="Primary">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.end}>
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
