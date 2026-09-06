import { motion } from 'framer-motion';
import { Terminal, ArrowRight } from 'lucide-react';
import { Button } from '../shared/ui/Button';

export function CallToAction() {
  return (
    <section className="py-32 px-4 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-neo-primary/10 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Ready to Evolve?</h2>
          <p className="text-xl text-gray-400 mb-10">
            Join the elite developers automating their legacy technical debt.
          </p>
          
          <div className="inline-block p-1 rounded-xl bg-gradient-to-r from-neo-primary/50 to-neo-accent/50 mb-10">
            <div className="flex items-center gap-4 px-6 py-4 bg-[#0B1120] rounded-lg font-mono text-sm sm:text-base text-gray-300">
              <span className="text-neo-accent"><Terminal size={18} /></span>
              <span>npm install -g @nikelyh/metamorph</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="primary" className="text-lg px-8 py-4">
              Start Migrating Now <ArrowRight size={20} />
            </Button>
            <a href="https://github.com/yohanvillarp/metamorph" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="text-lg px-8 py-4">
                <img src="/github.svg" alt="GitHub" className="w-5 h-5 invert opacity-70" />
                View on GitHub
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
