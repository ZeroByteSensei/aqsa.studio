import Link from 'next/link';
import { ArrowUpRight } from '../icons';

const projects = [
  { id: 'aurelio', title: 'Aurelio Skin', platform: 'Instagram · TikTok', result: '+412% follower growth', tag: 'DTC Beauty', featured: true },
  { id: 'northwave', title: 'Northwave Coffee', platform: 'Instagram · Reels', result: '2.4M organic reach', tag: 'F&B' },
  { id: 'figment', title: 'Figment Studio', platform: 'LinkedIn', result: '5× inbound leads', tag: 'B2B SaaS' },
  { id: 'paloma', title: 'Paloma & Co', platform: 'Campaign', result: '184% sales lift', tag: 'Lifestyle' },
];

export default function PortfolioPreview() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <div className="meta">
            <span className="num">(04)</span>
            <span className="eyebrow">Selected work</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', flexWrap: 'wrap', gap: 16 }}>
            <h2 className="h2">
              Recent <span className="serif">case studies.</span>
            </h2>
            <Link href="/portfolio" className="btn btn-ghost">
              View all (12) <ArrowUpRight />
            </Link>
          </div>
        </div>

        <div
          className="portfolio-grid"
          style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 24 }}
        >
          {/* Featured */}
          <Link href="/portfolio/aurelio" className="card-hover" style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div
              className="placeholder"
              style={{ aspectRatio: '16/10', width: '100%' }}
              data-label="HERO CAMPAIGN — AURELIO SKIN"
            >
              <span
                style={{
                  fontSize: 64,
                  fontFamily: 'var(--font-serif)',
                  fontStyle: 'italic',
                  color: 'var(--fg-3)',
                  opacity: 0.4,
                }}
              >
                A.
              </span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 24 }}>
              <div>
                <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
                  <span className="tag">Featured</span>
                  <span className="tag">{projects[0].tag}</span>
                </div>
                <h3 className="h3" style={{ marginBottom: 4 }}>{projects[0].title}</h3>
                <span className="mono" style={{ fontSize: 12, color: 'var(--fg-3)', letterSpacing: '0.06em' }}>
                  {projects[0].platform}
                </span>
              </div>
              <div style={{ textAlign: 'right', flexShrink: 0 }}>
                <div className="mono" style={{ fontSize: 11, color: 'var(--fg-3)', letterSpacing: '0.08em', marginBottom: 4 }}>
                  ↳ RESULT
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 22,
                    fontWeight: 500,
                    color: 'var(--accent)',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {projects[0].result}
                </div>
              </div>
            </div>
          </Link>

          {/* Stack of 3 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {projects.slice(1).map((p) => (
              <Link
                key={p.id}
                href={`/portfolio/${p.id}`}
                className="card-hover"
                style={{ display: 'flex', flexDirection: 'column', gap: 12 }}
              >
                <div
                  className="placeholder"
                  style={{ aspectRatio: '4/3', width: '100%' }}
                  data-label={p.title.toUpperCase()}
                >
                  <span
                    style={{
                      fontSize: 36,
                      fontFamily: 'var(--font-serif)',
                      fontStyle: 'italic',
                      color: 'var(--fg-3)',
                      opacity: 0.4,
                    }}
                  >
                    {p.title[0]}.
                  </span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <div>
                    <div
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 17,
                        fontWeight: 500,
                        marginBottom: 2,
                      }}
                    >
                      {p.title}
                    </div>
                    <span className="mono" style={{ fontSize: 11, color: 'var(--fg-3)', letterSpacing: '0.06em' }}>
                      {p.platform}
                    </span>
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 14,
                      fontWeight: 500,
                      color: 'var(--accent)',
                    }}
                  >
                    {p.result}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 800px) {
          .portfolio-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
