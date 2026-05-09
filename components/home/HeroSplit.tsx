import Link from 'next/link';
import { ArrowRight } from '../icons';
import PortraitPlaceholder from '../PortraitPlaceholder';

export default function HeroSplit() {
  return (
    <section className="section" style={{ paddingTop: 60, paddingBottom: 80, borderTop: 0 }}>
      <div className="container">
        <div
          className="hero-split"
          style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 64, alignItems: 'stretch' }}
        >
          <div
            className="fade-in"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              paddingTop: 40,
              paddingBottom: 20,
              gap: 48,
            }}
          >
            <span className="eyebrow">Aqsa — Social Strategist &amp; Studio</span>
            <h1 className="h-display" style={{ fontSize: 'clamp(56px, 8.5vw, 140px)' }}>
              Built to <span className="serif">grow.</span>
              <br />
              Designed to <br />
              <span style={{ color: 'var(--accent)' }}>convert.</span>
            </h1>
            <div>
              <p className="lead" style={{ marginBottom: 32 }}>
                Helping brands scale visibility, engagement and conversions through strategic content
                and data-driven execution — across every platform that matters.
              </p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <Link href="/portfolio" className="btn btn-primary">
                  View my work <ArrowRight size={16} />
                </Link>
                <Link href="/contact" className="btn btn-secondary">
                  Book a call
                </Link>
              </div>
            </div>
          </div>

          <div className="fade-in delay-1" style={{ position: 'relative', minHeight: 540 }}>
            <PortraitPlaceholder aspect="4/5" label="PORTRAIT — AQSA · STUDIO" />
            <div
              style={{
                position: 'absolute',
                bottom: 16,
                right: -16,
                background: 'var(--accent)',
                color: 'var(--accent-fg)',
                padding: '16px 20px',
                maxWidth: 240,
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                letterSpacing: '0.06em',
                lineHeight: 1.5,
              }}
            >
              ↳ STRATEGY · CONTENT · GROWTH
              <br />
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 14,
                  fontWeight: 500,
                  letterSpacing: '-0.01em',
                }}
              >
                Karachi → Worldwide
              </span>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .hero-split { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
