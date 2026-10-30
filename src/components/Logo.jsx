import { Link } from 'react-router-dom';

/**
 * DealerHub 标志。点击回到首页。
 */
export function Logo() {
  return (
    <Link to="/" className="dh-logo" aria-label="DealerHub home">
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <rect x="2" y="2" width="12" height="12" rx="2.5" />
        <rect x="18" y="2" width="12" height="12" rx="2.5" opacity="0.45" />
        <rect x="2" y="18" width="12" height="12" rx="2.5" opacity="0.45" />
        <rect className="dh-logo__brass" x="18" y="18" width="12" height="12" rx="2.5" />
      </svg>
      <span>DealerHub</span>
    </Link>
  );
}
