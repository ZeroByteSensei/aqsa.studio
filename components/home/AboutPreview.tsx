import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from '../icons';
import PortraitPlaceholder from '../PortraitPlaceholder';

export default function AboutPreview() {
  return (
    <section className="section" style={{ background: 'var(--bg-2)' }}>
      <div className="container">
        <div
          className="about-grid"
          style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 80, alignItems: 'center' }}
        >
          <div style={{ position: 'relative' }}>
            <PortraitPlaceholder aspect="4/5" label="PORTRAIT — AQSA / WORKSPACE" />
            <div
              style={{
                position: 'absolute',
                top: 24,
                right: -16,
                padding: '10px 14px',
                border: '1px solid var(--line-2)',
                background: 'var(--bg)',
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                letterSpacing: '0.06em',
                color: 'var(--fg-2)',
              }}
            >
              ↳ EST. 2022
            </div>
          </div>

          <div className="col" style={{ gap: 32 }}>
            <span className="eyebrow">(06) — About</span>
            <h2 className="h2">
              Hi, I&apos;m <span className="serif" style={{ color: 'var(--accent)' }}>Aqsa.</span> A
              social strategist obsessed with brands that don&apos;t just look good — but{' '}
              <span className="serif">perform.</span>
            </h2>
            <p className="lead">
              I run a small, intentional studio. No bloated retainers, no copy-paste calendars, no
              &quot;engagement-bait.&quot; Just sharp strategy, scroll-stopping content, and the kind of
              execution that makes founders breathe easier.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link href="/about" className="btn btn-secondary">
                More about me <ArrowRight size={14} />
              </Link>
              <Link href="/contact" className="btn btn-ghost">
                Let&apos;s talk <ArrowUpRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 800px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
