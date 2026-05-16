'use client';

import { useEffect, useRef, useState } from 'react';

const metrics = [
  { animateTo: 100, format: (n: number) => `${Math.round(n)}+`, label: 'Clients worked with' },
  { animateTo: 10,  format: (n: number) => `${(n / 10).toFixed(1)}M+`, label: 'Total reach generated' },
  { animateTo: 50,  format: (n: number) => `${Math.round(n)}K+`, label: 'Engagement driven' },
  { animateTo: 50,  format: (n: number) => `${Math.round(n)}+`, label: 'Brands scaled' },
];

const clients = [
  { name: 'INDIA BOATS' },
  { name: 'LONDON SALON' },
  { name: 'ZAPDM' },
  { name: 'ADCON REALTY' },
  { name: 'ISHQA' },
];

function CountUp({ animateTo, format }: { animateTo: number; format: (n: number) => string }) {
  const [display, setDisplay] = useState(format(0));
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1000;
          const startTime = performance.now();

          function tick(now: number) {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay(format(eased * animateTo));
            if (progress < 1) requestAnimationFrame(tick);
          }

          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [animateTo, format]);

  return (
    <div ref={ref} style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(48px, 5.5vw, 88px)', lineHeight: 0.9, letterSpacing: '-0.04em', fontWeight: 500 }}>
      {display}
    </div>
  );
}

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
              <CountUp animateTo={m.animateTo} format={m.format} />
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
                padding: '20px 12px',
                borderLeft: '1px solid var(--line)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 8,
              }}
            >
              {/* Logo placeholder — replace src with actual logo image */}
              <div
                style={{
                  width: 48,
                  height: 48,
                  border: '1px dashed var(--line)',
                  borderRadius: 4,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'var(--bg-2)',
                  color: 'var(--fg-3)',
                  fontSize: 9,
                  fontFamily: 'var(--font-mono)',
                  letterSpacing: '0.04em',
                }}
              >
                LOGO
              </div>
              <span
                className="mono"
                style={{
                  fontSize: 10,
                  letterSpacing: '0.06em',
                  color: 'var(--fg-2)',
                  textAlign: 'center',
                  opacity: 0.85,
                }}
              >
                {c.name}
              </span>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 800px) {
          .trust-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .trust-grid > div { border-right: none !important; border-bottom: 1px solid var(--line); }
          .trust-grid > div:nth-child(odd) { border-right: 1px solid var(--line) !important; }
          .logo-strip { grid-template-columns: repeat(3, 1fr) !important; }
          .logo-strip > div:first-child { grid-column: 1 / -1; border-left: none !important; padding-bottom: 12px; }
        }
      `}</style>
    </section>
  );
}
