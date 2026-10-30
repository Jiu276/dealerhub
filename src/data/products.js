/**
 * 产品页数据。价格是编辑部记下的参考价，不是实时货架价。
 */

/** @type {Array<Record<string, unknown>>} */
export const products = [
  {
    slug: 'aether-studio-headphones',
    name: 'Aether Studio Headphones',
    category: 'Audio',
    priceLabel: 'Noted price $249',
    score: '4.6 / 5',
    summary:
      'Closed over-ear headphones for listing edits, supplier calls, and the hour after the last label prints.',
    image: '/images/products/aether.jpg',
    imageAlt: 'Black over-ear headphones on a yellow background',
    gallery: [
      {
        src: '/images/products/aether.jpg',
        alt: 'Black over-ear headphones photographed from above',
      },
    ],
    bestFor: 'Sellers who edit photos and take calls at the same desk',
    reviewSlug: 'aether-studio-headphones-review',
    description: [
      'The Aether is the pair we reach for when a listing needs one more pass and the shop is not quiet. The earcups close off enough of the room for a voice memo, and the band stays put when you stand up to grab a mailer.',
      'We used them across a week of catalog work: color checks, short supplier calls, and a playlist while boxes were taped. They are not a studio reference monitor. They are a dealer headphone, which is the more useful category.',
      'The yellow frame in the photograph is only the backdrop. On the bench they sit beside the keyboard, not in a case across the room. That is the whole test.',
    ],
    specs: [
      { label: 'Style', value: 'Closed, over-ear' },
      { label: 'Use', value: 'Edits, calls, packing playlists' },
      { label: 'Weight', value: 'About 250 g' },
      { label: 'Connection', value: 'Wireless, with a wired backup' },
      { label: 'Noted price', value: '$249' },
    ],
  },
  {
    slug: 'keel-compact-camera',
    name: 'Keel Compact Camera',
    category: 'Cameras',
    priceLabel: 'Noted price $689',
    score: '4.7 / 5',
    summary:
      'A fixed-lens compact that lives on the packing table and makes honest product photos without a second lens.',
    image: '/images/products/keel.jpg',
    imageAlt: 'Unbranded compact camera on a wooden packing table',
    gallery: [
      {
        src: '/images/products/keel.jpg',
        alt: 'Compact camera with a fixed lens beside a kraft box',
      },
    ],
    bestFor: 'One-person shops that photograph what they ship',
    reviewSlug: 'keel-compact-camera-guide',
    description: [
      'Most dealer photos fail because the camera is in another room. The Keel stays next to the tape. A fixed lens is wide enough for a tabletop and simple enough that a new packer can make a usable frame the same afternoon.',
      'Color stays calm once you set a custom white balance for the bench. The files are large enough to crop a detail for a marketplace gallery without looking soft.',
      'We would not take it on a landscape trip. We would hand it to the person packing orders and expect the gallery to match the goods.',
    ],
    specs: [
      { label: 'Lens', value: 'Fixed, tabletop field of view' },
      { label: 'Body', value: 'Compact, no extra lens to lose' },
      { label: 'Files', value: 'Large enough to crop a detail' },
      { label: 'Transfer', value: 'Card plus USB-C' },
      { label: 'Noted price', value: '$689' },
    ],
  },
  {
    slug: 'marlow-keyboard',
    name: 'Marlow Keyboard',
    category: 'Desk',
    priceLabel: 'Noted price $159',
    score: '4.4 / 5',
    summary:
      'A mechanical keyboard for long listing sessions, SKU entry, and the notes we write between orders.',
    image: '/images/products/marlow.jpg',
    imageAlt: 'Close view of a backlit mechanical keyboard',
    gallery: [
      {
        src: '/images/products/marlow.jpg',
        alt: 'Mechanical keyboard keys lit from beneath',
      },
    ],
    bestFor: 'Anyone who types SKUs for more than an hour',
    reviewSlug: 'marlow-keyboard-long-sessions',
    description: [
      'Listing work is typing. The Marlow is a mechanical board with a light under the caps, so a late order does not mean squinting at a legend. It stays on the bench. We do not put it away.',
      'The feel is even across the alphabet, which matters more than a custom switch story when you are correcting SKUs. The backlight in the photograph is brighter than we run it. One step above off is enough.',
      'It will not impress a keyboard forum. It will get through a catalog import without making the person next to you flinch, if you choose the quieter tactile set.',
    ],
    specs: [
      { label: 'Switches', value: 'Mechanical, tactile' },
      { label: 'Lighting', value: 'Backlit, dimmable' },
      { label: 'Connection', value: 'USB-C on the desk' },
      { label: 'Layout', value: 'Full letter block, compact deck' },
      { label: 'Noted price', value: '$159' },
    ],
  },
  {
    slug: 'sable-portable-ssd',
    name: 'Sable Portable SSD',
    category: 'Storage',
    priceLabel: 'Noted price $168',
    score: '4.5 / 5',
    summary:
      'A 2 TB slab for raw product photos, short packing clips, and the archive you do not want living only in a laptop.',
    image: '/images/products/sable.jpg',
    imageAlt: 'Slim gray portable SSD beside memory cards and a USB-C cable',
    gallery: [
      {
        src: '/images/products/sable.jpg',
        alt: 'Portable SSD on a white desk with SD cards',
      },
    ],
    bestFor: 'Media-heavy sellers with more photos than disk',
    reviewSlug: 'sable-ssd-for-media-sellers',
    description: [
      'A season of product photos fills a laptop faster than a spreadsheet warns you. The Sable is the drive we copy a shoot onto before anyone clears the card.',
      'It is a plain aluminum slab. We label the quarter on a piece of tape, not with a clever name. Transfers are quick enough that a folder of raw frames does not become a coffee break.',
      'A portable drive is a shelf, not a backup plan by itself. Anything you cannot reshoot also goes to a second place.',
    ],
    specs: [
      { label: 'Capacity', value: '2 TB' },
      { label: 'Port', value: 'USB-C' },
      { label: 'Body', value: 'Slim aluminum, no status glare' },
      { label: 'Habit', value: 'Copy the card before you format it' },
      { label: 'Noted price', value: '$168' },
    ],
  },
  {
    slug: 'northglass-soft-light',
    name: 'Northglass Soft Light',
    category: 'Lighting',
    priceLabel: 'Noted price $86',
    score: '4.3 / 5',
    summary:
      'A soft source for small goods, so Monday’s photo and Thursday’s photo can sit in the same gallery.',
    image: '/images/products/northglass.jpg',
    imageAlt: 'Softbox lights set around a white product backdrop',
    gallery: [
      {
        src: '/images/products/northglass.jpg',
        alt: 'Two soft lights and a white sweep for product photos',
      },
      {
        src: '/images/products/northglass-wide.jpg',
        alt: 'A wider studio with soft lights over a seamless background',
      },
    ],
    bestFor: 'Tabletop photos of products smaller than a shoebox',
    reviewSlug: 'product-photos-that-convert',
    description: [
      'Shop windows change color through the day. The Northglass gives the table one predictable source, so a restock photo does not look like it came from a different store.',
      'We keep the light off to the side, not blasted from the camera. Diffusion matters more than a huge power number. Paper goods like it cooler. Wood likes it a touch warmer.',
      'It is the first light we would buy before a second lens. The wide photograph shows the idea at studio scale. A single soft source and a white board will do on a packing table.',
    ],
    specs: [
      { label: 'Source', value: 'Soft, daylight-balanced' },
      { label: 'Setup', value: 'Stand, sweep, one main light' },
      { label: 'Best distance', value: 'Just outside the frame' },
      { label: 'Skip', value: 'Overhead shop fluorescents' },
      { label: 'Noted price', value: '$86' },
    ],
  },
  {
    slug: 'ticket-tape-label-printer',
    name: 'Ticket Tape Label Printer',
    category: 'Shipping',
    priceLabel: 'Noted price $129',
    score: '4.5 / 5',
    summary:
      'A 4×6 thermal printer that sits in the packing lane and ends the walk back to an office machine.',
    image: '/images/products/ticket.jpg',
    imageAlt: 'Matte black thermal label printer on a wooden packing table',
    gallery: [
      {
        src: '/images/products/ticket.jpg',
        alt: 'Thermal label printer with a blank label beside a kraft box',
      },
      {
        src: '/images/articles/packaging.jpg',
        alt: 'A plain kraft box ready to be labeled',
      },
    ],
    bestFor: 'Desks that print more than a dozen labels a day',
    reviewSlug: 'packaging-customers-remember',
    description: [
      'Ink labels smear, jam, and invite a trip across the room. The Ticket Tape is a thermal 4×6 printer meant to live where the tape lives.',
      'We pair it with the same workstation that holds the order queue. A cable is what we trust during a busy hour. The blank label in the photograph is the point: one clean rectangle, then the carton.',
      'If you ship a handful of orders a week, the office printer is still fine. Past a dozen a day, the walk costs more than the machine.',
    ],
    specs: [
      { label: 'Label', value: '4 × 6 inch thermal' },
      { label: 'Connection', value: 'USB-C on the bench' },
      { label: 'Duty', value: 'Comfortable past 50 labels a day' },
      { label: 'Place', value: 'Next to the tape, not the office' },
      { label: 'Noted price', value: '$129' },
    ],
  },
];

/**
 * 按 slug 查找产品。
 * @param {string} slug
 * @returns {Record<string, unknown> | undefined}
 */
export function getProductBySlug(slug) {
  return products.find((product) => product.slug === slug);
}

/**
 * 产品分类，含 All。
 * @returns {{ slug: string, label: string }[]}
 */
export function productCategoryOptions() {
  const names = [...new Set(products.map((product) => String(product.category)))];
  return [
    { slug: 'all', label: 'All' },
    ...names.map((name) => ({ slug: name, label: name })),
  ];
}
