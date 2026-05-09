'use client';

import { useState } from 'react';
import { ArrowRight } from '@/components/icons';

const budgetOptions = ['< $3k', '$3k–$6k', '$6k–$10k', '$10k+', 'Not sure yet'];

const socials = [
  { label: 'Instagram', handle: '@socialaqsa', href: 'https://instagram.com/socialaqsa' },
  { label: 'WhatsApp', handle: '+91 93996 81350', href: 'https://wa.me/919399681350' },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    business: '',
    budget: '',
    message: '',
  });
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSent(true);
  };

  const inputStyle = (key: string): React.CSSProperties => ({
    width: '100%',
    padding: '16px 0',
    background: 'transparent',
    border: 'none',
    borderBottom: `1px solid ${focused === key ? 'var(--accent)' : 'var(--line-2)'}`,
    color: 'var(--fg)',
    fontFamily: 'var(--font-display)',
    fontSize: 20,
    fontWeight: 500,
    letterSpacing: '-0.01em',
    outline: 'none',
    transition: 'border-color 0.2s',
  });

  return (
    <main>
      <section className="section" style={{ borderTop: 0 }}>
        <div className="container">
          <div
            className="fade-in"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
              marginBottom: 48,
            }}
          >
            <span className="eyebrow">Contact — let&apos;s work together</span>
            <span className="mono" style={{ fontSize: 11, color: 'var(--fg-3)', letterSpacing: '0.08em' }}>
              (05)
            </span>
          </div>
          <h1 className="h-display fade-in delay-1" style={{ marginBottom: 80 }}>
            Tell me about <br />
            your <span className="serif" style={{ color: 'var(--accent)' }}>brand.</span>
          </h1>

          <div
            className="contact-grid"
            style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 80 }}
          >
            {/* Form */}
            <div>
              {sent ? (
                <div
                  style={{
                    border: '1px solid var(--accent)',
                    padding: 48,
                    background: 'color-mix(in oklab, var(--accent) 8%, transparent)',
                  }}
                >
                  <div
                    className="serif"
                    style={{ fontSize: 96, color: 'var(--accent)', lineHeight: 0.8, marginBottom: 32 }}
                  >
                    ✓
                  </div>
                  <h2 className="h2" style={{ marginBottom: 24 }}>
                    Message <span className="serif">received.</span>
                  </h2>
                  <p className="lead" style={{ marginBottom: 32 }}>
                    Thanks {form.name || 'there'} — I&apos;ll respond within 24 hours, usually sooner.
                    Watch your inbox at{' '}
                    <span className="mono" style={{ color: 'var(--accent)' }}>
                      {form.email || 'your email'}
                    </span>
                    .
                  </p>
                  <button
                    onClick={() => {
                      setSent(false);
                      setForm({ name: '', email: '', business: '', budget: '', message: '' });
                    }}
                    className="btn btn-ghost"
                  >
                    Send another <ArrowRight size={14} />
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
                  <div>
                    <div
                      className="mono"
                      style={{
                        fontSize: 11,
                        color: focused === 'name' ? 'var(--accent)' : 'var(--fg-3)',
                        letterSpacing: '0.08em',
                        marginBottom: 8,
                        transition: 'color 0.2s',
                      }}
                    >
                      (01) — YOUR NAME
                    </div>
                    <input
                      type="text"
                      placeholder="e.g. Mehul Ashar"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      onFocus={() => setFocused('name')}
                      onBlur={() => setFocused(null)}
                      style={inputStyle('name')}
                      required
                    />
                  </div>

                  <div>
                    <div
                      className="mono"
                      style={{
                        fontSize: 11,
                        color: focused === 'email' ? 'var(--accent)' : 'var(--fg-3)',
                        letterSpacing: '0.08em',
                        marginBottom: 8,
                        transition: 'color 0.2s',
                      }}
                    >
                      (02) — EMAIL ADDRESS
                    </div>
                    <input
                      type="email"
                      placeholder="you@brand.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      onFocus={() => setFocused('email')}
                      onBlur={() => setFocused(null)}
                      style={inputStyle('email')}
                      required
                    />
                  </div>

                  <div>
                    <div
                      className="mono"
                      style={{
                        fontSize: 11,
                        color: focused === 'business' ? 'var(--accent)' : 'var(--fg-3)',
                        letterSpacing: '0.08em',
                        marginBottom: 8,
                        transition: 'color 0.2s',
                      }}
                    >
                      (03) — BUSINESS / BRAND
                    </div>
                    <input
                      type="text"
                      placeholder="What are you building?"
                      value={form.business}
                      onChange={(e) => setForm({ ...form, business: e.target.value })}
                      onFocus={() => setFocused('business')}
                      onBlur={() => setFocused(null)}
                      style={inputStyle('business')}
                    />
                  </div>

                  <div>
                    <div
                      className="mono"
                      style={{
                        fontSize: 11,
                        color: 'var(--fg-3)',
                        letterSpacing: '0.08em',
                        marginBottom: 8,
                      }}
                    >
                      (04) — MONTHLY BUDGET
                    </div>
                    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', paddingTop: 8 }}>
                      {budgetOptions.map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => setForm({ ...form, budget: b })}
                          style={{
                            padding: '8px 16px',
                            border: `1px solid ${form.budget === b ? 'var(--accent)' : 'var(--line-2)'}`,
                            background: form.budget === b ? 'var(--accent)' : 'transparent',
                            color: form.budget === b ? 'var(--accent-fg)' : 'var(--fg)',
                            borderRadius: 999,
                            fontFamily: 'var(--font-mono)',
                            fontSize: 12,
                            letterSpacing: '0.04em',
                            cursor: 'pointer',
                            transition: 'all 0.2s',
                          }}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div
                      className="mono"
                      style={{
                        fontSize: 11,
                        color: focused === 'message' ? 'var(--accent)' : 'var(--fg-3)',
                        letterSpacing: '0.08em',
                        marginBottom: 8,
                        transition: 'color 0.2s',
                      }}
                    >
                      (05) — TELL ME EVERYTHING
                    </div>
                    <textarea
                      placeholder="Goals, channels, timeline, anything you want me to know…"
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      onFocus={() => setFocused('message')}
                      onBlur={() => setFocused(null)}
                      rows={4}
                      style={{ ...inputStyle('message'), resize: 'vertical', lineHeight: 1.5, fontSize: 18 }}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ alignSelf: 'flex-start', marginTop: 16 }}
                  >
                    Send message <ArrowRight size={16} />
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <aside style={{ display: 'flex', flexDirection: 'column', gap: 40, paddingTop: 40 }}>
              <div>
                <div className="mono" style={{ fontSize: 11, color: 'var(--fg-3)', letterSpacing: '0.08em', marginBottom: 12 }}>
                  ↳ EMAIL DIRECTLY
                </div>
                <a
                  href="mailto:hello@aqsa.studio"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 28,
                    fontWeight: 500,
                    letterSpacing: '-0.02em',
                    color: 'var(--fg)',
                    borderBottom: '1px solid var(--line-2)',
                    paddingBottom: 4,
                  }}
                >
                  hello@aqsa.studio
                </a>
              </div>

              <div>
                <div className="mono" style={{ fontSize: 11, color: 'var(--fg-3)', letterSpacing: '0.08em', marginBottom: 12 }}>
                  ↳ ELSEWHERE
                </div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {socials.map((s, i) => (
                    <li
                      key={i}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        padding: '12px 0',
                        borderBottom: '1px solid var(--line)',
                      }}
                    >
                      <span style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 15 }}>
                        {s.label}
                      </span>
                      <a href={s.href} target="_blank" rel="noopener noreferrer" className="mono" style={{ fontSize: 13, color: 'var(--fg-2)', letterSpacing: '0.04em' }}>
                        {s.handle} ↗
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div
                style={{
                  border: '1px solid var(--line-2)',
                  padding: 24,
                  background: 'var(--bg-2)',
                }}
              >
                <div className="mono" style={{ fontSize: 11, color: 'var(--accent)', letterSpacing: '0.08em', marginBottom: 12 }}>
                  ↳ RESPONSE TIME
                </div>
                <p
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 20,
                    fontWeight: 500,
                    letterSpacing: '-0.015em',
                    lineHeight: 1.3,
                    marginBottom: 12,
                  }}
                >
                  I usually respond within{' '}
                  <span className="serif" style={{ color: 'var(--accent)' }}>
                    24 hours.
                  </span>
                </p>
                <p style={{ color: 'var(--fg-2)', fontSize: 14, lineHeight: 1.5 }}>
                  Tell me what you&apos;re building and I&apos;ll get back to you with the best way
                  I can help.
                </p>
              </div>

              <div>
                <div className="mono" style={{ fontSize: 11, color: 'var(--fg-3)', letterSpacing: '0.08em', marginBottom: 12 }}>
                  ↳ LOCATION
                </div>
                <p
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 18,
                    fontWeight: 500,
                    letterSpacing: '-0.01em',
                  }}
                >
                  Indore — 452001, India ·{' '}
                  <span className="serif" style={{ color: 'var(--accent)' }}>
                    working worldwide
                  </span>
                </p>
              </div>
            </aside>
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) { .contact-grid { grid-template-columns: 1fr !important; gap: 48px !important; } }
        `}</style>
      </section>
    </main>
  );
}
