# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## What this is

Marketing/booking site for KJ Detailz, a car valeting & detailing business in Dorset, UK. Next.js App Router site with content (reviews, service packages, gallery images) pulled from Sanity CMS. No backend of its own — Sanity is the only data source, deployed to Vercel.

## Next.js version warning

This repo runs **Next.js 16.2.7 / React 19.2.4**, newer than most training data. Before writing code that touches caching, the Image component, or routing conventions, check `node_modules/next/dist/docs/01-app/` rather than assuming Next.js 13-15 behavior. Notably:

- `cacheComponents: true` is set in `next.config.ts` — this is the unified replacement for the old `experimental.ppr` / `experimental.useCache` / `experimental.dynamicIO` flags. Data fetching is dynamic by default; anything that should be cached needs an explicit `"use cache"` directive (see `app/_data/sanity/queries.ts` for the pattern: `"use cache"` + `cacheTag(...)` + `cacheLife(...)`).
- `next/image` is used with a `preload` prop on hero images (see `app/page.tsx`) — verify current prop names against the docs before assuming legacy `priority` semantics.

## Commands

```bash
npm run dev      # start dev server (Turbopack)
npm run build    # production build
npm run start    # run production build
npm run lint     # eslint (flat config, eslint-config-next core-web-vitals + typescript)
npm test         # jest unit tests (see __tests__/)
npm run test:watch
```

Unit tests live in `__tests__/` (Jest, via `next/jest` — see `jest.config.ts`). They cover pure logic only (`isActiveLink`, `getInitials`, the `_data/sanity/queries.ts` error-fallback behavior) — no component-rendering tests. Sanity's client is mocked at the module boundary (`jest.mock("../src/sanity/sanity", ...)`) rather than imported for real, since `next-sanity` ships ESM-only and trips Jest's CJS interop; `next/cache` is mocked too, since `cacheTag`/`cacheLife` throw outside a real `cacheComponents` runtime.

## Git

Keep commit messages short — a concise summary line, plus a body only when it adds real context. Avoid overly verbose, multi-paragraph commit messages.

## Architecture

**Data flow**: Sanity CMS → `app/_data/sanity/queries.ts` → async Server Components. Every query function is cached with `"use cache"` + `cacheTag('sanity')` + `cacheLife('halfDay')` (12h revalidate / 24h expire) and swallows fetch errors into an empty-array fallback rather than throwing, so a Sanity outage degrades sections to empty rather than crashing the page.

- `src/sanity/sanity.ts` — the `next-sanity` client (`SANITY_PROJECT_ID` / `SANITY_DATASET` env vars, CDN enabled) and the `urlFor()` image URL builder from `@sanity/image-url`.
- `lib/sanity/sanity.types.ts` — **generated** by `sanity typegen generate` from the Sanity schema/GROQ queries, run from the separate Studio project (`sanity-typegen.json` pointing its `path`/`generates` at this repo). Do not hand-edit the generated types themselves; regenerate from the Studio project if the schema changes. Note that typegen doesn't produce the `*WithExtras` composed types (e.g. `PackageWithExtras`, `Premium_serviceWithExtras`) — those are hand-appended to this file after each regeneration, matching the existing convention, since it's the only place they can reference the generated `Extra_service`/`Package`/`Premium_service` types. **Important**: the Sanity schema/Studio config is *not* in this repo — it's a separate project. When a query needs a document type that doesn't exist yet in the generated types, add a hand-written placeholder type instead of editing the generated file, and see `docs/sanity-premium-services-setup.md` for the schema-change workflow.
- `app/_data/sanity/queries.ts` — all GROQ queries and the cached fetch functions (`getReviews`, `getServicePackages`, `getImagesForGallery`, `getPremiumServices`). Add new content queries here, following the existing `"use cache"` + try/catch pattern (the `catch` only works because the `client.fetch(...)` call is `await`ed inside the `try` — a missing `await` lets rejections bypass the fallback entirely).

**Page/component split**: pages under `app/*/page.tsx` are async Server Components that render data-fetching child components (`app/components/*-section.tsx`) wrapped in `<Suspense>`, so each content section streams independently. `SiteHeader` is the only client component (`"use client"`, needs `usePathname` + mobile menu state); everything else is server-rendered.

**Env vars** (`.env.local`, not committed): `SANITY_PROJECT_ID`, `SANITY_DATASET`, `PHONE_NUMBER`, `FACEBOOK_LINK`, `INSTAGRAM_LINK`, `WEBSITE_CREATOR_LINK`. Several are read directly in Server Components (e.g. `process.env.PHONE_NUMBER` in `site-footer.tsx` and `app/contact/page.tsx`) rather than piped through props.

**Styling**: Tailwind v4 (`@tailwindcss/postcss`, no `tailwind.config.*` — config lives in CSS). Theme tokens (colors, radius, fonts) are defined as CSS variables in `app/styles/themes.css` under `@theme inline`, imported via `app/styles/index.css` → `app/globals.css`. Fonts (Inter, Playfair Display) are set up in `src/fonts/fonts.ts` via `next/font` and exposed as CSS variables applied on `<html>` in `app/layout.tsx`.

**Images**: static marketing images live in `public/`; Sanity-sourced images (gallery) go through `urlFor(image).width(...).quality(...).format("webp").url()` before being passed to `next/image`. Remote image loading is restricted to `cdn.sanity.io` in `next.config.ts`.
