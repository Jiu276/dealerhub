import { byNewest } from '../utils/format';

/**
 * 博客文章。日期覆盖 2025 年 4 月到 2026 年 5 月。
 * 展示时按日期从新到旧排序。
 */

/** @type {Array<Record<string, unknown>>} */
export const articles = [
  {
    slug: 'wholesale-platforms-dealers-reorder',
    title: 'Five Wholesale Platforms Independent Dealers Reorder From',
    excerpt:
      'A reorder is a quieter decision than a first purchase. These are the desks we check before a second purchase order, and the questions that keep a platform on the list.',
    date: '2026-05-18',
    category: 'Platform Picks',
    categorySlug: 'platform-picks',
    cover: '/images/articles/platforms.jpg',
    coverAlt: 'Laptop showing an analytics dashboard on a glass desk',
    tags: ['wholesale', 'faire', 'shopify', 'platform', 'reorder'],
    content: [
      {
        type: 'p',
        text: 'The first order from a new platform is curiosity. The second order is the review. By May we had a short list of places independent dealers actually returned to, not because a homepage promised discovery, but because the goods, the terms, and the photographs held up once a customer asked a question.',
      },
      {
        type: 'p',
        text: 'None of these is a universal winner. A ceramics dealer and a small electronics booth should not share a purchase order. What they can share is a way of reading a platform before it earns another Friday.',
      },
      { type: 'h2', text: 'What earns a second order' },
      {
        type: 'p',
        text: 'We score a wholesale desk on five things: whether a sample matches the listing, whether the landed cost still leaves room after freight, whether you may use the product photos, whether returns are written down, and whether a person answers when a carton arrives short.',
      },
      {
        type: 'list',
        items: [
          'Faire, when the shop sells to other retailers and net terms matter more than the lowest unit price.',
          'A brand’s own dealer portal, when you already sell the line and the margin is better than any marketplace booth.',
          'Direct factory sourcing, only after a paid sample and a written spec. A catalog photo is not a contract.',
          'eBay and liquidation lots, for narrow replenishment, and only if someone can inspect before the goods hit your shelf.',
          'The reorder list from a trade show you actually walked. Slower, and often the relationship that lasts past a season.',
        ],
      },
      {
        type: 'quote',
        text: 'If you cannot explain the return rule in one sentence, you are not ready to reorder.',
      },
      { type: 'h2', text: 'Where the dashboard lies' },
      {
        type: 'p',
        text: 'Platform analytics are useful for your own shop and easy to misread everywhere else. A chart of someone else’s “active buyers” does not tell you whether those buyers want your price. We use the screen to watch our sell-through, not to borrow a stranger’s growth story.',
      },
      {
        type: 'p',
        text: 'Shopify belongs in this conversation when the catalog is yours and wholesale is a login, not the whole business. Amazon belongs when volume can carry the fee and you have already priced the returns. Etsy belongs when the goods and the photographs can live with that audience. The platform is a booth. The reorder is still your decision.',
      },
      {
        type: 'p',
        text: 'Before the next purchase order, print the fee schedule, the MAP policy, and the photo license. If any of the three is missing, the platform is still a sample, not a supplier.',
      },
    ],
  },
  {
    slug: 'aether-studio-headphones-review',
    title: 'Aether Studio Headphones, After a Week of Listing Edits',
    excerpt:
      'We wore one pair through color checks, supplier calls, and a late packing playlist. Here is what held up, and who should spend the money elsewhere.',
    date: '2026-03-22',
    category: 'Product Reviews',
    categorySlug: 'product-reviews',
    cover: '/images/articles/headphones.jpg',
    coverAlt: 'Black over-ear headphones on a yellow background',
    tags: ['headphones', 'review', 'audio', 'aether', 'desk'],
    content: [
      {
        type: 'p',
        text: 'A dealer headphone has a dull job. It has to make a product video intelligible, keep a supplier call private enough for a shared stock room, and still be on your head when you stand up to tape a carton. The Aether stayed in that rotation for a week. We did not take it to a listening bar.',
      },
      {
        type: 'p',
        text: 'The pair in the photograph is the one from the bench: closed cups, a padded band, nothing fragile sticking out to catch a mailer. The yellow ground is just the picture. On the table they sit next to the keyboard.',
      },
      { type: 'h2', text: 'What we asked them to do' },
      {
        type: 'list',
        items: [
          'A morning of listing audio, including a sixty-second clip with the street outside.',
          'Two supplier calls where the other person did not ask us to repeat the SKU.',
          'An afternoon of packing with the volume low enough that a coworker could ask a question.',
          'A forgotten charge. The cable still had to work.',
        ],
      },
      {
        type: 'p',
        text: 'The seal is the feature that matters. Open cups are pleasant and useless when a label printer is running. These close the room without the clamped feeling of a studio monitor you resent by Thursday.',
      },
      { type: 'h2', text: 'What we would change' },
      {
        type: 'p',
        text: 'The case is slim, which is correct, and easy to leave in a tote, which is how headphones go missing. We hang them on the monitor. The wireless link was steady at the desk and less steady when we walked to the far shelf. That is a fair trade. This is not a warehouse headset.',
      },
      {
        type: 'quote',
        text: 'Buy them if the edits and the calls happen in the same chair. Skip them if you already own a pair you actually put back on.',
      },
      { type: 'product', slug: 'aether-studio-headphones' },
      {
        type: 'p',
        text: 'Desk score 4.6. The noted price is $249. If a $80 pair is already in daily use, keep it. The Aether earns its place when the cheaper pair lives in a drawer.',
      },
    ],
  },
  {
    slug: 'product-photos-that-convert',
    title: 'Product Photos That Convert: A Desk Setup Under $400',
    excerpt:
      'The gallery fails when the light changes every afternoon. A soft source, a white board, and one compact camera fix more listings than a new lens.',
    date: '2026-02-09',
    category: 'Buying Guides',
    categorySlug: 'buying-guides',
    cover: '/images/articles/photography.jpg',
    coverAlt: 'Softbox lights arranged around a white product backdrop',
    tags: ['photography', 'lighting', 'camera', 'listings', 'northglass'],
    content: [
      {
        type: 'p',
        text: 'Customers forgive a plain background. They do not forgive a Thursday photo that looks like a different product from the Monday photo. Most of that gap is light, not taste. Shop windows and overhead tubes change color all day, and the listing gallery becomes a collage.',
      },
      {
        type: 'p',
        text: 'We rebuilt the packing-table setup for under $400: one soft light, a white board used as a sweep, and the compact camera that already lived in the drawer. No second lens. No seamless paper roll until the first twenty listings looked consistent.',
      },
      { type: 'h2', text: 'The order to buy in' },
      {
        type: 'list',
        items: [
          'A soft light you can put just outside the frame. The Northglass is the one on our desk.',
          'A white board or a roll of paper larger than the product.',
          'A camera that stays on the table. A phone is allowed if it is the phone you will actually use every time.',
          'A piece of tape on the floor marking where the light stands, so Tuesday matches Thursday.',
        ],
      },
      {
        type: 'image',
        src: '/images/products/northglass-wide.jpg',
        alt: 'A wide studio with soft lights over a seamless background',
        caption: 'The wide room is the idea. A single soft source and a white board do the same job on a bench.',
      },
      { type: 'h2', text: 'What the light is for' },
      {
        type: 'p',
        text: 'Put the source to the side, not on the camera. A face-on blast makes glossy goods look like a flashlight shot. Paper and fabric like a cooler color. Wood likes it a step warmer. Write the setting on the light stand. Memory is a bad white balance.',
      },
      {
        type: 'p',
        text: 'Shoot the whole product, then one detail, then the scale next to a familiar object if the listing needs it. Three frames, named the same way every time, beat a folder of twenty almost-good angles.',
      },
      { type: 'product', slug: 'northglass-soft-light' },
      {
        type: 'p',
        text: 'Skip the light if your goods are already photographed in a consistent window and you are not adding new SKUs. Buy it the week the gallery starts to look like several different shops.',
      },
    ],
  },
  {
    slug: 'storefront-or-marketplace',
    title: 'Your Own Storefront or a Marketplace Booth?',
    excerpt:
      'A shop you control and a booth you rent solve different problems. Here is the ledger we use before a dealer opens a second door.',
    date: '2025-12-16',
    category: 'Platform Picks',
    categorySlug: 'platform-picks',
    cover: '/images/articles/storefront.jpg',
    coverAlt: 'An open sign hanging in a shop window',
    tags: ['shopify', 'etsy', 'amazon', 'storefront', 'marketplace'],
    content: [
      {
        type: 'p',
        text: 'The open sign in the window is the honest version of this choice. A storefront is a place you keep. A marketplace booth is a place you rent, with rules that can change between seasons. Independent dealers usually need both, and they get into trouble when they pretend the two are the same job.',
      },
      {
        type: 'p',
        text: 'We wrote this ledger in December, after a year of watching small catalogs split themselves across a shop they owned and a booth they did not.',
      },
      { type: 'h2', text: 'Keep the storefront when' },
      {
        type: 'list',
        items: [
          'The catalog is yours, or you have permission to tell the product’s story in your own words.',
          'Repeat customers already know your name and will not search a marketplace to find you.',
          'You need the customer list. A booth that hides the buyer is a booth you cannot build on.',
          'The fee on your best seller would erase the reason you stocked it.',
        ],
      },
      { type: 'h2', text: 'Rent the booth when' },
      {
        type: 'p',
        text: 'A marketplace is a discovery tool with a cover charge. Etsy still fits goods whose photographs and story match that room. Amazon fits when you can carry the fee and the returns without flinching. eBay fits the long tail and the odd size. None of them is a brand. They are doors.',
      },
      {
        type: 'quote',
        text: 'If the only place a customer can repurchase is a booth you do not control, you have a stall, not a shop.',
      },
      {
        type: 'p',
        text: 'The practical split we recommend: the storefront holds the full story, the care notes, and the reorder. One marketplace holds the products that can survive its fee and its photo rules. Review the split twice a year, not every time a new platform launches.',
      },
    ],
  },
  {
    slug: 'keel-compact-camera-guide',
    title: 'The Compact Camera We Keep on the Packing Table',
    excerpt:
      'A fixed lens and a body that never leaves the bench beat a better camera that lives in a bag. Notes on the Keel after a season of product photos.',
    date: '2025-11-03',
    category: 'Buying Guides',
    categorySlug: 'buying-guides',
    cover: '/images/articles/camera.jpg',
    coverAlt: 'A compact camera with a fixed lens beside a kraft box',
    tags: ['camera', 'keel', 'product photography', 'buying guide'],
    content: [
      {
        type: 'p',
        text: 'The best product camera is the one still on the table when the order queue is open. We tried a larger kit. It took better frames and it missed more afternoons, because putting it away was easier than leaving it in the path of a tape gun. The Keel is small enough to stay out.',
      },
      {
        type: 'p',
        text: 'It is a fixed-lens compact. There is no second lens to debate. The frame is wide enough for a carton and tight enough for a detail crop. That constraint is the feature.',
      },
      { type: 'h2', text: 'How we actually shoot' },
      {
        type: 'list',
        items: [
          'Light first, then the product, then the camera. The Northglass does not move between SKUs.',
          'One custom white balance for the bench, written on a card taped under the table.',
          'Three frames: full object, detail, and the back or the label if the listing needs proof.',
          'Copy the card to the Sable drive before anyone formats it.',
        ],
      },
      {
        type: 'p',
        text: 'A phone can do this if the phone is dedicated to the job. The failure mode is the same phone that also takes the lunch photo and then “corrects” the color. The Keel does not have a social camera roll fighting the catalog.',
      },
      { type: 'h2', text: 'Who should skip it' },
      {
        type: 'p',
        text: 'Skip a dedicated compact if you photograph two products a month and the window light is stable. Buy one when new SKUs arrive weekly and the gallery is starting to disagree with itself. The noted price is $689. That is less than a week of listings that look like they came from three different shops.',
      },
      { type: 'product', slug: 'keel-compact-camera' },
    ],
  },
  {
    slug: 'inventory-tools-that-save-fridays',
    title: 'Inventory Tools That Give Friday Afternoons Back',
    excerpt:
      'The aisle is not the problem. The second spreadsheet is. A short list of tools and habits that stop a recount from eating the ship day.',
    date: '2025-09-19',
    category: 'Seller Operations',
    categorySlug: 'seller-operations',
    cover: '/images/articles/inventory.jpg',
    coverAlt: 'A long warehouse aisle lined with packed shelves',
    tags: ['inventory', 'operations', 'warehouse', 'sku'],
    content: [
      {
        type: 'p',
        text: 'Friday disappears in the aisle when the count in the software and the count on the shelf are both confident and both wrong. The photograph is the honest scale of the problem: a long row of cartons, and one number that has to be true before a listing stays live.',
      },
      {
        type: 'p',
        text: 'We stopped shopping for an inventory religion and wrote down the few tools that returned the afternoon. The tool is allowed to be boring. The habit is not optional.',
      },
      { type: 'h2', text: 'The small stack that works' },
      {
        type: 'list',
        items: [
          'One system of record. If a marketplace and a sheet both think they are in charge, you will recount.',
          'A scanner or the phone camera, used at the shelf, not at the desk after memory has edited the count.',
          'A receiving note that is finished before the carton is broken down. “Later” is how units vanish.',
          'A weekly exception list: negative stock, listings with zero photos, and SKUs that have not moved in ninety days.',
        ],
      },
      {
        type: 'quote',
        text: 'Do not add a second app until the first one is the only place a number is allowed to live.',
      },
      {
        type: 'p',
        text: 'Cycle counts beat annual heroics. Twenty SKUs every Friday, the same twenty that sold, is enough for a small dealer. The aisle in the picture looks like a campus. The method is the same in a single rack: touch the goods, then type.',
      },
      {
        type: 'p',
        text: 'If a platform offers inventory sync, turn it on only after a week of watching it with the sync pointed at a test SKU. A helpful overwrite of your real count is not help.',
      },
    ],
  },
  {
    slug: 'marlow-keyboard-long-sessions',
    title: 'The Marlow Keyboard After 200 Listing Sessions',
    excerpt:
      'SKU entry is a typing job. We kept a mechanical board on the bench long enough to know whether the backlight and the feel were worth $159.',
    date: '2025-08-08',
    category: 'Product Reviews',
    categorySlug: 'product-reviews',
    cover: '/images/articles/keyboard.jpg',
    coverAlt: 'Close view of a backlit mechanical keyboard',
    tags: ['keyboard', 'marlow', 'review', 'desk', 'sku'],
    content: [
      {
        type: 'p',
        text: 'Two hundred listing sessions is not a laboratory. It is a season of titles, prices, and the corrections that follow a bad paste. The Marlow stayed on the bench for that stretch. The photograph shows the keys the way they look when the room is dark and the queue is not.',
      },
      {
        type: 'p',
        text: 'We run the backlight one step above off. The picture is brighter than the desk, because a catalog photo of a keyboard wants to show the letters. In use, the light should not compete with the monitor.',
      },
      { type: 'h2', text: 'What held up' },
      {
        type: 'list',
        items: [
          'The tactile switches stay even across the letters. SKU work punishes a mushy corner of the board.',
          'USB-C on the desk means we stopped hunting for a dongle during a busy hour.',
          'The deck is compact enough to sit beside a tape gun without becoming the tape gun’s shelf.',
        ],
      },
      { type: 'h2', text: 'What we would change' },
      {
        type: 'p',
        text: 'A loud switch is a mistake in a shared stock room. Ask for the quieter tactile set. The board itself is not the noise. The switch is. We also stopped using it for anything that wanted a number pad. Listings do not.',
      },
      { type: 'product', slug: 'marlow-keyboard' },
      {
        type: 'p',
        text: 'Desk score 4.4. Noted price $159. If your current board is already something you type on for hours without thinking, leave it. Replace the one you avoid.',
      },
    ],
  },
  {
    slug: 'marketplace-fees-without-the-fog',
    title: 'Marketplace Fees Without the Fog',
    excerpt:
      'The fee that changes a margin is rarely the one in the headline. A way to read the schedule before a product is allowed onto a booth.',
    date: '2025-06-24',
    category: 'Industry Notes',
    categorySlug: 'industry-notes',
    cover: '/images/articles/fees.jpg',
    coverAlt: 'Calculator and paperwork spread across a table',
    tags: ['fees', 'margin', 'marketplace', 'pricing'],
    content: [
      {
        type: 'p',
        text: 'A fee schedule reads like a form and behaves like a price. The photograph is the right mood: paper, a calculator, and the moment before a number becomes a listing. We do not publish a universal percentage here. The schedules move, and a copied rate from last season is how a margin disappears politely.',
      },
      {
        type: 'p',
        text: 'What does not move is the shape of the bill. There is a fee to be present, a fee when the item sells, a fee when the payment clears, and a fee when the item comes back. Dealers model the first and meet the fourth later.',
      },
      { type: 'h2', text: 'Read it in this order' },
      {
        type: 'list',
        items: [
          'The referral or commission on your actual category, not the category you wish you were in.',
          'Payment processing, if it is separate. It often is.',
          'Advertising that is “optional” and, in practice, the only way the listing is seen.',
          'Returns: who pays the freight, and whether the fee is refunded when the sale is undone.',
          'Storage or long-term holding, if the booth is also your warehouse.',
        ],
      },
      {
        type: 'quote',
        text: 'Price the boring fees before you price the product. The headline rate is the invitation, not the invoice.',
      },
      {
        type: 'p',
        text: 'Write the stack on one line under the SKU: sale price, minus each fee you can name, minus the landed cost. If the line only works when every optional fee stays at zero, the product does not belong on that booth. Put it on the storefront, or do not carry it.',
      },
      {
        type: 'p',
        text: 'Check the schedule in the seller dashboard the week you add the product, and again when the platform sends a policy note. A blog, including this one, is not the invoice.',
      },
    ],
  },
  {
    slug: 'sable-ssd-for-media-sellers',
    title: 'Why Media Sellers Move Archives to the Sable SSD',
    excerpt:
      'Raw product photos fill a laptop quietly. The Sable is the 2 TB slab we copy a shoot onto before anyone clears the card.',
    date: '2025-05-11',
    category: 'Product Reviews',
    categorySlug: 'product-reviews',
    cover: '/images/articles/ssd.jpg',
    coverAlt: 'A slim gray portable SSD beside SD cards and a USB-C cable',
    tags: ['ssd', 'sable', 'storage', 'photos', 'review'],
    content: [
      {
        type: 'p',
        text: 'The failure is ordinary. A card is formatted because the next shoot needs the space, and the only copy lived on a laptop that is already full of last season. The Sable is a small aluminum drive with one job: be the place a shoot goes before the card is allowed to forget it.',
      },
      {
        type: 'p',
        text: 'Two terabytes is enough for a year of stills and the short clips we actually publish. It is not an archive of everything we have ever shot. We label the quarter on a piece of tape. Clever names do not survive a busy week.',
      },
      { type: 'h2', text: 'The habit, not the speed' },
      {
        type: 'list',
        items: [
          'Copy the card the same day. A drive in a drawer does not count.',
          'Keep the cable with the drive. The photograph shows the whole kit: slab, cards, cable.',
          'Anything you cannot reshoot also goes to a second place. One portable drive is a shelf, not a backup.',
          'Do not edit off the card. Edit off the copy, then put the card back in the camera.',
        ],
      },
      {
        type: 'p',
        text: 'Transfers are quick enough that a folder of raw frames is not a break. That is the correct amount of speed. Faster would be nice and would not fix a skipped copy.',
      },
      { type: 'product', slug: 'sable-portable-ssd' },
      {
        type: 'p',
        text: 'Desk score 4.5. Noted price $168 for 2 TB. Buy the capacity you can fill in a year, not the largest number on the shelf. Then use it the day of the shoot.',
      },
    ],
  },
  {
    slug: 'packaging-customers-remember',
    title: 'Packaging Customers Photograph Without Being Asked',
    excerpt:
      'A plain kraft box, a straight label, and a printer that lives next to the tape. The unboxing people post is usually the one that was not trying so hard.',
    date: '2025-04-17',
    category: 'Seller Operations',
    categorySlug: 'seller-operations',
    cover: '/images/articles/packaging.jpg',
    coverAlt: 'A plain kraft gift box on a white surface',
    tags: ['packaging', 'labels', 'shipping', 'unboxing', 'printer'],
    content: [
      {
        type: 'p',
        text: 'The packages customers photograph are rarely the ones with a speech printed inside the lid. They are square, clean, and easy to open without a knife fight. We learned this by watching what people actually posted: a kraft box, tissue that did not shed on the product, and a label that was straight.',
      },
      {
        type: 'p',
        text: 'April is when we rewrote the bench. The gift-box photograph is the object. The work behind it is duller and more important: a label printed where the tape is, not in another room.',
      },
      {
        type: 'image',
        src: '/images/articles/outbound.jpg',
        alt: 'A delivery van filled with labeled shipping cartons',
        caption: 'Outbound cartons. The label printer exists so this pile does not start with a walk across the shop.',
      },
      { type: 'h2', text: 'The bench, in order' },
      {
        type: 'list',
        items: [
          'A kraft box or mailer that fits. Extra air is what crushes corners and what customers mention.',
          'Tissue or a sleeve that does not leave lint on dark goods.',
          'The Ticket Tape, a thermal printer, within reach of the order screen.',
          'One line on the packing slip: what to do if the goods arrive wrong. No manifesto.',
        ],
      },
      {
        type: 'p',
        text: 'A thermal printer earns its place past a dozen labels a day. Below that, the office machine is still fine, and the walk is still short. Above that, the walk is the expensive part. Ink labels also smear on a damp loading step. Thermal does not.',
      },
      { type: 'product', slug: 'ticket-tape-label-printer' },
      {
        type: 'p',
        text: 'Skip the printed insert until the box, the tissue, and the label are already something you would photograph yourself. Customers can tell when the wrapping is a costume.',
      },
    ],
  },
];

/**
 * 按 slug 查找文章。
 * @param {string} slug
 * @returns {Record<string, unknown> | undefined}
 */
export function getArticleBySlug(slug) {
  return articles.find((article) => article.slug === slug);
}

/**
 * 相关文章：同类优先，其余用较新的文章补足。
 * @param {Record<string, unknown>} article
 * @param {number} [count]
 * @returns {Array<Record<string, unknown>>}
 */
export function getRelatedArticles(article, count = 3) {
  const others = articles.filter((item) => item.slug !== article.slug);
  const same = others
    .filter((item) => item.categorySlug === article.categorySlug)
    .sort(byNewest);
  const rest = others
    .filter((item) => item.categorySlug !== article.categorySlug)
    .sort(byNewest);
  return [...same, ...rest].slice(0, count);
}
