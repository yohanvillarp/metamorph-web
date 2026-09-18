import { motion } from 'framer-motion';
import { ArrowRight, Terminal, Copy, Check, Sparkles, Shield, Cpu } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/shared/ui/Button';
import { ButterflyLogoAnimation } from '@/widgets/ButterflyLogoAnimation';
import { ROUTES } from '@/shared/config/routes';

interface TerminalTab {
  id: string;
  command: string;
  title: string;
  lines: { text: string; color: string; prefix?: string }[];
}

const TERMINAL_TABS: TerminalTab[] = [
  {
    id: 'run',
    command: 'npx @nikelyh/metamorph run',
    title: '1. Run Swarm',
    lines: [
      { text: 'npx @nikelyh/metamorph run --from react --to next', color: 'text-slate-100', prefix: '$' },
      { text: '[Metamorph] 🔍 Scanning project directory...', color: 'text-slate-400' },
      { text: '[Metamorph] Detected: React (Vite SPA) - Confidence: 98%', color: 'text-cyan-400' },
      { text: '[Mozaik v4] Swarm initiated with 7 autonomous agents', color: 'text-teal-400' },
      { text: '[Shadow] Initialized isolated sandbox: .metamorph/shadow/run-9b2e', color: 'text-slate-400' },
      { text: '   -> MapperAgent: Discovered 28 source files', color: 'text-blue-400' },
      { text: '   -> WorkerAgent (x3): Concurrently transforming AST & imports...', color: 'text-cyan-300' },
      { text: '   -> ReviewerAgent: Validated syntax & public contract exports', color: 'text-emerald-400' },
      { text: '   -> IntegrationAgent: Running shadow npm run build (Pass!)', color: 'text-amber-300' },
      { text: '✅ Migration completed in shadow workspace! Run ID: run-9b2e', color: 'text-emerald-400 font-bold' },
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
      { text: '🚀 Metamorph UI running on http://localhost:9876', color: 'text-emerald-400 font-bold' },
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
      { text: '✅ Applied cleanly! Your working directory is preserved.', color: 'text-emerald-400 font-bold' },
      { text: '   Ready to test: git checkout metamorph/run-9b2e', color: 'text-slate-300' },
    ],
  },
];

export function HeroSection() {
  const [activeTabId, setActiveTabId] = useState('run');
  const [isCopied, setIsCopied] = useState(false);

  const activeTab = TERMINAL_TABS.find((t) => t.id === activeTabId) || TERMINAL_TABS[0];

  const handleCopy = () => {
    navigator.clipboard.writeText(activeTab.command);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <section className="relative min-h-[92vh] flex flex-col items-center justify-center px-4 pt-10 pb-20 overflow-hidden">
      {/* Background Cybernetic Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-500/15 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Animated Butterfly Logo at Top of Hero */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <ButterflyLogoAnimation className="w-48 h-48 md:w-60 md:h-60" />
        </motion.div>

        {/* Feature Badges */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-2.5 mb-6"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-cyan-950/70 border border-cyan-500/40 text-cyan-300 shadow-[0_0_12px_rgba(0,242,254,0.2)]">
            <Cpu size={13} className="text-cyan-400" />
            Mozaik v4 Event Swarm
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-950/60 border border-emerald-500/40 text-emerald-300">
            <Shield size={13} className="text-emerald-400" />
            Zero-Risk Shadow Workspace
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-slate-900 border border-slate-700 text-slate-300">
            <Sparkles size={13} className="text-amber-400" />
            Semantic AST Rewriting
          </span>
        </motion.div>

        {/* Main Headings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]">
            The AI Multi-Agent <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-200 to-cyan-400 text-glow-cyan">
              Framework Migration Swarm
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-400 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Automate architectural shifts across <strong className="text-white">React, Next.js, Vue, Svelte, Angular, Express, Fastify</strong> and <strong className="text-white">NestJS</strong>. 
            Powered by Mozaik v4 agents operating inside an isolated sandbox—your original codebase remains completely untouched until verified.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
            <Link to={ROUTES.DOCS.GETTING_STARTED}>
              <Button variant="primary" className="flex items-center gap-2">
                Install CLI <ArrowRight size={17} />
              </Button>
            </Link>
            <Link to={ROUTES.DOCS.ROOT}>
              <Button variant="secondary">
                Explore Documentation
              </Button>
            </Link>
            <Link to={ROUTES.DOCS.MIGRATIONS.FRONTEND}>
              <span className="text-sm font-mono text-cyan-400 hover:text-cyan-300 underline underline-offset-4 cursor-pointer px-3 py-2">
                View Supported Migrations ➔
              </span>
            </Link>
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
                onClick={handleCopy} 
                className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 text-xs bg-white/5 hover:bg-white/10 px-2.5 py-1 rounded-lg border border-white/5"
                aria-label="Copy Command"
              >
                {isCopied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                <span className="hidden sm:inline">{isCopied ? 'Copied!' : 'Copy'}</span>
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

