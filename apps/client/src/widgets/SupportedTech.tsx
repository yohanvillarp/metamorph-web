import { motion } from 'framer-motion';
import { GlassCard } from '../shared/ui/GlassCard';
import { ArrowRight, ArrowRightLeft } from 'lucide-react';
import { Badge } from '../shared/ui/Badge';
import { cn } from '../shared/lib/utils';

type MigrationData = {
  from: { name: string; icon: string };
  to: { name: string; icon: string };
  isBidirectional: boolean;
  targetColorClass: string;
};

const backendMigrations: MigrationData[] = [
  { 
    from: { name: 'Express', icon: 'https://cdn.simpleicons.org/express/white' }, 
    to: { name: 'Fastify', icon: 'https://cdn.simpleicons.org/fastify/white' },
    isBidirectional: true,
    targetColorClass: 'hover:border-white hover:shadow-[0_0_25px_rgba(255,255,255,0.15)]'
  },
  { 
    from: { name: 'Express', icon: 'https://cdn.simpleicons.org/express/white' }, 
    to: { name: 'NestJS', icon: 'https://cdn.simpleicons.org/nestjs/E0234E' },
    isBidirectional: false,
    targetColorClass: 'hover:border-[#E0234E] hover:shadow-[0_0_25px_rgba(224,35,78,0.25)]'
  },
  { 
    from: { name: 'Fastify', icon: 'https://cdn.simpleicons.org/fastify/white' }, 
    to: { name: 'NestJS', icon: 'https://cdn.simpleicons.org/nestjs/E0234E' },
    isBidirectional: false,
    targetColorClass: 'hover:border-[#E0234E] hover:shadow-[0_0_25px_rgba(224,35,78,0.25)]'
  }
];

const frontendMigrations: MigrationData[] = [
  { 
    from: { name: 'React', icon: 'https://cdn.simpleicons.org/react/61DAFB' }, 
    to: { name: 'Next.js', icon: 'https://cdn.simpleicons.org/nextdotjs/white' },
    isBidirectional: false,
    targetColorClass: 'hover:border-white hover:shadow-[0_0_25px_rgba(255,255,255,0.15)]'
  },
  { 
    from: { name: 'Vue', icon: 'https://cdn.simpleicons.org/vuedotjs/4FC08D' }, 
    to: { name: 'React', icon: 'https://cdn.simpleicons.org/react/61DAFB' },
    isBidirectional: false,
    targetColorClass: 'hover:border-[#61DAFB] hover:shadow-[0_0_25px_rgba(97,218,251,0.25)]'
  },
  { 
    from: { name: 'Vue', icon: 'https://cdn.simpleicons.org/vuedotjs/4FC08D' }, 
    to: { name: 'Next.js', icon: 'https://cdn.simpleicons.org/nextdotjs/white' },
    isBidirectional: false,
    targetColorClass: 'hover:border-white hover:shadow-[0_0_25px_rgba(255,255,255,0.15)]'
  },
  { 
    from: { name: 'Angular', icon: 'https://cdn.simpleicons.org/angular/DD0031' }, 
    to: { name: 'React', icon: 'https://cdn.simpleicons.org/react/61DAFB' },
    isBidirectional: false,
    targetColorClass: 'hover:border-[#61DAFB] hover:shadow-[0_0_25px_rgba(97,218,251,0.25)]'
  },
  { 
    from: { name: 'Svelte', icon: 'https://cdn.simpleicons.org/svelte/FF3E00' }, 
    to: { name: 'Next.js', icon: 'https://cdn.simpleicons.org/nextdotjs/white' },
    isBidirectional: false,
    targetColorClass: 'hover:border-white hover:shadow-[0_0_25px_rgba(255,255,255,0.15)]'
  }
];

function MigrationCard({ mig, index }: { mig: MigrationData, index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
    >
      <GlassCard 
        hoverEffect={false}
        initial="initial"
        whileHover="hover"
        className={cn("flex flex-col items-center justify-center p-6 text-center group h-full transition-all duration-300 hover:-translate-y-2", mig.targetColorClass)}
      >
        <div className="flex items-center justify-between w-full mb-6 px-4">
          {/* From Tech */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-14 h-14 rounded-xl bg-[#0f172a] border border-white/10 flex items-center justify-center p-3 shadow-inner group-hover:scale-110 transition-transform duration-300">
              <img src={mig.from.icon} alt={mig.from.name} className="w-full h-full object-contain" />
            </div>
          </div>

          {/* Animated Glowing Arrow */}
          <div className="relative flex items-center justify-center mx-4">
            <motion.div
              animate={{ 
                opacity: [0.5, 1, 0.5],
                filter: [
                  'drop-shadow(0 0 2px rgba(255,255,255,0.1))', 
                  'drop-shadow(0 0 12px rgba(6,182,212,0.8))', 
                  'drop-shadow(0 0 2px rgba(255,255,255,0.1))'
                ]
              }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="text-white relative z-10"
            >
              {mig.isBidirectional ? (
                <ArrowRightLeft size={32} strokeWidth={2.5} className="group-hover:text-neo-accent transition-colors" />
              ) : (
                <ArrowRight size={32} strokeWidth={2.5} className="group-hover:text-neo-accent transition-colors" />
              )}
            </motion.div>
          </div>

          {/* To Tech */}
          <div className="flex flex-col items-center gap-2">
            <div className="w-14 h-14 rounded-xl bg-[#0f172a] border border-white/10 flex items-center justify-center p-3 shadow-inner group-hover:scale-110 transition-transform duration-300">
              <img src={mig.to.icon} alt={mig.to.name} className="w-full h-full object-contain" />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 font-mono font-bold text-sm mt-auto w-full">
          <span className="text-gray-400 group-hover:text-white transition-colors">{mig.from.name}</span>
          <span className="text-neo-accent">{mig.isBidirectional ? '⇄' : '➔'}</span>
          <span className="text-white">{mig.to.name}</span>
        </div>
      </GlassCard>
    </motion.div>
  );
}

export function SupportedTech() {
  return (
    <section className="py-24 px-4 relative overflow-hidden bg-black/20">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <Badge variant="cyan" className="mb-4">Infinite Possibilities</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Seamless Migrations</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Metamorph supports complex architectural shifts automatically. Just define your target stack and let the swarm handle the rest.
          </p>
        </div>

        {/* Backend Section */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-2xl font-bold text-white">Backend Refactoring</h3>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-white/10 to-transparent" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {backendMigrations.map((mig, idx) => (
              <MigrationCard key={`backend-${idx}`} mig={mig} index={idx} />
            ))}
          </div>
        </div>

        {/* Frontend Section */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-2xl font-bold text-white">Frontend Modernization</h3>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-white/10 to-transparent" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {frontendMigrations.map((mig, idx) => (
              <MigrationCard key={`frontend-${idx}`} mig={mig} index={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
