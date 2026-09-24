import { HeroSection } from '@/widgets/HeroSection';
import { SwarmPipelineVisualizer } from '@/widgets/SwarmPipelineVisualizer';
import { CodeTransformationDemo } from '@/widgets/CodeTransformationDemo';
import { SupportedTech } from '@/widgets/SupportedTech';
import { CallToAction } from '@/widgets/CallToAction';
import { SEOHead } from '@/shared/ui/SEOHead';

export function LandingPage() {
  return (
    <main className="min-h-screen bg-[#06090e] text-slate-100 overflow-x-hidden pt-20">
      <SEOHead
        title="Metamorph | The AI Multi-Agent Migration CLI"
        description="Refactor and migrate your entire codebase with zero risk and zero downtime. Powered by Mozaik AI and an elite swarm of autonomous agents."
        keywords="framework migration, codemod, ai refactoring, mozaik v4, react to nextjs, express to nestjs, polymorphic package manager, shadow workspace"
      />
      <HeroSection />
      <SwarmPipelineVisualizer />
      <CodeTransformationDemo />
      <SupportedTech />
      <CallToAction />
      
      <footer className="py-10 text-center text-slate-500 text-xs md:text-sm border-t border-cyan-500/10 bg-[#04060a]">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img src="/logo_metamorph.png" alt="Metamorph" className="w-6 h-6 object-contain" />
            <span className="font-bold text-slate-300 font-mono">Metamorph Swarm CLI</span>
          </div>
          <p>© 2026 Metamorph. Built for high-reliability framework transformations. Powered by Mozaik v4.</p>
          <div className="flex items-center gap-4 text-xs font-mono">
            <a href="https://www.npmjs.com/package/@nikelyh/metamorph" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
              npm: @nikelyh/metamorph
            </a>
            <span>•</span>
            <a href="https://github.com/yohanvillarp/metamorph" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

