import { Link } from 'react-router-dom';

/**
 * 产品卡片。
 * @param {{ product: Record<string, unknown> }} props
 */
export function ProductCard({ product }) {
  return (
    <article className="dh-card dh-rise">
      <Link to={`/products/${product.slug}`} className="dh-card__link">
        <div className="dh-card__media">
          <img src={product.image} alt={product.imageAlt} loading="lazy" />
        </div>
        <div className="dh-card__body">
          <p className="dh-kicker">
            <span>{product.category}</span>
            <span>{product.score}</span>
          </p>
          <h3>{product.name}</h3>
          <p className="dh-card__excerpt">{product.summary}</p>
          <p className="dh-card__more">{product.priceLabel}</p>
        </div>
      </Link>
    </article>
  );
}
