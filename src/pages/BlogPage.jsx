import { useEffect, useMemo, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { articles } from '../data/articles';
import { BLOG_PAGE_SIZE, categories } from '../data/site';
import { byNewest } from '../utils/format';
import { usePageMeta } from '../hooks/usePageMeta';
import { SearchBar } from '../components/SearchBar';
import { CategoryFilter } from '../components/CategoryFilter';
import { ArticleCard } from '../components/ArticleCard';
import { Pagination } from '../components/Pagination';

/**
 * 博客列表：分类、搜索、分页，卡片按日期从新到旧。
 */
export function BlogPage() {
  usePageMeta(
    'Blog · DealerHub',
    'Product reviews, platform recommendations, and dealer notes, newest first.',
  );

  const [params, setParams] = useSearchParams();
  const query = params.get('q') ?? '';
  const category = params.get('category') ?? 'all';
  const requestedPage = Math.max(1, Number(params.get('page') || 1) || 1);
  const skipScroll = useRef(true);

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return [...articles]
      .sort(byNewest)
      .filter((article) => category === 'all' || article.categorySlug === category)
      .filter((article) => {
        if (!needle) return true;
        const haystack = [
          article.title,
          article.excerpt,
          article.category,
          ...(article.tags ?? []),
        ]
          .join(' ')
          .toLowerCase();
        return haystack.includes(needle);
      });
  }, [query, category]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / BLOG_PAGE_SIZE));
  const page = Math.min(requestedPage, pageCount);
  const visible = filtered.slice((page - 1) * BLOG_PAGE_SIZE, page * BLOG_PAGE_SIZE);

  const update = (next) => {
    const merged = {
      q: query,
      category,
      page: String(page),
      ...next,
    };
    const clean = {};
    if (merged.q) clean.q = merged.q;
    if (merged.category && merged.category !== 'all') clean.category = merged.category;
    if (merged.page && String(merged.page) !== '1') clean.page = String(merged.page);
    setParams(clean, { replace: true });
  };

  useEffect(() => {
    if (skipScroll.current) {
      skipScroll.current = false;
      return;
    }
    document.getElementById('blog-results')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [page]);

  const options = [{ slug: 'all', label: 'All' }, ...categories.map(({ slug, label }) => ({ slug, label }))];

  return (
    <section className="dh-section">
      <div className="dh-wrap">
        <header className="dh-page-intro">
          <p className="dh-eyebrow">Journal</p>
          <h1>Blog</h1>
          <p>
            Ten articles from April 2025 through May 2026. Product reviews, platform
            recommendations, buying guides, and the work of selling. Newest first.
          </p>
        </header>

        <div className="dh-toolbar">
          <SearchBar
            value={query}
            onChange={(value) => update({ q: value, page: '1' })}
            placeholder="Search reviews, platforms, guides"
          />
          <p className="dh-sort">
            {filtered.length} {filtered.length === 1 ? 'article' : 'articles'}
            <span>Sorted by date, newest first</span>
          </p>
        </div>

        <CategoryFilter
          options={options}
          value={options.some((item) => item.slug === category) ? category : 'all'}
          onChange={(slug) => update({ category: slug, page: '1' })}
        />

        <div id="blog-results">
          {visible.length === 0 ? (
            <div className="dh-empty">
              <h2>No articles match that search.</h2>
              <p>Try a product, a platform, or a category.</p>
              <button type="button" className="dh-btn dh-btn--navy" onClick={() => update({ q: '', category: 'all', page: '1' })}>
                Clear filters
              </button>
            </div>
          ) : (
            <div className="dh-grid dh-grid--3">
              {visible.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          )}
        </div>

        <Pagination page={page} pageCount={pageCount} onPage={(next) => update({ page: String(next) })} />
      </div>
    </section>
  );
}
