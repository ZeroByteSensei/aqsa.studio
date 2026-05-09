'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowRight } from './icons';

const NAV_ITEMS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/portfolio', label: 'Work' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="nav">
      <div className="nav-inner">
        <Link href="/" className="logo">
          <span className="logo-mark">
            a
            <span className="accent-dot" />
          </span>
          <span>
            aqsa<span className="serif" style={{ marginLeft: 2 }}>.studio</span>
          </span>
        </Link>

        <div className="nav-links">
          {NAV_ITEMS.map((item) => {
            const isActive =
              item.href === '/' ? pathname === '/' : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link ${isActive ? 'active' : ''}`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <Link href="/contact" className="btn btn-primary nav-cta">
          Book a call
          <ArrowRight size={14} />
        </Link>
      </div>
    </nav>
  );
}
