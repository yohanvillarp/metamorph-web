import type { ReactNode } from 'react';
import { ShieldCheck, Cpu, Terminal, AlertTriangle, Layers } from 'lucide-react';

export type CalloutType = 'spec' | 'sandbox' | 'telemetry' | 'diagnostic' | 'heuristic';

interface TechnicalCalloutProps {
  type?: CalloutType;
  title: string;
  badge?: string;
  metric?: string;
  children: ReactNode;
  className?: string;
}

const TYPE_CONFIG = {
  spec: {
    borderColor: 'border-l-cyan-500',
    indicatorColor: 'bg-cyan-400',
    badgeClass: 'bg-cyan-950/60 text-cyan-300 border-cyan-500/30',
    icon: Terminal,
    defaultBadge: 'SPECIFICATION',
  },
  sandbox: {
    borderColor: 'border-l-emerald-500',
    indicatorColor: 'bg-emerald-400',
    badgeClass: 'bg-emerald-950/60 text-emerald-300 border-emerald-500/30',
    icon: ShieldCheck,
    defaultBadge: 'ISOLATION CONFINEMENT',
  },
  telemetry: {
    borderColor: 'border-l-indigo-500',
    indicatorColor: 'bg-indigo-400',
    badgeClass: 'bg-indigo-950/60 text-indigo-300 border-indigo-500/30',
    icon: Cpu,
    defaultBadge: 'TELEMETRY & BUDGET',
  },
  diagnostic: {
    borderColor: 'border-l-amber-500',
    indicatorColor: 'bg-amber-400',
    badgeClass: 'bg-amber-950/60 text-amber-300 border-amber-500/30',
    icon: AlertTriangle,
    defaultBadge: 'DIAGNOSTIC & REPAIR',
  },
  heuristic: {
    borderColor: 'border-l-teal-500',
    indicatorColor: 'bg-teal-400',
    badgeClass: 'bg-teal-950/60 text-teal-300 border-teal-500/30',
    icon: Layers,
    defaultBadge: 'PROJECT INTELLIGENCE',
  },
};

export function TechnicalCallout({
  type = 'spec',
  title,
  badge,
  metric,
  children,
  className = '',
}: TechnicalCalloutProps) {
  const cfg = TYPE_CONFIG[type] || TYPE_CONFIG.spec;
  const Icon = cfg.icon;

  return (
    <div
      className={`my-5 rounded-xl border border-slate-800/90 border-l-4 ${cfg.borderColor} bg-[#060a12] overflow-hidden shadow-sm ${className}`}
    >
      {/* Header bar */}
      <div className="flex flex-wrap items-center justify-between px-4 py-2 bg-[#090e18] border-b border-slate-800/80 gap-2">
        <div className="flex items-center gap-2.5">
          <span className={`w-2 h-2 rounded-full ${cfg.indicatorColor} flex-shrink-0`} />
          <Icon size={14} className="text-slate-400 flex-shrink-0" />
          <span className="font-mono text-xs font-bold text-slate-200 tracking-wide uppercase">
            {title}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {metric && (
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-slate-300 font-medium">
              {metric}
            </span>
          )}
          <span
            className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${cfg.badgeClass}`}
          >
            {badge || cfg.defaultBadge}
          </span>
        </div>
      </div>

      {/* Body content */}
      <div className="p-4 text-xs md:text-sm text-slate-300 leading-relaxed space-y-2">
        {children}
      </div>
    </div>
  );
}
