import { type ColorPalette } from '@/shared/config/logoPalettes';

export function generateStandaloneSvg(modelId: number, palette: ColorPalette): string {
  const p = palette;
  const pId = `metamorph-logo-m${modelId}`;

  let innerSvg: string;

  switch (modelId) {
    case 1:
      innerSvg = `
  <defs>
    <linearGradient id="${pId}-left" x1="20" y1="20" x2="100" y2="110" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="${p.primary}" stop-opacity="0.95" />
      <stop offset="100%" stop-color="${p.secondary}" stop-opacity="0.25" />
    </linearGradient>
    <linearGradient id="${pId}-right" x1="180" y1="20" x2="100" y2="110" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="${p.accent}" stop-opacity="0.95" />
      <stop offset="50%" stop-color="${p.primary}" stop-opacity="0.85" />
      <stop offset="100%" stop-color="${p.secondary}" stop-opacity="0.25" />
    </linearGradient>
    <linearGradient id="${pId}-spine" x1="100" y1="40" x2="100" y2="160" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="${p.accent}" />
      <stop offset="50%" stop-color="${p.primary}" />
      <stop offset="100%" stop-color="${p.secondary}" />
    </linearGradient>
    <filter id="${pId}-glow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="2" stdDeviation="6" flood-color="${p.glow}" />
    </filter>
  </defs>
  <g filter="url(#${pId}-glow)">
    <path d="M97 84 C80 50 48 24 22 36 C8 44 10 74 28 94 C46 114 80 110 97 90 Z" fill="url(#${pId}-left)" stroke="${p.primary}" stroke-width="2" stroke-linejoin="round" />
    <path d="M103 84 C120 50 152 24 178 36 C192 44 190 74 172 94 C154 114 120 110 103 90 Z" fill="url(#${pId}-right)" stroke="${p.primary}" stroke-width="2" stroke-linejoin="round" />
    <path d="M97 96 C76 108 44 122 42 144 C40 164 66 172 82 158 C94 146 97 124 98 106 Z" fill="url(#${pId}-left)" fill-opacity="0.45" stroke="${p.secondary}" stroke-width="1.75" stroke-linejoin="round" />
    <path d="M103 96 C124 108 156 122 158 144 C160 164 134 172 118 158 C106 146 103 124 102 106 Z" fill="url(#${pId}-right)" fill-opacity="0.45" stroke="${p.secondary}" stroke-width="1.75" stroke-linejoin="round" />
    <path d="M100 48 C102.5 70 102.5 125 100 152 C97.5 125 97.5 70 100 48 Z" fill="url(#${pId}-spine)" />
    <path d="M98 48 Q94 34 84 28" stroke="${p.primary}" stroke-width="1.75" stroke-linecap="round" fill="none" />
    <path d="M102 48 Q106 34 116 28" stroke="${p.primary}" stroke-width="1.75" stroke-linecap="round" fill="none" />
    <circle cx="84" cy="28" r="1.75" fill="${p.accent}" />
    <circle cx="116" cy="28" r="1.75" fill="${p.accent}" />
  </g>`;
      break;

    case 2:
      innerSvg = `
  <defs>
    <linearGradient id="${pId}-ribbon-left" x1="20" y1="30" x2="100" y2="160" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="${p.accent}" />
      <stop offset="40%" stop-color="${p.primary}" />
      <stop offset="100%" stop-color="${p.secondary}" />
    </linearGradient>
    <linearGradient id="${pId}-ribbon-right" x1="180" y1="30" x2="100" y2="160" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="${p.accent}" />
      <stop offset="40%" stop-color="${p.primary}" />
      <stop offset="100%" stop-color="${p.secondary}" />
    </linearGradient>
    <filter id="${pId}-glow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="2" stdDeviation="6" flood-color="${p.glow}" />
    </filter>
  </defs>
  <g filter="url(#${pId}-glow)">
    <path d="M98 68 C80 34 46 22 24 36 C4 48 12 86 42 104 C68 120 92 102 98 92 C88 114 68 142 56 156 C44 168 56 174 72 166 C92 154 97 124 98 102" fill="url(#${pId}-ribbon-left)" fill-opacity="0.25" stroke="url(#${pId}-ribbon-left)" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M102 68 C120 34 154 22 176 36 C196 48 188 86 158 104 C132 120 108 102 102 92 C112 114 132 142 144 156 C156 168 144 174 128 166 C108 154 103 124 102 102" fill="url(#${pId}-ribbon-right)" fill-opacity="0.25" stroke="url(#${pId}-ribbon-right)" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round" />
    <line x1="100" y1="52" x2="100" y2="150" stroke="${p.accent}" stroke-width="2.5" stroke-linecap="round" />
    <path d="M98 52 Q92 38 82 32" stroke="${p.primary}" stroke-width="1.5" stroke-linecap="round" fill="none" />
    <path d="M102 52 Q108 38 118 32" stroke="${p.primary}" stroke-width="1.5" stroke-linecap="round" fill="none" />
    <circle cx="82" cy="32" r="1.5" fill="${p.accent}" />
    <circle cx="118" cy="32" r="1.5" fill="${p.accent}" />
    <circle cx="100" cy="52" r="3" fill="${p.primary}" />
  </g>`;
      break;

    case 3:
      innerSvg = `
  <defs>
    <linearGradient id="${pId}-chevron" x1="20" y1="30" x2="180" y2="170" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="${p.primary}" />
      <stop offset="100%" stop-color="${p.secondary}" />
    </linearGradient>
    <filter id="${pId}-glow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="2" stdDeviation="6" flood-color="${p.glow}" />
    </filter>
  </defs>
  <g filter="url(#${pId}-glow)">
    <path d="M96 78 L26 44 C18 40 16 56 26 68 L66 102 C82 106 94 94 96 78 Z" fill="url(#${pId}-chevron)" stroke="${p.primary}" stroke-width="2" stroke-linejoin="round" />
    <path d="M104 78 L174 44 C182 40 184 56 174 68 L134 102 C118 106 106 94 104 78 Z" fill="url(#${pId}-chevron)" stroke="${p.primary}" stroke-width="2" stroke-linejoin="round" />
    <path d="M96 94 L50 116 C38 124 40 146 56 156 L82 146 C92 134 96 114 96 94 Z" fill="${p.secondary}" fill-opacity="0.35" stroke="${p.secondary}" stroke-width="1.75" stroke-linejoin="round" />
    <path d="M104 94 L150 116 C162 124 160 146 144 156 L118 146 C108 134 104 114 104 94 Z" fill="${p.secondary}" fill-opacity="0.35" stroke="${p.secondary}" stroke-width="1.75" stroke-linejoin="round" />
    <line x1="100" y1="46" x2="100" y2="154" stroke="${p.accent}" stroke-width="2.5" stroke-linecap="round" />
    <polygon points="100,74 106,88 100,102 94,88" fill="${p.accent}" />
    <path d="M98 46 Q92 34 84 28" stroke="${p.primary}" stroke-width="1.5" stroke-linecap="round" fill="none" />
    <path d="M102 46 Q108 34 116 28" stroke="${p.primary}" stroke-width="1.5" stroke-linecap="round" fill="none" />
    <circle cx="84" cy="28" r="1.5" fill="${p.accent}" />
    <circle cx="116" cy="28" r="1.5" fill="${p.accent}" />
  </g>`;
      break;

    case 4:
      innerSvg = `
  <defs>
    <linearGradient id="${pId}-fluid-wing" x1="25" y1="35" x2="100" y2="165" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="${p.accent}" />
      <stop offset="35%" stop-color="${p.primary}" />
      <stop offset="100%" stop-color="${p.secondary}" />
    </linearGradient>
    <filter id="${pId}-glow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="2" stdDeviation="6" flood-color="${p.glow}" />
    </filter>
  </defs>
  <g filter="url(#${pId}-glow)">
    <path d="M98 84 C84 48 50 26 24 36 C8 42 6 72 24 94 C44 118 80 114 98 92 Z" fill="url(#${pId}-fluid-wing)" fill-opacity="0.4" stroke="${p.primary}" stroke-width="2.25" stroke-linejoin="round" />
    <path d="M98 100 C76 112 44 124 42 146 C40 166 64 174 80 160 C94 148 97 126 98 108 Z" fill="url(#${pId}-fluid-wing)" fill-opacity="0.5" stroke="${p.secondary}" stroke-width="2" stroke-linejoin="round" />
    <path d="M102 84 C116 48 150 26 176 36 C192 42 194 72 176 94 C156 118 120 114 102 92 Z" fill="url(#${pId}-fluid-wing)" fill-opacity="0.4" stroke="${p.primary}" stroke-width="2.25" stroke-linejoin="round" />
    <path d="M102 100 C124 112 156 124 158 146 C160 166 136 174 120 160 C106 148 103 126 102 108 Z" fill="url(#${pId}-fluid-wing)" fill-opacity="0.5" stroke="${p.secondary}" stroke-width="2" stroke-linejoin="round" />
    <path d="M98 88 C76 68 50 50 36 58" stroke="${p.accent}" stroke-width="1.25" stroke-linecap="round" opacity="0.65" />
    <path d="M102 88 C124 68 150 50 164 58" stroke="${p.accent}" stroke-width="1.25" stroke-linecap="round" opacity="0.65" />
    <path d="M100 50 C102 75 102 125 100 152 C98 125 98 75 100 50 Z" fill="${p.accent}" />
    <path d="M99 48 Q95 34 86 28" stroke="${p.primary}" stroke-width="1.5" stroke-linecap="round" fill="none" />
    <path d="M101 48 Q105 34 114 28" stroke="${p.primary}" stroke-width="1.5" stroke-linecap="round" fill="none" />
    <circle cx="86" cy="28" r="1.5" fill="${p.accent}" />
    <circle cx="114" cy="28" r="1.5" fill="${p.accent}" />
    <circle cx="100" cy="50" r="2.5" fill="${p.primary}" />
  </g>`;
      break;

    case 5:
      innerSvg = `
  <defs>
    <linearGradient id="${pId}-poly-up" x1="25" y1="35" x2="100" y2="105" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="${p.accent}" />
      <stop offset="50%" stop-color="${p.primary}" />
      <stop offset="100%" stop-color="${p.secondary}" />
    </linearGradient>
    <linearGradient id="${pId}-poly-down" x1="25" y1="95" x2="100" y2="165" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="${p.primary}" />
      <stop offset="100%" stop-color="${p.secondary}" />
    </linearGradient>
    <filter id="${pId}-glow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="2" stdDeviation="6" flood-color="${p.glow}" />
    </filter>
  </defs>
  <g filter="url(#${pId}-glow)">
    <polygon points="97,80 32,38 18,74 70,102 97,92" fill="url(#${pId}-poly-up)" stroke="${p.accent}" stroke-width="1.5" stroke-linejoin="round" />
    <polygon points="97,80 70,102 97,92" fill="${p.secondary}" fill-opacity="0.5" stroke="${p.primary}" stroke-width="1" stroke-linejoin="round" />
    <polygon points="103,80 168,38 182,74 130,102 103,92" fill="url(#${pId}-poly-up)" stroke="${p.accent}" stroke-width="1.5" stroke-linejoin="round" />
    <polygon points="103,80 130,102 103,92" fill="${p.secondary}" fill-opacity="0.5" stroke="${p.primary}" stroke-width="1" stroke-linejoin="round" />
    <polygon points="97,98 62,112 46,152 80,162 97,126" fill="url(#${pId}-poly-down)" stroke="${p.secondary}" stroke-width="1.5" stroke-linejoin="round" />
    <polygon points="103,98 138,112 154,152 120,162 103,126" fill="url(#${pId}-poly-down)" stroke="${p.secondary}" stroke-width="1.5" stroke-linejoin="round" />
    <polygon points="100,50 104,82 100,148 96,82" fill="${p.accent}" />
    <path d="M98 50 L84 32" stroke="${p.primary}" stroke-width="1.5" stroke-linecap="round" />
    <path d="M102 50 L116 32" stroke="${p.primary}" stroke-width="1.5" stroke-linecap="round" />
    <circle cx="84" cy="32" r="1.5" fill="${p.accent}" />
    <circle cx="116" cy="32" r="1.5" fill="${p.accent}" />
  </g>`;
      break;

    case 6:
      innerSvg = `
  <defs>
    <linearGradient id="${pId}-monarch" x1="25" y1="25" x2="100" y2="110" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="${p.accent}" />
      <stop offset="30%" stop-color="${p.primary}" />
      <stop offset="100%" stop-color="${p.secondary}" />
    </linearGradient>
    <filter id="${pId}-glow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="2" stdDeviation="6" flood-color="${p.glow}" />
    </filter>
  </defs>
  <g filter="url(#${pId}-glow)">
    <path d="M97 82 C80 48 52 24 26 32 C10 38 8 66 24 88 C40 110 76 110 97 90 Z" fill="url(#${pId}-monarch)" stroke="${p.primary}" stroke-width="2" stroke-linejoin="round" />
    <path d="M97 96 C76 106 44 116 42 138 C40 160 64 170 80 156 C92 144 96 122 97 104 Z" fill="${p.secondary}" fill-opacity="0.45" stroke="${p.secondary}" stroke-width="1.75" stroke-linejoin="round" />
    <path d="M103 82 C120 48 148 24 174 32 C190 38 192 66 176 88 C160 110 124 110 103 90 Z" fill="url(#${pId}-monarch)" stroke="${p.primary}" stroke-width="2" stroke-linejoin="round" />
    <path d="M103 96 C124 106 156 116 158 138 C160 160 136 170 120 156 C108 144 104 122 103 104 Z" fill="${p.secondary}" fill-opacity="0.45" stroke="${p.secondary}" stroke-width="1.75" stroke-linejoin="round" />
    <path d="M100 48 C102.5 70 102.5 125 100 152 C97.5 125 97.5 70 100 48 Z" fill="${p.accent}" />
    <path d="M98 48 Q94 34 84 28" stroke="${p.primary}" stroke-width="1.5" stroke-linecap="round" fill="none" />
    <path d="M102 48 Q106 34 116 28" stroke="${p.primary}" stroke-width="1.5" stroke-linecap="round" fill="none" />
    <circle cx="84" cy="28" r="1.5" fill="${p.accent}" />
    <circle cx="116" cy="28" r="1.5" fill="${p.accent}" />
  </g>`;
      break;

    case 7:
      innerSvg = `
  <defs>
    <linearGradient id="${pId}-wave" x1="20" y1="30" x2="180" y2="160" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="${p.primary}" />
      <stop offset="60%" stop-color="${p.secondary}" />
      <stop offset="100%" stop-color="${p.accent}" />
    </linearGradient>
    <filter id="${pId}-glow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="2" stdDeviation="6" flood-color="${p.glow}" />
    </filter>
  </defs>
  <g filter="url(#${pId}-glow)">
    <path d="M96 84 C76 48 44 22 22 34 C6 42 10 76 30 96 C48 116 82 112 96 94 Z" fill="url(#${pId}-wave)" fill-opacity="0.4" stroke="${p.primary}" stroke-width="2.25" stroke-linejoin="round" />
    <path d="M96 100 C72 112 40 126 40 146 C40 164 62 170 78 158 C90 148 94 128 96 110 Z" fill="${p.secondary}" fill-opacity="0.5" stroke="${p.secondary}" stroke-width="1.75" stroke-linejoin="round" />
    <path d="M104 84 C124 48 156 22 178 34 C194 42 190 76 170 96 C152 116 118 112 104 94 Z" fill="url(#${pId}-wave)" fill-opacity="0.4" stroke="${p.primary}" stroke-width="2.25" stroke-linejoin="round" />
    <path d="M104 100 C128 112 160 126 160 146 C160 164 138 170 122 158 C110 148 106 128 104 110 Z" fill="${p.secondary}" fill-opacity="0.5" stroke="${p.secondary}" stroke-width="1.75" stroke-linejoin="round" />
    <line x1="100" y1="50" x2="100" y2="152" stroke="${p.accent}" stroke-width="2.25" stroke-linecap="round" />
    <path d="M98 50 Q92 36 82 30" stroke="${p.primary}" stroke-width="1.5" stroke-linecap="round" fill="none" />
    <path d="M102 50 Q108 36 118 30" stroke="${p.primary}" stroke-width="1.5" stroke-linecap="round" fill="none" />
    <circle cx="82" cy="30" r="1.5" fill="${p.accent}" />
    <circle cx="118" cy="30" r="1.5" fill="${p.accent}" />
    <circle cx="100" cy="50" r="2.5" fill="${p.primary}" />
  </g>`;
      break;

    case 8:
      innerSvg = `
  <defs>
    <linearGradient id="${pId}-brace" x1="20" y1="30" x2="180" y2="160" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="${p.primary}" />
      <stop offset="100%" stop-color="${p.secondary}" />
    </linearGradient>
    <filter id="${pId}-glow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="2" stdDeviation="6" flood-color="${p.glow}" />
    </filter>
  </defs>
  <g filter="url(#${pId}-glow)">
    <path d="M96 56 C74 54 48 26 28 36 C10 44 14 74 34 94 C46 104 74 100 86 102 C74 106 44 116 42 138 C40 160 66 168 82 154 C92 144 95 120 96 106" fill="url(#${pId}-brace)" fill-opacity="0.3" stroke="${p.primary}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M104 56 C126 54 152 26 172 36 C190 44 186 74 166 94 C154 104 126 100 114 102 C126 106 156 116 158 138 C160 160 134 168 118 154 C108 144 105 120 104 106" fill="url(#${pId}-brace)" fill-opacity="0.3" stroke="${p.primary}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M100 48 C102 70 102 125 100 152 C98 125 98 70 100 48 Z" fill="${p.accent}" />
    <path d="M98 48 Q94 34 86 28" stroke="${p.primary}" stroke-width="1.5" stroke-linecap="round" fill="none" />
    <path d="M102 48 Q106 34 114 28" stroke="${p.primary}" stroke-width="1.5" stroke-linecap="round" fill="none" />
    <circle cx="86" cy="28" r="1.5" fill="${p.accent}" />
    <circle cx="114" cy="28" r="1.5" fill="${p.accent}" />
  </g>`;
      break;

    case 9:
      innerSvg = `
  <defs>
    <linearGradient id="${pId}-petal" x1="20" y1="20" x2="180" y2="170" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="${p.accent}" />
      <stop offset="40%" stop-color="${p.primary}" />
      <stop offset="100%" stop-color="${p.secondary}" />
    </linearGradient>
    <filter id="${pId}-glow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="2" stdDeviation="6" flood-color="${p.glow}" />
    </filter>
  </defs>
  <g filter="url(#${pId}-glow)">
    <path d="M96 102 C74 114 46 126 44 146 C42 164 66 170 82 156 C94 144 96 122 96 102 Z" fill="${p.secondary}" fill-opacity="0.5" stroke="${p.primary}" stroke-width="1.2" />
    <path d="M96 86 C70 68 38 76 28 94 C20 110 44 120 66 116 C84 112 94 96 96 86 Z" fill="${p.secondary}" fill-opacity="0.65" stroke="${p.secondary}" stroke-width="1.2" />
    <path d="M96 76 C80 44 54 24 28 32 C14 38 16 62 34 80 C52 98 82 94 96 76 Z" fill="url(#${pId}-petal)" stroke="${p.accent}" stroke-width="1.5" />
    <path d="M104 102 C126 114 154 126 156 146 C158 164 134 170 118 156 C106 144 104 122 104 102 Z" fill="${p.secondary}" fill-opacity="0.5" stroke="${p.primary}" stroke-width="1.2" />
    <path d="M104 86 C130 68 162 76 172 94 C180 110 156 120 134 116 C116 112 106 96 104 86 Z" fill="${p.secondary}" fill-opacity="0.65" stroke="${p.secondary}" stroke-width="1.2" />
    <path d="M104 76 C120 44 146 24 172 32 C186 38 184 62 166 80 C148 98 118 94 104 76 Z" fill="url(#${pId}-petal)" stroke="${p.accent}" stroke-width="1.5" />
    <path d="M100 48 C102 70 102 125 100 152 C98 125 98 70 100 48 Z" fill="${p.accent}" />
    <path d="M98 48 Q94 34 84 28" stroke="${p.primary}" stroke-width="1.5" stroke-linecap="round" fill="none" />
    <path d="M102 48 Q106 34 116 28" stroke="${p.primary}" stroke-width="1.5" stroke-linecap="round" fill="none" />
    <circle cx="84" cy="28" r="1.5" fill="${p.accent}" />
    <circle cx="116" cy="28" r="1.5" fill="${p.accent}" />
  </g>`;
      break;

    case 10:
    default:
      innerSvg = `
  <defs>
    <linearGradient id="${pId}-line" x1="20" y1="20" x2="180" y2="170" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="${p.accent}" />
      <stop offset="50%" stop-color="${p.primary}" />
      <stop offset="100%" stop-color="${p.secondary}" />
    </linearGradient>
    <filter id="${pId}-glow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="2" stdDeviation="6" flood-color="${p.glow}" />
    </filter>
  </defs>
  <g filter="url(#${pId}-glow)">
    <path d="M96 80 C78 44 48 22 24 32 C8 40 12 72 30 94 C48 114 80 112 96 92" stroke="url(#${pId}-line)" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round" fill="${p.primary}" fill-opacity="0.1" />
    <path d="M96 96 C74 108 44 120 42 142 C40 162 64 170 80 158 C92 146 95 124 96 106" stroke="url(#${pId}-line)" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" fill="${p.secondary}" fill-opacity="0.1" />
    <path d="M104 80 C122 44 152 22 176 32 C192 40 188 72 170 94 C152 114 120 112 104 92" stroke="url(#${pId}-line)" stroke-width="2.75" stroke-linecap="round" stroke-linejoin="round" fill="${p.primary}" fill-opacity="0.1" />
    <path d="M104 96 C126 108 156 120 158 142 C160 162 136 170 120 158 C108 146 105 124 104 106" stroke="url(#${pId}-line)" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" fill="${p.secondary}" fill-opacity="0.1" />
    <line x1="100" y1="48" x2="100" y2="152" stroke="${p.accent}" stroke-width="2.25" stroke-linecap="round" />
    <path d="M98 48 Q94 34 86 30" stroke="${p.primary}" stroke-width="1.5" stroke-linecap="round" fill="none" />
    <path d="M102 48 Q106 34 114 30" stroke="${p.primary}" stroke-width="1.5" stroke-linecap="round" fill="none" />
    <circle cx="86" cy="30" r="1.5" fill="${p.accent}" />
    <circle cx="114" cy="30" r="1.5" fill="${p.accent}" />
    <circle cx="100" cy="50" r="2.25" fill="${p.primary}" />
  </g>`;
      break;
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" fill="none">${innerSvg}\n</svg>`;
}
