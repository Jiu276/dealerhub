/**
 * 分类筛选。
 * @param {{ options: { slug: string, label: string }[], value: string, onChange: (slug: string) => void }} props
 */
export function CategoryFilter({ options, value, onChange }) {
  return (
    <div className="dh-chips" role="toolbar" aria-label="Categories">
      {options.map((option) => {
        const active = option.slug === value;
        return (
          <button
            key={option.slug}
            type="button"
            className={active ? 'dh-chip is-active' : 'dh-chip'}
            aria-pressed={active}
            onClick={() => onChange(option.slug)}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
