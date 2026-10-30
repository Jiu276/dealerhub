import { Link, useParams } from 'react-router-dom';
import { getProductBySlug } from '../data/products';
import { usePageMeta } from '../hooks/usePageMeta';
import { NotFoundPage } from './NotFoundPage';

/**
 * 产品详情：图片、描述、规格，以及对应测评。
 */
export function ProductPage() {
  const { slug } = useParams();
  const product = getProductBySlug(slug);

  usePageMeta(
    product ? `${product.name} · DealerHub` : 'Product · DealerHub',
    product?.summary,
  );

  if (!product) return <NotFoundPage />;

  const galleryClass = product.gallery.length > 1 ? 'dh-gallery dh-gallery--pair' : 'dh-gallery';

  return (
    <article className="dh-section">
      <div className="dh-wrap">
        <p className="dh-crumbs">
          <Link to="/">Home</Link>
          <span aria-hidden="true">/</span>
          <Link to="/products">Products</Link>
          <span aria-hidden="true">/</span>
          <span>{product.category}</span>
        </p>
        <div className={galleryClass}>
          {product.gallery.map((shot) => (
            <img key={shot.src} src={shot.src} alt={shot.alt} />
          ))}
        </div>
        <div className="dh-product">
          <p className="dh-eyebrow">{product.category}</p>
          <h1>{product.name}</h1>
          <p className="dh-product__score">
            <span>{product.priceLabel}</span>
            <span>Desk score {product.score}</span>
          </p>
          <p className="dh-standfirst">{product.summary}</p>
          {product.description.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <h2>On the card</h2>
          <dl className="dh-specs">
            {product.specs.map((spec) => (
              <div key={spec.label}>
                <dt>{spec.label}</dt>
                <dd>{spec.value}</dd>
              </div>
            ))}
          </dl>
          <p className="dh-product__best"><strong>Best for.</strong> {product.bestFor}</p>
          <div className="dh-hero__actions">
            <Link className="dh-btn dh-btn--navy" to={`/blog/${product.reviewSlug}`}>
              Read the review
            </Link>
            <Link className="dh-btn dh-btn--line" to="/contact">Ask the desk</Link>
          </div>
        </div>
      </div>
    </article>
  );
}
