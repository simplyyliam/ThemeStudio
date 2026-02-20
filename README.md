Project Plan — ThemeStudio (implementation phase)

Goal
- Deliver a maintainable Theme Studio web app with a clean architecture that supports: theme editing, token management, export (VSCode theme / JSON), and future persistence.

High-level approach
- Use a layered clean architecture: `core` (domain & utilities), `features` (business features), `adapters` (external APIs/files), `ui` (presentational components), and `hooks` (shared React hooks).
- Keep small, well-scoped modules with clear interfaces and unit tests.

Folder layout (recommended)
- src/
  - core/                # domain models, types, errors, config, logger
  - features/
    - editor/            # theme editing logic, domain services, models
    - exporter/          # export to VSCode, JSON, and clipboard
  - adapters/
    - storage/           # file system / cloud adapters (placeholder)
    - serializers/       # convert domain -> VSCode JSON
  - ui/
    - components/        # shared UI components (Button, Modal, Form)
    - layout/            # App shell, Sidebar, Toolbar
    - theme/             # theme preview renderer
  - hooks/               # reusable React hooks
  - styles/              # tailwind.config.js, global css, tokens
  - tests/               # vitest unit tests

Phased tasks (milestones)
1) Project scaffolding (1 day)
   - Create folders above, add `tailwind.config.js`, `src/core/*` skeletons.
   - Add `tailwind` and small tokens structure in `styles/tokens.ts`.
   - Ensure Vite builds and dev server runs.

2) Core & domain (1-2 days)
   - Implement `Theme` domain model and validation utilities.
   - Add lightweight `Logger` and `Config` in `core/`.

3) Editor feature (2-4 days)
   - Implement `features/editor` with business services: applyToken, revert, preview state.
   - Build `ui/layout/Sidebar` and `ui/theme/Preview` components.

4) Exporter feature (1-2 days)
   - Implement `features/exporter` and `adapters/serializers` to output VSCode theme JSON and copy-to-clipboard.
   - Add UI actions (Export button, download link).

5) Polishing & tests (2 days)
   - Add unit tests (Vitest) for core & services.
   - Add ESLint rules and Prettier config (formatting).

6) CI & docs (1 day)
   - Add GitHub Actions: lint, test, build.
   - Update README with dev/run instructions and architecture notes.

Developer Experience (DX)
- Scripts: keep `npm run dev`, `build`, `lint`, `test`.
- Add `CONTRIBUTING.md` with branch and commit conventions.
- Keep components small, prefer props over context for composability.

Testing strategy
- Unit tests for `core` and `features` logic using Vitest.
- Simple integration tests verifying the editor -> preview -> export flow.
- Add a single E2E smoke test later (Playwright) if needed.

Interfaces & boundaries
- Define simple interfaces for adapters (StorageAdapter, Serializer) in `core/interfaces.ts`.
- Features call domain services, not directly DOM or adapters — adapters are injected.

Immediate next steps I will start now
- Create the scaffold folders and add `tailwind.config.js` and `styles/tokens.ts` (if you want me to implement these, confirm and I will proceed).

Acceptance criteria for initial milestone
- Project builds and `npm run dev` serves the app.
- `src/core/Theme.ts` model exists with basic validation and tests.
- Sidebar and a minimal preview component render sample tokens.

Questions / clarifications (pick up to 3)
- Do you want to support exporting multiple editor themes or just one at first?
- Should persistence be local-only (download/file) for v1, or include cloud storage later?
- Preferred test runner: Vitest (fast + Vite-friendly) or Jest?

Estimated timeline (conservative)
- Scaffold + core: 3 business days
- Editor + preview: 3-5 business days
- Exporter + tests + CI: 3 business days
- Total: ~2–3 weeks (single developer, part-time) depending on scope changes

--
Plan authored for iteration; tell me if you want me to begin scaffold implementation now.
