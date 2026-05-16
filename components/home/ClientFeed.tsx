import Link from 'next/link';

const clients = [
  {
    name: 'India Boats',
    handle: '@indiaboats',
    followers: '12.4K',
    following: '320',
    posts: 6,
    instagramUrl: 'https://instagram.com/indiaboats', // replace with actual handle
  },
  {
    name: 'London Salon',
    handle: '@london.salon',
    followers: '8.1K',
    following: '210',
    posts: 6,
    instagramUrl: 'https://instagram.com/london.salon', // replace with actual handle
  },
  {
    name: 'ZapDM',
    handle: '@zapdm',
    followers: '5.6K',
    following: '180',
    posts: 6,
    instagramUrl: 'https://instagram.com/zapdm', // replace with actual handle
  },
  {
    name: 'Adcon Realty',
    handle: '@adconrealty',
    followers: '9.3K',
    following: '250',
    posts: 6,
    instagramUrl: 'https://instagram.com/adconrealty', // replace with actual handle
  },
];

function PostPlaceholder({ index }: { index: number }) {
  return (
    <div
      style={{
        aspectRatio: '1/1',
        background: 'var(--bg-2)',
        border: '1px solid var(--line)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 10,
          color: 'var(--fg-3)',
          letterSpacing: '0.06em',
        }}
      >
        POST {index + 1}
      </span>
    </div>
  );
}

function ClientCard({ client }: { client: typeof clients[0] }) {
  return (
    <div
      style={{
        border: '1px solid var(--line)',
        overflow: 'hidden',
      }}
    >
      {/* Profile header */}
      <div
        style={{
          padding: '24px 28px',
          borderBottom: '1px solid var(--line)',
          display: 'flex',
          alignItems: 'center',
          gap: 20,
          background: 'var(--bg-2)',
        }}
      >
        {/* Avatar placeholder */}
        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: '50%',
            border: '1px dashed var(--line)',
            background: 'var(--bg)',
            flexShrink: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--fg-3)',
            fontSize: 9,
            fontFamily: 'var(--font-mono)',
            letterSpacing: '0.04em',
          }}
        >
          LOGO
        </div>

        <div style={{ flex: 1, minWidth: 0 }}>
          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 16,
              fontWeight: 500,
              letterSpacing: '-0.01em',
              marginBottom: 2,
            }}
          >
            {client.name}
          </div>
          <div
            className="mono"
            style={{ fontSize: 11, color: 'var(--fg-3)', letterSpacing: '0.04em', marginBottom: 12 }}
          >
            {client.handle}
          </div>
          <div style={{ display: 'flex', gap: 24 }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 500 }}>
                {client.followers}
              </div>
              <div className="mono" style={{ fontSize: 9, color: 'var(--fg-3)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                Followers
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 500 }}>
                {client.following}
              </div>
              <div className="mono" style={{ fontSize: 9, color: 'var(--fg-3)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                Following
              </div>
            </div>
          </div>
        </div>

        <Link
          href={client.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-ghost"
          style={{ fontSize: 11, padding: '8px 14px', flexShrink: 0 }}
        >
          View profile ↗
        </Link>
      </div>

      {/* Post grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(6, 1fr)',
          gap: 2,
          padding: 2,
        }}
      >
        {Array.from({ length: client.posts }).map((_, i) => (
          <PostPlaceholder key={i} index={i} />
        ))}
      </div>
    </div>
  );
}

export default function ClientFeed() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <div className="meta">
            <span className="num">(05)</span>
            <span className="eyebrow">Client presence</span>
          </div>
          <h2 className="h2">
            Brands we&apos;ve grown, <span className="serif">feeds we&apos;ve built.</span>
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
          {clients.map((client) => (
            <ClientCard key={client.handle} client={client} />
          ))}
        </div>
      </div>
    </section>
  );
}
