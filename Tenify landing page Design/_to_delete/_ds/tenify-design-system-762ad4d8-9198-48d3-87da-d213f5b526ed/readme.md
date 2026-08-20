# Tenify Design System

Tenify is a UAE-focused guided property inspection app. Field agents — and, increasingly, letting agents / property management companies doing ad-hoc pre-move-in inspections — use the app to walk a property room-by-room: a functional-test checklist, then itemised inventory photography, then a batched AI condition-rating pass the inspector reviews and can override, finishing in a shareable PDF report with Must Fix / Recommended Fixes summaries.

This design system is built from the live product, not a fresh brand exercise: the source of truth is the `cheungt87-star/tenify-app` codebase (React + TypeScript + Vite + Tailwind CSS v4), specifically its `src/index.css` design tokens and the actual component/screen implementations, cross-checked against the in-repo `design/Tenify_Design_System_v3.md` ("Bright Progress") spec and `design/BUILD_PROMPT.md`. Where the written v3 doc and the shipped code disagree (e.g. the doc's jade-gradient primary button vs. the app's actual gold-gradient CTA), **the shipped code wins** — that's what a user of this app actually sees.

**Sources**
- GitHub: [cheungt87-star/tenify-app](https://github.com/cheungt87-star/tenify-app) — full app code, `src/index.css` tokens, `design/` doc set. Explore it directly for anything this system simplified or omitted.
- Local attachment: `design/` folder (Tenify_Design_System_v2 & v3 docs, BUILD_PROMPT.md, and the Tenify B2B Showcase screens — note the B2B showcase was explicitly built against the *wrong* color reference and its literal hex values should not be trusted, see BUILD_PROMPT.md's re-skin note)
- Uploaded file: `Tenify..png` (wordmark on cream background)

## Index

- `styles.css` — the single stylesheet to link; imports everything below
- `tokens/` — `colors.css`, `typography.css`, `spacing.css` (incl. radius/shadow), `fonts.css`
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand/Status) shown in the Design System tab
- `assets/` — logo, wordmark, app icons (see Iconography below)
- `components/` — 18 React components in 5 groups: `core/` (Button, Input, Switch, StatusBadge, Skeleton), `feedback/` (ConfirmDialog, Toast, OfflineBanner), `forms/` (TriStateControl, RatingScaleControl, FieldStatusIcon, PhotoCaptureControl, AddEntityBottomSheet), `navigation/` (Header, BottomNav), `inspection/` (FixtureRow, FurnishingItemRow)
- `ui_kits/app/` — interactive click-through recreation of the inspector app flow (Login → Home → Rooms → Fixtures → Inventory → AI Review → Report)

### Intentional additions
`Button` and `Input` are not standalone files in the source app (each screen writes its own Tailwind classes inline) — they're extracted here as the one recurring visual pattern used everywhere, so consumers get a real primitive instead of re-deriving it per screen.

## Content fundamentals

- **Voice**: plain, operational, second-person where it's giving the user an instruction ("Confirm the rooms below", "Describe the issue…"), first-person-plural in error/empty copy ("We couldn't generate the PDF" style). Not chatty — this is a working tool for agents moving through a checklist, not a marketing surface.
- **Casing**: sentence case throughout — button labels ("Log in", "+ New Inspection"), section headers ("Your inspections", "Completed Inspections"), status labels ("In progress", "Not started"). No ALL CAPS except the tiny 11px "What to check" eyebrow label.
- **No emoji** in UI copy or components. The only emoji reference anywhere is a single 🎉 mentioned in the v3 doc for the one-time "Inspection Complete" celebration moment — treat it as a rare exception, not a pattern.
- **Numbers and units**: Dubai-flavoured dummy data (real Dubai building/area names, UAE phone formats) per the app's own seed data — never generic "123 Main St" placeholders.
- **Error/empty copy** is factual, not cute: "No appointments scheduled for today", "No completed inspections yet.", "Could not generate PDF" — states the fact, doesn't apologize excessively or joke.
- **Required-field language** is blunt and specific: "What's wrong? (required)", "Note and photo are required when answering No" — tells you exactly what's missing and why.

## Visual foundations

**Color** — one hue, one job. Jade (`#0E9F7A` family) is the brand/interactive color: links, focus rings, active nav state, icon accents — but per the v3 accessibility correction, jade-600/500/400 are fill/decoration/icon colors only and must never carry white text (contrast fails AA); anywhere a filled surface carries white text it steps down to `jade-700` or `jade-900`. **Gold** (`#FFC647` family) is what the shipped app actually uses for its primary CTA gradient fill (`gold-600 → gold-400`, charcoal text) — every "+ New Inspection", "Log in", "Share Report" button. Gold is meant as a decorative/celebration accent per the design doc, but in practice it's also carrying the primary-action job in code; treat gold-gradient as the one signature CTA treatment and don't spread it onto secondary actions. Semantic colors (success/warning/error/info) stay restrained — they're instructions, never brand moments, and status is never color-alone (every status pairs a color with an icon shape and a text label).

**Type** — Inter for everything except hero numerals, which use JetBrains Mono at weight 700 for rare "12 rooms inspected" / "94% match" moments — numbers get to be loud even when the rest of the UI stays calm. Headline weight tops out at 800, reserved for one-per-flow celebratory screens (report-ready, inspection-complete) — routine page titles stay at 600.

**Spacing & shape** — 4px base unit. Cards: 16px radius standard, 20px for hero/feature cards (a card rendering at the old 12–18px is treated as a bug per the v3 doc). Buttons/inputs: 12px. Small chips/dashed add-tiles: 8–12px. Pills, switches, avatars: fully round. Cards carry a 1px neutral-200 border plus a barely-there shadow (`0 1px 2px rgba(26,28,28,.06)`) — not heavy drop shadows. Bottom sheets slide up with a 24px top-radius and a drag-handle bar.

**Backgrounds** — flat, warm-neutral (`neutral-100`/`warm-stone`), no gradients on page chrome. Gradients are reserved narrowly: the primary CTA fill, the active-progress card's left edge (`jade-600 → jade-400`, 4px), rating tiles, and one-time celebration glows — never as a general decorative background. No photography, no hand-drawn illustrations, no repeating textures/patterns in the shipped app; the design doc calls for organic "blob" shapes behind empty-state icons as a future refinement, not yet built.

**Motion** — minimal and functional: buttons scale to 0.98 on press, bottom sheets slide up/down (~150–200ms ease), toasts fade in. The v3 doc specifies a one-time gold glow ring + fade on the "done" checkmark transition and a one-time shimmer sweep when a progress bar hits 100% — both are transient, applied only at the moment of state change, never as a resting/static style.

**Borders & elevation** — 1px `neutral-200` is the default card/input border; emphasis (in-progress, active) cards step up to 2px in a tinted color (`jade-100` or `success`). No inner shadows. Blur only appears on the sticky header (`backdrop-blur` behind a 95%-opacity white bar).

**Imagery color vibe** — not established in the source (no real property photos were part of the provided material); inventory/fixture photos in the live app are literal on-device camera captures, not styled photography.

## Iconography

The app uses **[Lucide](https://lucide.dev) React icons** exclusively (`lucide-react`, MIT-licensed, CDN-available) — no custom icon font, no SVG sprite sheet, no emoji-as-icon anywhere in the codebase. Stroke weight is thin-to-regular (1.75–2.5), sizes 12–22px depending on context. When building with this system outside React, use the Lucide CDN or `lucide` web component build rather than approximating icons with emoji or hand-drawn SVG. A few components in this kit use plain text/unicode glyphs (✓, ⌂, ‹) as lightweight stand-ins where wiring up the full Lucide set wasn't essential to the cosmetic demo — swap in real Lucide icons for production use.

The only real logo assets available are `assets/tenify-logo.png` (compact wordmark, used in the app header/login) and the uploaded `assets/tenify-wordmark.png` (larger wordmark on cream). There is no separate icon-only/symbol mark — `assets/icon-master.svg` and `assets/icon-maskable.svg` are the PWA home-screen icon source (a green rounded square with a white glyph), and `assets/app-icon-512.png` / `assets/app-icon-apple-touch.png` are its exported rasters.

## Fonts

Inter and JetBrains Mono are loaded via Google Fonts CDN (`tokens/fonts.css`) rather than bundled `.woff2` files — both are the actual fonts named in the app's own design docs, so no substitution was needed. If you'd rather ship self-hosted font files (for offline use or stricter CSP), drop the `.woff2`s into `assets/fonts/` and swap the `@import` for `@font-face` rules — flag this to the team if you do.

## Caveats — please help me iterate

- **FixtureRow / FurnishingItemRow are cosmetic simplifications.** The real components handle a lot more state (per-sub-check fail notes + required photos, "unable to test" reasons, collapse animations, swipe-to-delete). This kit shows the visual language, not the full interaction surface — pull the real `.tsx` from the repo if you need the exact behavior.
- **Icons are placeholder glyphs in a few spots** (BottomNav, Header back chevron) rather than real Lucide SVGs, to keep this kit dependency-light. Swap in `lucide-react` (already a repo dependency) for production screens.
- **No real photography or illustration assets exist yet** — the design doc calls for organic blob shapes in empty states, but none have been built in the shipped app, so none are included here.
- The v3 doc's signature jade-gradient primary button was **superseded in code** by a gold gradient — I followed the code. If that was a deliberate design decision made after the doc was written, no action needed; if it was accidental drift, flag it and I'll re-align either the doc or the components.
- I did not have access to Figma — everything here comes from the GitHub repo and the two local markdown design docs. If a Figma file exists with more screens or finer detail, share the link and I'll cross-check.

Tell me what's off and I'll tighten it up.
