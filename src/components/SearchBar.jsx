/**
 * 搜索框。
 * @param {{ value: string, onChange: (value: string) => void, placeholder?: string, label?: string }} props
 */
export function SearchBar({
  value,
  onChange,
  placeholder = 'Search articles',
  label = 'Search articles',
}) {
  return (
    <label className="dh-search">
      <span className="dh-sr">{label}</span>
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M10.5 4a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13Zm0 1.6a4.9 4.9 0 1 0 0 9.8 4.9 4.9 0 0 0 0-9.8ZM15.6 15l4.2 4.2-1.2 1.2-4.2-4.2 1.2-1.2Z" />
      </svg>
      <input
        type="search"
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  );
}
