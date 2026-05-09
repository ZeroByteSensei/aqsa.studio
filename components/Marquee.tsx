export default function Marquee({ items }: { items: string[] }) {
  const content = (
    <span>
      {items.map((it, i) => (
        <span key={i}>
          <span>{it}</span>
          <span className="star">✺</span>
        </span>
      ))}
    </span>
  );

  return (
    <div className="marquee">
      <div className="marquee-track">
        {content}
        {content}
      </div>
    </div>
  );
}
