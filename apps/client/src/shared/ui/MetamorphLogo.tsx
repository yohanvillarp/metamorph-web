interface MetamorphLogoProps {
  className?: string;
  size?: number | string;
}

export function MetamorphLogo({
  className = 'w-full h-full',
  size,
}: MetamorphLogoProps) {
  const pId = 'metamorph-logo-fluid-wings';
  const p = {
    primary: '#00f2fe',
    secondary: '#0284c7',
    accent: '#ffffff',
    glow: 'rgba(0, 242, 254, 0.45)',
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
      <defs>
        <linearGradient id={`${pId}-gradient`} x1="25" y1="35" x2="100" y2="165" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={p.accent} />
          <stop offset="35%" stopColor={p.primary} />
          <stop offset="100%" stopColor={p.secondary} />
        </linearGradient>
      </defs>
      {/* Sweeping Left Forewing */}
      <path
        d="M98 84 C84 48 50 26 24 36 C8 42 6 72 24 94 C44 118 80 114 98 92 Z"
        fill={`url(#${pId}-gradient)`}
        fillOpacity="0.4"
        stroke={p.primary}
        strokeWidth="2.25"
        strokeLinejoin="round"
      />
      {/* Left Hindwing Teardrop */}
      <path
        d="M98 100 C76 112 44 124 42 146 C40 166 64 174 80 160 C94 148 97 126 98 108 Z"
        fill={`url(#${pId}-gradient)`}
        fillOpacity="0.5"
        stroke={p.secondary}
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {/* Sweeping Right Forewing */}
      <path
        d="M102 84 C116 48 150 26 176 36 C192 42 194 72 176 94 C156 118 120 114 102 92 Z"
        fill={`url(#${pId}-gradient)`}
        fillOpacity="0.4"
        stroke={p.primary}
        strokeWidth="2.25"
        strokeLinejoin="round"
      />
      {/* Right Hindwing Teardrop */}
      <path
        d="M102 100 C124 112 156 124 158 146 C160 166 136 174 120 160 C106 148 103 126 102 108 Z"
        fill={`url(#${pId}-gradient)`}
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
    </svg>
  );
}
