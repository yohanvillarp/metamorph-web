import { useState, useEffect } from 'react';
import { type ColorPalette, DEFAULT_PALETTE } from '@/shared/config/logoPalettes';

export interface LogoOption {
  id: string;
  modelId: number;
  name: string;
  concept: string;
  path: string;
  description: string;
  highlights: string[];
}

export const LOGO_OPTIONS: LogoOption[] = [
  {
    id: 'v1-cyber-chrysalis',
    modelId: 1,
    name: 'Concept 1: Morphic Glass Wings',
    concept: 'Metamorph UI Cyber-Glass Core',
    path: '/logos/metamorph-v1-cyber-chrysalis.svg',
    description: 'Clean, aerodynamic glass butterfly wings with smooth bezier curves and subtle glowing gradients matching the obsidian & cyan Metamorph UI.',
    highlights: ['Natural aerodynamic wing curves', 'Simplified 4-wing anatomy', 'Subtle cyber-glass translucent glow'],
  },
  {
    id: 'v2-origami-m',
    modelId: 2,
    name: 'Concept 2: Dual Fluid Ribbon',
    concept: 'Continuous Flow Evolution',
    path: '/logos/metamorph-v2-origami-m.svg',
    description: 'Two continuous fluid ribbons that sweep outward to form forewings and loop gracefully down into hindwings in one unbroken, harmonic stroke.',
    highlights: ['Unbroken fluid wing stroke', 'Clean modern silhouette', 'High clarity at 16px favicon scale'],
  },
  {
    id: 'v3-swarm-nodes',
    modelId: 3,
    name: 'Concept 3: Architectural Code-Wings',
    concept: 'Code Evolution & Syntax Metamorphosis',
    path: '/logos/metamorph-v3-swarm-nodes.svg',
    description: 'Two forward-sweeping transform brackets (< and >) softening and unfurling into proportional butterfly wings, symbolizing code taking flight.',
    highlights: ['Meaningful syntax transformation (< >)', 'Clear butterfly silhouette', 'Balanced forewing and hindwing ratio'],
  },
  {
    id: 'v4-infinite-morph',
    modelId: 4,
    name: 'Concept 4: Fluid Aerodynamic Wings',
    concept: 'Graceful Continuous Metamorphosis (Recommended)',
    path: '/logos/metamorph-v4-infinite-morph.svg',
    description: 'Refined fluid wing approach: wide expansive forewings with parabolic arches and teardrop hindwings in radiant electric cyan and teal.',
    highlights: ['Expansive forewings with natural lift', 'Teardrop hindwings for organic balance', 'Pure vector curves without visual clutter'],
  },
  {
    id: 'v5-brutalist-hex',
    modelId: 5,
    name: 'Concept 5: Pure Poly Wings',
    concept: 'Minimalist Faceted Origami',
    path: '/logos/metamorph-v5-brutalist-hex.svg',
    description: 'Balanced angled geometric planes forming an unmistakable low-poly butterfly. Stripped of all extra lines, frames, and noise for maximum impact.',
    highlights: ['Pure 4-plane geometric butterfly', 'Clear architectural lighting', 'Bold, modern, and noise-free'],
  },
  {
    id: 'v6-monarch-minimal',
    modelId: 6,
    name: 'Concept 6: The Monarch Minimalist',
    concept: 'Pure Classical Butterfly Geometry',
    path: '/logos/metamorph-v6-monarch-minimal.svg',
    description: 'Iconic, unmistakably authentic butterfly silhouette crafted from pure aerodynamic bezier curves, vibrant electric cyan gradients, and zero extraneous clutter.',
    highlights: ['Classic, authentic butterfly anatomy', 'Broad forewings with natural lift', 'Instant recognition across all sizes'],
  },
  {
    id: 'v7-fluid-waves',
    modelId: 7,
    name: 'Concept 7: Dual-Wave Transformation',
    concept: 'Liquid Motion & Smooth Metamorphosis',
    path: '/logos/metamorph-v7-fluid-waves.svg',
    description: 'Liquid S-curves sweeping outward into aerodynamic wing petals. Smooth, fluid transition between cyan and electric indigo.',
    highlights: ['Liquid S-curve wing contours', 'Dual-tone cyan to indigo gradient', 'Continuous aerodynamic flight'],
  },
  {
    id: 'v8-code-brace-morph',
    modelId: 8,
    name: 'Concept 8: Code-Brace Chrysalis',
    concept: 'Syntax Metamorphosis ({ and })',
    path: '/logos/metamorph-v8-code-brace-morph.svg',
    description: 'Subtly weaves programming syntax { and } into the outer wing curves around a central chrysalis body. Elegant and developer-native.',
    highlights: ['Organic code brackets in wing shape', 'Subtle developer-centric metaphor', 'Crisp stroke definition'],
  },
  {
    id: 'v9-monoline-flight',
    modelId: 9,
    name: 'Concept 9: Monoline Flight Contour',
    concept: 'Apple & Linear Style Minimalist Vector',
    path: '/logos/metamorph-v9-monoline-flight.svg',
    description: 'A pure, continuous 2.5px vector line contour forming the quintessential butterfly silhouette with delicate inner accents and glowing nodes.',
    highlights: ['Clean continuous monoline stroke', 'Zero visual weight or noise', 'Superb dark-mode contrast'],
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
        if (parsed >= 1 && parsed <= 9) return parsed;
      }
      const savedPath = localStorage.getItem(STORAGE_KEY_LOGO);
      if (savedPath) {
        const found = LOGO_OPTIONS.find((o) => o.path === savedPath);
        if (found) return found.modelId;
      }
    } catch {
      // Fallback
    }
    return 4; // Default to Concept 4 (User's favorite)
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

  const activeOption = LOGO_OPTIONS.find((o) => o.modelId === modelId) || LOGO_OPTIONS[3];
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
    let nextModel = 4;
    let nextPath = LOGO_OPTIONS[3].path;

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
