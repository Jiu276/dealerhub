import { Link } from 'react-router-dom';
import { categories } from '../data/site';
import { Logo } from './Logo';
import { SocialLinks } from './SocialWidget';

/**
 * 页脚：导航、分类与可跳转的社交链接。
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="dh-footer">
      <div className="dh-wrap dh-footer__grid">
        <div>
          <Logo />
          <p>
            Independent notes on products worth carrying and platforms worth selling on.
          </p>
        </div>
        <div>
          <h2>Explore</h2>
          <Link to="/blog">Blog</Link>
          <Link to="/products">Products</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div>
          <h2>Categories</h2>
          {categories.map((category) => (
            <Link key={category.slug} to={`/blog?category=${category.slug}`}>
              {category.label}
            </Link>
          ))}
        </div>
        <div>
          <h2>Follow</h2>
          <SocialLinks className="dh-social-links dh-social-links--row" />
        </div>
      </div>
      <div className="dh-wrap dh-footer__bar">
        <p>© {year} DealerHub. All rights reserved.</p>
        <p>Selected photographs from Unsplash. Product stills prepared for this desk.</p>
      </div>
    </footer>
  );
}
