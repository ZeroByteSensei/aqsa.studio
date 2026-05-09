import Link from 'next/link';
import { ArrowRight } from './icons';

export default function FinalCTA() {
  return (
    <section
      style={{
        borderTop: '1px solid var(--line)',
        background: 'var(--accent)',
        color: 'var(--accent-fg)',
        padding: 'var(--pad-y) 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ marginBottom: 48 }}>
          <span className="eyebrow no-dot" style={{ color: 'rgba(0,0,0,0.6)' }}>
            (07) — Let&apos;s go
          </span>
        </div>
        <h2
          className="h-display"
          style={{ marginBottom: 56, fontSize: 'clamp(56px, 9vw, 160px)' }}
        >
          Ready to grow <br />
          your brand <span className="serif">online?</span>
        </h2>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
          <Link
            href="/contact"
            className="btn"
            style={{
              background: 'var(--accent-fg)',
              color: 'var(--accent)',
              border: 'none',
            }}
          >
            Book a free consultation <ArrowRight size={16} />
          </Link>
          <Link
            href="/contact"
            className="btn"
            style={{
              background: 'transparent',
              border: '1px solid rgba(0,0,0,0.3)',
              color: 'var(--accent-fg)',
            }}
          >
            Send a message
          </Link>
          <span
            className="mono"
            style={{ fontSize: 12, letterSpacing: '0.06em', marginLeft: 'auto', opacity: 0.7 }}
          >
            ↳ I usually respond within 24 hrs
          </span>
        </div>
      </div>
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.06,
          backgroundImage: 'repeating-linear-gradient(45deg, #000 0 1px, transparent 1px 24px)',
          pointerEvents: 'none',
        }}
      />
    </section>
  );
}
