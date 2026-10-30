/**
 * 文章列表分页。
 * @param {{ page: number, pageCount: number, onPage: (page: number) => void }} props
 */
export function Pagination({ page, pageCount, onPage }) {
  if (pageCount <= 1) return null;
  const items = Array.from({ length: pageCount }, (_, index) => index + 1);

  return (
    <nav className="dh-pagination" aria-label="Pagination">
      <button type="button" disabled={page === 1} onClick={() => onPage(page - 1)}>
        Previous
      </button>
      {items.map((item) => (
        <button
          key={item}
          type="button"
          className={item === page ? 'is-active' : undefined}
          aria-current={item === page ? 'page' : undefined}
          onClick={() => onPage(item)}
        >
          {item}
        </button>
      ))}
      <button type="button" disabled={page === pageCount} onClick={() => onPage(page + 1)}>
        Next
      </button>
    </nav>
  );
}
