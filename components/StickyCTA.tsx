import Link from 'next/link';
import { ArrowRight } from './icons';

export default function StickyCTA() {
  return (
    <div className="sticky-cta">
      <Link href="/contact" className="btn btn-primary">
        Book a call <ArrowRight size={16} />
      </Link>
    </div>
  );
}
