export function ArrowRight({ size = 16, className = '' }: { size?: number; className?: string }) {
  return (
    <svg
      className={`arrow ${className}`}
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 8h12M9 3l5 5-5 5" />
    </svg>
  );
}

export function ArrowUpRight({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 12L12 4M5 4h7v7" />
    </svg>
  );
}

export function IconStrategy() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="20" cy="20" r="14" />
      <circle cx="20" cy="20" r="8" />
      <circle cx="20" cy="20" r="2" fill="currentColor" />
      <path d="M20 6v4M20 30v4M6 20h4M30 20h4" />
    </svg>
  );
}

export function IconMarketing() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 24l8-12 6 8 14-16" />
      <path d="M22 4h12v12" />
    </svg>
  );
}

export function IconDesign() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
      <rect x="6" y="6" width="14" height="14" rx="1" />
      <circle cx="27" cy="27" r="7" />
      <path d="M22 22l4 4" />
    </svg>
  );
}

export function IconVideo() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="10" width="24" height="20" rx="1" />
      <path d="M28 16l8-4v16l-8-4z" />
    </svg>
  );
}

export function IconWeb() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="6" width="32" height="24" rx="1" />
      <path d="M4 12h32M8 9h.5M11 9h.5M14 9h.5" />
      <path d="M14 36h12" />
    </svg>
  );
}

export function IconBranding() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="20" cy="14" r="7" />
      <path d="M6 36c0-7.732 6.268-14 14-14s14 6.268 14 14" />
      <path d="M30 8l2-2M32 12h3M28 6l1-3" />
    </svg>
  );
}

export function IconGMB() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 4C13.373 4 8 9.373 8 16c0 10 12 22 12 22s12-12 12-22c0-6.627-5.373-12-12-12z" />
      <circle cx="20" cy="16" r="4" />
    </svg>
  );
}

export function IconSEO() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="18" r="12" />
      <path d="M27 27l9 9" />
      <path d="M10 22l4-6 4 4 4-8" />
    </svg>
  );
}

export function IconContent() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="10" width="32" height="22" rx="2" />
      <circle cx="20" cy="21" r="6" />
      <path d="M28 10V8a2 2 0 00-2-2h-4l-2 4" />
      <circle cx="32" cy="16" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconPaid() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="20" cy="20" r="16" />
      <path d="M20 10v20M24 13.5c0-1.933-1.79-3.5-4-3.5s-4 1.567-4 3.5c0 4 8 4 8 8 0 1.933-1.79 3.5-4 3.5s-4-1.567-4-3.5" />
    </svg>
  );
}
