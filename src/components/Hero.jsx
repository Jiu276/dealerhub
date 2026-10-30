import { Link } from 'react-router-dom';

/** 首页主视觉使用的店面照片。 */
const HERO_IMAGE = '/images/hero.jpg';

/**
 * 落地页首屏。背景是选定的店面照片。
 * @param {{ latest?: { slug: string, title: string } }} props
 */
export function Hero({ latest }) {
  return (
    <section className="dh-hero" aria-label="Introduction">
      <div
        className="dh-hero__bg"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        role="img"
        aria-label="Interior of an independent retail shop"
      />
      <div className="dh-hero__veil" />
      <div className="dh-hero__inner">
        <p className="dh-eyebrow dh-eyebrow--light">DealerHub · English edition</p>
        <h1>What to carry, and where to sell it.</h1>
        <p className="dh-lede">
          An independent journal of product reviews, platform recommendations,
          and packing-table notes for people who sell.
        </p>
        <div className="dh-hero__actions">
          <Link className="dh-btn dh-btn--light" to="/blog">Browse the blog</Link>
          <Link className="dh-btn dh-btn--ghost" to="/products">See the products</Link>
        </div>
        {latest ? (
          <Link className="dh-hero__latest" to={`/blog/${latest.slug}`}>
            <span>Latest</span>
            {latest.title}
          </Link>
        ) : null}
      </div>
    </section>
  );
}
