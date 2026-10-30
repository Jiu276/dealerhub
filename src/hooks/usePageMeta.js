import { useEffect } from 'react';

/**
 * 设置文档标题与描述。
 * @param {string} title
 * @param {string} [description]
 */
export function usePageMeta(title, description) {
  useEffect(() => {
    document.title = title;
    if (!description) return undefined;
    const tag = document.querySelector('meta[name="description"]');
    if (tag) tag.setAttribute('content', description);
    return undefined;
  }, [title, description]);
}
