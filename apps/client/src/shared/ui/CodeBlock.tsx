import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  children?: React.ReactNode;
}

export function CodeBlock({ code, children }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div translate="no" className="notranslate group relative bg-[#0f172a] border border-white/10 rounded-xl p-4 font-mono text-sm mb-6 pr-12 overflow-hidden">
      {children || <div>{code}</div>}
      
      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 p-1.5 rounded-lg bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity text-neo-text-muted hover:text-white hover:bg-white/10"
        title="Copy to clipboard"
      >
        {copied ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
      </button>
    </div>
  );
}
