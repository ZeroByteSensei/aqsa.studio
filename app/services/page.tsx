import Link from 'next/link';
import FinalCTA from '@/components/FinalCTA';
import { ArrowRight } from '@/components/icons';
import { IconStrategy, IconMarketing, IconDesign, IconVideo, IconWeb } from '@/components/icons';

const services = [
  {
    num: '01',
    icon: <IconStrategy />,
    title: 'Social Media Management',
    desc: 'End-to-end management of your social channels. The strategic brain and the steady hand.',
    deliverables: [
      'Monthly content calendar',
      'Daily community management',
      'Cross-platform publishing',
      'Monthly performance review',
      'Quarterly strategy refresh',
    ],
    ideal: 'Founders & teams without a dedicated social hire.',
    from: 'from $3,200 / month',
  },
  {
    num: '02',
    icon: <IconMarketing />,
    title: 'Social Media Marketing',
    desc: 'Paid + organic campaigns engineered for outcomes. Hooks tested, ICPs targeted, ROAS measured.',
    deliverables: [
      'Paid social strategy & creative',
      'Audience research & targeting',
      'A/B testing framework',
      'Funnel architecture',
      'Weekly performance reports',
    ],
    ideal: 'Brands ready to scale with paid acquisition.',
    from: 'from $4,800 / month',
  },
  {
    num: '03',
    icon: <IconDesign />,
    title: 'Graphic Design',
    desc: 'Editorial graphics built for the scroll. Feeds that look like magazines, not Canva templates.',
    deliverables: [
      'Feed & story templates',
      'Branded carousels',
      'Campaign collateral',
      'Mini brand systems',
      'Social-ready asset library',
    ],
    ideal: 'Brands that need premium visual output, fast.',
    from: 'from $1,800 / project',
  },
  {
    num: '04',
    icon: <IconVideo />,
    title: 'Video Editing',
    desc: 'Reels, shorts, long-form. Hooks, pacing, captions and sound design — built native to each platform.',
    deliverables: [
      'Reels & shorts editing',
      'Hook & caption strategy',
      'Sound + motion design',
      'Long-form repurposing',
      'Vertical-first treatments',
    ],
    ideal: 'Creators & brands sitting on raw footage they\'re not using.',
    from: 'from $200 / video',
  },
  {
    num: '05',
    icon: <IconWeb />,
    title: 'Web Development',
    desc: 'Premium one-page sites and landing pages. Fast, clean and engineered to convert visitors into clients.',
    deliverables: [
      'Bespoke design + build',
      'Mobile-first responsive',
      'Copywriting support',
      'Analytics + tracking setup',
      '30 days post-launch support',
    ],
    ideal: 'Creators, founders and agencies who need a real online home.',
    from: 'from $4,500 / project',
  },
];

const bundles = [
  {
    title: 'Starter',
    price: '$3.2k',
    per: '/ month',
    features: ['Social mgmt (1 platform)', '12 posts / month', 'Monthly review'],
    badge: null,
  },
  {
    title: 'Growth',
    price: '$6.4k',
    per: '/ month',
    features: ['Social mgmt (3 platforms)', '20 posts + 8 reels / month', 'Paid social campaigns', 'Bi-weekly reviews'],
    badge: 'MOST POPULAR',
  },
  {
    title: 'Studio',
    price: 'Custom',
    per: '',
    features: ['Everything in Growth', 'Web build & landing pages', 'Brand & content systems', 'Weekly working sessions'],
    badge: null,
  },
];

export default function ServicesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="section" style={{ borderTop: 0 }}>
        <div className="container">
          <div
            className="fade-in"
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 48 }}
          >
            <span className="eyebrow">Services — full menu</span>
            <span className="mono" style={{ fontSize: 11, color: 'var(--fg-3)', letterSpacing: '0.08em' }}>
              (01) → (05)
            </span>
          </div>
          <h1 className="h-display fade-in delay-1" style={{ marginBottom: 48 }}>
            One studio. <br />
            <span className="serif" style={{ color: 'var(--accent)' }}>Every</span> social need.
          </h1>
          <p className="lead fade-in delay-2" style={{ maxWidth: '52ch' }}>
            Pick a single service or bundle the whole stack. Every engagement starts with a free
            30-minute strategy call — no decks, no fluff, just a real conversation about your brand.
          </p>
        </div>
      </section>

      {/* Services list */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div style={{ borderTop: '1px solid var(--line)' }}>
            {services.map((s, i) => (
              <div
                key={i}
                className="service-row"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '80px 1.2fr 1.4fr 1fr',
                  gap: 32,
                  padding: '48px 0',
                  borderBottom: '1px solid var(--line)',
                  alignItems: 'start',
                }}
              >
                <span
                  className="mono"
                  style={{ fontSize: 12, color: 'var(--accent)', letterSpacing: '0.08em', paddingTop: 8 }}
                >
                  ({s.num})
                </span>
                <div>
                  <h3 className="h3" style={{ marginBottom: 16 }}>{s.title}</h3>
                  <p style={{ color: 'var(--fg-2)', fontSize: 15, lineHeight: 1.5, maxWidth: '40ch', marginBottom: 20 }}>
                    {s.desc}
                  </p>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                    <span className="tag">Ideal: {s.ideal}</span>
                  </div>
                </div>
                <div>
                  <div className="mono" style={{ fontSize: 11, color: 'var(--fg-3)', letterSpacing: '0.08em', marginBottom: 12 }}>
                    ↳ DELIVERABLES
                  </div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {s.deliverables.map((d, j) => (
                      <li key={j} style={{ display: 'flex', gap: 12, alignItems: 'baseline', color: 'var(--fg)', fontSize: 15 }}>
                        <span className="mono" style={{ fontSize: 11, color: 'var(--fg-3)', flexShrink: 0 }}>
                          {String(j + 1).padStart(2, '0')}
                        </span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 16 }}>
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 22,
                      fontWeight: 500,
                      letterSpacing: '-0.015em',
                      color: 'var(--accent)',
                    }}
                  >
                    {s.from}
                  </div>
                  <Link
                    href="/contact"
                    className="btn btn-secondary"
                    style={{ padding: '12px 20px', fontSize: 13 }}
                  >
                    Enquire <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 1000px) { .service-row { grid-template-columns: 1fr !important; gap: 16px !important; } }
        `}</style>
      </section>

      {/* Bundles */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="meta">
              <span className="num">(06)</span>
              <span className="eyebrow">Bundles</span>
            </div>
            <h2 className="h2">
              Or — get the <span className="serif">full stack.</span>
            </h2>
          </div>

          <div
            className="bundle-grid"
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 24 }}
          >
            {bundles.map((p, i) => (
              <div
                key={i}
                style={{
                  border: '1px solid var(--line)',
                  padding: 32,
                  background: i === 1 ? 'var(--accent)' : 'transparent',
                  color: i === 1 ? 'var(--accent-fg)' : 'inherit',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 24,
                  minHeight: 380,
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <span className="mono" style={{ fontSize: 11, letterSpacing: '0.08em', opacity: i === 1 ? 0.7 : 0.5 }}>
                    0{i + 1} / 03
                  </span>
                  {p.badge && (
                    <span
                      className="mono"
                      style={{
                        fontSize: 10,
                        letterSpacing: '0.08em',
                        padding: '4px 8px',
                        background: 'rgba(0,0,0,0.15)',
                        borderRadius: 999,
                      }}
                    >
                      {p.badge}
                    </span>
                  )}
                </div>
                <div>
                  <h3 className="h3" style={{ marginBottom: 8 }}>{p.title}</h3>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 48,
                        fontWeight: 500,
                        letterSpacing: '-0.03em',
                        lineHeight: 1,
                      }}
                    >
                      {p.price}
                    </span>
                    <span className="mono" style={{ fontSize: 12, opacity: 0.7 }}>{p.per}</span>
                  </div>
                </div>
                <ul
                  style={{
                    listStyle: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 10,
                    marginTop: 'auto',
                    marginBottom: 24,
                  }}
                >
                  {p.features.map((f, j) => (
                    <li key={j} style={{ display: 'flex', gap: 10, alignItems: 'baseline', fontSize: 14 }}>
                      <span style={{ opacity: 0.5 }}>↳</span> {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="btn"
                  style={{
                    background: i === 1 ? 'var(--accent-fg)' : 'var(--fg)',
                    color: i === 1 ? 'var(--accent)' : 'var(--bg)',
                    justifyContent: 'center',
                    width: '100%',
                  }}
                >
                  Book a strategy call <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 800px) { .bundle-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      <FinalCTA />
    </main>
  );
}
