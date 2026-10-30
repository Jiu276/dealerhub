import { useMemo, useState } from 'react';
import { productCategoryOptions, products } from '../data/products';
import { usePageMeta } from '../hooks/usePageMeta';
import { SearchBar } from '../components/SearchBar';
import { CategoryFilter } from '../components/CategoryFilter';
import { ProductCard } from '../components/ProductCard';

/**
 * 产品列表，带图片、分类和搜索。
 */
export function ProductsPage() {
  usePageMeta(
    'Products · DealerHub',
    'Products on the DealerHub desk, with photographs and the notes that go with them.',
  );

  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');
  const options = productCategoryOptions();

  const visible = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return products.filter((product) => {
      const categoryMatch = category === 'all' || product.category === category;
      if (!categoryMatch) return false;
      if (!needle) return true;
      return `${product.name} ${product.summary} ${product.category}`.toLowerCase().includes(needle);
    });
  }, [query, category]);

  return (
    <section className="dh-section">
      <div className="dh-wrap">
        <header className="dh-page-intro">
          <p className="dh-eyebrow">The desk</p>
          <h1>Products</h1>
          <p>
            Six pieces we photographed and wrote up. Each card opens a description,
            a short specification, and the review it belongs to. Noted prices are
            not a live shelf.
          </p>
        </header>
        <div className="dh-toolbar">
          <SearchBar
            value={query}
            onChange={setQuery}
            placeholder="Search the desk"
            label="Search products"
          />
          <p className="dh-sort">
            {visible.length} {visible.length === 1 ? 'product' : 'products'}
          </p>
        </div>
        <CategoryFilter
          options={options}
          value={category}
          onChange={setCategory}
        />
        {visible.length === 0 ? (
          <div className="dh-empty">
            <h2>Nothing on the desk matches.</h2>
            <button type="button" className="dh-btn dh-btn--navy" onClick={() => { setQuery(''); setCategory('all'); }}>
              Clear filters
            </button>
          </div>
        ) : (
          <div className="dh-grid dh-grid--3">
            {visible.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
