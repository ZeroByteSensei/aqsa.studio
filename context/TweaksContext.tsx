'use client';

import { createContext, useContext, useEffect, useState } from 'react';

export type AccentColor = '#D4FF3A' | '#7C3AED' | '#FF5C39' | '#F5F1EA';
export type HeroVariant = 'editorial' | 'split' | 'marquee';
export type Density = 'tight' | 'default' | 'airy';
export type Theme = 'dark' | 'light';

const ACCENT_FG: Record<AccentColor, string> = {
  '#D4FF3A': '#0A0A0A',
  '#7C3AED': '#FFFFFF',
  '#FF5C39': '#0A0A0A',
  '#F5F1EA': '#0A0A0A',
};

interface Tweaks {
  accent: AccentColor;
  heroVariant: HeroVariant;
  density: Density;
  theme: Theme;
}

interface TweaksContextValue {
  tweaks: Tweaks;
  setTweak: <K extends keyof Tweaks>(key: K, value: Tweaks[K]) => void;
}

const DEFAULTS: Tweaks = {
  accent: '#FF5C39',
  heroVariant: 'editorial',
  density: 'default',
  theme: 'light',
};

const TweaksContext = createContext<TweaksContextValue>({
  tweaks: DEFAULTS,
  setTweak: () => {},
});

export function TweaksProvider({ children }: { children: React.ReactNode }) {
  const [tweaks, setTweaks] = useState<Tweaks>(DEFAULTS);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('aqsa-tweaks');
      if (saved) setTweaks({ ...DEFAULTS, ...JSON.parse(saved) });
    } catch {}
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--accent', tweaks.accent);
    root.style.setProperty('--accent-fg', ACCENT_FG[tweaks.accent] || '#0A0A0A');
    root.setAttribute('data-density', tweaks.density);
    root.setAttribute('data-theme', tweaks.theme);
    try {
      localStorage.setItem('aqsa-tweaks', JSON.stringify(tweaks));
    } catch {}
  }, [tweaks]);

  const setTweak = <K extends keyof Tweaks>(key: K, value: Tweaks[K]) => {
    setTweaks((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <TweaksContext.Provider value={{ tweaks, setTweak }}>
      {children}
    </TweaksContext.Provider>
  );
}

export function useTweaks() {
  return useContext(TweaksContext);
}

export const ACCENT_OPTIONS: AccentColor[] = ['#D4FF3A', '#7C3AED', '#FF5C39', '#F5F1EA'];
