# Clean Code & Modularity Standards for Metamorph Web

## 1. Strict Typing (Zero `any`)
- TypeScript `noImplicitAny` is enforced.
- Always declare explicit prop interfaces for React components.
- In files where `verbatimModuleSyntax` is active, types MUST be imported using `type` syntax:
  ```ts
  import { SEARCH_INDEX, type SearchItem, type SearchCategory } from '../config/searchIndex';
  ```

## 2. Component Purity & Hook Discipline
- Avoid calling `setState` synchronously within the body of a `useEffect`.
- Effects are intended to synchronize with external systems (DOM event listeners, timers, platform APIs).
- When passing event handlers to effect dependencies, wrap them in `useCallback` to satisfy `react-hooks/exhaustive-deps`.

## 3. Decoupled Communication
- For global cross-cutting triggers (such as opening the Command Palette or opening the mobile sidebar drawer), use lightweight decoupled DOM events:
  - `metamorph:open-search`
  - `metamorph:open-docs-sidebar`
- This avoids unnecessary global Context re-renders and props drilling across FSD layers.

## 4. Code Snippet Integrity
- Always use `<CodeBlock code={...} />` for terminal commands, configuration files, and code examples.
- Code blocks must handle both multiline template strings and escaped newlines (`\n`) deterministically.
