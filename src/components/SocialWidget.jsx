import { socialLinks } from '../data/site';
import { SocialIcon } from './Icons';

/**
 * 一组可跳转的社交媒体链接。
 * @param {{ className?: string }} props
 */
export function SocialLinks({ className = 'dh-social-links' }) {
  return (
    <ul className={className}>
      {socialLinks.map((item) => (
        <li key={item.id}>
          <a
            href={item.href}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`DealerHub on ${item.label}`}
          >
            <SocialIcon name={item.id} />
            <span>{item.label}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

/**
 * 固定在视口一侧的社交小部件。
 */
export function SocialWidget() {
  return (
    <aside className="dh-social-float" aria-label="Social media">
      <p>Follow</p>
      <SocialLinks className="dh-social-links dh-social-links--float" />
    </aside>
  );
}
