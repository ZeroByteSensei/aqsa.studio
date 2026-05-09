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
