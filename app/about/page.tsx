import Link from 'next/link';
import FinalCTA from '@/components/FinalCTA';
import PortraitPlaceholder from '@/components/PortraitPlaceholder';
import { ArrowRight, ArrowUpRight } from '@/components/icons';

const skills = [
  'AI-driven content strategies',
  'Trend + data-backed execution',
  'Conversion-focused content',
  'Multi-platform growth',
  'End-to-end brand building',
  'Community building',
  'Influencer partnerships',
  'Analytics & reporting',
  'Paid social campaigns',
  'Brand voice & direction',
];
const industries = [
  'Travel & Transport',
  'Real Estate',
  'Beauty & Wellness',
  'Fashion & Lifestyle',
  'Tech & SaaS',
  'F&B',
  'Education',
];
const platforms = ['Instagram', 'LinkedIn', 'Google Business', 'TikTok', 'YouTube', 'Pinterest'];

const columns = [
  { label: 'Skills', items: skills },
  { label: 'Industries', items: industries },
  { label: 'Platforms', items: platforms },
];

const principles = [
  {
    num: '01',
    title: 'Strategy-first',
    body: 'Every piece of content has a purpose — reach, engage, or convert. No content gets shipped without a clear thesis attached.',
  },
  {
    num: '02',
    title: 'Data + Creativity',
    body: 'Not guessing. Testing, analyzing, optimizing. I\'ll show you the numbers — the good and the bad — and we optimize against real business outcomes.',
  },
  {
    num: '03',
    title: 'Platform-specific',
    body: 'What works on Instagram won\'t work on LinkedIn. I build for each platform\'s native logic, not lazy cross-posts that perform nowhere.',
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="section" style={{ borderTop: 0 }}>
        <div className="container">
          <div
            className="fade-in"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
              marginBottom: 48,
            }}
          >
            <span className="eyebrow">About — Aqsa</span>
            <span className="mono" style={{ fontSize: 11, color: 'var(--fg-3)', letterSpacing: '0.08em' }}>
              (00) → (04)
            </span>
          </div>
          <h1 className="h-display fade-in delay-1" style={{ marginBottom: 48 }}>
            Strategy first. <br />
            <span className="serif" style={{ color: 'var(--accent)' }}>Always.</span>
          </h1>

          <div
            className="about-intro fade-in delay-2"
            style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 80, marginTop: 80 }}
          >
            <PortraitPlaceholder aspect="4/5" label="PORTRAIT — AQSA" />
            <div className="col" style={{ gap: 24 }}>
              <span className="eyebrow no-dot mono" style={{ color: 'var(--fg-3)' }}>
                (01) — INTRO
              </span>
              <p style={{ fontSize: 22, lineHeight: 1.45, color: 'var(--fg)', maxWidth: '52ch' }}>
                Hi, I&apos;m Aqsa — a social strategist focused on building brands that don&apos;t
                just look good, but{' '}
                <span className="serif" style={{ color: 'var(--accent)' }}>perform.</span>
              </p>
              <p className="lead">
                With 5+ years of experience and 100+ clients, I specialize in creating personalized
                content strategies that actually convert — not just trends that fade in a week.
              </p>
              <p className="lead">
                I blend creativity with strategy, using data, psychology, and the latest tools to
                build content that reaches, engages, and drives real business growth. No generic
                plans. No copy-paste content.{' '}
                <span className="serif" style={{ color: 'var(--fg)' }}>
                  Just sharp execution that gets results.
                </span>
              </p>
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 800px) { .about-intro { grid-template-columns: 1fr !important; gap: 40px !important; } }
        `}</style>
      </section>

      {/* Experience */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="meta">
              <span className="num">(02)</span>
              <span className="eyebrow">Experience</span>
            </div>
            <h2 className="h2">
              5+ years. 100+ clients.{' '}
              <span className="serif">One way of working.</span>
            </h2>
          </div>

          <div
            className="exp-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr',
              gap: 0,
              borderTop: '1px solid var(--line)',
            }}
          >
            {columns.map((col, i) => (
              <div
                key={col.label}
                style={{
                  padding: '40px 32px',
                  borderRight: i < 2 ? '1px solid var(--line)' : 'none',
                  borderBottom: '1px solid var(--line)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 24,
                }}
              >
                <div className="mono" style={{ fontSize: 11, color: 'var(--fg-3)', letterSpacing: '0.08em' }}>
                  ↳ {col.label.toUpperCase()}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                  {col.items.map((item, j) => (
                    <div
                      key={j}
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 20,
                        fontWeight: 500,
                        letterSpacing: '-0.015em',
                        lineHeight: 1.4,
                        color: 'var(--fg)',
                        borderBottom: '1px solid var(--line)',
                        padding: '10px 0',
                      }}
                    >
                      <span
                        className="mono"
                        style={{ fontSize: 11, color: 'var(--fg-3)', marginRight: 12, letterSpacing: '0.06em' }}
                      >
                        {String(j + 1).padStart(2, '0')}
                      </span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 800px) { .exp-grid { grid-template-columns: 1fr !important; } .exp-grid > div { border-right: none !important; } }
        `}</style>
      </section>

      {/* Principles */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="meta">
              <span className="num">(03)</span>
              <span className="eyebrow">My approach</span>
            </div>
            <h2 className="h2">
              Three principles. <span className="serif">No exceptions.</span>
            </h2>
          </div>

          <div
            className="approach-grid"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}
          >
            {principles.map((p, i) => (
              <div
                key={i}
                style={{
                  border: '1px solid var(--line)',
                  padding: 40,
                  minHeight: 320,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 24,
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <span className="mono" style={{ fontSize: 11, color: 'var(--accent)', letterSpacing: '0.08em' }}>
                    {p.num} / 03
                  </span>
                  <span className="serif" style={{ fontSize: 56, lineHeight: 0.6, color: 'var(--fg-3)', opacity: 0.5 }}>
                    •
                  </span>
                </div>
                <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 12 }}>
                  <h3 className="h3">{p.title}</h3>
                  <p style={{ color: 'var(--fg-2)', lineHeight: 1.5, fontSize: 15 }}>{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 800px) { .approach-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      <FinalCTA />
    </main>
  );
}
