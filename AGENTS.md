## Quick facts
- Stack: Vite + Vue 3 + TypeScript + Pinia + Vue Router + Vue I18n + Tailwind CSS.
- Package manager is Yarn classic (`yarn@1.22.x` in `packageManager` and `yarn.lock` present).
- This is a single-package repo (no monorepo/workspaces).

## Commands you should actually use
- Install deps: `yarn install`
- Dev server: `yarn dev`
- Type check: `yarn type-check` (uses `vue-tsc --noEmit`)
- Lint: `yarn lint` (runs ESLint with `--fix`; expect files to be modified)
- Build: `yarn build` (`type-check` runs before `vite build`)
- Preview production build: `yarn preview` (rebuilds before preview)

## Verification order
- Preferred local check sequence before finishing work: `yarn lint` -> `yarn type-check` -> `yarn build`.

## Architecture map (high signal)
- App bootstrap is `src/main.ts`: registers Pinia, router, i18n, Font Awesome, and global components.
- Router lives in `src/router.ts`; route tree is portfolio pages under `/` and blog pages under `/blogs`.
- Root component `src/app-root.vue` immediately redirects using `user-session` state (`currentNavigationItemId`) and sets `data-theme` on `<html>`.
- Session persistence is in `src/user-session-store.ts` via localStorage key `user-session-fabio-website`.
- Theme tokens are CSS variables in `src/main.css` under `:root[data-theme="dark"|"light"]`; Tailwind colors map to those variables in `tailwind.config.js`.

## Repo-specific gotchas
- `vite.config.ts` defines `__DEV__` and i18n feature flags; keep them when touching build config.
- Vite build has custom Rollup input (`src/main.ts` and `index.html`) and custom entry file naming (`assets/[name]-[hash].js`).
- Alias `@` points to `src` (TS and Vite config both set this).
- No test suite/config is present; do not invent test commands in PR notes.

## Deployment
- `yarn deploy` builds, copies `dist/index.html` to `dist/404.html`, then publishes with `gh-pages` using CNAME `www.fabioeletto.dev`.
