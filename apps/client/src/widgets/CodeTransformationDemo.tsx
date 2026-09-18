import { useState } from 'react';
import { ShieldCheck, Sparkles, CheckCircle2, Layers } from 'lucide-react';

interface CodeExample {
  id: string;
  title: string;
  fromTech: string;
  toTech: string;
  fromFile: string;
  toFile: string;
  legacyCode: string;
  transformedCode: string;
  highlights: string[];
}

const EXAMPLES: CodeExample[] = [
  {
    id: 'react-to-next',
    title: 'React SPA ➔ Next.js App Router',
    fromTech: 'React + React-Router',
    toTech: 'Next.js 14+ App Router',
    fromFile: 'src/App.tsx & src/screens/HomeScreen.tsx',
    toFile: 'src/app/page.tsx',
    legacyCode: `// src/App.tsx (Legacy React SPA)
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';

export function App() {
  return (
    <BrowserRouter>
      <header>
        <Link to="/">Dashboard</Link>
      </header>
      <Routes>
        <Route path="/" element={<HomeScreen variant="condensed" />} />
      </Routes>
    </BrowserRouter>
  );
}`,
    transformedCode: `// src/app/page.tsx (Migrated to Next.js App Router)
'use client';

import Link from 'next/link';
import HomeScreen from '../screens/HomeScreen';

// Auto-mapped from former "/" route by WorkerAgent
export default function HomePage() {
  return (
    <main>
      <HomeScreen variant="condensed" />
    </main>
  );
}`,
    highlights: [
      'Automatic routing migration from react-router to Next.js App Router (src/app/**/page.tsx)',
      'Added "use client" only when client state / browser APIs are detected',
      'Preserved public props and neighbor contract on <HomeScreen variant="condensed" />',
      'Replaced react-router Link with high-performance next/link',
    ],
  },
  {
    id: 'express-to-nest',
    title: 'Express REST ➔ NestJS Modular Architecture',
    fromTech: 'Express.js',
    toTech: 'NestJS Framework',
    fromFile: 'src/routes/user.route.ts',
    toFile: 'src/users/users.controller.ts',
    legacyCode: `// src/routes/user.route.ts (Express)
import { Router } from 'express';
import { UserService } from '../services/user.service';

export function createUserRouter(userService: UserService): Router {
  const router = Router();

  router.get('/profile', async (req, res) => {
    const user = await userService.getUser(req.query.id as string);
    res.json(user);
  });

  return router;
}`,
    transformedCode: `// src/users/users.controller.ts (NestJS)
import { Controller, Get, Query } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @Get('profile')
  async getProfile(@Query('id') id: string) {
    return this.userService.getUser(id);
  }
}`,
    highlights: [
      'Encapsulates imperative Express router callbacks into clean @Controller and @Get decorators',
      'Converts manual constructor instantiation into NestJS Inversion of Control (IoC) DI',
      'Express req.query extracted into declarative @Query() parameter decorators',
      'Removes manual res.json() boilerplate in favor of NestJS serialization',
    ],
  },
  {
    id: 'express-to-fastify',
    title: 'Express ➔ Fastify High Performance',
    fromTech: 'Express.js',
    toTech: 'Fastify',
    fromFile: 'src/server.ts',
    toFile: 'src/server.ts',
    legacyCode: `// src/server.ts (Express)
import express from 'express';
const app = express();

app.use(express.json());

app.get('/api/health', (req, res) => {
  res.status(200).send({ status: 'healthy', uptime: process.uptime() });
});

app.listen(3000, () => {
  console.log('Server running on 3000');
});`,
    transformedCode: `// src/server.ts (Fastify)
import Fastify from 'fastify';
const fastify = Fastify({ logger: true });

fastify.get('/api/health', async (request, reply) => {
  return { status: 'healthy', uptime: process.uptime() };
});

const start = async () => {
  try {
    await fastify.listen({ port: 3000, host: '0.0.0.0' });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();`,
    highlights: [
      'Migrated to asynchronous Fastify handler returning pure objects directly',
      'Zero unnecessary middleware: Fastify parses JSON natively without express.json() overhead',
      'Refactored startup to async/await listen pattern with structured JSON logger',
      'Benchmark speed increases up to 3x throughput',
    ],
  },
];

export function CodeTransformationDemo() {
  const [activeTab, setActiveTab] = useState(EXAMPLES[0].id);
  const activeExample = EXAMPLES.find((e) => e.id === activeTab) || EXAMPLES[0];

  return (
    <section className="py-24 px-4 relative overflow-hidden bg-[#06090e]">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-4">
            <Sparkles size={14} className="text-cyan-400" />
            Semantic AST Transformation
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Not Regex. Not Naive Codemods. <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-400">
              Architectural Metamorphosis.
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-base md:text-lg">
            Metamorph respects your project’s public contracts, types, and architectural boundaries.
            Every change is generated, reviewed, and compiled inside the isolated shadow workspace.
          </p>
        </div>

        {/* Transformation Pair Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {EXAMPLES.map((ex) => {
            const isSelected = ex.id === activeTab;
            return (
              <button
                key={ex.id}
                onClick={() => setActiveTab(ex.id)}
                className={`px-4 py-2.5 rounded-xl font-mono text-xs md:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                  isSelected
                    ? 'bg-cyan-500 text-slate-950 shadow-[0_0_20px_rgba(0,242,254,0.4)] border border-cyan-300'
                    : 'bg-[#0d1424] text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
                }`}
              >
                <span>{ex.title}</span>
              </button>
            );
          })}
        </div>

        {/* Main Code Comparison Box */}
        <div className="bg-[#0b111e] border border-cyan-500/20 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-xl">
          {/* Box Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between px-6 py-4 bg-[#0e1626] border-b border-white/5 gap-3">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(0,242,254,0.8)]" />
              <span className="font-mono text-xs md:text-sm text-cyan-300 font-bold">
                {activeExample.fromTech} <span className="text-slate-500">➔</span> {activeExample.toTech}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 bg-emerald-950/50 border border-emerald-500/30 px-2.5 py-1 rounded-md">
                <ShieldCheck size={13} />
                Sandbox Verified in .metamorph/shadow
              </span>
            </div>
          </div>

          {/* Side by Side Code Views */}
          <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
            {/* Left: Legacy Code */}
            <div className="p-5 flex flex-col">
              <div className="flex items-center justify-between mb-3 text-xs font-mono text-slate-400 pb-2 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <span className="text-red-400 font-bold">BEFORE (Host Project)</span>
                  <span className="text-slate-600">•</span>
                  <span className="text-slate-400 truncate">{activeExample.fromFile}</span>
                </div>
                <span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded text-slate-300">Untouched</span>
              </div>
              <pre className="font-mono text-xs leading-relaxed text-slate-300 overflow-x-auto p-3 rounded-lg bg-[#070b13] border border-slate-800/60 flex-1">
                <code>{activeExample.legacyCode}</code>
              </pre>
            </div>

            {/* Right: Migrated Code */}
            <div className="p-5 flex flex-col bg-[#070c17]/60">
              <div className="flex items-center justify-between mb-3 text-xs font-mono pb-2 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <span className="text-cyan-400 font-bold">AFTER (Shadow Workspace)</span>
                  <span className="text-slate-600">•</span>
                  <span className="text-cyan-300 truncate">{activeExample.toFile}</span>
                </div>
                <span className="text-[10px] bg-cyan-950/80 border border-cyan-500/30 px-2 py-0.5 rounded text-cyan-300">
                  Ready to Apply
                </span>
              </div>
              <pre className="font-mono text-xs leading-relaxed text-cyan-100 overflow-x-auto p-3 rounded-lg bg-[#050811] border border-cyan-500/20 flex-1 shadow-inner">
                <code>{activeExample.transformedCode}</code>
              </pre>
            </div>
          </div>

          {/* Highlights / Guarantees Footer */}
          <div className="px-6 py-4 bg-[#080d1a] border-t border-white/5">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-2">
              <Layers size={14} className="text-cyan-400" />
              Automated Swarm Transformations Applied:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {activeExample.highlights.map((hl, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-300 font-sans">
                  <CheckCircle2 size={14} className="text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span>{hl}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
