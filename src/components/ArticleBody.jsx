import { Link } from 'react-router-dom';
import { getProductBySlug } from '../data/products';

/**
 * 渲染文章结构化正文。
 * @param {{ blocks: Array<Record<string, unknown>> }} props
 */
export function ArticleBody({ blocks }) {
  return (
    <div className="dh-prose">
      {blocks.map((block, index) => {
        const key = `${block.type}-${index}`;

        if (block.type === 'p') return <p key={key}>{block.text}</p>;
        if (block.type === 'h2') return <h2 key={key}>{block.text}</h2>;

        if (block.type === 'quote') {
          return (
            <blockquote key={key}>
              <p>{block.text}</p>
            </blockquote>
          );
        }

        if (block.type === 'list') {
          return (
            <ul key={key}>
              {block.items.map((item, itemIndex) => (
                <li key={`${index}-${itemIndex}`}>{item}</li>
              ))}
            </ul>
          );
        }

        if (block.type === 'image') {
          return (
            <figure key={key} className="dh-prose__figure">
              <img src={block.src} alt={block.alt} />
              {block.caption ? <figcaption>{block.caption}</figcaption> : null}
            </figure>
          );
        }

        if (block.type === 'product') {
          const product = getProductBySlug(block.slug);
          if (!product) return null;
          return (
            <aside key={key} className="dh-callout">
              <img src={product.image} alt={product.imageAlt} />
              <div>
                <p className="dh-eyebrow">On the desk</p>
                <h3>{product.name}</h3>
                <p>{product.summary}</p>
                <Link to={`/products/${product.slug}`}>View product</Link>
              </div>
            </aside>
          );
        }

        return null;
      })}
    </div>
  );
}
