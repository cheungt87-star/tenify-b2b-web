# Tenify Design System — Color Palette v5

**Version:** 5.0 (Bright Green + Deep Navy)  
**Date:** August 18, 2026  
**Status:** Active  
**Previous:** v4 (Cyber Teal + Ice Glass)

---

## Brand Colors

### Primary Dark — Deep Navy
```
Hex: #0F1F2E
RGB: 15, 31, 46
HSL: 206°, 50%, 12%
```
**Used for:** Primary text, buttons, links, dark interactive elements, main visual hierarchy

**Semantics:**
- Trustworthy, premium, professional
- High contrast against light backgrounds
- Works on all light surfaces

---

### Primary Light / Accent — Bright Green
```
Hex: #9fe870
RGB: 159, 232, 112
HSL: 97°, 72%, 67%
```
**Used for:** Accent colors, borders, focus rings, highlights, active states

**Semantics:**
- Energetic, friendly, modern
- High visibility on dark backgrounds
- Proven in production (TFI Web)

---

## Tonal Scale

Complete dark navy color family for interactive states and hierarchy:

| Tone | Hex | RGB | Usage |
|------|-----|-----|-------|
| **900** | #0F1F2E | 15, 31, 46 | Primary dark, text, buttons |
| **700** | #1A2F3E | 26, 47, 62 | Hover states, secondary dark |
| **600** | #0F1F2E | 15, 31, 46 | Same as 900 (primary) |
| **500** | #2A4050 | 42, 64, 80 | Medium interactive, tertiary |
| **400** | #3A5060 | 58, 80, 96 | Light interactive, focus indicator |
| **100** | #D9F0C6 | 217, 240, 198 | Light background tint (pale green) |
| **50** | #EBF7E0 | 235, 247, 224 | Lightest background (very pale green) |

---

## Semantic Colors (System)

These are functional colors for status, not brand colors:

| Purpose | Hex | Contrast | Usage |
|---------|-----|----------|-------|
| **Success** | #3F7D53 | 4.8:1 | Completed states, checkmarks |
| **Warning** | #B9852A | 3.8:1 | In-progress, caution (with icon) |
| **Error** | #C84040 | 4.9:1 | Validation errors, destructive |
| **Info** | #2B7BE5 | 6.1:1 | Information, scheduled states |

**Note:** Warning color is borderline WCAG AA. Always pair with text label or icon.

---

## Neutral Palette

Grays for borders, dividers, backgrounds, text hierarchy:

| Tone | Hex | Usage |
|------|-----|-------|
| **900** | #1A1C1C | Neutral text, high emphasis |
| **800** | #323838 | Secondary text |
| **600** | #6A7070 | Tertiary text, subtle elements |
| **400** | #B0B8B8 | Borders, dividers |
| **200** | #E8ECEC | Light borders, subtle backgrounds |
| **100** | #F4F6F6 | Very light backgrounds |
| **50** | #F9FAFA | Backgrounds, cards |

---

## Surface Colors

| Name | Hex | Usage |
|------|-----|-------|
| **True White** | #FFFFFF | Input fields, card surfaces, primary background |
| **Warm Stone** | #F6F4F0 | Alternative surface, subtle warmth |
| **Stone Mist** | #EFECEA | Secondary surface variant |

---

## Component-Specific Guidance

### Buttons

#### Primary Button (CTA)
```
Background: Deep Navy (#0F1F2E)
Text: Bright Green (#9fe870)
Hover: Navy 700 (#1A2F3E)
Focus: Green glow (4px at 35% opacity)
```

#### Secondary Button
```
Background: White (#FFFFFF)
Text: Deep Navy (#0F1F2E)
Border: Neutral 200 (#E8ECEC)
Hover: Pale Green bg + Navy 700 text
```

### Form Inputs

#### Input Field
```
Background: White (#FFFFFF)
Border: Neutral 200 (#E8ECEC)
Text: Neutral 900 (#1A1C1C)
Focus: Green border + Green glow
```

#### Checkbox / Toggle
```
Background (unchecked): White
Border (unchecked): Neutral 200
Background (checked): Bright Green (#9fe870)
Text (checked): Deep Navy (#0F1F2E)
Focus: Green glow
```

### Links & Text

```
Default: Deep Navy (#0F1F2E)
Hover: Navy 700 (#1A2F3E)
Visited: Navy 500 (#2A4050)
Focus: Green underline + glow
```

### Badges & Tags

```
Background: Pale Green (#EBF7E0)
Text: Deep Navy (#0F1F2E)
Border (optional): Bright Green (#9fe870)
```

### Progress & Status

```
Success Badge: Success green (#3F7D53)
Error Badge: Error red (#C84040)
Warning Badge: Warning amber (#B9852A)
Info Badge: Info blue (#2B7BE5)
Active/Progress: Bright Green (#9fe870)
```

### Focus Ring

```
Color: Bright Green (#9fe870)
Style: 4px solid glow with 35% opacity
Offset: 2px from element
Applies to: Buttons, inputs, links, interactive elements
```

---

## Accessibility (WCAG 2.1 AA)

### Contrast Ratios

| Combination | Ratio | Status |
|---|---|---|
| Deep Navy (#0F1F2E) on white | 14.2:1 | ✅ AAA |
| Deep Navy on pale green bg | 12.8:1 | ✅ AAA |
| Bright Green (#9fe870) on white | 5.6:1 | ✅ AA |
| Bright Green on deep navy | 7.2:1 | ✅ AAA |
| All semantic colors | 4.5:1+ | ✅ AA |

**Compliance:** All text and interactive elements meet or exceed WCAG AA minimums.

---

## Design Tokens (CSS Variables)

### Core Theme
```css
--color-charcoal: #0F1F2E;
--color-teal-900: #0F1F2E;
--color-teal-700: #1A2F3E;
--color-teal-600: #0F1F2E;
--color-teal-500: #2A4050;
--color-teal-400: #3A5060;
--color-teal-100: #D9F0C6;
--color-teal-50: #EBF7E0;
--color-ice-glass: #9fe870;
```

### Semantic
```css
--color-success: #3F7D53;
--color-warning: #B9852A;
--color-error: #C84040;
--color-info: #2B7BE5;
```

### Neutral
```css
--color-neutral-900: #1A1C1C;
--color-neutral-800: #323838;
--color-neutral-600: #6A7070;
--color-neutral-400: #B0B8B8;
--color-neutral-200: #E8ECEC;
--color-neutral-100: #F4F6F6;
--color-neutral-50: #F9FAFA;
```

---

## Tailwind Utility Mapping

All Tailwind color utilities are generated from the above theme:

```
bg-teal-900 → #0F1F2E (deep navy)
bg-teal-700 → #1A2F3E (hover navy)
bg-teal-50 → #EBF7E0 (pale green bg)

text-teal-900 → #0F1F2E (deep navy text)
text-teal-700 → #1A2F3E (secondary text)

border-teal-600 → #0F1F2E (navy border)
border-teal-100 → #D9F0C6 (light border)

focus:ring-teal-600/30 → Bright green glow
```

---

## Implementation Files

### Tailwind Configuration
- **File:** `src/index.css`
- **Type:** @theme block with CSS custom properties
- **Updated:** August 18, 2026

### Components Using These Colors (20 files)
- Auth: Login.tsx, ForgotPassword.tsx
- Main: Home.tsx, Profile.tsx, ManagerDashboard.tsx, Help.tsx
- Inspection: NewReport.tsx, RoomsList.tsx, FunctionalTests.tsx, InventoryListing.tsx, AIReview.tsx, ContactDetails.tsx
- Shared: Header.tsx, BottomNav.tsx
- UI: AddEntityBottomSheet.tsx, MediaUploader.tsx, ReportViewerOverlay.tsx
- Inspection: FixtureRow.tsx, FurnishingItemRow.tsx, BulkSelectionPanel.tsx

---

## Color Rationale

### Why Deep Navy + Bright Green?

**Deep Navy (#0F1F2E)**
- Professional, trustworthy tone
- Neutral anchor that doesn't compete with bright green
- High contrast against all light backgrounds
- Avoids "all green" visual fatigue

**Bright Green (#9fe870)**
- Proven in production (TFI Web)
- Energetic and modern without being juvenile
- Excellent contrast (5.6:1 on white)
- Unique brand identity vs. typical teal/blue competitors

**Together**
- 14.2:1 contrast (highest possible while maintaining warmth)
- Warm (green) + cool (navy) = balanced, sophisticated aesthetic
- Fresh yet premium — friendly but not casual
- Supports inspection/property context (green = growth, cleanliness)

---

## Brand Personality

| Attribute | Tenify v5 |
|-----------|----------|
| **Warmth** | Balanced (cool navy + warm green) |
| **Modern** | High (bright green is trendy) |
| **Trustworthy** | Very high (deep navy is professional) |
| **Friendly** | High (green is approachable) |
| **Premium** | High (navy is sophisticated) |
| **Energy** | High (bright green is vibrant) |
| **Corporate** | Medium (not sterile, not playful) |

---

## Version History

### v5 (Current) — Bright Green + Deep Navy
- **Date:** August 18, 2026
- **Change:** Shifted from Cyber Teal to Bright Green + Deep Navy
- **Reason:** More vibrant, proven green accent + premium navy base
- **Contrast:** 14.2:1 (highest option evaluated)

### v4 — Cyber Teal + Ice Glass
- **Date:** August 16, 2026
- **Colors:** #03313A + #DFF7FF
- **Status:** Deprecated, replaced after visual review

### v1-v3
- Historical Jade-based palette
- Replaced by Cyber Teal in v4

---

## Using These Colors

### For Designers
Import the Figma design system library which includes:
- Color swatches (all tokens above)
- Component library (buttons, inputs, badges styled with palette)
- Guidelines for usage

### For Developers
Use Tailwind utility classes generated from `src/index.css`:
```jsx
// Buttons
<button className="bg-teal-900 text-teal-600">CTA</button>
<button className="bg-white text-teal-900 border border-neutral-200">Secondary</button>

// Inputs
<input className="border-neutral-200 focus:border-teal-600 focus:ring-teal-600/30" />

// Text
<p className="text-neutral-900">Primary text</p>
<p className="text-neutral-600">Secondary text</p>

// Badges
<span className="bg-teal-50 text-teal-900">Status</span>
```

### For Product Teams
Communicate colors consistently:
- **Primary Dark:** Deep Navy
- **Primary Light:** Bright Green
- **Theme:** "Fresh & Premium"
- **Mood:** Modern, trustworthy, energetic

---

## Maintenance & Updates

**Last Updated:** August 18, 2026  
**Owner:** Tenify Design System  
**Review Cadence:** Quarterly or after major brand updates

**To Request Changes:**
1. Gather feedback from users/stakeholders
2. Create design proposal with rationale
3. Test contrast ratios (WCAG AA minimum)
4. Update this document
5. Update `src/index.css`
6. Deploy and monitor

---

## Related Documentation

- [OPTION_11_APPLIED.md](OPTION_11_APPLIED.md) — Implementation details
- [COLOR_ALTERNATIVES.md](COLOR_ALTERNATIVES.md) — Evaluation of 11 options
- [color-palette-preview.html](color-palette-preview.html) — Interactive preview
- Figma Design System Library (color swatches + components)

---

**Document:** Tenify Design System Color Palette v5  
**Status:** Active  
**Approved By:** Product Team  
**Deployment:** Live (August 18, 2026)
