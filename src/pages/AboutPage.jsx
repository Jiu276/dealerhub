import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';

/**
 * 关于页面。
 */
export function AboutPage() {
  usePageMeta(
    'About · DealerHub',
    'DealerHub is an independent desk for product reviews, platform notes, and the work of selling.',
  );

  return (
    <section className="dh-section">
      <div className="dh-wrap dh-article">
        <p className="dh-eyebrow">The desk</p>
        <h1>About DealerHub</h1>
        <p className="dh-standfirst">
          DealerHub is an English-language journal for independent dealers.
          We write about what to carry, where to sell it, and the small tools
          that make a packing table less chaotic.
        </p>
        <figure className="dh-frame">
          <img src="/images/about.jpg" alt="A bright desk with a laptop beside tall windows" />
          <figcaption>A quiet desk of the kind these notes are written for.</figcaption>
        </figure>
        <div className="dh-prose">
          <h2>What we publish</h2>
          <p>
            Product reviews, platform recommendations, buying guides, and operating
            notes. The current volume runs from April 2025 to May 2026. New pieces
            sit at the top of the blog because the list is sorted by date.
          </p>
          <h2>How a note gets made</h2>
          <ul>
            <li>We keep the object on the bench long enough to know if it is in the way.</li>
            <li>We read the fee schedule in the seller dashboard, not from memory.</li>
            <li>We say who should skip a product. A review that fits everyone is an advertisement.</li>
            <li>Noted prices are the prices on the day of the note. They move.</li>
          </ul>
          <h2>What this desk is not</h2>
          <p>
            DealerHub does not sell the products in these pages and does not take a
            cut of a reader’s order. A product page is a description and a photograph,
            then a link back to the longer note. If a fact has gone stale, the contact
            page is the correction box.
          </p>
        </div>
        <Link className="dh-btn dh-btn--navy" to="/contact">Write to the desk</Link>
      </div>
    </section>
  );
}
