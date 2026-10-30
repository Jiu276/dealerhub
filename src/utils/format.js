/**
 * 日期、排序与阅读时间。
 */

/**
 * 将 ISO 日期格式化为英文长日期。
 * @param {string} iso 形如 YYYY-MM-DD
 * @returns {string}
 */
export function formatDate(iso) {
  const [year, month, day] = iso.split('-').map(Number);
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(year, month - 1, day));
}

/**
 * 按发布日期从新到旧比较。
 * @param {{ date: string }} a
 * @param {{ date: string }} b
 * @returns {number}
 */
export function byNewest(a, b) {
  if (a.date === b.date) return 0;
  return a.date < b.date ? 1 : -1;
}

/**
 * 按正文块估算阅读分钟。
 * @param {Array<Record<string, unknown>>} blocks
 * @returns {number}
 */
export function readingMinutes(blocks) {
  const text = blocks
    .map((block) => {
      if (typeof block.text === 'string') return block.text;
      if (Array.isArray(block.items)) return block.items.join(' ');
      return '';
    })
    .join(' ');
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}
