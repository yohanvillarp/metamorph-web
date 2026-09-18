import { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, ArrowRight, Copy, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/shared/ui/Button';
import { ROUTES } from '@/shared/config/routes';

export function CallToAction() {
  const [copied, setCopied] = useState(false);
  const command = 'npm install -g @nikelyh/metamorph';

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-32 px-4 relative overflow-hidden bg-[#06090e] border-t border-cyan-500/10">
      {/* Background Cyan Radial Halos */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyan-500/15 blur-[160px] rounded-full pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/40 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-6">
            Autonomous Evolution
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Ready to Metamorphose <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-teal-200 to-cyan-300 text-glow-cyan">
              Your Entire Stack?
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Eliminate months of manual rewrites and regression hunting. Deploy the Mozaik v4 agent swarm inside a zero-risk shadow workspace today.
          </p>
          
          <div className="inline-block p-1 rounded-2xl bg-gradient-to-r from-cyan-500/40 via-teal-400/30 to-blue-500/40 mb-10 shadow-[0_0_30px_rgba(0,242,254,0.2)]">
            <div className="flex items-center justify-between gap-4 px-6 py-4 bg-[#070b13] rounded-xl font-mono text-sm sm:text-base text-slate-200">
              <span className="text-cyan-400 flex items-center gap-2">
                <Terminal size={18} />
                <span className="text-slate-500">$</span>
              </span>
              <span className="text-slate-100 font-semibold">{command}</span>
              <button
                onClick={handleCopy}
                className="ml-4 p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
                title="Copy to clipboard"
              >
                {copied ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to={ROUTES.DOCS.GETTING_STARTED}>
              <Button variant="primary" className="text-base px-8 py-4 flex items-center justify-center gap-2">
                Start Migrating Now <ArrowRight size={18} />
              </Button>
            </Link>
            <a href="https://github.com/yohanvillarp/metamorph" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="text-base px-8 py-4 flex items-center justify-center gap-2">
                <img src="/github.svg" alt="GitHub" className="w-5 h-5 invert opacity-80" />
                View on GitHub
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

