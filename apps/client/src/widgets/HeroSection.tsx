import { motion } from 'framer-motion';
import { ArrowRight, Terminal, Copy, Check } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/shared/ui/Button';

export function HeroSection() {
  const [typedCommand, setTypedCommand] = useState('');
  const [isCopied, setIsCopied] = useState(false);
  const fullCommand = 'npm install -g @nikelyh/metamorph';

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i <= fullCommand.length) {
        setTypedCommand(fullCommand.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(fullCommand);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neo-primary/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-neo-accent/20 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-neo-accent drop-shadow-sm">
            The AI Multi-Agent <br /> Migration CLI
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Refactor and migrate your entire codebase with zero risk and zero downtime. 
            Powered by <a href="https://github.com/jigjoy-ai/mozaik" target="_blank" rel="noopener noreferrer" className="text-neo-accent hover:underline font-medium">Mozaik AI</a> and an elite swarm of autonomous agents.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link to="/docs/getting-started">
              <Button variant="primary">
                Get Started <ArrowRight size={18} />
              </Button>
            </Link>
            <Link to="/docs">
              <Button variant="secondary">
                Read Documentation
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Terminal Simulation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative w-full max-w-2xl mx-auto"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-neo-primary to-neo-accent rounded-xl blur opacity-30 animate-pulse" />
          <div className="relative bg-[#0d1424] border border-white/10 rounded-xl overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between px-4 py-3 bg-[#11192b] border-b border-white/5">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-2 text-xs text-gray-500 font-mono flex items-center gap-2">
                  <Terminal size={12} /> bash
                </span>
              </div>
              <button 
                onClick={handleCopy} 
                className="text-gray-400 hover:text-white transition-colors flex items-center gap-1.5 text-xs bg-white/5 hover:bg-white/10 px-2 py-1 rounded"
                aria-label="Copy command"
              >
                {isCopied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
                {isCopied ? 'Copied!' : 'Copy'}
              </button>
            </div>
            <div className="p-6 text-left font-mono text-sm md:text-base">
              <span className="text-green-400">~/project</span>
              <span className="text-blue-400"> $ </span>
              <span className="text-gray-100">{typedCommand}</span>
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="inline-block w-2 h-5 bg-white ml-1 align-middle"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
