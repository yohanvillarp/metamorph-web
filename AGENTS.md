# AGENTS.md — Engineering & Design Guidelines for AI Agents

This document establishes the architectural invariants, engineering standards, Feature-Sliced Design rules, and design guidelines that every AI agent must strictly follow when contributing to the **Metamorph Web** repository (`metamorph-web`).

---

## 1. Project Overview

**Metamorph Web** is the official web documentation portal, marketing showcase, and interactive telemetry interface for **Metamorph** (`@nikelyh/metamorph` v2.2.0), the autonomous framework migration swarm.

* **Repository**: `yohanvillarp/metamorph-web`
* **Architecture**: Strict Feature-Sliced Design (FSD) (App, Pages, Widgets, Shared).
* **Tech Stack**: React 19, TypeScript 5.8 (ESM, strict), Vite 8, Tailwind CSS v4 (`@theme`), Framer Motion, `lucide-react`.

---

## 2. Critical Architectural Invariants (Never Violate)

### Rule 1: Strict Zero-Emoji Rule
* **NEVER introduce unicode emojis** into any part of the UI, buttons, documentation pages, headers, or alerts.
* All visual iconography must strictly utilize **`lucide-react` vector icons** or official project SVGs:
  - GitHub: `/github.svg`
  - NPM: `/icons8-ngp.svg`
  - Metamorph Logo: `/logo_metamorph.png`

### Rule 2: Feature-Sliced Design (FSD) Layering
* Respect strict unidirectional dependency flow:
  `shared` ➔ `entities` ➔ `features` ➔ `widgets` ➔ `pages` ➔ `app`
* **Cross-imports on the same layer are strictly prohibited** (e.g. a widget cannot import another widget directly; compose them in `pages` or promote shared logic to `shared`).
* Every slice should expose public interfaces through clean barrel files (`index.ts`).

### Rule 3: Metamorph Core Parity & Accuracy
* Documentation must always reflect the current stable version and architectural paradigms of `@nikelyh/metamorph` (currently **v2.2.0**):
  - **The 8 Swarm Agents**: Mapper, PackageManager, Worker, Reviewer, Coordinator, Integration, Reporter, and **AccountingAgent**.
  - **Agent Registry**: Core Agents (mandatory) vs. Auxiliary Agents (disableable with zero-token fallback).
  - **Zero-Risk Shadow Workspace**: Confinement inside `.metamorph/shadow/<runId>`.
  - **Project Intelligence Engine (PIE)**: Heuristic scoring and Subsumption DAG.
  - **Polymorphic Package Manager Engine (PPME)**: Native npm, pnpm, yarn, and bun support.
  - **Cascading Configuration**: `CLI flags` > `process.env` > local `.metamorphrc.json` > global `~/.metamorphrc.json` > defaults.

### Rule 4: Code Block Formatting
* Code snippets must render inside `<CodeBlock code={...} />`.
* Use multiline ES6 template strings for multiline code snippets, or ensure newline escapes are handled properly.
* Code blocks must preserve formatting with `<pre className="whitespace-pre">`.

### Rule 5: Windows PowerShell Terminal CWD Quirk
* Due to the local PowerShell profile configuration, new terminal instances initialize in `C:\Users\yohan\myspace`.
* When executing commands via shell, **always force the target directory explicitly**:
  - Git: `git -C c:\Users\yohan\myspace\lab\active\metamorph-web <command>`
  - NPM: `npm --prefix apps/client <command>`

---

## 3. Directory Structure

```text
metamorph-web/
├── .github/
│   ├── dependabot.yml              # Grouped version updates (npm + actions)
│   └── workflows/
│       └── ci.yml                  # Build & ESLint validation matrix
├── apps/
│   └── client/                     # React 19 + Vite 8 Web Application
│       ├── public/                 # Static assets (logo, icons8-ngp.svg, github.svg)
│       └── src/
│           ├── app/                # App initialization & providers
│           ├── pages/              # Route views (LandingPage, docs-layout, overview, concepts, etc.)
│           ├── widgets/            # Complex UI slices (header, docs-sidebar, mobile-nav, etc.)
│           └── shared/             # Reusable primitives (ui kit, config, lib, searchIndex)
├── .agents/                        # AI context rules and skill references
└── README.md                       # Project overview and quickstart
```

---

## 4. Verification & Development Commands

Before proposing or finalizing code changes, always run the following verification commands:

### Run Linter
```bash
npm --prefix apps/client run lint
```
*Zero warnings and zero errors are required (`--max-warnings 0`).*

### Compile & Typecheck Production Bundle
```bash
npm --prefix apps/client run build
```
*Must complete with exit code 0 and emit optimized chunks in `apps/client/dist/`.*

### Start Local Development Server
```bash
npm --prefix apps/client run dev
```

---

## 5. UI & Design Standards (Cyber-Glass Aesthetics)

* **Palette**: Obsidian background (`#06090e`), Cyan glow (`#00f2fe`, `#06b6d4`), and Deep Slate (`#0b111e`, `#1e293b`).
* **Centered Navigation Docks**: Use mathematically centered floating docks (`md:absolute md:left-1/2 md:-translate-x-1/2`) to prevent flexbox visual asymmetry.
* **Selection & Focus**: All interactive elements must support accessible `:focus-visible` cyan halos. Text selection uses glowing cyan highlight (`selection:bg-cyan-500/30 selection:text-white`).
* **Micro-Animations**: Use `framer-motion` spring transitions (`type: "spring", stiffness: 400, damping: 17`) for interactive controls.
* **Responsive Design**: Mobile drawer navigation triggered via custom decoupled events (`metamorph:open-docs-sidebar`, `metamorph:open-search`).

---

## 6. Commit Message Standards

All commits must follow the **Conventional Commits** specification:
- `feat(scope)`: New feature or UI capability
- `fix(scope)`: Bug fix or regression patch
- `docs(scope)`: Documentation content updates
- `chore(scope)`: Tooling, dependencies, or configuration
- `refactor(scope)`: Code refactoring without behavior change
