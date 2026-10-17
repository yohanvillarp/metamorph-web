import { useState, useEffect } from 'react';
import { type ColorPalette, DEFAULT_PALETTE } from '@/shared/config/logoPalettes';

export interface LogoOption {
  id: string;
  modelId: number;
  rank: number;
  name: string;
  concept: string;
  badge: string;
  path: string;
  description: string;
  highlights: string[];
}

export const LOGO_OPTIONS: LogoOption[] = [
  {
    id: 'v1-fluid-wings',
    modelId: 1,
    rank: 1,
    name: 'Concept 1: Fluid Aerodynamic Wings',
    concept: 'Continuous Metamorphosis & Dynamic Lift',
    badge: 'TOP RECOMMENDATION',
    path: '/logos/metamorph-v1-fluid-wings.svg',
    description: 'Wide expansive forewings with parabolic arches and organic teardrop hindwings in luminous gradient harmony. Transmits flight, lightness, and autonomous speed.',
    highlights: [
      'Natural aerodynamic lift with parabolic curves',
      'Teardrop hindwings for perfect organic grounding',
      'High-contrast clarity at 16px favicon scale',
      'Optimal gradient expression across all color palettes',
    ],
  },
  {
    id: 'v2-monoline-flight',
    modelId: 2,
    rank: 2,
    name: 'Concept 2: Monoline Flight Contour',
    concept: 'Modern Minimalist Architecture (Linear Style)',
    badge: 'SECOND CHOICE',
    path: '/logos/metamorph-v2-monoline-flight.svg',
    description: 'A pure, continuous 2.5px vector line contour forming the quintessential butterfly silhouette with delicate inner accents and glowing terminal nodes.',
    highlights: [
      'Ultra-clean continuous vector line aesthetic',
      'Zero visual clutter or heavy solid weights',
      'Flawless contrast on obsidian and light backgrounds',
      'Modern dev-tool branding style (Linear / Vercel)',
    ],
  },
  {
    id: 'v3-code-brace',
    modelId: 3,
    rank: 3,
    name: 'Concept 3: Code-Brace Chrysalis',
    concept: 'Developer Syntax Identity ({ and })',
    badge: 'THIRD CHOICE',
    path: '/logos/metamorph-v3-code-brace.svg',
    description: 'Subtly weaves programming syntax braces { and } into the outer wing curves around a central glowing chrysalis body. Elegant, clever, and developer-native.',
    highlights: [
      'Organic code brackets sculpted as wing contours',
      'Direct developer-centric metaphor (syntax in flight)',
      'Sharp stroke definition and crisp center spindle',
      'Unmistakable identity for code migration swarms',
    ],
  },
];

const STORAGE_KEY_LOGO = 'metamorph:active-logo';
const STORAGE_KEY_MODEL = 'metamorph:active-model-id';
const STORAGE_KEY_PALETTE = 'metamorph:active-palette';

const EVENT_LOGO_CHANGE = 'metamorph:logo-change';
const EVENT_PALETTE_CHANGE = 'metamorph:palette-change';

export interface ActiveLogoHookReturn {
  activeLogo: string;
  modelId: number;
  palette: ColorPalette;
  selectLogo: (pathOrModel: string | number) => void;
  setPalette: (palette: ColorPalette) => void;
}

export function useActiveLogo(): [
  string,
  (pathOrModel: string | number) => void,
  number,
  ColorPalette,
  (palette: ColorPalette) => void
] {
  const [modelId, setModelId] = useState<number>(() => {
    try {
      const savedModel = localStorage.getItem(STORAGE_KEY_MODEL);
      if (savedModel) {
        const parsed = parseInt(savedModel, 10);
        if (parsed >= 1 && parsed <= 3) return parsed;
      }
      const savedPath = localStorage.getItem(STORAGE_KEY_LOGO);
      if (savedPath) {
        const found = LOGO_OPTIONS.find((o) => o.path === savedPath);
        if (found) return found.modelId;
      }
    } catch {
      // Fallback
    }
    return 1; // Default to Top Recommendation (Concept 1: Fluid Aerodynamic Wings)
  });

  const [palette, setPaletteState] = useState<ColorPalette>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_PALETTE);
      if (saved) {
        const parsed = JSON.parse(saved) as ColorPalette;
        if (parsed && parsed.primary && parsed.secondary) return parsed;
      }
    } catch {
      // Fallback
    }
    return DEFAULT_PALETTE;
  });

  const activeOption = LOGO_OPTIONS.find((o) => o.modelId === modelId) || LOGO_OPTIONS[0];
  const activeLogo = activeOption.path;

  useEffect(() => {
    const handleLogo = (e: Event) => {
      const customEvent = e as CustomEvent<{ modelId: number; path: string }>;
      if (customEvent.detail?.modelId && customEvent.detail.modelId !== modelId) {
        setModelId(customEvent.detail.modelId);
      }
    };

    const handlePalette = (e: Event) => {
      const customEvent = e as CustomEvent<ColorPalette>;
      if (customEvent.detail?.id) {
        setPaletteState(customEvent.detail);
      }
    };

    window.addEventListener(EVENT_LOGO_CHANGE, handleLogo);
    window.addEventListener(EVENT_PALETTE_CHANGE, handlePalette);
    return () => {
      window.removeEventListener(EVENT_LOGO_CHANGE, handleLogo);
      window.removeEventListener(EVENT_PALETTE_CHANGE, handlePalette);
    };
  }, [modelId]);

  const selectLogo = (pathOrModel: string | number) => {
    let nextModel = 1;
    let nextPath = LOGO_OPTIONS[0].path;

    if (typeof pathOrModel === 'number') {
      nextModel = pathOrModel;
      const found = LOGO_OPTIONS.find((o) => o.modelId === nextModel);
      if (found) nextPath = found.path;
    } else {
      nextPath = pathOrModel;
      const found = LOGO_OPTIONS.find((o) => o.path === pathOrModel);
      if (found) nextModel = found.modelId;
    }

    setModelId(nextModel);
    try {
      localStorage.setItem(STORAGE_KEY_LOGO, nextPath);
      localStorage.setItem(STORAGE_KEY_MODEL, String(nextModel));
    } catch {
      // Ignore localStorage errors
    }

    window.dispatchEvent(
      new CustomEvent(EVENT_LOGO_CHANGE, {
        detail: { modelId: nextModel, path: nextPath },
      })
    );
  };

  const setPalette = (newPalette: ColorPalette) => {
    setPaletteState(newPalette);
    try {
      localStorage.setItem(STORAGE_KEY_PALETTE, JSON.stringify(newPalette));
    } catch {
      // Ignore localStorage errors
    }
    window.dispatchEvent(
      new CustomEvent(EVENT_PALETTE_CHANGE, { detail: newPalette })
    );
  };

  return [activeLogo, selectLogo, modelId, palette, setPalette];
}
