'use client';

import { useTweaks } from '@/context/TweaksContext';
import HeroEditorial from '@/components/home/HeroEditorial';
import HeroSplit from '@/components/home/HeroSplit';
import HeroMarquee from '@/components/home/HeroMarquee';
import TrustSection from '@/components/home/TrustSection';
import ServicesPreview from '@/components/home/ServicesPreview';
import PortfolioPreview from '@/components/home/PortfolioPreview';
import ClientFeed from '@/components/home/ClientFeed';
import AboutPreview from '@/components/home/AboutPreview';
import Testimonials from '@/components/home/Testimonials';
import FinalCTA from '@/components/FinalCTA';

export default function HomePage() {
  const { tweaks } = useTweaks();

  const Hero =
    tweaks.heroVariant === 'split'
      ? HeroSplit
      : tweaks.heroVariant === 'marquee'
      ? HeroMarquee
      : HeroEditorial;

  return (
    <main>
      <Hero />
      <TrustSection />
      <ServicesPreview />
      <PortfolioPreview />
      <ClientFeed />
      <AboutPreview />
      <Testimonials />
      <FinalCTA />
    </main>
  );
}
