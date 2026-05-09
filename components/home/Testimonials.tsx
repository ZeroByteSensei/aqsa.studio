const quotes = [
  {
    quote: 'Aqsa rebuilt our entire content operation in six weeks. Engagement tripled. We\'ve never gone back.',
    name: 'Maya Okafor',
    role: 'Founder, Aurelio Skin',
  },
  {
    quote: 'She thinks like a strategist, designs like an art director, and ships like a senior producer. Rare combination.',
    name: 'Daniel Park',
    role: 'Head of Brand, Northwave',
  },
  {
    quote: 'The first social partner who actually understood our category. Numbers spoke for themselves — 5× inbound in one quarter.',
    name: 'Lia Fontaine',
    role: 'CMO, Figment Studio',
  },
];

export default function Testimonials() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <div className="meta">
            <span className="num">(06)</span>
            <span className="eyebrow">Kind words</span>
          </div>
          <h2 className="h2">
            What people <span className="serif">say.</span>
          </h2>
        </div>

        <div
          className="testimonial-grid"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}
        >
          {quotes.map((q, i) => (
            <div
              key={i}
              style={{
                border: '1px solid var(--line)',
                padding: 32,
                display: 'flex',
                flexDirection: 'column',
                gap: 32,
                minHeight: 320,
                background: i === 1 ? 'var(--accent)' : 'transparent',
                color: i === 1 ? 'var(--accent-fg)' : 'inherit',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 64,
                  lineHeight: 0.6,
                  fontStyle: 'italic',
                  opacity: i === 1 ? 0.7 : 0.4,
                }}
              >
                &quot;
              </div>
              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 20,
                  lineHeight: 1.35,
                  letterSpacing: '-0.015em',
                  fontWeight: 500,
                  marginTop: 'auto',
                  marginBottom: 'auto',
                }}
              >
                {q.quote}
              </p>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-end',
                  paddingTop: 16,
                  borderTop: `1px solid ${i === 1 ? 'rgba(0,0,0,0.15)' : 'var(--line)'}`,
                }}
              >
                <div>
                  <div style={{ fontWeight: 500, fontSize: 15 }}>{q.name}</div>
                  <div
                    className="mono"
                    style={{ fontSize: 11, letterSpacing: '0.06em', opacity: 0.7, marginTop: 2 }}
                  >
                    {q.role}
                  </div>
                </div>
                <div className="mono" style={{ fontSize: 11, letterSpacing: '0.08em', opacity: 0.5 }}>
                  0{i + 1}/03
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 800px) {
          .testimonial-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
