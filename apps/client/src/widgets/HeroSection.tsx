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
import { WindBreeze } from '@/shared/ui/WindBreeze';
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

  // Track scroll through the sticky container runway
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // 1. Headline: lifts with motion blur and scales down
  const yHeadline = useTransform(scrollYProgress, [0, 0.45], [0, -110]);
  const opacityHeadline = useTransform(scrollYProgress, [0, 0.35], [1, 0]);
  const scaleHeadline = useTransform(scrollYProgress, [0, 0.45], [1, 0.88]);
  const blurHeadline = useTransform(scrollYProgress, [0, 0.4], ['blur(0px)', 'blur(8px)']);

  // 2. Terminal Dock: pronounced 3D perspective pitch and dynamic lift
  const yDock = useTransform(scrollYProgress, [0, 0.4, 0.85], [0, -40, -110]);
  const scaleDock = useTransform(scrollYProgress, [0, 0.35, 0.85], [1, 1.05, 0.88]);
  const rotateXDock = useTransform(scrollYProgress, [0, 0.7], [0, 22]);
  const opacityDock = useTransform(scrollYProgress, [0, 0.65, 0.9], [1, 1, 0]);
  const shadowDock = useTransform(
    scrollYProgress,
    [0, 0.4, 0.8],
    [
      '0 20px 40px -15px rgba(0, 0, 0, 0.7)',
      '0 35px 70px -10px rgba(0, 242, 254, 0.28)',
      '0 20px 40px -15px rgba(0, 0, 0, 0.7)',
    ]
  );

  // 3. CTA Button: fades smoothly early to give focus to the 3D card
  const yButton = useTransform(scrollYProgress, [0, 0.3], [0, -25]);
  const opacityButton = useTransform(scrollYProgress, [0, 0.22], [1, 0]);

  // 4. Scroll indicator cue at the bottom: vanishes on initial scroll
  const opacityScrollCue = useTransform(scrollYProgress, [0, 0.12], [0.85, 0]);

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div ref={containerRef} className="relative h-[135vh] sm:h-[145vh]">
      {/* Sticky Viewport Stage */}
      <section 
        id="hero" 
        className="sticky top-0 h-screen w-full flex flex-col items-center justify-center px-4 overflow-hidden"
      >
        {/* Scroll-Reactive Wind Breeze & Ambient Layer */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
          <WindBreeze />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[380px] bg-cyan-500/[0.035] blur-[130px] rounded-full pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center w-full">
          {/* Main Headings with Scroll Blur & Parallax Lift */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              y: yHeadline,
              scale: scaleHeadline,
              opacity: opacityHeadline,
              filter: blurHeadline,
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

          {/* Quick Install Command Dock with Dramatic 3D Aerodynamic Scroll Tilt */}
          <div className="w-full max-w-xl mx-auto mb-6" style={{ perspective: 1200 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              style={{
                y: yDock,
                scale: scaleDock,
                opacity: opacityDock,
                rotateX: rotateXDock,
                boxShadow: shadowDock,
                transformOrigin: 'center bottom',
              }}
              className="relative p-0.5 rounded-2xl bg-gradient-to-b from-white/15 via-white/5 to-cyan-500/15 border border-white/10 backdrop-blur-xl group hover:border-cyan-500/40 transition-colors"
            >
              {/* Header Bar: Terminal Label & Package Manager Switcher */}
              <div className="flex items-center justify-between px-3.5 py-2 bg-[#080b13] rounded-t-[14px] border-b border-white/5">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                  <Terminal size={13} className="text-cyan-400" />
                  <span>Terminal</span>
                </div>

                {/* Package Manager Selector (npm by default) */}
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
            transition={{ duration: 0.5, delay: 0.45 }}
            style={{
              y: yButton,
              opacity: opacityButton,
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
