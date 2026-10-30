/**
 * 区块标题。
 * @param {{ eyebrow?: string, title: string, text?: string, action?: import('react').ReactNode }} props
 */
export function SectionHeading({ eyebrow, title, text, action }) {
  return (
    <div className="dh-section-head">
      <div>
        {eyebrow ? <p className="dh-eyebrow">{eyebrow}</p> : null}
        <h2>{title}</h2>
        {text ? <p>{text}</p> : null}
      </div>
      {action || null}
    </div>
  );
}
