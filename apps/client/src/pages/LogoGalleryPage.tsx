import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Check,
  Copy,
  ArrowLeft,
  Sparkles,
  Download,
  Layers,
  Palette,
  Sliders,
  RotateCcw,
  Sun,
  Moon,
  CheckCheck,
  Eye,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { LOGO_OPTIONS, useActiveLogo, type LogoOption } from '@/shared/lib/useActiveLogo';
import { PRESET_PALETTES, DEFAULT_PALETTE, type ColorPalette } from '@/shared/config/logoPalettes';
import { MetamorphLogo } from '@/shared/ui/MetamorphLogo';
import { generateStandaloneSvg } from '@/shared/lib/svgGenerator';
import { SEOHead } from '@/shared/ui/SEOHead';
import { ROUTES } from '@/shared/config/routes';

type BgTone = 'obsidian' | 'slate' | 'light';

export function LogoGalleryPage() {
  const [, selectLogo, activeModelId, activePalette, setActivePalette] = useActiveLogo();
  const [globalBg, setGlobalBg] = useState<BgTone>('obsidian');
  const [customStudioOpen, setCustomStudioOpen] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [copiedSvgId, setCopiedSvgId] = useState<string | null>(null);

  // Custom Color inputs state
  const [customPrimary, setCustomPrimary] = useState(activePalette.primary);
  const [customSecondary, setCustomSecondary] = useState(activePalette.secondary);
  const [customAccent, setCustomAccent] = useState(activePalette.accent);

  const applyPreset = (preset: ColorPalette) => {
    setActivePalette(preset);
    setCustomPrimary(preset.primary);
    setCustomSecondary(preset.secondary);
    setCustomAccent(preset.accent);
  };

  const handleCustomColorChange = (key: 'primary' | 'secondary' | 'accent', value: string) => {
    if (key === 'primary') setCustomPrimary(value);
    if (key === 'secondary') setCustomSecondary(value);
    if (key === 'accent') setCustomAccent(value);

    const updated: ColorPalette = {
      id: 'custom-palette',
      name: 'Custom Studio Color',
      primary: key === 'primary' ? value : customPrimary,
      secondary: key === 'secondary' ? value : customSecondary,
      accent: key === 'accent' ? value : customAccent,
      glow: `${key === 'primary' ? value : customPrimary}70`,
      bgHint: '#06090e',
    };
    setActivePalette(updated);
  };

  const resetToDefault = () => {
    applyPreset(DEFAULT_PALETTE);
  };

  const downloadCustomSvg = (opt: LogoOption) => {
    const svgCode = generateStandaloneSvg(opt.modelId, activePalette);
    const blob = new Blob([svgCode], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `metamorph-m${opt.modelId}-${activePalette.id}.svg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const copySvgCode = (opt: LogoOption) => {
    const svgCode = generateStandaloneSvg(opt.modelId, activePalette);
    navigator.clipboard.writeText(svgCode);
    setCopiedSvgId(opt.id);
    setTimeout(() => setCopiedSvgId(null), 2000);
  };

  const copyPath = (opt: LogoOption) => {
    navigator.clipboard.writeText(window.location.origin + opt.path);
    setCopiedId(opt.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const getCanvasBgClass = () => {
    switch (globalBg) {
      case 'light':
        return 'bg-slate-100 border-slate-300 shadow-inner';
      case 'slate':
        return 'bg-[#0f172a] border-slate-700/60';
      case 'obsidian':
      default:
        return 'bg-[#03060c] border-white/5';
    }
  };

  const isLightMode = globalBg === 'light';

  return (
    <main className="min-h-screen bg-[#06090e] text-slate-100 pt-24 pb-28 px-4 sm:px-6 md:px-12 selection:bg-cyan-500/30 selection:text-white">
      <SEOHead
        title="Metamorph Curated Logo Finalists | 3 Recommended Vector Models"
        description="Explore the 3 curated finalist vector SVG logo concepts for Metamorph, ordered by official design recommendation with live dynamic color palette testing."
      />

      <div className="max-w-7xl mx-auto">
        {/* Navigation Breadcrumb */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <Link
            to={ROUTES.HOME}
            className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-cyan-300 transition-colors"
          >
            <ArrowLeft size={14} /> Back to Metamorph
          </Link>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
              <Sparkles size={12} className="text-cyan-400" />
              <span>3 Curated Finalists in Recommendation Order</span>
            </div>
          </div>
        </div>

        {/* Header Title */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono mb-4">
            <Layers size={13} />
            CURATED BRAND IDENTITY FINALISTS
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Metamorph Finalist Logo Suite
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Only the top 3 recommended concepts, arranged in strict order of brand suitability. Test live color palettes or activate your choice across the entire site.
          </p>
        </div>

        {/* Interactive Color Studio Bar (Sticky Control Hub) */}
        <div className="sticky top-20 z-40 mb-12 rounded-2xl bg-[#080d19]/90 backdrop-blur-xl border border-cyan-500/20 shadow-[0_8px_32px_rgba(0,0,0,0.6)] p-4 sm:p-6 transition-all">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-white/10">
            {/* Active Color Info */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Palette size={16} />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Live Testing Palette:
                  </span>
                  <span className="text-xs font-mono font-bold text-white px-2 py-0.5 rounded bg-white/10">
                    {activePalette.name}
                  </span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <span
                    className="w-3 h-3 rounded-full border border-white/20 shadow-sm"
                    style={{ backgroundColor: activePalette.primary }}
                    title={`Primary: ${activePalette.primary}`}
                  />
                  <span
                    className="w-3 h-3 rounded-full border border-white/20 shadow-sm"
                    style={{ backgroundColor: activePalette.secondary }}
                    title={`Secondary: ${activePalette.secondary}`}
                  />
                  <span
                    className="w-3 h-3 rounded-full border border-white/20 shadow-sm"
                    style={{ backgroundColor: activePalette.accent }}
                    title={`Accent: ${activePalette.accent}`}
                  />
                  <span className="text-[11px] font-mono text-slate-400 ml-1">
                    {activePalette.primary} / {activePalette.secondary}
                  </span>
                </div>
              </div>
            </div>

            {/* Studio Controls: Custom Color Toggle & Background Switcher */}
            <div className="flex items-center flex-wrap gap-2">
              <button
                onClick={() => setCustomStudioOpen(!customStudioOpen)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-medium border transition-colors cursor-pointer ${
                  customStudioOpen
                    ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40'
                    : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10'
                }`}
              >
                <Sliders size={13} />
                <span>Custom Hex Pickers</span>
              </button>

              {/* Background Theme Switcher */}
              <div className="flex items-center gap-1 bg-black/40 border border-white/10 rounded-xl p-1">
                <button
                  onClick={() => setGlobalBg('obsidian')}
                  className={`px-2 py-1 rounded-lg text-[11px] font-mono transition-colors cursor-pointer flex items-center gap-1 ${
                    globalBg === 'obsidian' ? 'bg-cyan-500/20 text-cyan-300' : 'text-slate-400 hover:text-white'
                  }`}
                  title="Obsidian Dark Background"
                >
                  <Moon size={11} />
                  <span>Obsidian</span>
                </button>
                <button
                  onClick={() => setGlobalBg('slate')}
                  className={`px-2 py-1 rounded-lg text-[11px] font-mono transition-colors cursor-pointer flex items-center gap-1 ${
                    globalBg === 'slate' ? 'bg-cyan-500/20 text-cyan-300' : 'text-slate-400 hover:text-white'
                  }`}
                  title="Deep Slate Background"
                >
                  <Eye size={11} />
                  <span>Slate</span>
                </button>
                <button
                  onClick={() => setGlobalBg('light')}
                  className={`px-2 py-1 rounded-lg text-[11px] font-mono transition-colors cursor-pointer flex items-center gap-1 ${
                    globalBg === 'light' ? 'bg-cyan-500/20 text-cyan-300' : 'text-slate-400 hover:text-white'
                  }`}
                  title="Clean Light Background"
                >
                  <Sun size={11} />
                  <span>Light</span>
                </button>
              </div>

              <button
                onClick={resetToDefault}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
                title="Reset to default Cyber Cyan"
              >
                <RotateCcw size={13} />
              </button>
            </div>
          </div>

          {/* Preset Palettes Quick Bar */}
          <div className="mt-4 pt-1 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
            <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider shrink-0 mr-1">
              Presets:
            </span>
            {PRESET_PALETTES.map((preset) => {
              const isCurrent = activePalette.id === preset.id;
              return (
                <button
                  key={preset.id}
                  onClick={() => applyPreset(preset)}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-mono shrink-0 transition-all cursor-pointer ${
                    isCurrent
                      ? 'bg-cyan-500/20 border-cyan-400 text-white shadow-sm ring-1 ring-cyan-400/40'
                      : 'bg-white/5 border-white/10 text-slate-300 hover:border-white/20 hover:text-white'
                  }`}
                >
                  <div className="flex items-center -space-x-1">
                    <span
                      className="w-2.5 h-2.5 rounded-full border border-black/40"
                      style={{ backgroundColor: preset.primary }}
                    />
                    <span
                      className="w-2.5 h-2.5 rounded-full border border-black/40"
                      style={{ backgroundColor: preset.secondary }}
                    />
                    <span
                      className="w-2.5 h-2.5 rounded-full border border-black/40"
                      style={{ backgroundColor: preset.accent }}
                    />
                  </div>
                  <span>{preset.name}</span>
                </button>
              );
            })}
          </div>

          {/* Expandable Custom Color Pickers */}
          <AnimatePresence>
            {customStudioOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-4 pt-4 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4"
              >
                <div className="flex items-center gap-3 bg-black/30 p-2.5 rounded-xl border border-white/10">
                  <input
                    type="color"
                    id="picker-primary"
                    value={customPrimary}
                    onChange={(e) => handleCustomColorChange('primary', e.target.value)}
                    className="w-8 h-8 rounded cursor-pointer border-0 bg-transparent"
                  />
                  <div className="flex-1">
                    <label htmlFor="picker-primary" className="block text-[10px] font-mono uppercase text-slate-400 cursor-pointer">
                      Primary Wing Glow
                    </label>
                    <input
                      type="text"
                      value={customPrimary}
                      onChange={(e) => handleCustomColorChange('primary', e.target.value)}
                      className="w-full bg-transparent font-mono text-xs text-white focus:outline-none"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-black/30 p-2.5 rounded-xl border border-white/10">
                  <input
                    type="color"
                    id="picker-secondary"
                    value={customSecondary}
                    onChange={(e) => handleCustomColorChange('secondary', e.target.value)}
                    className="w-8 h-8 rounded cursor-pointer border-0 bg-transparent"
                  />
                  <div className="flex-1">
                    <label htmlFor="picker-secondary" className="block text-[10px] font-mono uppercase text-slate-400 cursor-pointer">
                      Secondary / Hindwing
                    </label>
                    <input
                      type="text"
                      value={customSecondary}
                      onChange={(e) => handleCustomColorChange('secondary', e.target.value)}
                      className="w-full bg-transparent font-mono text-xs text-white focus:outline-none"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-black/30 p-2.5 rounded-xl border border-white/10">
                  <input
                    type="color"
                    id="picker-accent"
                    value={customAccent}
                    onChange={(e) => handleCustomColorChange('accent', e.target.value)}
                    className="w-8 h-8 rounded cursor-pointer border-0 bg-transparent"
                  />
                  <div className="flex-1">
                    <label htmlFor="picker-accent" className="block text-[10px] font-mono uppercase text-slate-400 cursor-pointer">
                      Spine & Antennas
                    </label>
                    <input
                      type="text"
                      value={customAccent}
                      onChange={(e) => handleCustomColorChange('accent', e.target.value)}
                      className="w-full bg-transparent font-mono text-xs text-white focus:outline-none"
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* 3 Finalists Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {LOGO_OPTIONS.map((opt, idx) => {
            const isSelected = activeModelId === opt.modelId;

            return (
              <motion.div
                key={opt.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className={`relative rounded-2xl p-6 transition-all border flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#090e1a] border-cyan-500/50 shadow-[0_0_35px_rgba(0,242,254,0.18)] ring-1 ring-cyan-400/40'
                    : 'bg-[#080b13] border-white/10 hover:border-white/20'
                }`}
              >
                <div>
                  {/* Rank & Active Badge Header */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span
                      className={`text-[10px] font-mono uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full border ${
                        opt.rank === 1
                          ? 'bg-amber-500/15 text-amber-300 border-amber-500/30 shadow-[0_0_12px_rgba(245,158,11,0.2)]'
                          : opt.rank === 2
                          ? 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30'
                          : 'bg-purple-500/15 text-purple-300 border-purple-500/30'
                      }`}
                    >
                      {opt.badge}
                    </span>

                    {isSelected && (
                      <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-cyan-500 text-slate-950 font-mono text-[9px] font-bold shadow-md">
                        <Check size={10} strokeWidth={3} />
                        ACTIVE
                      </div>
                    )}
                  </div>

                  {/* Card Title & Pillar */}
                  <div className="mb-4">
                    <h2 className="text-lg font-bold text-white tracking-tight">
                      {opt.name}
                    </h2>
                    <span className="text-[11px] font-mono text-cyan-400/90 block mt-0.5">
                      {opt.concept}
                    </span>
                  </div>

                {/* Interactive Logo Canvas */}
                <div
                  className={`relative rounded-xl p-8 mb-6 flex flex-col items-center justify-center transition-colors border ${getCanvasBgClass()}`}
                  style={{ minHeight: '270px' }}
                >
                  {/* Subtle Grid Lines */}
                  <div
                    className="absolute inset-0 opacity-15 pointer-events-none rounded-xl"
                    style={{
                      backgroundImage: `radial-gradient(circle, ${isLightMode ? '#0284c7' : activePalette.primary} 1px, transparent 1px)`,
                      backgroundSize: '20px 20px',
                    }}
                  />

                  {/* Main Scalable Vector Display */}
                  <div className="relative z-10 w-36 h-36 flex items-center justify-center transition-transform duration-300 hover:scale-105">
                    <MetamorphLogo
                      modelId={opt.modelId}
                      palette={activePalette}
                      className="w-full h-full"
                    />
                  </div>

                  {/* Responsive Size Scales (Favicon 16px, Header 32px, App 48px) */}
                  <div className={`relative z-10 mt-6 pt-4 border-t w-full flex items-center justify-center gap-6 ${isLightMode ? 'border-slate-300' : 'border-white/10'}`}>
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-mono ${isLightMode ? 'text-slate-600' : 'text-slate-400'}`}>16px:</span>
                      <div className="w-4 h-4 flex items-center justify-center">
                        <MetamorphLogo modelId={opt.modelId} palette={activePalette} />
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-mono ${isLightMode ? 'text-slate-600' : 'text-slate-400'}`}>32px:</span>
                      <div className="w-8 h-8 flex items-center justify-center">
                        <MetamorphLogo modelId={opt.modelId} palette={activePalette} />
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-mono ${isLightMode ? 'text-slate-600' : 'text-slate-400'}`}>48px:</span>
                      <div className="w-12 h-12 flex items-center justify-center">
                        <MetamorphLogo modelId={opt.modelId} palette={activePalette} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description & Pillars */}
                <p className="text-xs sm:text-sm text-slate-300 mb-4 leading-relaxed font-normal">
                  {opt.description}
                </p>

                <ul className="mb-6 space-y-1.5 text-xs text-slate-400 font-mono">
                  {opt.highlights.map((h, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-cyan-400" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Control Actions */}
              <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-white/5 mt-auto">
                  <button
                    onClick={() => selectLogo(opt.modelId)}
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-inner'
                        : 'bg-white text-slate-950 hover:bg-slate-200 shadow-sm'
                    }`}
                  >
                    {isSelected ? (
                      <>
                        <Check size={14} className="text-cyan-400" />
                        <span>Active on Whole Site</span>
                      </>
                    ) : (
                      <span>Set as Active Logo</span>
                    )}
                  </button>

                  {/* Copy SVG Code */}
                  <button
                    onClick={() => copySvgCode(opt)}
                    className="px-3 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white text-xs font-mono flex items-center gap-1.5 transition-colors cursor-pointer"
                    title="Copy full SVG XML with active colors"
                  >
                    {copiedSvgId === opt.id ? (
                      <>
                        <CheckCheck size={13} className="text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy size={13} />
                        <span>SVG</span>
                      </>
                    )}
                  </button>

                  {/* Copy Static Path */}
                  <button
                    onClick={() => copyPath(opt)}
                    className="px-2.5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white text-xs font-mono flex items-center transition-colors cursor-pointer"
                    title="Copy public URL"
                  >
                    {copiedId === opt.id ? (
                      <Check size={13} className="text-emerald-400" />
                    ) : (
                      <span className="text-[11px]">URL</span>
                    )}
                  </button>

                  {/* Download Standalone SVG */}
                  <button
                    onClick={() => downloadCustomSvg(opt)}
                    className="p-2.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 hover:text-white transition-colors flex items-center justify-center cursor-pointer"
                    title="Download SVG file with active colors"
                  >
                    <Download size={14} />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
