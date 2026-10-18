import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ArrowRight, 
  Copy, 
  Check, 
  Terminal,
  ChevronDown,
} from 'lucide-react';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/shared/ui/Button';
import { ROUTES } from '@/shared/config/routes';
import { usePackageManager, type PackageManager } from '@/shared/lib/usePackageManager';

const INSTALL_COMMANDS: Record<PackageManager, string> = {
  npm: 'npm install -g @nikelyh/metamorph',
  pnpm: 'pnpm add -g @nikelyh/metamorph',
  bun: 'bun add -g @nikelyh/metamorph',
  yarn: 'yarn global add @nikelyh/metamorph',
};

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedPm, setSelectedPm] = usePackageManager();
  const [isCopied, setIsCopied] = useState(false);

  const command = INSTALL_COMMANDS[selectedPm] || INSTALL_COMMANDS.npm;

  // Track scroll through the hero docking runway
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // 1. Headline: lifts with motion and fades smoothly
  const yHeadline = useTransform(scrollYProgress, [0, 0.45], [0, -70]);
  const opacityHeadline = useTransform(scrollYProgress, [0, 0.35], [1, 0]);
  const scaleHeadline = useTransform(scrollYProgress, [0, 0.45], [1, 0.92]);

  // 2. CTA button: fades smoothly early so focus shifts to the docked terminal
  const yCTA = useTransform(scrollYProgress, [0, 0.28], [0, -25]);
  const opacityCTA = useTransform(scrollYProgress, [0, 0.22], [1, 0]);

  // 3. Terminal Dock: smoothly lifts, tilts in 3D, and docks near top as a floating command bar
  const yDock = useTransform(scrollYProgress, [0, 0.45, 0.85], [0, -65, -100]);
  const scaleDock = useTransform(scrollYProgress, [0, 0.4, 0.85], [1, 0.94, 0.92]);
  const rotateXDock = useTransform(scrollYProgress, [0, 0.25, 0.55], [0, 14, 0]);
  const opacityDock = useTransform(scrollYProgress, [0, 0.78, 0.98], [1, 1, 0]);
  const shadowDock = useTransform(
    scrollYProgress,
    [0, 0.35, 0.75],
    [
      '0 15px 35px -10px rgba(0, 0, 0, 0.6)',
      '0 25px 60px -10px rgba(0, 242, 254, 0.28)',
      '0 20px 45px -10px rgba(0, 242, 254, 0.18)',
    ]
  );

  // 4. Subtle bottom scroll cue
  const opacityScrollCue = useTransform(scrollYProgress, [0, 0.15], [0.85, 0]);

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div ref={containerRef} className="relative h-[118vh] sm:h-[122vh]">
      {/* Sticky Viewport Stage */}
      <section 
        id="hero" 
        className="sticky top-0 h-screen w-full flex flex-col items-center justify-center px-4 overflow-hidden pt-8 pb-12"
      >
        {/* Ambient Glow Halo */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[380px] bg-cyan-500/[0.04] blur-[140px] rounded-full pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center w-full">
          {/* Main Headings */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{
              y: yHeadline,
              scale: scaleHeadline,
              opacity: opacityHeadline,
            }}
            className="w-full"
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-5 leading-[1.08] text-white max-w-3xl mx-auto">
              The AI Multi-Agent <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-cyan-300">
                Framework Migration Swarm.
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto font-normal leading-relaxed">
              Automate complex architectural shifts across <strong className="text-white">React, Next.js, Vue, Svelte, Angular, Express, Fastify, NestJS</strong> and <strong className="text-white">Hono</strong> with semantic AST refactoring and closed-loop build verification.
            </p>
          </motion.div>

          {/* Quick Install Command Dock - Glides & Docks at Top */}
          <div className="w-full max-w-xl mx-auto mb-8" style={{ perspective: 1200 }}>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              style={{
                y: yDock,
                scale: scaleDock,
                rotateX: rotateXDock,
                opacity: opacityDock,
                boxShadow: shadowDock,
                transformOrigin: 'center top',
              }}
              className="relative p-0.5 rounded-2xl bg-gradient-to-b from-white/15 via-white/5 to-cyan-500/15 border border-white/10 backdrop-blur-xl group hover:border-cyan-500/40 transition-colors"
            >
              {/* Header Bar: Terminal Label & Package Manager Switcher */}
              <div className="flex items-center justify-between px-3.5 py-2 bg-[#080b13] rounded-t-[14px] border-b border-white/5">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                  <Terminal size={13} className="text-cyan-400" />
                  <span>Terminal</span>
                </div>

                {/* Package Manager Selector */}
                <div className="flex items-center gap-1 bg-[#04060a] p-1 rounded-lg border border-white/5">
                  {(['npm', 'pnpm', 'bun', 'yarn'] as const).map((pm) => (
                    <button
                      key={pm}
                      onClick={() => setSelectedPm(pm)}
                      className={`px-2.5 py-0.5 rounded text-[11px] font-mono font-bold uppercase transition-all cursor-pointer ${
                        selectedPm === pm
                          ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 shadow-sm'
                          : 'text-slate-500 hover:text-slate-300'
                      }`}
                    >
                      {pm}
                    </button>
                  ))}
                </div>
              </div>

              {/* Command Row */}
              <div className="flex items-center justify-between bg-[#0a0d16] rounded-b-[14px] px-4 py-3 gap-3">
                <div className="flex-1 text-left font-mono text-xs sm:text-sm text-cyan-200 select-all overflow-x-auto whitespace-nowrap">
                  <span className="text-slate-500 select-none mr-2 font-bold">$</span>
                  {command}
                </div>

                {/* 1-Click Copy Button */}
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/25 text-cyan-300 hover:text-white transition-all text-xs font-mono font-semibold cursor-pointer shrink-0"
                  title="Copy command to clipboard"
                  aria-label="Copy install command"
                >
                  {isCopied ? (
                    <>
                      <Check size={13} className="text-emerald-400" />
                      <span className="text-emerald-400 text-[11px] font-bold">COPIED</span>
                    </>
                  ) : (
                    <>
                      <Copy size={13} />
                      <span className="text-[11px] font-bold">COPY</span>
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          </div>

          {/* Primary Action CTA */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            style={{
              y: yCTA,
              opacity: opacityCTA,
            }}
            className="flex items-center justify-center"
          >
            <Link to={ROUTES.DOCS.GETTING_STARTED}>
              <Button variant="primary" className="flex items-center gap-2 px-6 py-3 text-sm font-semibold shadow-lg hover:shadow-cyan-500/25">
                Quickstart Guide <ArrowRight size={16} />
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Scroll Cue Indicator */}
        <motion.div
          style={{ opacity: opacityScrollCue }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[11px] font-mono text-slate-500 pointer-events-none"
        >
          <span>Scroll to explore</span>
          <ChevronDown size={14} className="animate-bounce text-cyan-400" />
        </motion.div>
      </section>
    </div>
  );
}
