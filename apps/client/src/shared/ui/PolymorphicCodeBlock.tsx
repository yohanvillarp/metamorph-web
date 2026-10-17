import { useState } from 'react';
import { Copy, Check, Terminal } from 'lucide-react';
import { usePackageManager, type PackageManager } from '@/shared/lib/usePackageManager';

export interface PolymorphicCommands {
  npm: string;
  pnpm: string;
  yarn: string;
  bun: string;
}

interface PolymorphicCodeBlockProps {
  title?: string;
  commands: PolymorphicCommands;
  className?: string;
}

const PM_LIST: PackageManager[] = ['npm', 'pnpm', 'yarn', 'bun'];

export function PolymorphicCodeBlock({
  title,
  commands,
  className = '',
}: PolymorphicCodeBlockProps) {
  const [selectedPm, setSelectedPm] = usePackageManager();
  const [copied, setCopied] = useState(false);

  const activeCommand = commands[selectedPm] || commands.npm;

  const handleCopy = () => {
    navigator.clipboard.writeText(activeCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      translate="no"
      className={`notranslate my-4 rounded-xl border border-slate-800 bg-[#060910] overflow-hidden shadow-sm hover:border-slate-700 transition-colors ${className}`}
    >
      {/* Top Bar: PM Selector Tabs + Copy */}
      <div className="flex flex-wrap items-center justify-between px-3 py-1.5 bg-[#0a0e1a] border-b border-slate-800/80 gap-2 select-none">
        <div className="flex items-center gap-1.5">
          {title && (
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 mr-2 hidden sm:inline-flex items-center gap-1.5">
              <Terminal size={12} className="text-cyan-400" />
              <span>{title}</span>
            </span>
          )}

          <div className="inline-flex rounded-lg bg-[#04060b] p-0.5 border border-slate-800/80">
            {PM_LIST.map((pm) => {
              const isActive = selectedPm === pm;
              return (
                <button
                  key={pm}
                  onClick={() => setSelectedPm(pm)}
                  className={`px-2.5 py-0.5 text-xs font-mono rounded-md transition-all cursor-pointer ${
                    isActive
                      ? 'bg-slate-800 text-cyan-300 font-semibold shadow-sm'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                  }`}
                  aria-pressed={isActive}
                >
                  {pm}
                </button>
              );
            })}
          </div>
        </div>

        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-all cursor-pointer"
          title="Copy command to clipboard"
          aria-label="Copy command"
        >
          {copied ? (
            <>
              <Check size={12} className="text-emerald-400" />
              <span className="text-emerald-400 font-medium">Copied</span>
            </>
          ) : (
            <>
              <Copy size={12} />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Command Output Container */}
      <div className="p-4 overflow-x-auto text-xs font-mono text-slate-200 flex items-center gap-3">
        <span className="text-cyan-400 select-none font-bold">$</span>
        <code className="whitespace-pre flex-1 text-slate-100">{activeCommand}</code>
      </div>
    </div>
  );
}
