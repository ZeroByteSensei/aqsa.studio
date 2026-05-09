'use client';

import { useState } from 'react';
import { useTweaks, ACCENT_OPTIONS, type AccentColor } from '@/context/TweaksContext';

export default function TweaksPanel() {
  const [open, setOpen] = useState(false);
  const { tweaks, setTweak } = useTweaks();

  return (
    <div className="tweaks-panel">
      {open && (
        <div className="tweaks-drawer">
          <div>
            <h4>Accent color</h4>
            <div className="color-swatches">
              {ACCENT_OPTIONS.map((color) => (
                <button
                  key={color}
                  className={`color-swatch ${tweaks.accent === color ? 'active' : ''}`}
                  style={{ background: color }}
                  onClick={() => setTweak('accent', color as AccentColor)}
                  title={color}
                />
              ))}
            </div>
          </div>

          <div>
            <h4>Hero variant</h4>
            <div className="tweak-radio-group">
              {(['editorial', 'split', 'marquee'] as const).map((v) => (
                <button
                  key={v}
                  className={`tweak-radio-btn ${tweaks.heroVariant === v ? 'active' : ''}`}
                  onClick={() => setTweak('heroVariant', v)}
                >
                  {v.charAt(0).toUpperCase() + v.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4>Density</h4>
            <div className="tweak-radio-group">
              {(['tight', 'default', 'airy'] as const).map((v) => (
                <button
                  key={v}
                  className={`tweak-radio-btn ${tweaks.density === v ? 'active' : ''}`}
                  onClick={() => setTweak('density', v)}
                >
                  {v.charAt(0).toUpperCase() + v.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4>Theme</h4>
            <div className="tweak-radio-group">
              {(['dark', 'light'] as const).map((v) => (
                <button
                  key={v}
                  className={`tweak-radio-btn ${tweaks.theme === v ? 'active' : ''}`}
                  onClick={() => setTweak('theme', v)}
                >
                  {v.charAt(0).toUpperCase() + v.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <button className="tweaks-toggle" onClick={() => setOpen((o) => !o)} title="Tweaks">
        {open ? '✕' : '⚙'}
      </button>
    </div>
  );
}
