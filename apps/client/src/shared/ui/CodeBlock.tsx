import { useState } from 'react';
import { Copy, Check, Terminal } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
  children?: React.ReactNode;
}

export function CodeBlock({ code, language = 'bash', children }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  // Normalize literal '\n' escape characters and actual newlines
  const rawCode = typeof code === 'string' ? code : '';
  const formattedCode = rawCode.replace(/\\n/g, '\n').trim();

  const handleCopy = () => {
    navigator.clipboard.writeText(formattedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      translate="no" 
      className="notranslate group relative bg-[#070b14] border border-cyan-500/20 hover:border-cyan-500/40 rounded-xl my-4 overflow-hidden shadow-inner transition-colors"
    >
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-3.5 py-2 bg-[#090f1d] border-b border-cyan-500/15 text-xs font-mono text-slate-400 select-none">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-700/80 group-hover:bg-red-500/80 transition-colors" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-700/80 group-hover:bg-amber-500/80 transition-colors" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-700/80 group-hover:bg-cyan-400/80 transition-colors" />
          </div>
          <span className="text-[11px] text-slate-500 flex items-center gap-1 ml-1.5 font-semibold">
            <Terminal size={11} className="text-cyan-400" />
            <span>{language}</span>
          </span>
        </div>

        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-2 py-1 rounded-md text-[11px] font-mono bg-slate-800/60 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-700/60 hover:border-cyan-500/40 transition-all cursor-pointer"
          title="Copy code to clipboard"
          aria-label="Copy code"
        >
          {copied ? (
            <>
              <Check size={12} className="text-emerald-400" />
              <span className="text-emerald-400">Copied</span>
            </>
          ) : (
            <>
              <Copy size={12} />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code Area with whitespace-pre preservation */}
      <div className="p-4 overflow-x-auto text-xs sm:text-sm font-mono text-slate-200 leading-relaxed">
        {children || (
          <pre className="whitespace-pre font-mono selection:bg-cyan-500/30 selection:text-white">
            <code>{formattedCode}</code>
          </pre>
        )}
      </div>
    </div>
  );
}
