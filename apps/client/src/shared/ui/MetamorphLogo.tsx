import { type ColorPalette, DEFAULT_PALETTE } from '@/shared/config/logoPalettes';

interface MetamorphLogoProps {
  modelId: number;
  palette?: ColorPalette;
  className?: string;
  size?: number | string;
}

export function MetamorphLogo({
  modelId,
  palette = DEFAULT_PALETTE,
  className = 'w-full h-full',
  size,
}: MetamorphLogoProps) {
  const p = palette;
  const pId = `logo-${modelId}-${p.id}`;

  const renderModel = () => {
    switch (modelId) {
      case 1:
        // Rank 1: Fluid Aerodynamic Wings (Primary Recommendation)
        return (
          <>
            <defs>
              <linearGradient id={`${pId}-fluid-wing`} x1="25" y1="35" x2="100" y2="165" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor={p.accent} />
                <stop offset="35%" stopColor={p.primary} />
                <stop offset="100%" stopColor={p.secondary} />
              </linearGradient>
            </defs>
            {/* Sweeping Left Forewing */}
            <path
              d="M98 84 C84 48 50 26 24 36 C8 42 6 72 24 94 C44 118 80 114 98 92 Z"
              fill={`url(#${pId}-fluid-wing)`}
              fillOpacity="0.4"
              stroke={p.primary}
              strokeWidth="2.25"
              strokeLinejoin="round"
            />
            {/* Left Hindwing Teardrop */}
            <path
              d="M98 100 C76 112 44 124 42 146 C40 166 64 174 80 160 C94 148 97 126 98 108 Z"
              fill={`url(#${pId}-fluid-wing)`}
              fillOpacity="0.5"
              stroke={p.secondary}
              strokeWidth="2"
              strokeLinejoin="round"
            />
            {/* Sweeping Right Forewing */}
            <path
              d="M102 84 C116 48 150 26 176 36 C192 42 194 72 176 94 C156 118 120 114 102 92 Z"
              fill={`url(#${pId}-fluid-wing)`}
              fillOpacity="0.4"
              stroke={p.primary}
              strokeWidth="2.25"
              strokeLinejoin="round"
            />
            {/* Right Hindwing Teardrop */}
            <path
              d="M102 100 C124 112 156 124 158 146 C160 166 136 174 120 160 C106 148 103 126 102 108 Z"
              fill={`url(#${pId}-fluid-wing)`}
              fillOpacity="0.5"
              stroke={p.secondary}
              strokeWidth="2"
              strokeLinejoin="round"
            />
            {/* Internal Aerodynamic Flight Rays */}
            <path d="M98 88 C76 68 50 50 36 58" stroke={p.accent} strokeWidth="1.25" strokeLinecap="round" opacity="0.65" />
            <path d="M102 88 C124 68 150 50 164 58" stroke={p.accent} strokeWidth="1.25" strokeLinecap="round" opacity="0.65" />
            {/* Chrysalis Body Spine */}
            <path d="M100 50 C102 75 102 125 100 152 C98 125 98 75 100 50 Z" fill={p.accent} />
            {/* Antennas */}
            <path d="M99 48 Q95 34 86 28" stroke={p.primary} strokeWidth="1.5" strokeLinecap="round" fill="none" />
            <path d="M101 48 Q105 34 114 28" stroke={p.primary} strokeWidth="1.5" strokeLinecap="round" fill="none" />
            <circle cx="86" cy="28" r="1.5" fill={p.accent} />
            <circle cx="114" cy="28" r="1.5" fill={p.accent} />
            <circle cx="100" cy="50" r="2.5" fill={p.primary} />
          </>
        );

      case 2:
        // Rank 2: Monoline Flight Contour (Minimalist Tech Style)
        return (
          <>
            <defs>
              <linearGradient id={`${pId}-line`} x1="20" y1="20" x2="180" y2="170" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor={p.accent} />
                <stop offset="50%" stopColor={p.primary} />
                <stop offset="100%" stopColor={p.secondary} />
              </linearGradient>
            </defs>
            {/* Left Forewing Contour */}
            <path
              d="M96 80 C78 44 48 22 24 32 C8 40 12 72 30 94 C48 114 80 112 96 92"
              stroke={`url(#${pId}-line)`}
              strokeWidth="2.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill={p.primary}
              fillOpacity="0.1"
            />
            {/* Left Hindwing Contour */}
            <path
              d="M96 96 C74 108 44 120 42 142 C40 162 64 170 80 158 C92 146 95 124 96 106"
              stroke={`url(#${pId}-line)`}
              strokeWidth="2.25"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill={p.secondary}
              fillOpacity="0.1"
            />
            {/* Right Forewing Contour */}
            <path
              d="M104 80 C122 44 152 22 176 32 C192 40 188 72 170 94 C152 114 120 112 104 92"
              stroke={`url(#${pId}-line)`}
              strokeWidth="2.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill={p.primary}
              fillOpacity="0.1"
            />
            {/* Right Hindwing Contour */}
            <path
              d="M104 96 C126 108 156 120 158 142 C160 162 136 170 120 158 C108 146 105 124 104 106"
              stroke={`url(#${pId}-line)`}
              strokeWidth="2.25"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill={p.secondary}
              fillOpacity="0.1"
            />
            {/* Spine & Antennas */}
            <line x1="100" y1="48" x2="100" y2="152" stroke={p.accent} strokeWidth="2.25" strokeLinecap="round" />
            <path d="M98 48 Q94 34 86 30" stroke={p.primary} strokeWidth="1.5" strokeLinecap="round" fill="none" />
            <path d="M102 48 Q106 34 114 30" stroke={p.primary} strokeWidth="1.5" strokeLinecap="round" fill="none" />
            <circle cx="86" cy="30" r="1.5" fill={p.accent} />
            <circle cx="114" cy="30" r="1.5" fill={p.accent} />
            <circle cx="100" cy="50" r="2.25" fill={p.primary} />
          </>
        );

      case 3:
      default:
        // Rank 3: Code-Brace Chrysalis ({ and } Developer Syntax)
        return (
          <>
            <defs>
              <linearGradient id={`${pId}-brace`} x1="20" y1="30" x2="180" y2="160" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor={p.primary} />
                <stop offset="100%" stopColor={p.secondary} />
              </linearGradient>
            </defs>
            {/* Left Wing sculpted as programming bracket { */}
            <path
              d="M96 56 C74 54 48 26 28 36 C10 44 14 74 34 94 C46 104 74 100 86 102 C74 106 44 116 42 138 C40 160 66 168 82 154 C92 144 95 120 96 106"
              fill={`url(#${pId}-brace)`}
              fillOpacity="0.3"
              stroke={p.primary}
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Right Wing sculpted as programming bracket } */}
            <path
              d="M104 56 C126 54 152 26 172 36 C190 44 186 74 166 94 C154 104 126 100 114 102 C126 106 156 116 158 138 C160 160 134 168 118 154 C108 144 105 120 104 106"
              fill={`url(#${pId}-brace)`}
              fillOpacity="0.3"
              stroke={p.primary}
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Inner Chrysalis Spindle */}
            <path d="M100 48 C102 70 102 125 100 152 C98 125 98 70 100 48 Z" fill={p.accent} />
            <path d="M98 48 Q94 34 86 28" stroke={p.primary} strokeWidth="1.5" strokeLinecap="round" fill="none" />
            <path d="M102 48 Q106 34 114 28" stroke={p.primary} strokeWidth="1.5" strokeLinecap="round" fill="none" />
            <circle cx="86" cy="28" r="1.5" fill={p.accent} />
            <circle cx="114" cy="28" r="1.5" fill={p.accent} />
          </>
        );
    }
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      fill="none"
      className={className}
      style={{
        width: size,
        height: size,
        filter: `drop-shadow(0 2px 10px ${p.glow})`,
      }}
    >
      {renderModel()}
    </svg>
  );
}
