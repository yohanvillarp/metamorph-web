import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FolderSearch, 
  PackageCheck, 
  Cpu, 
  ShieldCheck, 
  Network, 
  Wrench, 
  FileSpreadsheet, 
  RefreshCw, 
  Zap,
  Activity
} from 'lucide-react';

interface AgentDetail {
  id: string;
  name: string;
  role: string;
  badge: string;
  icon: typeof FolderSearch;
  eventTrigger: string;
  eventOutput: string;
  concurrency: string;
  desc: string;
  highlightColor: string;
}

const SWARM_AGENTS: AgentDetail[] = [
  {
    id: 'mapper',
    name: 'MapperAgent',
    role: 'Discovery & Graph Mapping',
    badge: '1 Instance',
    icon: FolderSearch,
    eventTrigger: 'MIGRATION_STARTED',
    eventOutput: 'FILE_DISCOVERED (per file)',
    concurrency: 'Single-thread static scan',
    desc: 'Scans the project tree, resolves internal dependencies, and emits discovery events into the Mozaik bus for every file needing migration.',
    highlightColor: 'from-blue-500/20 to-cyan-500/20 border-cyan-500/40 text-cyan-300',
  },
  {
    id: 'pkgManager',
    name: 'PackageManagerAgent',
    role: 'Dependency Synchronization',
    badge: 'Direct JSON Edit',
    icon: PackageCheck,
    eventTrigger: 'MIGRATION_STARTED',
    eventOutput: 'PHASE_PACKAGES_READY',
    concurrency: 'Host-safe manipulation',
    desc: 'Modifies dependencies, devDependencies, and scripts directly inside .metamorph/shadow/package.json. Never runs rogue npm processes on your host directory.',
    highlightColor: 'from-teal-500/20 to-emerald-500/20 border-teal-500/40 text-teal-300',
  },
  {
    id: 'worker',
    name: 'WorkerAgent',
    role: 'AST & Code Transformation',
    badge: 'Max 3 Concurrent',
    icon: Cpu,
    eventTrigger: 'FILE_DISCOVERED / FILE_REJECTED',
    eventOutput: 'FILE_MIGRATED / FILE_FAILED',
    concurrency: 'ConcurrencyQueue limit: 3',
    desc: 'Performs AST transformations with layered rules and neighbor context. Bounded by a strict concurrency queue to prevent rate-limit starvation.',
    highlightColor: 'from-cyan-500/20 to-sky-500/20 border-cyan-400/50 text-cyan-200',
  },
  {
    id: 'reviewer',
    name: 'ReviewerAgent',
    role: 'Semantic Quality Assurance',
    badge: 'Max 2 Retries',
    icon: ShieldCheck,
    eventTrigger: 'FILE_MIGRATED',
    eventOutput: 'FILE_REVIEWED / FILE_REJECTED',
    concurrency: 'Per-file validation',
    desc: 'Validates migrated code against catalog invariants, verifying public exports, import paths, and syntax before allowing progress.',
    highlightColor: 'from-emerald-500/20 to-teal-500/20 border-emerald-500/40 text-emerald-300',
  },
  {
    id: 'coordinator',
    name: 'CoordinatorAgent',
    role: 'Deterministic Orchestrator',
    badge: 'Zero-LLM State Machine',
    icon: Network,
    eventTrigger: 'FILE_REVIEWED / PHASE_PACKAGES_READY',
    eventOutput: 'PHASE_INTEGRATION_STARTED',
    concurrency: 'Continuous listener',
    desc: 'A pure deterministic state machine with zero inference cost. Monitors readiness across all tasks and signals when the build sandbox is ready.',
    highlightColor: 'from-indigo-500/20 to-purple-500/20 border-indigo-500/40 text-indigo-300',
  },
  {
    id: 'integration',
    name: 'IntegrationAgent',
    role: 'Sandbox Compilation & Repair',
    badge: 'Up to 4 Repair Rounds',
    icon: Wrench,
    eventTrigger: 'PHASE_INTEGRATION_STARTED',
    eventOutput: 'MIGRATION_COMPLETED / FILE_REJECTED',
    concurrency: 'Locked per plan',
    desc: 'Runs npm install and npm run build in the isolated shadow workspace. If compilation fails, parses compiler diagnostics and triggers targeted repair loops.',
    highlightColor: 'from-amber-500/20 to-orange-500/20 border-amber-500/40 text-amber-300',
  },
  {
    id: 'reporter',
    name: 'ReporterAgent',
    role: 'Audit Report & Metrics',
    badge: 'MIGRATION.md',
    icon: FileSpreadsheet,
    eventTrigger: 'MIGRATION_COMPLETED',
    eventOutput: 'SYSTEM_LOG',
    concurrency: 'Finalizer',
    desc: 'Generates a comprehensive MIGRATION.md report in the shadow workspace, summarizing transformed files, AST diffs, and verification logs for metamorph apply.',
    highlightColor: 'from-purple-500/20 to-pink-500/20 border-purple-500/40 text-purple-300',
  },
];

export function SwarmPipelineVisualizer() {
  const [selectedAgent, setSelectedAgent] = useState<string>(SWARM_AGENTS[2].id); // Default Worker
  const activeAgent = SWARM_AGENTS.find((a) => a.id === selectedAgent) || SWARM_AGENTS[2];

  return (
    <section className="py-24 px-4 relative bg-[#080c14] border-t border-b border-cyan-500/10 overflow-hidden">
      {/* Background cyber grid */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(6, 182, 212, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(6, 182, 212, 0.1) 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-500/40 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-4 shadow-[0_0_15px_rgba(0,242,254,0.2)]">
            <Zap size={14} className="text-cyan-400" />
            Mozaik v4 Event-Driven Swarm
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Autonomous 7-Agent Swarm <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-teal-300 to-sky-400">
              With Self-Repair Integration Loops
            </span>
          </h2>
          <p className="text-slate-400 max-w-3xl mx-auto text-base md:text-lg">
            Unlike simple linear scripts, Metamorph agents collaborate over a semantic event bus with blackboard architecture. 
            If a compiler test fails in the shadow workspace, the integration agent automatically guides workers to repair it.
          </p>
        </div>

        {/* Interactive Swarm Flow Nodes */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 mb-10">
          {SWARM_AGENTS.map((agent, index) => {
            const isSelected = agent.id === selectedAgent;
            const Icon = agent.icon;

            return (
              <motion.button
                key={agent.id}
                onClick={() => setSelectedAgent(agent.id)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className={`flex flex-col items-center text-center p-4 rounded-xl border transition-all cursor-pointer relative group ${
                  isSelected
                    ? 'bg-[#0f1a2e] border-cyan-400 shadow-[0_0_20px_rgba(0,242,254,0.3)] ring-1 ring-cyan-400'
                    : 'bg-[#0b1220]/80 border-slate-800/80 hover:border-cyan-500/40 hover:bg-[#0e1626]'
                }`}
              >
                {/* Step indicator badge */}
                <div className="absolute top-2 left-2 text-[10px] font-mono font-bold text-slate-500 group-hover:text-cyan-400">
                  0{index + 1}
                </div>

                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 transition-colors ${
                  isSelected 
                    ? 'bg-cyan-500 text-slate-950 shadow-[0_0_15px_rgba(0,242,254,0.5)]' 
                    : 'bg-slate-900 text-cyan-400 border border-slate-800 group-hover:border-cyan-500/40'
                }`}>
                  <Icon size={22} />
                </div>

                <h3 className="font-mono font-bold text-xs md:text-sm text-white mb-1 truncate w-full">
                  {agent.name.replace('Agent', '')}
                </h3>
                <span className="text-[10px] text-slate-400 line-clamp-1">
                  {agent.role}
                </span>

                {/* Self repair indicator on integration agent */}
                {agent.id === 'integration' && (
                  <div className="mt-2 text-[9px] font-mono text-amber-400 bg-amber-950/60 border border-amber-500/30 px-1.5 py-0.5 rounded flex items-center gap-1">
                    <RefreshCw size={10} className="animate-spin" /> Repair
                  </div>
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Selected Agent Deep Dive Card */}
        <motion.div
          key={activeAgent.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-[#0b1220] border border-cyan-500/30 rounded-2xl p-6 md:p-8 shadow-2xl backdrop-blur-xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />

          <div className="flex flex-col lg:flex-row items-start justify-between gap-8 relative z-10">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <span className="p-2.5 rounded-xl bg-cyan-950/80 border border-cyan-500/40 text-cyan-300">
                  <activeAgent.icon size={26} />
                </span>
                <div>
                  <h3 className="text-2xl font-extrabold text-white flex items-center gap-3">
                    {activeAgent.name}
                    <span className="text-xs font-mono font-normal px-2.5 py-0.5 rounded-full bg-cyan-950 border border-cyan-500/30 text-cyan-300">
                      {activeAgent.badge}
                    </span>
                  </h3>
                  <p className="text-sm font-mono text-cyan-400/90">{activeAgent.role}</p>
                </div>
              </div>

              <p className="text-slate-300 text-base leading-relaxed mb-6 mt-4">
                {activeAgent.desc}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
                <div className="p-3.5 rounded-xl bg-[#080d17] border border-slate-800">
                  <span className="text-slate-500 uppercase tracking-wider text-[10px] block mb-1">Listens To (Trigger):</span>
                  <span className="text-cyan-300 font-bold break-all">{activeAgent.eventTrigger}</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#080d17] border border-slate-800">
                  <span className="text-slate-500 uppercase tracking-wider text-[10px] block mb-1">Emits To Bus:</span>
                  <span className="text-emerald-400 font-bold break-all">{activeAgent.eventOutput}</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#080d17] border border-slate-800">
                  <span className="text-slate-500 uppercase tracking-wider text-[10px] block mb-1">Concurrency Spec:</span>
                  <span className="text-amber-300 font-bold">{activeAgent.concurrency}</span>
                </div>
              </div>
            </div>

            {/* Self-Repair Loop Visual Box */}
            <div className="w-full lg:w-80 bg-[#070b13] border border-cyan-500/20 rounded-xl p-5 flex flex-col justify-between">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-300 font-bold pb-3 border-b border-white/5 mb-3">
                <Activity size={16} className="text-cyan-400" />
                <span>The Self-Repair Guarantee</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                When <strong className="text-white">IntegrationAgent</strong> tests your shadow build, compile diagnostics (missing types, renamed imports) are parsed and passed back to <strong className="text-white">WorkerAgent</strong> with a fresh retry budget.
              </p>
              <div className="flex items-center justify-between text-[11px] font-mono bg-cyan-950/40 border border-cyan-500/30 rounded-lg p-2.5 text-cyan-300">
                <span>Shadow Workspace:</span>
                <span className="text-emerald-400 font-bold">Zero Host Risk</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
