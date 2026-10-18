import { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, ArrowRight, Copy, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/shared/ui/Button';
import { ROUTES, PROJECT_LINKS } from '@/shared/config';

export function CallToAction() {
  const [copied, setCopied] = useState(false);
  const command = 'npx @nikelyh/metamorph run';

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-28 px-4 relative overflow-hidden bg-transparent border-t border-white/5">
      {/* Background Cyan Radial Halos */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-cyan-500/5 blur-[160px] rounded-full pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-5 tracking-tight">
            Ready to Metamorphose <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-100 to-cyan-400">
              Your Entire Stack?
            </span>
          </h2>
          <p className="text-base md:text-lg text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Eliminate months of manual rewrites and regression hunting. Deploy the autonomous Mozaik v4 agent swarm with real-time UI telemetry today.
          </p>
          
          <div className="inline-block p-0.5 rounded-xl bg-gradient-to-r from-cyan-500/20 via-white/5 to-teal-500/20 border border-white/10 mb-8 shadow-lg">
            <div className="flex items-center justify-between gap-4 px-5 py-3 bg-[#0a0d16] rounded-[10px] font-mono text-sm sm:text-base text-slate-200">
              <span className="text-cyan-400 flex items-center gap-2">
                <Terminal size={17} />
                <span className="text-slate-500 select-none mr-1 font-bold">$</span>
              </span>
              <span className="text-cyan-200 font-semibold">{command}</span>
              <button
                onClick={handleCopy}
                className="ml-4 p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
                title="Copy to clipboard"
              >
                {copied ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
            <Link to={ROUTES.DOCS.GETTING_STARTED}>
              <Button variant="primary" className="text-base px-8 py-4 flex items-center justify-center gap-2">
                Start Migrating Now <ArrowRight size={18} />
              </Button>
            </Link>
            <a href={PROJECT_LINKS.discord} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="text-base px-8 py-4 flex items-center justify-center gap-2 hover:border-[#5865F2]/60 hover:text-white transition-all shadow-[0_0_15px_rgba(88,101,242,0.15)] group">
                <img src="/discord.svg" alt="Discord" className="w-5 h-5 object-contain transition-transform group-hover:scale-110" />
                Join Discord
              </Button>
            </a>
            <a href={PROJECT_LINKS.github} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="text-base px-8 py-4 flex items-center justify-center gap-2">
                <img src="/github.svg" alt="GitHub" className="w-5 h-5 opacity-80" />
                View on GitHub
              </Button>
            </a>
            <a href={PROJECT_LINKS.npm} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="text-base px-8 py-4 flex items-center justify-center gap-2">
                <img src="/icons8-ngp.svg" alt="npm" className="w-5 h-5 object-contain" />
                npm Package
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

