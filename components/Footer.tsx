import Link from 'next/link';
import { ArrowRight } from './icons';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-tagline">
          Let&apos;s build something <span className="serif">unforgettable.</span>
        </div>
        <div className="row" style={{ gap: 16, marginBottom: 80, flexWrap: 'wrap' }}>
          <Link href="/contact" className="btn btn-primary">
            Book a free consultation <ArrowRight size={16} />
          </Link>
          <a href="mailto:hello@aqsa.studio" className="btn btn-secondary">
            hello@aqsa.studio
          </a>
        </div>

        <div className="footer-grid">
          <div className="footer-col">
            <h4>Studio</h4>
            <p style={{ color: 'var(--fg-2)', maxWidth: '32ch', lineHeight: 1.5 }}>
              Independent social-first studio. Strategy, content &amp; growth for ambitious brands.
            </p>
            <p
              style={{
                color: 'var(--fg-3)',
                marginTop: 16,
                fontSize: 13,
                fontFamily: 'var(--font-mono)',
              }}
            >
              EST. MMXXII · KARACHI / REMOTE
            </p>
          </div>

          <div className="footer-col">
            <h4>Sitemap</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/portfolio">Work</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><Link href="/services">Social management</Link></li>
              <li><Link href="/services">Social marketing</Link></li>
              <li><Link href="/services">Graphic design</Link></li>
              <li><Link href="/services">Video editing</Link></li>
              <li><Link href="/services">Web development</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Elsewhere</h4>
            <ul>
              <li><a href="#">Instagram ↗</a></li>
              <li><a href="#">LinkedIn ↗</a></li>
              <li><a href="#">TikTok ↗</a></li>
              <li><a href="#">Behance ↗</a></li>
              <li><a href="#">Read.cv ↗</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 AQSA STUDIO — ALL RIGHTS RESERVED</span>
          <span>BUILT WITH INTENT, NOT TEMPLATES</span>
        </div>
      </div>
    </footer>
  );
}
