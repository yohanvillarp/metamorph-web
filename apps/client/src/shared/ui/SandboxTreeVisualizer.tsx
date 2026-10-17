import { ShieldCheck, GitBranch, ArrowRight, Folder, FileCode, CheckCircle2 } from 'lucide-react';

interface SandboxTreeVisualizerProps {
  runId?: string;
  className?: string;
}

export function SandboxTreeVisualizer({
  runId = 'run-9b2e',
  className = '',
}: SandboxTreeVisualizerProps) {
  return (
    <div
      className={`my-6 rounded-xl border border-slate-800 bg-[#060910] overflow-hidden font-mono text-xs shadow-md ${className}`}
    >
      {/* Header bar */}
      <div className="flex flex-wrap items-center justify-between px-4 py-2.5 bg-[#0a0f1d] border-b border-slate-800 gap-2">
        <div className="flex items-center gap-2">
          <ShieldCheck size={15} className="text-emerald-400" />
          <span className="font-bold text-slate-200 tracking-wider text-[11px] uppercase">
            SANDBOX CONFINEMENT SPECIFICATION
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] text-emerald-400 bg-emerald-950/70 border border-emerald-500/30 px-2 py-0.5 rounded font-bold">
            ZERO-MUTATION GUARANTEE
          </span>
          <span className="text-[10px] text-slate-400 bg-slate-900 border border-slate-800 px-2 py-0.5 rounded">
            RUN: {runId}
          </span>
        </div>
      </div>

      {/* Comparison Grid */}
      <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-800/80">
        {/* Left Column: Host Repository */}
        <div className="p-4 bg-[#05080e]">
          <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-800/60">
            <span className="font-bold text-slate-300 flex items-center gap-1.5">
              <Folder size={14} className="text-slate-400" />
              <span>Host Workspace (Your Repo)</span>
            </span>
            <span className="text-[10px] px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-slate-400 uppercase font-semibold">
              STRICTLY READ-ONLY
            </span>
          </div>

          <div className="space-y-1 text-slate-400 text-[11px] leading-relaxed">
            <div className="flex items-center gap-2">
              <span className="text-slate-600">├──</span>
              <FileCode size={13} className="text-slate-500" />
              <span className="text-slate-300">src/server.ts</span>
              <span className="text-[9px] text-slate-500 ml-auto font-mono">[untouched]</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-slate-600">├──</span>
              <FileCode size={13} className="text-slate-500" />
              <span className="text-slate-300">package.json</span>
              <span className="text-[9px] text-slate-500 ml-auto font-mono">[intact]</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-slate-600">└──</span>
              <FileCode size={13} className="text-slate-500" />
              <span className="text-slate-300">tsconfig.json</span>
              <span className="text-[9px] text-slate-500 ml-auto font-mono">[intact]</span>
            </div>
          </div>

          <p className="mt-4 text-[11px] text-slate-500 leading-normal border-t border-slate-800/40 pt-2.5">
            Filesystem mutation calls outside the sandbox trigger immediate boundary rejection via <code className="text-slate-300">assertSandbox()</code>.
          </p>
        </div>

        {/* Right Column: Isolated Shadow Sandbox */}
        <div className="p-4 bg-[#060a14]">
          <div className="flex items-center justify-between mb-3 pb-2 border-b border-cyan-500/20">
            <span className="font-bold text-cyan-300 flex items-center gap-1.5">
              <Folder size={14} className="text-cyan-400" />
              <span>.metamorph/shadow/{runId}/</span>
            </span>
            <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 uppercase font-semibold">
              ISOLATED SANDBOX
            </span>
          </div>

          <div className="space-y-1 text-slate-300 text-[11px] leading-relaxed">
            <div className="flex items-center gap-2">
              <span className="text-slate-600">├──</span>
              <FileCode size={13} className="text-emerald-400" />
              <span className="text-emerald-300">src/server.ts</span>
              <span className="text-[9px] text-emerald-400 ml-auto font-mono">[AST transformed]</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-slate-600">├──</span>
              <FileCode size={13} className="text-cyan-400" />
              <span className="text-cyan-200">package.json</span>
              <span className="text-[9px] text-cyan-400 ml-auto font-mono">[PPME dependencies]</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-slate-600">└──</span>
              <FileCode size={13} className="text-amber-400" />
              <span className="text-amber-200">node_modules/</span>
              <span className="text-[9px] text-amber-400 ml-auto font-mono">[shadow build test]</span>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between pt-2.5 border-t border-cyan-500/20 text-[11px]">
            <span className="text-slate-400 flex items-center gap-1">
              <CheckCircle2 size={12} className="text-emerald-400" />
              <span>Shadow Build Verified</span>
            </span>
            <span className="text-cyan-300 flex items-center gap-1 font-bold">
              <span>metamorph apply</span>
              <ArrowRight size={11} />
              <GitBranch size={11} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
