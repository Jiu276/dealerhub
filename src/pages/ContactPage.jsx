import { useState } from 'react';
import { usePageMeta } from '../hooks/usePageMeta';
import { SocialLinks } from '../components/SocialWidget';

const topics = [
  'Product question',
  'Platform question',
  'A correction',
  'Partnership',
  'Something else',
];

/**
 * 校验联系表单。
 * @param {{ name: string, email: string, message: string }} values
 * @returns {Record<string, string>}
 */
function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = 'Please add your name.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'Enter a valid email address.';
  }
  if (values.message.trim().length < 20) {
    errors.message = 'Write at least a sentence or two (20 characters).';
  }
  return errors;
}

/**
 * 联系页面。
 */
export function ContactPage() {
  usePageMeta(
    'Contact · DealerHub',
    'Write to the DealerHub desk about a product, a platform, or a correction.',
  );

  const [values, setValues] = useState({
    name: '',
    email: '',
    topic: topics[0],
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const setField = (key, value) => {
    setValues((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) setSent(true);
  };

  return (
    <section className="dh-section">
      <div className="dh-wrap">
        <header className="dh-page-intro">
          <p className="dh-eyebrow">The desk</p>
          <h1>Contact</h1>
          <p>Product questions, platform questions, and corrections. Weekday notes are read first.</p>
        </header>
        <div className="dh-contact">
          {sent ? (
            <div className="dh-success" role="status">
              <p className="dh-eyebrow">Received</p>
              <h2>Thank you, {values.name.trim()}.</h2>
              <p>
                Your note about “{values.topic}” is in. If you write again, add the page
                or the SKU so the desk can find the listing.
              </p>
              <button type="button" className="dh-btn dh-btn--line" onClick={() => setSent(false)}>
                Write another note
              </button>
            </div>
          ) : (
            <form className="dh-form" onSubmit={onSubmit} noValidate>
              <label>
                Name
                <input
                  value={values.name}
                  onChange={(event) => setField('name', event.target.value)}
                  autoComplete="name"
                  aria-invalid={Boolean(errors.name)}
                />
                {errors.name ? <span className="dh-field-error">{errors.name}</span> : null}
              </label>
              <label>
                Email
                <input
                  type="email"
                  value={values.email}
                  onChange={(event) => setField('email', event.target.value)}
                  autoComplete="email"
                  aria-invalid={Boolean(errors.email)}
                />
                {errors.email ? <span className="dh-field-error">{errors.email}</span> : null}
              </label>
              <label>
                Topic
                <select
                  value={values.topic}
                  onChange={(event) => setField('topic', event.target.value)}
                >
                  {topics.map((topic) => (
                    <option key={topic}>{topic}</option>
                  ))}
                </select>
              </label>
              <label>
                Message
                <textarea
                  rows={6}
                  value={values.message}
                  onChange={(event) => setField('message', event.target.value)}
                  aria-invalid={Boolean(errors.message)}
                />
                {errors.message ? <span className="dh-field-error">{errors.message}</span> : null}
              </label>
              <button type="submit" className="dh-btn dh-btn--navy">Send the note</button>
            </form>
          )}
          <aside className="dh-contact__aside">
            <h2>DealerHub Desk</h2>
            <p>English edition. Notes on products, platforms, and the packing table.</p>
            <p><a href="mailto:hello@dealerhub.example">hello@dealerhub.example</a></p>
            <h2>Follow</h2>
            <SocialLinks className="dh-social-links dh-social-links--row" />
          </aside>
        </div>
      </div>
    </section>
  );
}
