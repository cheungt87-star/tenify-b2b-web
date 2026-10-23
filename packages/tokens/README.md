# @tenify/tokens

Tenify Design System v5 tokens as Tailwind v4 CSS.

```css
@import "tailwindcss";
@import "@tenify/tokens/tokens.css";
@import "@tenify/tokens/shadcn.css";
```

Web only, during migration: also `@import "@tenify/tokens/legacy-b2b-web.css";`

Font is Nunito. App: `import "@fontsource-variable/nunito"`. Web: load with next/font and set `--font-sans` to its variable.
Do not hard-code hex values in consumers. Change tokens here.
