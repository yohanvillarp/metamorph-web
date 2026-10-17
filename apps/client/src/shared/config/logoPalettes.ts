export interface ColorPalette {
  id: string;
  name: string;
  primary: string;    // Main wing glow / apex
  secondary: string;  // Mid-wing gradient / hindwing
  accent: string;     // Highlights / antennas / core
  glow: string;       // Drop shadow color
  bgHint: string;     // Dark surface tone
}

export const PRESET_PALETTES: ColorPalette[] = [
  {
    id: 'cyber-cyan',
    name: 'Cyber Cyan',
    primary: '#00f2fe',
    secondary: '#0284c7',
    accent: '#ffffff',
    glow: 'rgba(0, 242, 254, 0.45)',
    bgHint: '#06090e',
  },
  {
    id: 'neon-violet',
    name: 'Neon Violet',
    primary: '#c084fc',
    secondary: '#6366f1',
    accent: '#f43f5e',
    glow: 'rgba(192, 132, 252, 0.45)',
    bgHint: '#090714',
  },
  {
    id: 'emerald-matrix',
    name: 'Emerald Matrix',
    primary: '#10b981',
    secondary: '#059669',
    accent: '#6ee7b7',
    glow: 'rgba(16, 185, 129, 0.45)',
    bgHint: '#040d0a',
  },
  {
    id: 'solar-amber',
    name: 'Solar Amber',
    primary: '#f59e0b',
    secondary: '#ea580c',
    accent: '#fef08a',
    glow: 'rgba(245, 158, 11, 0.45)',
    bgHint: '#0e0804',
  },
  {
    id: 'electric-azure',
    name: 'Electric Azure',
    primary: '#38bdf8',
    secondary: '#1d4ed8',
    accent: '#93c5fd',
    glow: 'rgba(56, 189, 248, 0.45)',
    bgHint: '#050b14',
  },
  {
    id: 'crimson-shift',
    name: 'Crimson Shift',
    primary: '#f43f5e',
    secondary: '#be123c',
    accent: '#fda4af',
    glow: 'rgba(244, 63, 94, 0.45)',
    bgHint: '#0e0406',
  },
  {
    id: 'synthwave',
    name: 'Synthwave',
    primary: '#ec4899',
    secondary: '#8b5cf6',
    accent: '#fbbf24',
    glow: 'rgba(236, 72, 153, 0.45)',
    bgHint: '#0f0514',
  },
  {
    id: 'stark-titanium',
    name: 'Stark Titanium',
    primary: '#f8fafc',
    secondary: '#64748b',
    accent: '#38bdf8',
    glow: 'rgba(255, 255, 255, 0.35)',
    bgHint: '#08090b',
  },
];

export const DEFAULT_PALETTE = PRESET_PALETTES[0];
