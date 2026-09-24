# 🦋 Metamorph Web

<p align="center">
  <img src="apps/client/public/logo_metamorph.png" alt="Metamorph Logo" width="120" height="120" />
</p>

<p align="center">
  <strong>The Official Landing Page & Interactive Documentation Portal for Metamorph</strong><br />
  <em>The AI Multi-Agent Framework Migration & Architecture Refactoring CLI</em>
</p>

<p align="center">
  <a href="https://metamorph.nikelyh.tech"><img src="https://img.shields.io/badge/Live_Site-metamorph.nikelyh.tech-00f2fe?style=flat-square&logo=vercel&logoColor=black" alt="Live Site" /></a>
  <a href="https://www.npmjs.com/package/@nikelyh/metamorph"><img src="https://img.shields.io/badge/CLI-@nikelyh/metamorph_v2.1.2-blue?style=flat-square&logo=npm" alt="npm package" /></a>
  <a href="https://github.com/yohanvillarp/metamorph"><img src="https://img.shields.io/badge/Engine_Repo-yohanvillarp%2Fmetamorph-181717?style=flat-square&logo=github" alt="Engine Repo" /></a>
  <img src="https://img.shields.io/badge/React-19.2-20232A?style=flat-square&logo=react&logoColor=61DAFB" alt="React 19" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white" alt="Tailwind CSS v4" />
  <img src="https://img.shields.io/badge/Vite-v8-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" alt="MIT License" />
</p>

---

## Overview

**`metamorph-web`** is the official web documentation and presentation portal for **[Metamorph](https://github.com/yohanvillarp/metamorph)** (`@nikelyh/metamorph`).

It provides developers, engineering leads, and software architects with:
- **Interactive Terminal & Swarm Showcase**: Live simulation of the 7 autonomous agents cooperating inside an isolated Shadow Workspace.
- **Full Migration Matrix**: Comprehensive catalog of supported frontend (React, Next.js, Vue, Svelte, Angular) and backend (Express, Fastify, NestJS) shifts.
- **Architectural Reference**: Detailed guides on the Project Intelligence Engine (PIE), Polymorphic Package Manager Engine (PPME), and Mozaik v4 event swarms.
- **Interactive CLI Docs**: Practical reference for commands (`run`, `ui`, `apply`, `rollback`, `detect`, `list`, `reset`).
- **Whitepapers Portal**: Direct access to the 6 system architecture whitepapers.

> **Note**: This repository hosts the frontend presentation layer. For the core CLI engine, agent handlers, and AST transformation rules, visit the main engine repository: [yohanvillarp/metamorph](https://github.com/yohanvillarp/metamorph).

---

## Repository Architecture

The project is structured as a modular workspace prepared for future expansions:

```text
metamorph-web/
├── apps/
│   └── client/                     # Single-Page Application (SPA) Documentation Portal
│       ├── public/                 # Static assets, robots.txt, sitemap.xml, branding
│       ├── src/
│       │   ├── app/                # Application entry point & global configuration
│       │   ├── entities/           # Domain models (technologies, migration definitions)
│       │   ├── pages/              # Lazy-loaded views (Landing, Overview, Concepts, Swarm, CLI)
│       │   ├── shared/             # Reusable UI kit, SEOHead manager, Lucide icons, routing
│       │   └── widgets/            # Hero, Swarm visualizer, TOC sidebar, code demos
│       ├── index.html              # Shell with Schema.org JSON-LD structured data
│       ├── package.json            # React 19 + Tailwind v4 + Vite toolchain
│       └── vite.config.ts          # Build pipeline and asset optimization
├── .github/
│   └── workflows/
│       └── ci.yml                  # Continuous Integration verification workflow
├── package.json                    # Root workspace proxy scripts
├── LICENSE                         # MIT License
└── README.md                       # Project documentation
```

### Key Engineering Patterns
- **Feature-Sliced Design (FSD)**: Strict architectural layers (`shared` → `entities` → `widgets` → `pages`).
- **Dynamic SEO Management**: Reactive `<SEOHead>` component synchronizing titles, canonical links, OpenGraph, and Twitter cards per route.
- **Micro-Chunk Code Splitting**: `React.lazy()` with `Suspense` ensures the initial bundle remains under **240 kB** for fast First Contentful Paint (FCP).

---

## Getting Started (Local Development)

### Prerequisites
- **Node.js**: >= 20.0.0
- **Package Manager**: `npm`, `pnpm`, or `yarn`

### Installation & Run

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yohanvillarp/metamorph-web.git
   cd metamorph-web
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:5173`.

---

## Verification & Build

Before pushing changes, run the verification suite from the project root:

```bash
# 1. Typecheck & Build Production Bundle
npm run build

# 2. Run ESLint Validation
npm run lint

# 3. Preview Production Bundle Locally
npm run preview
```

---

## Deployment

The web application is optimized for zero-config edge deployments on **Vercel** with SPA route rewriting configured in [apps/client/vercel.json](apps/client/vercel.json):

- **Production Domain**: `https://metamorph.nikelyh.tech`
- **Output Directory**: `apps/client/dist`
- **Build Command**: `npm run build`

---

## Related Projects

| Project | Description | Link |
| :--- | :--- | :--- |
| **Metamorph CLI** | The multi-agent AI migration engine and CLI | [yohanvillarp/metamorph](https://github.com/yohanvillarp/metamorph) |
| **npm Registry** | Executable CLI package (`@nikelyh/metamorph`) | [npmjs.com/@nikelyh/metamorph](https://www.npmjs.com/package/@nikelyh/metamorph) |
| **Mozaik v4** | Event-driven multi-agent blackboard orchestration framework | [Mozaik AI](https://github.com/jigjoy-ai/mozaik) |

---

## License

This project is licensed under the [MIT License](LICENSE).
