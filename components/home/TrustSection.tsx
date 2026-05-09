const metrics = [
  { num: '100+', label: 'Clients worked with' },
  { num: '1M+', label: 'Total reach generated' },
  { num: '50K+', label: 'Engagement driven' },
  { num: '50+', label: 'Brands scaled' },
];

const clients = ['INDIA BOATS', 'ZAPDM', 'ADCON REALTY', 'ISHQA', 'LONDON SALON'];

export default function TrustSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <div className="meta">
            <span className="num">(02)</span>
            <span className="eyebrow">Numbers don&apos;t lie</span>
          </div>
          <h2 className="h2">
            Strategy that compounds. Content that <span className="serif">converts.</span>
          </h2>
        </div>

        <div
          className="trust-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 0,
            borderTop: '1px solid var(--line)',
            borderBottom: '1px solid var(--line)',
          }}
        >
          {metrics.map((m, i) => (
            <div
              key={i}
              style={{
                padding: '48px 32px',
                borderRight: i < metrics.length - 1 ? '1px solid var(--line)' : 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: 12,
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(48px, 5.5vw, 88px)',
                  lineHeight: 0.9,
                  letterSpacing: '-0.04em',
                  fontWeight: 500,
                }}
              >
                {m.num}
              </div>
              <div
                className="mono"
                style={{ fontSize: 11, letterSpacing: '0.08em', color: 'var(--fg-2)', textTransform: 'uppercase' }}
              >
                ↳ {m.label}
              </div>
            </div>
          ))}
        </div>

        <div
          className="logo-strip"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(6, 1fr)',
            marginTop: 64,
            gap: 0,
            alignItems: 'center',
          }}
        >
          <div
            className="mono"
            style={{ fontSize: 11, letterSpacing: '0.08em', color: 'var(--fg-3)', paddingRight: 24 }}
          >
            TRUSTED BY ↘
          </div>
          {clients.map((c, i) => (
            <div
              key={i}
              style={{
                padding: '20px 0',
                fontFamily: 'var(--font-display)',
                fontSize: 18,
                fontWeight: 500,
                letterSpacing: '-0.01em',
                color: 'var(--fg-2)',
                textAlign: 'center',
                borderLeft: '1px solid var(--line)',
                opacity: 0.85,
              }}
            >
              {c}
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 800px) {
          .trust-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .trust-grid > div { border-right: none !important; border-bottom: 1px solid var(--line); }
          .trust-grid > div:nth-child(odd) { border-right: 1px solid var(--line) !important; }
          .logo-strip { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}
