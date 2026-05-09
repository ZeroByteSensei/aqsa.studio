import Link from 'next/link';
import { ArrowRight } from '../icons';
import Marquee from '../Marquee';

export default function HeroMarquee() {
  return (
    <section className="section" style={{ paddingTop: 80, paddingBottom: 0, borderTop: 0 }}>
      <div className="container">
        <div className="fade-in" style={{ marginBottom: 48 }}>
          <span className="eyebrow">Independent social-first studio · Est. 2022</span>
        </div>
        <h1
          className="h-display fade-in delay-1"
          style={{ marginBottom: 56, textAlign: 'center' }}
        >
          Social media,
          <br />
          <span className="serif" style={{ color: 'var(--accent)' }}>
            seriously
          </span>{' '}
          done.
        </h1>
        <div
          className="fade-in delay-2"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: 32,
            marginBottom: 56,
            alignItems: 'end',
          }}
        >
          <p className="lead" style={{ maxWidth: '32ch' }}>
            A boutique social studio for ambitious brands that refuse to look like everyone else.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
            <Link href="/portfolio" className="btn btn-primary">
              View the work <ArrowRight size={16} />
            </Link>
            <Link href="/contact" className="btn btn-secondary">
              Book a call
            </Link>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div
              className="mono"
              style={{ fontSize: 11, color: 'var(--fg-3)', letterSpacing: '0.08em', marginBottom: 8 }}
            >
              ↳ NOW BOOKING
            </div>
            <div
              style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 500 }}
            >
              Q3 — Q4 / 2026
            </div>
          </div>
        </div>
      </div>
      <Marquee
        items={[
          '100+ clients worked with',
          '1M+ reach generated',
          '50K+ engagement driven',
          '50+ brands scaled',
          'Strategy-first, always',
        ]}
      />
    </section>
  );
}
