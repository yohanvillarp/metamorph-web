import { motion } from 'framer-motion';
import { GlassCard } from '../shared/ui/GlassCard';
import { Badge } from '../shared/ui/Badge';
import { Code2, GitMerge, FileCheck, FileOutput, PackageOpen } from 'lucide-react';

const agents = [
  { id: 'mapper', name: 'Mapper', icon: <PackageOpen className="text-purple-400" />, desc: 'Analyzes project structure', delay: 0 },
  { id: 'worker', name: 'Worker', icon: <Code2 className="text-blue-400" />, desc: 'Refactors code blocks', delay: 0.2 },
  { id: 'reviewer', name: 'Reviewer', icon: <GitMerge className="text-green-400" />, desc: 'Ensures quality & tests', delay: 0.4 },
  { id: 'pkgManager', name: 'PackageManager', icon: <FileCheck className="text-pink-400" />, desc: 'Resolves dependencies', delay: 0.6 },
  { id: 'reporter', name: 'Reporter', icon: <FileOutput className="text-yellow-400" />, desc: 'Generates final logs', delay: 0.8 },
];

export function MultiAgentFlow() {
  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="purple" className="mb-4">Shadow Workspace</Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Multi-Agent Concurrency</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Five specialized AI agents collaborate securely in a virtual workspace, ensuring your main project stays untouched until perfect.
          </p>
        </div>

        <div className="relative">
          {/* Connection Lines (Desktop only for simplicity) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-neo-accent/30 to-transparent -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative z-10">
            {agents.map((agent) => (
              <motion.div
                key={agent.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: agent.delay }}
              >
                <GlassCard className="h-full flex flex-col items-center text-center p-6 group">
                  <div className="w-16 h-16 rounded-2xl bg-[#1a2235] border border-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-inner">
                    {agent.icon}
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-white">{agent.name}</h3>
                  <p className="text-sm text-gray-400">{agent.desc}</p>
                  
                  {/* Micro-animation dots simulating data flow */}
                  <div className="mt-6 flex gap-1 justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        animate={{ y: [0, -5, 0] }}
                        transition={{ repeat: Infinity, delay: i * 0.2 }}
                        className="w-1.5 h-1.5 rounded-full bg-neo-accent"
                      />
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
