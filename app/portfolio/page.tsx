'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import FinalCTA from '@/components/FinalCTA';
import { ArrowUpRight } from '@/components/icons';
import { ALL_PROJECTS, FILTERS, type FilterType } from '@/lib/data';

export default function PortfolioPage() {
  const [filter, setFilter] = useState<FilterType>('All');
  const [view, setView] = useState<'grid' | 'list'>('grid');

  const filtered =
    filter === 'All' ? ALL_PROJECTS : ALL_PROJECTS.filter((p) => p.category === filter);

  return (
    <main>
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
            <span className="eyebrow">
              Portfolio — {filtered.length} of {ALL_PROJECTS.length} projects
            </span>
            <span className="mono" style={{ fontSize: 11, color: 'var(--fg-3)', letterSpacing: '0.08em' }}>
              2024 — 2025
            </span>
          </div>
          <h1 className="h-display fade-in delay-1" style={{ marginBottom: 64 }}>
            The <span className="serif" style={{ color: 'var(--accent)' }}>work.</span>
          </h1>

          {/* Controls */}
          <div
            className="fade-in delay-2"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingBottom: 24,
              borderBottom: '1px solid var(--line)',
              flexWrap: 'wrap',
              gap: 16,
            }}
          >
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  style={{
                    padding: '10px 18px',
                    borderRadius: 999,
                    border: `1px solid ${filter === f ? 'var(--fg)' : 'var(--line-2)'}`,
                    background: filter === f ? 'var(--fg)' : 'transparent',
                    color: filter === f ? 'var(--bg)' : 'var(--fg)',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 500,
                    fontSize: 13,
                    letterSpacing: '-0.005em',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}
                >
                  {f}
                  <span style={{ opacity: 0.5, marginLeft: 8, fontSize: 11 }}>
                    {f === 'All'
                      ? ALL_PROJECTS.length
                      : ALL_PROJECTS.filter((p) => p.category === f).length}
                  </span>
                </button>
              ))}
            </div>

            <div
              style={{
                display: 'flex',
                gap: 4,
                padding: 4,
                border: '1px solid var(--line-2)',
                borderRadius: 999,
              }}
            >
              {(['grid', 'list'] as const).map((v) => (
                <button
                  key={v}
                  onClick={() => setView(v)}
                  style={{
                    padding: '6px 14px',
                    borderRadius: 999,
                    background: view === v ? 'var(--bg-3)' : 'transparent',
                    color: view === v ? 'var(--fg)' : 'var(--fg-3)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: 11,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    cursor: 'pointer',
                  }}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ paddingBottom: 120 }}>
        <div className="container">
          {view === 'grid' ? (
            <div
              className="port-grid"
              style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}
            >
              {filtered.map((p) => (
                <a
                  key={p.id}
                  href={p.url ?? `/portfolio/${p.id}`}
                  target={p.url ? '_blank' : undefined}
                  rel={p.url ? 'noopener noreferrer' : undefined}
                  className="card-hover"
                  style={{ display: 'flex', flexDirection: 'column', gap: 16, textDecoration: 'none', color: 'inherit' }}
                >
                  {(p.image || p.url) ? (
                    <div style={{ aspectRatio: p.category === 'Web' ? '16/10' : '4/5', width: '100%', overflow: 'hidden', position: 'relative', background: 'var(--bg-2)' }}>
                      {p.image ? (
                        <Image
                          src={p.image}
                          alt={p.title}
                          fill
                          style={{ objectFit: 'cover', objectPosition: 'top' }}
                          sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 33vw"
                        />
                      ) : (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={`https://s0.wp.com/mshots/v1/${p.url}?w=1200&h=750`}
                          alt={p.title}
                          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }}
                          loading="lazy"
                        />
                      )}
                    </div>
                  ) : (
                    <div
                      className="placeholder"
                      style={{ aspectRatio: p.category === 'Web' ? '16/10' : '4/5', width: '100%' }}
                      data-label={p.title.toUpperCase()}
                    >
                      <span
                        style={{
                          fontSize: 48,
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
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      gap: 16,
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', gap: 6, marginBottom: 8 }}>
                        <span className="tag" style={{ fontSize: 10, padding: '4px 8px' }}>
                          {p.tag}
                        </span>
                      </div>
                      <h3
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: 20,
                          fontWeight: 500,
                          letterSpacing: '-0.015em',
                          marginBottom: 4,
                        }}
                      >
                        {p.title}
                      </h3>
                      <span
                        className="mono"
                        style={{ fontSize: 11, color: 'var(--fg-3)', letterSpacing: '0.06em' }}
                      >
                        {p.platform} · {p.year}
                      </span>
                    </div>
                    <ArrowUpRight />
                  </div>
                  <div
                    style={{
                      paddingTop: 12,
                      borderTop: '1px solid var(--line)',
                      display: 'flex',
                      justifyContent: 'space-between',
                    }}
                  >
                    <span className="mono" style={{ fontSize: 11, color: 'var(--fg-3)', letterSpacing: '0.06em' }}>
                      {p.url ? '↳ LIVE SITE' : '↳ RESULT'}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontWeight: 500,
                        fontSize: 14,
                        color: 'var(--accent)',
                      }}
                    >
                      {p.url ? 'View site ↗' : p.result}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          ) : (
            <div style={{ borderTop: '1px solid var(--line)' }}>
              {filtered.map((p, i) => (
                <a
                  key={p.id}
                  href={p.url ?? `/portfolio/${p.id}`}
                  target={p.url ? '_blank' : undefined}
                  rel={p.url ? 'noopener noreferrer' : undefined}
                  className="port-list-row"
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '60px 1.4fr 1fr 1fr 1fr 40px',
                    gap: 24,
                    padding: '24px 0',
                    borderBottom: '1px solid var(--line)',
                    alignItems: 'center',
                    transition: 'background 0.2s, padding 0.2s',
                    textDecoration: 'none',
                    color: 'inherit',
                  }}
                >
                  <span className="mono" style={{ fontSize: 12, color: 'var(--fg-3)', letterSpacing: '0.06em' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 22,
                      fontWeight: 500,
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {p.title}
                  </div>
                  <span className="mono" style={{ fontSize: 12, color: 'var(--fg-2)', letterSpacing: '0.04em' }}>
                    {p.tag}
                  </span>
                  <span className="mono" style={{ fontSize: 12, color: 'var(--fg-2)', letterSpacing: '0.04em' }}>
                    {p.platform}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 15,
                      fontWeight: 500,
                      color: 'var(--accent)',
                    }}
                  >
                    {p.url ? 'View site ↗' : p.result}
                  </span>
                  <ArrowUpRight />
                </a>
              ))}
            </div>
          )}
        </div>
        <style>{`
          @media (max-width: 900px) {
            .port-grid { grid-template-columns: repeat(2, 1fr) !important; }
            .port-list-row { grid-template-columns: 40px 1.4fr 1fr 40px !important; }
            .port-list-row > *:nth-child(4), .port-list-row > *:nth-child(5) { display: none; }
          }
          @media (max-width: 560px) {
            .port-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      <FinalCTA />
    </main>
  );
}
