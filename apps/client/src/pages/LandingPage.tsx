import { CallToAction } from '../widgets/CallToAction';
import { HeroSection } from '../widgets/HeroSection';
import { MultiAgentFlow } from '../widgets/MultiAgentFlow';
import { SupportedTech } from '../widgets/SupportedTech';

export function LandingPage() {
  return (
    <main className="min-h-screen bg-neo-bg text-neo-text overflow-x-hidden pt-20">

      <HeroSection />
      <MultiAgentFlow />
      <SupportedTech />
      <CallToAction />
      
      <footer className="py-8 text-center text-gray-600 text-sm border-t border-white/5">
        <p>© 2026 Metamorph CLI. Powered by Mozaik AI.</p>
      </footer>
    </main>
  );
}
