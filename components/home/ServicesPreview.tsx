import Link from 'next/link';
import { ArrowUpRight } from '../icons';
import { IconStrategy, IconMarketing, IconDesign, IconVideo, IconWeb } from '../icons';

const services = [
  {
    num: '01',
    icon: <IconStrategy />,
    title: 'Social Media Management',
    desc: 'End-to-end management of your social presence — calendars, community, performance reviews.',
  },
  {
    num: '02',
    icon: <IconMarketing />,
    title: 'Social Media Marketing',
    desc: 'Paid + organic campaigns built around hooks, ICPs, and conversion paths that actually move metrics.',
  },
  {
    num: '03',
    icon: <IconDesign />,
    title: 'Graphic Design',
    desc: 'Editorial, scroll-stopping graphics — feeds, carousels, collateral and brand systems.',
  },
  {
    num: '04',
    icon: <IconVideo />,
    title: 'Video Editing',
    desc: 'Reels, shorts and long-form. Hooks, pacing, captions, sound design — built for the platform.',
  },
  {
    num: '05',
    icon: <IconWeb />,
    title: 'Web Development',
    desc: 'Premium sites & landing pages that convert clicks into clients. Built fast, built clean.',
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
            Five services. <span className="serif">One studio.</span>
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
                minHeight: 320,
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{ color: 'var(--accent)' }}>{s.icon}</div>
                <span className="mono" style={{ fontSize: 11, color: 'var(--fg-3)', letterSpacing: '0.08em' }}>
                  {s.num} / 05
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
              minHeight: 320,
            }}
          >
            <span className="mono" style={{ fontSize: 11, color: 'var(--fg-3)', letterSpacing: '0.08em' }}>
              ↳ ALL SERVICES
            </span>
            <div>
              <h3 className="h3" style={{ marginBottom: 16 }}>
                Need it all in one place?{' '}
                <span className="serif" style={{ color: 'var(--accent)' }}>
                  I do that too.
                </span>
              </h3>
              <Link href="/services" className="btn btn-ghost">
                Explore services <ArrowUpRight />
              </Link>
            </div>
          </div>
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
