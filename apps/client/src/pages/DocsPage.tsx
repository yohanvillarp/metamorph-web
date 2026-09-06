import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Cpu, Code2, Terminal, Workflow } from 'lucide-react';

export function DocsPage() {
  return (
    <div className="min-h-screen bg-neo-bg text-neo-text flex flex-col items-center justify-center p-4 relative overflow-hidden pt-20">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neo-accent/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="relative z-10 flex flex-col items-center text-center mt-4">
        
        {/* Animated AI Swarm Core */}
        <div className="relative w-64 h-64 flex items-center justify-center mb-12">
          {/* Outer Rotating Rings */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="absolute inset-0 rounded-full border border-dashed border-neo-accent/30"
          />
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
            className="absolute inset-6 rounded-full border border-neo-primary/20"
          />

          {/* Central AI Core */}
          <motion.div 
            animate={{ 
              scale: [1, 1.05, 1], 
              boxShadow: ["0 0 20px rgba(6,182,212,0.2)", "0 0 50px rgba(6,182,212,0.6)", "0 0 20px rgba(6,182,212,0.2)"] 
            }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="w-24 h-24 bg-[#0d1424] border border-neo-accent/50 rounded-2xl flex items-center justify-center z-10 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-neo-accent/20 blur-xl" />
            <Cpu size={40} className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] z-10" />
          </motion.div>

          {/* Orbiting Agent 1: Code Worker */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
            className="absolute inset-0 pointer-events-none"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#11192b] border border-purple-500/50 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.3)]">
               <motion.div animate={{ rotate: -360 }} transition={{ repeat: Infinity, duration: 12, ease: "linear" }}>
                 <Code2 size={20} className="text-purple-400" />
               </motion.div>
            </div>
          </motion.div>

          {/* Orbiting Agent 2: Terminal Execution */}
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 16, ease: "linear" }}
            className="absolute inset-6 pointer-events-none"
          >
            <div className="absolute bottom-0 right-1/4 translate-x-1/2 translate-y-1/2 w-12 h-12 bg-[#11192b] border border-blue-500/50 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.3)]">
               <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 16, ease: "linear" }}>
                 <Terminal size={20} className="text-blue-400" />
               </motion.div>
            </div>
          </motion.div>

          {/* Orbiting Agent 3: Workflow/Mapper */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
            className="absolute -inset-4 pointer-events-none"
          >
            <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-[#11192b] border border-green-500/50 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(34,197,94,0.3)]">
               <motion.div animate={{ rotate: -360 }} transition={{ repeat: Infinity, duration: 8, ease: "linear" }}>
                 <Workflow size={18} className="text-green-400" />
               </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Friendly Coming Soon Message */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-5xl font-extrabold mb-6 text-white tracking-tight">
            We're spinning up the agents!
          </h1>
          <p className="text-gray-400 max-w-lg mx-auto text-lg leading-relaxed mb-8">
            The documentation is currently being written by our AI swarm. 
            Please check back soon for complete guides, API references, and migration tutorials.
          </p>
          <Link to="/" className="inline-block px-8 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 text-white font-medium transition-all backdrop-blur-md">
            Return to Base
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
