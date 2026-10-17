---
name: metamorph-web-guide
description: Developer and agent guide for maintaining, updating, and extending the Metamorph Web documentation portal, marketing site, and search indexing.
---

# Metamorph Web Guide (`metamorph-web-guide`)

This skill provides step-by-step workflows, architectural reference, and verification procedures for the **Metamorph Web** documentation portal (`metamorph-web`).

---

## 1. Tech Stack & Architecture Overview

* **Framework**: React 19 + TypeScript 5.8 (ESM, strict)
* **Build Tool**: Vite 8 with `@vitejs/plugin-react`
* **Styling**: Tailwind CSS v4 (`@theme`), cyber-glass design system
* **Animations**: Framer Motion 12
* **Icons**: `lucide-react` (Strict Zero-Emoji Rule)
* **Architecture**: Strict Feature-Sliced Design (FSD):
  - `apps/client/src/app`: Application entry point and router
  - `apps/client/src/pages`: Page components (`landing`, `docs-layout`, documentation slices)
  - `apps/client/src/widgets`: Composite UI blocks (`header`, `docs-sidebar`, `mobile-nav`)
  - `apps/client/src/shared`: Design primitives (`ui/CodeBlock`, `ui/CommandPalette`, `config/searchIndex`, `config/docsNavigation`)

---

## 2. Critical Workflows

### Workflow A: Adding a New Documentation Page

When a new feature or guide is introduced in `@nikelyh/metamorph`:

1. **Create Page View**:
   Create a new page component in `apps/client/src/pages/<section-name>/ui/<PageName>.tsx`.
   - Adhere strictly to the **Zero-Emoji Rule** (`lucide-react` icons only).
   - Use `<CodeBlock code={...} />` for all CLI commands and configuration files.
   - Use `Outfit` typography for headings and `neo-card` containers for highlight blocks.

2. **Register Route**:
   Add the route in `apps/client/src/app/App.tsx`:
   ```tsx
   <Route path="/docs/<section-name>" element={<YourNewPage />} />
   ```

3. **Update Sidebar Navigation**:
   Add the item in `apps/client/src/shared/config/docsNavigation.ts`:
   ```ts
   {
     id: '<section-name>',
     title: 'Your Feature Title',
     path: '/docs/<section-name>',
     icon: LucideIconName,
     badge?: 'NEW' | 'PRO', // optional
   }
   ```

4. **Update Global Search Index**:
   Add searchable keywords and route paths in `apps/client/src/shared/config/searchIndex.ts`:
   ```ts
   {
     id: 'docs-<section-name>',
     title: 'Your Feature Title',
     path: '/docs/<section-name>',
     description: 'Brief overview of this feature or capability.',
     category: 'concepts', // or 'cli', 'architecture', 'getting-started'
     keywords: ['tag1', 'tag2', 'command'],
   }
   ```

---

### Workflow B: Keeping Parity with `@nikelyh/metamorph` Core

Whenever the core engine (`packages/@nikelyh/*`) in `metamorph` changes:

1. **Verify Agent Capabilities**:
   - Metamorph employs **8 Swarm Agents**:
     - `MapperAgent` (Analysis & AST dependencies)
     - `PackageManagerAgent` (Polymorphic PMs: npm, pnpm, yarn, bun)
     - `WorkerAgent` (Concurrent AST transformations via ts-morph)
     - `ReviewerAgent` (Linter & semantic validation)
     - `CoordinatorAgent` (Mozaik v4 event blackboard)
     - `IntegrationAgent` (Zero-Risk Shadow Workspace verification)
     - `ReporterAgent` (Plan reporting & telemetry)
     - `AccountingAgent` (Token budgets, model costs, LLM accounting)
   - Ensure the documentation in `/docs/agents` and `/docs/architecture` accurately reflects these 8 agents and their behaviors.

2. **Verify Configuration Precedence**:
   Ensure documentation accurately states:
   `CLI Flags > process.env > local .metamorphrc.json > global ~/.metamorphrc.json > defaults`.

3. **Verify Version Alignment**:
   Update version badges in `apps/client/src/widgets/header/ui/DocsHeader.tsx` and relevant install scripts (currently `v2.3.0`).

---

### Workflow C: Verification & Testing

Always run checks using the explicit prefix due to Windows PowerShell profile quirks:

```bash
# 1. Run ESLint (must have 0 errors, 0 warnings)
npm --prefix apps/client run lint

# 2. Run TypeScript check & Production Build
npm --prefix apps/client run build

# 3. Start local development preview
npm --prefix apps/client run dev
```

---

## 3. GitHub & CI/CD Standards

1. **CI Pipeline** (`.github/workflows/ci.yml`):
   - Validates on both Node 20 and Node 22.
   - Concurrency cancel-in-progress enabled.
   - Runs `npm ci`, `npm run lint`, and `npm run build`.

2. **Dependabot** (`.github/dependabot.yml`):
   - Uses grouped updates to bundle PRs:
     - `dev-dependencies`: Bundles Vite, TypeScript, ESLint, Tailwind.
     - `minor-and-patch`: Bundles safe production dependencies.
     - `all-root-dependencies`: Root monorepo workspace dependencies.
     - `actions-dependencies`: GitHub Actions revisions.
