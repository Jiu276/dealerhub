/**
 * 站点导航、分类与社交链接。
 */

/** @type {{ to: string, label: string, end?: boolean }[]} */
export const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/blog', label: 'Blog' },
  { to: '/products', label: 'Products' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

/** @type {{ slug: string, label: string, blurb: string }[]} */
export const categories = [
  {
    slug: 'product-reviews',
    label: 'Product Reviews',
    blurb: 'Gear we kept on the packing table long enough to trust.',
  },
  {
    slug: 'platform-picks',
    label: 'Platform Picks',
    blurb: 'Where independent dealers restock and where they sell.',
  },
  {
    slug: 'buying-guides',
    label: 'Buying Guides',
    blurb: 'Short lists for cameras, lights, and the tools around them.',
  },
  {
    slug: 'seller-operations',
    label: 'Seller Operations',
    blurb: 'Inventory, packing, and the Friday work that slips.',
  },
  {
    slug: 'industry-notes',
    label: 'Industry Notes',
    blurb: 'Fees, policies, and the fine print that changes a margin.',
  },
];

/** @type {{ id: string, label: string, href: string }[]} */
export const socialLinks = [
  { id: 'x', label: 'X', href: 'https://x.com' },
  { id: 'instagram', label: 'Instagram', href: 'https://www.instagram.com' },
  { id: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com' },
  { id: 'youtube', label: 'YouTube', href: 'https://www.youtube.com' },
  { id: 'pinterest', label: 'Pinterest', href: 'https://www.pinterest.com' },
];

/** 博客列表每页文章数。 */
export const BLOG_PAGE_SIZE = 6;

/**
 * 用分类 slug 取显示名称。
 * @param {string} slug
 * @returns {string}
 */
export function categoryLabel(slug) {
  return categories.find((item) => item.slug === slug)?.label ?? slug;
}
