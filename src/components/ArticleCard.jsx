import { Link } from 'react-router-dom';
import { formatDate, readingMinutes } from '../utils/format';

/**
 * 文章卡片。列表按传入顺序展示，页面负责从新到旧排序。
 * @param {{ article: Record<string, unknown>, badge?: string }} props
 */
export function ArticleCard({ article, badge }) {
  const minutes = readingMinutes(article.content);

  return (
    <article className="dh-card dh-rise">
      <Link to={`/blog/${article.slug}`} className="dh-card__link">
        <div className="dh-card__media">
          <img src={article.cover} alt={article.coverAlt} loading="lazy" />
          {badge ? <span className="dh-badge">{badge}</span> : null}
        </div>
        <div className="dh-card__body">
          <p className="dh-kicker">
            <span>{article.category}</span>
            <time dateTime={article.date}>{formatDate(article.date)}</time>
          </p>
          <h3>{article.title}</h3>
          <p className="dh-card__excerpt">{article.excerpt}</p>
          <p className="dh-card__more">{minutes} min read</p>
        </div>
      </Link>
    </article>
  );
}
