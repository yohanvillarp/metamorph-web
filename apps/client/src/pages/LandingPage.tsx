import { HeroSection } from '@/widgets/HeroSection';
import { SwarmPipelineVisualizer } from '@/widgets/SwarmPipelineVisualizer';
import { CodeTransformationDemo } from '@/widgets/CodeTransformationDemo';
import { SupportedTech } from '@/widgets/SupportedTech';
import { CommunitySection } from '@/widgets/CommunitySection';
import { CallToAction } from '@/widgets/CallToAction';
import { Footer } from '@/widgets/Footer';
import { SEOHead } from '@/shared/ui/SEOHead';

export function LandingPage() {
  return (
    <main className="min-h-screen bg-[#06090e] text-slate-100 overflow-x-hidden pt-16">
      <SEOHead
        title="Metamorph | The AI Multi-Agent Migration CLI"
        description="Refactor and migrate your entire codebase with zero risk and zero downtime. Powered by Mozaik AI and an elite swarm of autonomous agents."
        keywords="framework migration, codemod, ai refactoring, mozaik v4, react to nextjs, express to nestjs, polymorphic package manager, shadow workspace"
      />
      <HeroSection />
      <SupportedTech />
      <CodeTransformationDemo />
      <SwarmPipelineVisualizer />
      <CommunitySection />
      <CallToAction />
      
      <Footer />
    </main>
  );
}

