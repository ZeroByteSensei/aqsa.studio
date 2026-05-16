import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from '../icons';

const projects = [
  { id: 'india-boats', title: 'India Boats', platform: 'Instagram · GMB · Pinterest', result: '1M+ reach generated', tag: 'Travel & Transport', featured: true, image: '/portfolio/india-boats.png', instagram: 'https://instagram.com/indiaboats' },
  { id: 'zapdm', title: 'ZapDM', platform: 'Instagram · LinkedIn', result: '25K+ engagement', tag: 'DM Automation', image: '/portfolio/zapdm.png', instagram: 'https://instagram.com/zapdm' },
  { id: 'adcon-realty', title: 'Adcon Realty', platform: 'Social Media · Personal Branding', result: 'Strong inbound growth', tag: 'Real Estate', image: '/portfolio/adcon-realty.png', instagram: 'https://instagram.com/adconrealty' },
  { id: 'ishqa', title: 'Ishqa', platform: 'Instagram · Content Shoots', result: 'High-converting feed', tag: 'Lifestyle', instagram: 'https://instagram.com/ishqa' },
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
              View all (8) <ArrowUpRight />
            </Link>
          </div>
        </div>

        <div
          className="portfolio-grid"
          style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 24 }}
        >
          {/* Featured */}
          <div className="card-hover" style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <Link href="/portfolio/india-boats" style={{ display: 'block' }}>
              <div style={{ aspectRatio: '16/10', width: '100%', overflow: 'hidden', position: 'relative', background: 'var(--bg-2)' }}>
                <Image
                  src={projects[0].image!}
                  alt={projects[0].title}
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'top' }}
                  sizes="(max-width: 800px) 100vw, 60vw"
                />
              </div>
            </Link>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 24 }}>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
                  <span className="tag">Featured</span>
                  <span className="tag">{projects[0].tag}</span>
                </div>
                <h3 className="h3" style={{ marginBottom: 4 }}>{projects[0].title}</h3>
                <span className="mono" style={{ fontSize: 12, color: 'var(--fg-3)', letterSpacing: '0.06em' }}>
                  {projects[0].platform}
                </span>
                <div style={{ display: 'flex', gap: 10, marginTop: 16 }}>
                  <Link href="/portfolio/india-boats" className="btn btn-ghost" style={{ fontSize: 12, padding: '8px 14px' }}>
                    Case study <ArrowUpRight />
                  </Link>
                  <Link
                    href={projects[0].instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost"
                    style={{ fontSize: 12, padding: '8px 14px' }}
                  >
                    Instagram ↗
                  </Link>
                </div>
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
          </div>

          {/* Stack of 3 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {projects.slice(1).map((p) => (
              <div
                key={p.id}
                className="card-hover"
                style={{ display: 'flex', flexDirection: 'column', gap: 12 }}
              >
                <Link href={`/portfolio/${p.id}`} style={{ display: 'block' }}>
                  {p.image ? (
                    <div style={{ aspectRatio: '4/3', width: '100%', overflow: 'hidden', position: 'relative', background: 'var(--bg-2)' }}>
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        style={{ objectFit: 'cover', objectPosition: 'top' }}
                        sizes="(max-width: 800px) 100vw, 30vw"
                      />
                    </div>
                  ) : (
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
                  )}
                </Link>
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
                <div style={{ display: 'flex', gap: 8 }}>
                  <Link href={`/portfolio/${p.id}`} className="btn btn-ghost" style={{ fontSize: 11, padding: '6px 12px' }}>
                    Case study <ArrowUpRight />
                  </Link>
                  <Link
                    href={p.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost"
                    style={{ fontSize: 11, padding: '6px 12px' }}
                  >
                    Instagram ↗
                  </Link>
                </div>
              </div>
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
