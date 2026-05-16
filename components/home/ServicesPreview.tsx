import Link from 'next/link';
import { ArrowUpRight } from '../icons';
import { IconMarketing, IconBranding, IconGMB, IconSEO, IconWeb, IconContent } from '../icons';

const services = [
  {
    num: '01',
    icon: <IconMarketing />,
    title: 'Social Media Marketing',
    desc: 'Paid + organic campaigns built around hooks, ICPs, and conversion paths that actually move metrics.',
  },
  {
    num: '02',
    icon: <IconBranding />,
    title: 'Personal Branding',
    desc: 'Position yourself as the go-to authority in your space — voice, visuals, and presence that stick.',
  },
  {
    num: '03',
    icon: <IconGMB />,
    title: 'Google Business Profile',
    desc: 'Fully optimized GMB presence so you show up when it matters most — local search, maps, reviews.',
  },
  {
    num: '04',
    icon: <IconSEO />,
    title: 'SEO',
    desc: 'Search visibility built on real strategy — keyword research, on-page optimization, and content architecture.',
  },
  {
    num: '05',
    icon: <IconWeb />,
    title: 'Web Designing',
    desc: 'Premium sites & landing pages that convert clicks into clients. Built fast, built clean.',
  },
  {
    num: '06',
    icon: <IconContent />,
    title: 'Content Shoots & Collabs',
    desc: 'Scroll-stopping visual content — shoots, collaborations, and creator partnerships that build brand equity.',
  },
];

export default function ServicesPreview() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <div className="meta">
            <span className="num">(03)</span>
            <span className="eyebrow">What I do</span>
          </div>
          <h2 className="h2">
            Ten services. <span className="serif">One studio.</span>
            <br />
            Zero filler.
          </h2>
        </div>

        <div
          className="services-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 0,
            borderTop: '1px solid var(--line)',
          }}
        >
          {services.map((s, i) => (
            <div
              key={i}
              className="card-hover"
              style={{
                padding: '40px 32px',
                borderBottom: '1px solid var(--line)',
                borderRight: i % 2 === 0 ? '1px solid var(--line)' : 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: 24,
                minHeight: 280,
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{ color: 'var(--accent)' }}>{s.icon}</div>
                <span className="mono" style={{ fontSize: 11, color: 'var(--fg-3)', letterSpacing: '0.08em' }}>
                  {s.num} / 10
                </span>
              </div>
              <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 12 }}>
                <h3 className="h3">{s.title}</h3>
                <p style={{ color: 'var(--fg-2)', fontSize: 15, lineHeight: 1.5, maxWidth: '44ch' }}>
                  {s.desc}
                </p>
              </div>
            </div>
          ))}

          {/* Last cell — CTA */}
          <div
            className="card-hover"
            style={{
              padding: '40px 32px',
              borderBottom: '1px solid var(--line)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              background: 'var(--bg-2)',
              minHeight: 280,
            }}
          >
            <span className="mono" style={{ fontSize: 11, color: 'var(--fg-3)', letterSpacing: '0.08em' }}>
              ↳ ALL SERVICES
            </span>
            <div>
              <h3 className="h3" style={{ marginBottom: 16 }}>
                Everything your brand needs to grow online —{' '}
                <span className="serif" style={{ color: 'var(--accent)' }}>
                  all in one place.
                </span>
              </h3>
              <Link href="/services" className="btn btn-ghost">
                Explore services <ArrowUpRight />
              </Link>
            </div>
          </div>
        </div>

        <div
          style={{
            marginTop: 48,
            paddingTop: 32,
            borderTop: '1px solid var(--line)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 16,
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontSize: 'clamp(22px, 3vw, 36px)',
              color: 'var(--fg-2)',
              letterSpacing: '-0.01em',
              lineHeight: 1.2,
            }}
          >
            Built for brands that want more.
          </p>
          <span className="mono" style={{ fontSize: 11, color: 'var(--fg-3)', letterSpacing: '0.08em' }}>
            ↳ STRATEGY · CONTENT · GROWTH
          </span>
        </div>
      </div>
      <style>{`
        @media (max-width: 800px) {
          .services-grid { grid-template-columns: 1fr !important; }
          .services-grid > div { border-right: none !important; }
        }
      `}</style>
    </section>
  );
}
