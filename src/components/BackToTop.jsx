import { useEffect, useState } from 'react';

/**
 * 滚动后出现的返回顶部按钮。
 */
export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 520);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      type="button"
      className={visible ? 'dh-top is-visible' : 'dh-top'}
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 5.2 5.2 12l1.4 1.4L11 8.9V19h2V8.9l4.4 4.5 1.4-1.4L12 5.2Z" />
      </svg>
    </button>
  );
}
