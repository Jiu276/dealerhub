import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks/usePageMeta';

/**
 * 未找到页面。
 */
export function NotFoundPage() {
  usePageMeta('Page not found · DealerHub', 'That page is not on the DealerHub desk.');

  return (
    <section className="dh-section">
      <div className="dh-wrap dh-empty">
        <p className="dh-eyebrow">404</p>
        <h1>This page is not on the desk.</h1>
        <p>The link may be old. The journal and the product shelf are still here.</p>
        <Link className="dh-btn dh-btn--navy" to="/">Back to home</Link>
      </div>
    </section>
  );
}
