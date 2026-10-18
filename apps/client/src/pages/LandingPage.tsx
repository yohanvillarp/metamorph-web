import { HeroSection } from '@/widgets/HeroSection';
import { SwarmPipelineVisualizer } from '@/widgets/SwarmPipelineVisualizer';
import { CodeTransformationDemo } from '@/widgets/CodeTransformationDemo';
import { SupportedTech } from '@/widgets/SupportedTech';
import { Footer } from '@/widgets/Footer';
import { SEOHead } from '@/shared/ui/SEOHead';
import { WindBreeze } from '@/shared/ui/WindBreeze';

export function LandingPage() {
  return (
    <main className="min-h-screen bg-[#06090e] text-slate-100 overflow-x-hidden pt-16 relative">
      <SEOHead
        title="Metamorph | The AI Multi-Agent Migration CLI"
        description="Refactor and migrate your entire codebase with zero risk and zero downtime. Powered by Mozaik AI and an elite swarm of autonomous agents."
        keywords="framework migration, codemod, ai refactoring, mozaik v4, react to nextjs, express to nestjs, polymorphic package manager, shadow workspace"
      />
      
      {/* Global Aerodynamic Wind Surge - persists across entire page scroll */}
      <WindBreeze />

      <div className="relative z-10">
        <HeroSection />
        <SupportedTech />
        <CodeTransformationDemo />
        <SwarmPipelineVisualizer />
        <Footer />
      </div>
    </main>
  );
}

