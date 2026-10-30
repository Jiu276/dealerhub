import { Link } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { SectionHeading } from '../components/SectionHeading';
import { ArticleCard } from '../components/ArticleCard';
import { ProductCard } from '../components/ProductCard';
import { usePageMeta } from '../hooks/usePageMeta';
import { articles } from '../data/articles';
import { products } from '../data/products';
import { categories } from '../data/site';
import { byNewest } from '../utils/format';

/**
 * 首页落地页。
 */
export function HomePage() {
  usePageMeta(
    'DealerHub — What to carry, and where to sell it',
    'DealerHub is an independent English journal of product reviews, platform recommendations, and operating notes for dealers.',
  );

  const latest = [...articles].sort(byNewest);
  const featured = latest.slice(0, 3);
  const desk = products.slice(0, 3);

  return (
    <>
      <Hero latest={latest[0]} />
      <section className="dh-stats" aria-label="This volume">
        <div className="dh-wrap dh-stats__grid">
          <p><strong>{articles.length}</strong><span>Articles, April 2025 to May 2026</span></p>
          <p><strong>{products.length}</strong><span>Products on the desk</span></p>
          <p><strong>{categories.length}</strong><span>Categories, from reviews to platforms</span></p>
          <p><strong>Newest</strong><span>Cards stay sorted by date</span></p>
        </div>
      </section>

      <section className="dh-section">
        <div className="dh-wrap">
          <SectionHeading
            eyebrow="Categories"
            title="Five ways into the journal"
            text="Product recommendations, platform picks, and the operating notes between them."
          />
          <div className="dh-cat-grid">
            {categories.map((category) => (
              <Link key={category.slug} to={`/blog?category=${category.slug}`} className="dh-cat">
                <h3>{category.label}</h3>
                <p>{category.blurb}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="dh-section dh-section--tight">
        <div className="dh-wrap">
          <SectionHeading
            eyebrow="Blog"
            title="Latest notes"
            text="Sorted by date, newest first."
            action={<Link className="dh-btn dh-btn--line" to="/blog">All articles</Link>}
          />
          <div className="dh-grid dh-grid--3">
            {featured.map((article, index) => (
              <ArticleCard
                key={article.slug}
                article={article}
                badge={index === 0 ? 'Latest' : undefined}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="dh-section">
        <div className="dh-wrap">
          <SectionHeading
            eyebrow="Products"
            title="On the desk"
            text="Photographed pieces with a longer note in the journal."
            action={<Link className="dh-btn dh-btn--line" to="/products">All products</Link>}
          />
          <div className="dh-grid dh-grid--3">
            {desk.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="dh-section dh-section--tight">
        <div className="dh-wrap dh-split">
          <figure className="dh-frame">
            <img src="/images/about.jpg" alt="A bright desk with a laptop beside tall windows" />
          </figure>
          <div>
            <p className="dh-eyebrow">About</p>
            <h2>A desk, not a catalog.</h2>
            <p>
              DealerHub writes for independent dealers who choose what to carry and
              where to sell it. The notes are specific on purpose: a light, a label
              printer, a fee schedule, a reorder.
            </p>
            <p>
              We do not sell the products on these pages. Prices are the ones we noted
              when the piece was written. Check the current listing before you buy.
            </p>
            <Link className="dh-btn dh-btn--navy" to="/about">Read about the desk</Link>
          </div>
        </div>
      </section>

      <section className="dh-section">
        <div className="dh-wrap">
          <div className="dh-band">
            <div>
              <p className="dh-eyebrow dh-eyebrow--light">Contact</p>
              <h2>A correction, a product, a platform question.</h2>
              <p>Send a note. The desk reads them in the order they arrive.</p>
            </div>
            <Link className="dh-btn dh-btn--light" to="/contact">Write to the desk</Link>
          </div>
        </div>
      </section>
    </>
  );
}
