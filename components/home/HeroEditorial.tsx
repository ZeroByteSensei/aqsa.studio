import Link from 'next/link';
import { ArrowRight } from '../icons';

export default function HeroEditorial() {
  return (
    <section className="section" style={{ paddingTop: 80, paddingBottom: 80, borderTop: 0 }}>
      <div className="container">
        <div
          className="fade-in"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            marginBottom: 48,
            flexWrap: 'wrap',
            gap: 16,
          }}
        >
          <span className="eyebrow">Limited spots available — Q3 2026</span>
          <span className="mono" style={{ fontSize: 11, color: 'var(--fg-3)', letterSpacing: '0.08em' }}>
            (01) — INDEX
          </span>
        </div>

        <h1 className="h-display fade-in delay-1" style={{ marginBottom: 40 }}>
          I turn online <br />
          <span className="serif" style={{ color: 'var(--accent)' }}>noise</span> into <br />
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.2em',
              flexWrap: 'wrap',
            }}
          >
            <span
              style={{
                display: 'inline-block',
                width: '0.9em',
                height: '0.7em',
                background: 'var(--accent)',
                verticalAlign: 'middle',
              }}
            />
            measurable
          </span>{' '}
          <br />
          <span className="serif">growth.</span>
        </h1>

        <div
          className="fade-in delay-2"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 64,
            alignItems: 'end',
            marginTop: 40,
          }}
        >
          <p className="lead" style={{ maxWidth: '44ch' }}>
            Helping businesses grow online, reach the right audience, and convert attention into
            revenue.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'flex-end' }}>
            <Link href="/portfolio" className="btn btn-primary">
              View the work <ArrowRight size={16} />
            </Link>
            <Link href="/contact" className="btn btn-secondary">
              Book a call
            </Link>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 800px) {
          .hero-editorial-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
