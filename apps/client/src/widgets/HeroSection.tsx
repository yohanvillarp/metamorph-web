import { motion } from 'framer-motion';
import { ArrowRight, Terminal, Copy, Check, Shield, Cpu } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/shared/ui/Button';
import { ButterflyLogoAnimation } from '@/widgets/ButterflyLogoAnimation';
import { ROUTES } from '@/shared/config/routes';
import { PROJECT_LINKS } from '@/shared/config';
import { usePackageManager, type PackageManager } from '@/shared/lib/usePackageManager';

interface TerminalTab {
  id: string;
  command: string;
  title: string;
  lines: { text: string; color: string; prefix?: string }[];
}

const QUICK_COMMANDS: Record<PackageManager, string> = {
  npm: 'npx @nikelyh/metamorph run',
  pnpm: 'pnpm dlx @nikelyh/metamorph run',
  bun: 'bunx @nikelyh/metamorph run',
  yarn: 'yarn dlx @nikelyh/metamorph run',
};

const TERMINAL_TABS: TerminalTab[] = [
  {
    id: 'run',
    command: 'npx @nikelyh/metamorph run',
    title: '1. Run Swarm',
    lines: [
      { text: 'npx @nikelyh/metamorph run --from react --to next', color: 'text-slate-100', prefix: '$' },
      { text: '[Metamorph] [SCAN] Scanning project directory...', color: 'text-slate-400' },
      { text: '[Metamorph] Detected: React (Vite SPA) - Confidence: 98%', color: 'text-cyan-400' },
      { text: '[Mozaik v4] Swarm initiated with 8 autonomous agents (Adaptive mode)', color: 'text-teal-400' },
      { text: '[Shadow] Initialized isolated sandbox: .metamorph/shadow/run-9b2e', color: 'text-slate-400' },
      { text: '   -> MapperAgent: Discovered 28 source files', color: 'text-blue-400' },
      { text: '   -> WorkerAgent (x3): Concurrently transforming AST & imports...', color: 'text-cyan-300' },
      { text: '   -> ReviewerAgent: Validated syntax & public contract exports', color: 'text-emerald-400' },
      { text: '   -> IntegrationAgent: Running shadow verification build (Pass!)', color: 'text-amber-300' },
      { text: '   -> AccountingAgent: 142.8k tokens tallied ($0.43 total expenditure)', color: 'text-emerald-300' },
      { text: '[SUCCESS] Migration completed in shadow workspace! Run ID: run-9b2e', color: 'text-emerald-400 font-bold' },
    ],
  },
  {
    id: 'ui',
    command: 'npx @nikelyh/metamorph ui',
    title: '2. Live Dashboard',
    lines: [
      { text: 'npx @nikelyh/metamorph ui', color: 'text-slate-100', prefix: '$' },
      { text: '[Metamorph UI] Starting Dashboard API Server...', color: 'text-slate-400' },
      { text: '[Metamorph UI] SQLite state store connected: .metamorph/history.db', color: 'text-cyan-400' },
      { text: '[SERVER] Metamorph UI running on http://localhost:9876', color: 'text-emerald-400 font-bold' },
      { text: '   GET  /api/plans       -> Active & past migration runs', color: 'text-slate-400' },
      { text: '   GET  /api/events      -> Real-time Mozaik event stream', color: 'text-slate-400' },
      { text: '   POST /api/migrations  -> Remote swarm trigger', color: 'text-slate-400' },
      { text: '[Browser] Opened live interactive swarm monitor automatically.', color: 'text-cyan-300' },
    ],
  },
  {
    id: 'apply',
    command: 'npx @nikelyh/metamorph apply run-9b2e .',
    title: '3. Zero-Risk Apply',
    lines: [
      { text: 'npx @nikelyh/metamorph apply run-9b2e .', color: 'text-slate-100', prefix: '$' },
      { text: '[Integrator] Verifying shadow workspace build integrity...', color: 'text-slate-400' },
      { text: '[Git] Creating isolated branch: metamorph/run-9b2e', color: 'text-cyan-400' },
      { text: '[Integrator] Exported 28 transformed files with zero regressions.', color: 'text-teal-300' },
      { text: '[SUCCESS] Applied cleanly! Your working directory is preserved.', color: 'text-emerald-400 font-bold' },
      { text: '   Ready to test: git checkout metamorph/run-9b2e', color: 'text-slate-300' },
    ],
  },
];

export function HeroSection() {
  const [selectedPm, setSelectedPm] = usePackageManager();
  const [activeTabId, setActiveTabId] = useState('run');
  const [isCopiedTerminal, setIsCopiedTerminal] = useState(false);
  const [isCopiedQuick, setIsCopiedQuick] = useState(false);

  const activeTab = TERMINAL_TABS.find((t) => t.id === activeTabId) || TERMINAL_TABS[0];
  const quickCommand = QUICK_COMMANDS[selectedPm] || QUICK_COMMANDS.npm;

  const handleCopyTerminal = () => {
    navigator.clipboard.writeText(activeTab.command);
    setIsCopiedTerminal(true);
    setTimeout(() => setIsCopiedTerminal(false), 2000);
  };

  const handleCopyQuick = () => {
    navigator.clipboard.writeText(quickCommand);
    setIsCopiedQuick(true);
    setTimeout(() => setIsCopiedQuick(false), 2000);
  };

  return (
    <section id="hero" className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 pt-4 pb-20 overflow-hidden">
      {/* Background Cybernetic Radial Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Subtle, Proportionate Brand Logo Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-5"
        >
          <div className="relative inline-block">
            <div className="absolute -inset-2 bg-cyan-500/20 rounded-full blur-xl animate-pulse" />
            <ButterflyLogoAnimation className="w-20 h-20 md:w-24 md:h-24 relative z-10" />
          </div>
        </motion.div>

        {/* Feature & Version Spec Badges */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="flex flex-wrap items-center justify-center gap-2 mb-4"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-emerald-950/70 border border-emerald-500/40 text-emerald-300">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            v2.3.0 STABLE
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-medium bg-cyan-950/70 border border-cyan-500/40 text-cyan-300 shadow-[0_0_12px_rgba(0,242,254,0.15)]">
            <Cpu size={12} className="text-cyan-400" />
            MOZAIK V4 EVENT SWARM
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-medium bg-slate-900 border border-slate-700 text-slate-300">
            <Shield size={12} className="text-cyan-400" />
            ZERO-RISK SHADOW WORKSPACE
          </span>
        </motion.div>

        {/* Main Headings */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4 leading-[1.08] text-white">
            Autonomous Framework Migrations <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-200 to-cyan-400 text-glow-cyan">
              With Zero Working-Tree Risk.
            </span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-slate-300 mb-6 max-w-3xl mx-auto font-normal leading-relaxed">
            Automate architectural shifts across <strong className="text-white">React, Next.js, Vue, Svelte, Angular, Express, Fastify, NestJS</strong> and <strong className="text-white">Hono</strong>. 
            Operates strictly inside an isolated shadow workspace—your original codebase remains untouched until verified.
          </p>

          {/* PRIMARY QUICK-START COMMAND DOCK (Immediate Frictionless Execution) */}
          <div className="w-full max-w-xl mx-auto mb-6">
            <div className="relative group p-1 rounded-2xl bg-gradient-to-r from-cyan-500/30 via-slate-800 to-teal-500/30 border border-cyan-500/40 shadow-[0_0_25px_rgba(0,242,254,0.1)]">
              <div className="flex items-center justify-between bg-[#080d19] rounded-xl px-3 py-2 gap-2">
                {/* Package Manager Toggle */}
                <div className="flex items-center gap-1 bg-[#050811] p-0.5 rounded-lg border border-slate-800/80">
                  {(['npm', 'pnpm', 'bun'] as const).map((pm) => (
                    <button
                      key={pm}
                      onClick={() => setSelectedPm(pm)}
                      className={`px-2 py-0.5 rounded text-[11px] font-mono font-bold uppercase transition-all cursor-pointer ${
                        selectedPm === pm
                          ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                          : 'text-slate-500 hover:text-slate-300'
                      }`}
                    >
                      {pm}
                    </button>
                  ))}
                </div>

                {/* Command Line with Prefix */}
                <div className="flex-1 text-left font-mono text-xs sm:text-sm text-cyan-200 select-all overflow-x-auto whitespace-nowrap px-2">
                  <span className="text-slate-500 select-none mr-2 font-bold">$</span>
                  {quickCommand}
                </div>

                {/* Instant 1-Click Copy Button */}
                <button
                  onClick={handleCopyQuick}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-500/30 text-cyan-300 hover:text-white transition-all text-xs font-mono font-semibold cursor-pointer shrink-0"
                  title="Copy command to clipboard"
                  aria-label="Copy quick run command"
                >
                  {isCopiedQuick ? (
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
            </div>
            
            <div className="flex items-center justify-center gap-3 mt-2 text-[11px] font-mono text-slate-500">
              <span>No global install required</span>
              <span>•</span>
              <span>Deterministic offline <code className="text-cyan-400">--mock</code> ready</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            <Link to={ROUTES.DOCS.GETTING_STARTED}>
              <Button variant="primary" className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold">
                Quickstart Guide <ArrowRight size={16} />
              </Button>
            </Link>
            <a
              href={PROJECT_LINKS.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-[#5865F2]/60 text-slate-200 hover:text-white transition-all text-sm font-medium"
            >
              <img src="/discord.svg" alt="Discord" className="w-4 h-4 object-contain" />
              <span>Join Discord Community</span>
            </a>
            <a
              href={PROJECT_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-500/40 text-slate-200 hover:text-white transition-all text-sm font-medium"
            >
              <img src="/github.svg" alt="GitHub" className="w-4 h-4 object-contain" />
              <span>Star on GitHub</span>
            </a>
          </div>
        </motion.div>

        {/* Interactive Multi-Command Terminal */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative w-full max-w-3xl mx-auto"
        >
          {/* Cyan Glow Border */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-teal-400 rounded-2xl blur-md opacity-30 animate-pulse" />

          <div className="relative bg-[#070b13] border border-cyan-500/30 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-xl">
            {/* Terminal Tab Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#0a101d] border-b border-white/5">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-2 text-xs text-slate-500 font-mono hidden sm:inline-flex items-center gap-1.5">
                  <Terminal size={12} /> metamorph-cli
                </span>
              </div>

              {/* Step Tabs */}
              <div className="flex items-center gap-1 bg-[#050811] p-1 rounded-lg border border-slate-800">
                {TERMINAL_TABS.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTabId(tab.id)}
                    className={`px-3 py-1 rounded-md text-xs font-mono transition-all cursor-pointer ${
                      activeTabId === tab.id
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-bold'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {tab.title}
                  </button>
                ))}
              </div>

              {/* Copy Command */}
              <button 
                onClick={handleCopyTerminal} 
                className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 text-xs bg-white/5 hover:bg-white/10 px-2.5 py-1 rounded-lg border border-white/5 cursor-pointer"
                aria-label="Copy Command"
              >
                {isCopiedTerminal ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                <span className="hidden sm:inline">{isCopiedTerminal ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>

            {/* Terminal Body */}
            <div className="p-6 text-left font-mono text-xs md:text-sm leading-relaxed space-y-1.5 min-h-[220px] overflow-x-auto">
              {activeTab.lines.map((line, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  {line.prefix && (
                    <span className="text-cyan-400 select-none font-bold">{line.prefix}</span>
                  )}
                  <span className={line.color}>{line.text}</span>
                </div>
              ))}
              <div className="flex items-center gap-2 pt-2">
                <span className="text-cyan-400 font-bold select-none">$</span>
                <span className="inline-block w-2.5 h-4 bg-cyan-400 animate-pulse" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

