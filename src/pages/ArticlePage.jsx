import { Link, useParams } from 'react-router-dom';
import { getArticleBySlug, getRelatedArticles } from '../data/articles';
import { usePageMeta } from '../hooks/usePageMeta';
import { formatDate, readingMinutes } from '../utils/format';
import { ArticleBody } from '../components/ArticleBody';
import { ArticleCard } from '../components/ArticleCard';
import { NotFoundPage } from './NotFoundPage';

/**
 * 文章详情页。
 */
export function ArticlePage() {
  const { slug } = useParams();
  const article = getArticleBySlug(slug);

  usePageMeta(
    article ? `${article.title} · DealerHub` : 'Article · DealerHub',
    article?.excerpt,
  );

  if (!article) return <NotFoundPage />;

  const related = getRelatedArticles(article);
  const minutes = readingMinutes(article.content);

  return (
    <article className="dh-section">
      <div className="dh-wrap dh-article">
        <p className="dh-crumbs">
          <Link to="/">Home</Link>
          <span aria-hidden="true">/</span>
          <Link to="/blog">Blog</Link>
          <span aria-hidden="true">/</span>
          <span>{article.category}</span>
        </p>
        <p className="dh-eyebrow">{article.category}</p>
        <h1>{article.title}</h1>
        <p className="dh-standfirst">{article.excerpt}</p>
        <p className="dh-byline">
          <time dateTime={article.date}>{formatDate(article.date)}</time>
          <span>{minutes} min read</span>
          <span>DealerHub Desk</span>
        </p>
        <img className="dh-article-cover" src={article.cover} alt={article.coverAlt} />
        <ArticleBody blocks={article.content} />
      </div>
      <div className="dh-wrap dh-related">
        <h2>More from the journal</h2>
        <div className="dh-grid dh-grid--3">
          {related.map((item) => (
            <ArticleCard key={item.slug} article={item} />
          ))}
        </div>
      </div>
    </article>
  );
}
