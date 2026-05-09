import type { Metadata } from 'next';
import { Space_Grotesk, Instrument_Serif, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { TweaksProvider } from '@/context/TweaksContext';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import StickyCTA from '@/components/StickyCTA';
import TweaksPanel from '@/components/TweaksPanel';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk',
});

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-instrument-serif',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains-mono',
});

export const metadata: Metadata = {
  title: 'Aqsa Studio — Social-First Studio for Ambitious Brands',
  description:
    'A boutique social studio helping ambitious brands scale visibility, engagement and conversions through strategy-first content and data-driven execution.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-theme="light"
      data-density="default"
      className={`${spaceGrotesk.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <TweaksProvider>
          <Nav />
          {children}
          <Footer />
          <StickyCTA />
          <TweaksPanel />
        </TweaksProvider>
      </body>
    </html>
  );
}
