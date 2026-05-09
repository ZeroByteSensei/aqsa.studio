export default function PortraitPlaceholder({
  aspect = '3/4',
  label = 'PORTRAIT — AQSA',
  style,
}: {
  aspect?: string;
  label?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className="placeholder"
      style={{ aspectRatio: aspect, width: '100%', height: 'auto', ...style }}
      data-label={label}
    >
      <svg viewBox="0 0 200 260" width="58%" style={{ opacity: 0.35 }}>
        <circle cx="100" cy="90" r="42" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M30 260 C30 180, 170 180, 170 260" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </div>
  );
}
