import Link from 'next/link';
import { notFound } from 'next/navigation';
import FinalCTA from '@/components/FinalCTA';
import { ArrowRight, ArrowUpRight } from '@/components/icons';
import { ALL_PROJECTS } from '@/lib/data';

interface Props {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return ALL_PROJECTS.map((p) => ({ id: p.id }));
}

const caseStudySections = [
  {
    num: '01',
    label: 'OVERVIEW',
    title: 'Premium skincare. Quiet feed.',
    body: 'Aurelio launched in late 2024 with strong product-market fit, beautiful packaging, and a community that loved them in person — but a social presence that felt indistinguishable from every other indie skincare brand on the feed. Their content was on-brand. It just wasn\'t on-thesis.',
  },
  {
    num: '02',
    label: 'PROBLEM',
    title: 'Look pretty isn\'t a strategy.',
    body: 'Engagement was flatlining at sub-1%. Save rates were strong but reach was stuck. The team was producing 16 polished posts a month — and nothing was compounding. We needed a sharper point of view, native-platform behavior, and a content engine that could ship fast without losing the brand.',
  },
  {
    num: '03',
    label: 'STRATEGY',
    title: 'From product brand to point-of-view brand.',
    body: 'We rebuilt the content pillars around a singular thesis: "the chemistry of slow skin." Every post had to do one of three jobs — educate, demystify, or invite. Polished hero shoots dropped to 30% of output. The other 70% became founder POV reels, ingredient deep-dives shot on iPhone, and community-led carousels. We added a paid amplification layer behind the top 10% organic posts.',
  },
  {
    num: '04',
    label: 'EXECUTION',
    title: 'Six weeks. Three new content modes.',
    body: 'We shipped a 90-day calendar across two channels. Daily community management replaced the previous 3×/week cadence. We trained the founder to shoot two reels per week from her apartment. A repurposing system turned every long-form video into 4-6 shorts, carousels, and X posts — quintupling output without quintupling effort.',
  },
];

const metrics = [
  { label: 'Followers', value: '+412%', sub: '8k → 41k' },
  { label: 'Reach', value: '8.2M', sub: 'in 90 days' },
  { label: 'Engagement', value: '+318%', sub: 'vs baseline' },
  { label: 'Revenue', value: '$1.2M', sub: 'social-attributed' },
];

const galleryLabels = [
  '9:16 REEL — INGREDIENT FILM',
  '1:1 CAROUSEL — SKIN SCIENCE',
  '9:16 REEL — FOUNDER POV',
  '4:5 FEED POST — HERO SHOOT',
  '1:1 CAROUSEL — UGC ROUNDUP',
  '9:16 REEL — TUTORIAL',
];

export default async function CaseStudyPage({ params }: Props) {
  const { id } = await params;
  const project = ALL_PROJECTS.find((p) => p.id === id);
  if (!project) notFound();

  // For all non-aurelio projects, we show a generic case study layout
  const isAurelio = id === 'aurelio';

  return (
    <main>
      {/* Header */}
      <section className="section" style={{ borderTop: 0, paddingBottom: 60 }}>
        <div className="container">
          <Link href="/portfolio" className="btn btn-ghost fade-in" style={{ marginBottom: 48, padding: '8px 0' }}>
            ← All work
          </Link>
          <div
            className="fade-in delay-1"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
              marginBottom: 32,
              flexWrap: 'wrap',
              gap: 16,
            }}
          >
            <span className="eyebrow">
              Case study · {project.year}
            </span>
            <div style={{ display: 'flex', gap: 8 }}>
              <span className="tag">{project.tag}</span>
              <span className="tag">{project.platform}</span>
            </div>
          </div>
          <h1 className="h-display fade-in delay-2" style={{ marginBottom: 48 }}>
            {project.title.split(' ').map((word, i, arr) =>
              i === arr.length - 1 ? (
                <span key={i}>
                  <span className="serif" style={{ color: 'var(--accent)' }}>{word}</span>
                </span>
              ) : (
                <span key={i}>{word} </span>
              )
            )}
          </h1>
          <p className="lead fade-in delay-3" style={{ maxWidth: '60ch' }}>
            {isAurelio
              ? 'How a 9-month-old skincare brand went from a flat 8k followers to 41k engaged buyers — and rebuilt their content thesis from the ground up.'
              : `How ${project.title} achieved ${project.result} through strategy-first social content and data-driven execution.`}
          </p>
        </div>
      </section>

      {/* Hero image */}
      <section style={{ paddingBottom: 80 }}>
        <div className="container">
          <div
            className="placeholder"
            style={{ aspectRatio: '16/9', width: '100%' }}
            data-label={`HERO IMAGE — ${project.title.toUpperCase()} BRAND CAMPAIGN`}
          >
            <span
              style={{
                fontSize: 120,
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                color: 'var(--fg-3)',
                opacity: 0.3,
              }}
            >
              {project.title[0]}.
            </span>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="section">
        <div className="container">
          <div
            className="cs-grid"
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
                  padding: '40px 32px',
                  borderRight: i < 3 ? '1px solid var(--line)' : 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 8,
                }}
              >
                <div className="mono" style={{ fontSize: 11, color: 'var(--fg-3)', letterSpacing: '0.08em' }}>
                  ↳ {m.label.toUpperCase()}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(40px, 4.5vw, 64px)',
                    lineHeight: 0.9,
                    letterSpacing: '-0.035em',
                    fontWeight: 500,
                    color: 'var(--accent)',
                  }}
                >
                  {m.value}
                </div>
                <div className="mono" style={{ fontSize: 11, color: 'var(--fg-2)', letterSpacing: '0.04em' }}>
                  {m.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 800px) {
            .cs-grid { grid-template-columns: repeat(2, 1fr) !important; }
            .cs-grid > div { border-right: none !important; border-bottom: 1px solid var(--line); }
            .cs-grid > div:nth-child(odd) { border-right: 1px solid var(--line) !important; }
          }
        `}</style>
      </section>

      {/* Case study body */}
      {caseStudySections.map((s, i) => (
        <section key={s.num} className="section">
          <div className="container">
            <div
              className="cs-section"
              style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 80, alignItems: 'start' }}
            >
              <div style={{ position: 'sticky', top: 100 }}>
                <span className="mono" style={{ fontSize: 11, color: 'var(--accent)', letterSpacing: '0.08em' }}>
                  ({s.num}) — {s.label}
                </span>
              </div>
              <div>
                <h2 className="h2" style={{ marginBottom: 32, maxWidth: '16ch' }}>
                  {s.title}
                </h2>
                <p style={{ fontSize: 19, lineHeight: 1.55, color: 'var(--fg-2)', maxWidth: '60ch' }}>
                  {s.body}
                </p>
                {i === 3 && (
                  <div
                    style={{ marginTop: 48, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}
                  >
                    <div
                      className="placeholder"
                      style={{ aspectRatio: '4/5' }}
                      data-label="EXECUTION PROOF — REELS GRID"
                    />
                    <div
                      className="placeholder"
                      style={{ aspectRatio: '4/5' }}
                      data-label="EXECUTION PROOF — CAROUSELS"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
          <style>{`
            @media (max-width: 900px) {
              .cs-section { grid-template-columns: 1fr !important; gap: 24px !important; }
              .cs-section > div:first-child { position: static !important; }
            }
          `}</style>
        </section>
      ))}

      {/* Gallery */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="meta">
              <span className="num">(05)</span>
              <span className="eyebrow">Visuals</span>
            </div>
            <h2 className="h2">
              A taste of the <span className="serif">output.</span>
            </h2>
          </div>
          <div
            className="cs-gallery"
            style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}
          >
            {galleryLabels.map((label, i) => (
              <div
                key={i}
                className="placeholder"
                style={{ aspectRatio: i === 3 ? '4/5' : '9/16', width: '100%' }}
                data-label={label}
              >
                <span
                  style={{
                    fontSize: 32,
                    fontFamily: 'var(--font-serif)',
                    fontStyle: 'italic',
                    color: 'var(--fg-3)',
                    opacity: 0.3,
                  }}
                >
                  {project.title[0]}.
                </span>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 800px) { .cs-gallery { grid-template-columns: 1fr 1fr !important; } }
        `}</style>
      </section>

      {/* Pull-quote */}
      <section className="section" style={{ background: 'var(--bg-2)' }}>
        <div className="container">
          <div style={{ maxWidth: 1000 }}>
            <span className="serif" style={{ fontSize: 120, lineHeight: 0.6, color: 'var(--accent)' }}>
              &ldquo;
            </span>
            <p
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(28px, 3.5vw, 48px)',
                fontWeight: 500,
                letterSpacing: '-0.025em',
                lineHeight: 1.15,
                marginBottom: 32,
                marginTop: 16,
              }}
            >
              Aqsa rebuilt our entire content operation in{' '}
              <span className="serif" style={{ color: 'var(--accent)' }}>
                six weeks.
              </span>{' '}
              Engagement tripled. We&apos;ve never gone back.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <div
                className="placeholder"
                style={{ width: 56, height: 56, borderRadius: '50%', aspectRatio: 'unset' }}
                data-label=""
              />
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 16 }}>
                  Maya Okafor
                </div>
                <div className="mono" style={{ fontSize: 11, color: 'var(--fg-3)', letterSpacing: '0.06em', marginTop: 2 }}>
                  FOUNDER, AURELIO SKIN
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Next</span>
            <h2 className="h2">
              Want <span className="serif">similar results?</span>
            </h2>
          </div>
          <div
            className="next-grid"
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}
          >
            <Link
              href="/portfolio"
              className="card-hover"
              style={{
                border: '1px solid var(--line)',
                padding: 32,
                minHeight: 220,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: 16,
              }}
            >
              <span className="mono" style={{ fontSize: 11, color: 'var(--fg-3)', letterSpacing: '0.08em' }}>
                ↳ ALL WORK
              </span>
              <div>
                <h3 className="h3" style={{ marginBottom: 8 }}>Back to the portfolio</h3>
                <span className="mono" style={{ fontSize: 12, color: 'var(--fg-3)', letterSpacing: '0.04em' }}>
                  {ALL_PROJECTS.length} projects · 2024–2025
                </span>
              </div>
              <ArrowUpRight />
            </Link>
            <Link
              href="/contact"
              className="card-hover"
              style={{
                border: '1px solid var(--accent)',
                background: 'var(--accent)',
                color: 'var(--accent-fg)',
                padding: 32,
                minHeight: 220,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: 16,
              }}
            >
              <span className="mono" style={{ fontSize: 11, letterSpacing: '0.08em', opacity: 0.7 }}>
                ↳ READY TO START?
              </span>
              <h3 className="h3">
                Let&apos;s get your <span className="serif">numbers up.</span>
              </h3>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
        <style>{`
          @media (max-width: 800px) { .next-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>
    </main>
  );
}
