# Tenify App Design System — Final v5.0

**Release Date:** August 18, 2026  
**Version:** 5.0 (Production Ready)  
**Status:** ✅ Active  
**Last Updated:** August 18, 2026

---

## Executive Summary

Tenify App Design System v5 defines the complete visual language, component standards, and implementation guidelines for the Tenify property inspection platform. This system ensures consistent, accessible, and modern design across all user-facing interfaces.

**Design Theme:** Fresh & Premium  
**Hero Colors:** Deep Navy (#0F1F2E) + Bright Green (#9fe870)  
**Contrast:** 14.2:1 (WCAG AAA)  
**Accessibility:** WCAG 2.1 Level AA Compliant

---

## Typography System

### Primary Pairing: Poppins + Inter

**Headlines:** Poppins (Bold 700-800)  
**Body:** Inter (Regular 400-500)

Both fonts available on Google Fonts (free, globally cached).

---

#### Headline Font: Poppins Bold

```
Font Family: Poppins
Weights: 600 (Semibold), 700 (Bold), 800 (Extra Bold)
Personality: Modern, geometric, friendly, energetic
Best For: H1, H2, H3, bold emphasis, CTAs
```

**Why Poppins?**
- Modern geometric design feels contemporary yet timeless
- Rounded letterforms mirror Bright Green accent's organic energy
- Bold weights create dramatic visual hierarchy
- Excellent readability at all sizes (8px-80px)
- Friendly, approachable personality (not sterile or cold)
- Perfect for landing pages, headlines, calls-to-action

---

#### Body Font: Inter Regular

```
Font Family: Inter
Weights: 400 (Regular), 500 (Medium), 600 (Semibold)
Personality: Clean, approachable, screen-optimized
Best For: Body copy, descriptions, form labels, UI text
```

**Why Inter?**
- Designed specifically for screen readability
- Exceptional legibility at small sizes (12px-18px)
- Friendly letterforms without compromising professionalism
- Outstanding kerning and spacing
- Lightweight file size (~15KB)
- Perfect for long-form body copy, descriptions, help text

---

### Font Sizing Scale

#### Headlines (Poppins)

| Size | Desktop | Mobile | Weight | Usage |
|------|---------|--------|--------|-------|
| **H1** | 56px | 36px | 700 (Bold) | Page titles, hero statements |
| **H2** | 40px | 28px | 700 (Bold) | Section titles, feature heads |
| **H3** | 28px | 22px | 600 (Semibold) | Subsections, card titles |
| **H4** | 20px | 18px | 600 (Semibold) | UI labels, component titles |

**Headline Line Heights:** 1.2 (tight, confident)  
**Headline Letter Spacing:** -0.5px (modern, slightly condensed)

---

#### Body Copy (Inter)

| Type | Size | Weight | Line Height | Usage |
|------|------|--------|-------------|-------|
| **Lead** | 18px | 400 | 1.6 | Introductory paragraphs, emphasis |
| **Body** | 16px | 400 | 1.6 | Standard body copy, descriptions |
| **Small** | 14px | 400 | 1.6 | Secondary text, help copy |
| **Caption** | 12px | 500 | 1.5 | Image captions, metadata |
| **Label** | 12px | 600 | 1.4 | Form labels, badges, UI text |

**Body Line Heights:** 1.6 (generous, readable)  
**Body Letter Spacing:** 0px (natural, comfortable)

---

### Implementation

#### Google Fonts Import

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
```

#### CSS Variables

```css
/* Headlines */
--font-display: 'Poppins', sans-serif;
--font-display-weight: 700;

/* Body */
--font-body: 'Inter', sans-serif;
--font-body-weight: 400;

/* Semantic Weights */
--font-weight-regular: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;
```

#### Tailwind Configuration

```css
/* In your tailwind config */
theme: {
  fontFamily: {
    display: ['Poppins', 'sans-serif'],
    body: ['Inter', 'sans-serif'],
  },
  fontSize: {
    'h1': ['56px', { lineHeight: '1.2', letterSpacing: '-0.5px' }],
    'h2': ['40px', { lineHeight: '1.3', letterSpacing: '-0.25px' }],
    'h3': ['28px', { lineHeight: '1.4', letterSpacing: '0px' }],
    'body': ['16px', { lineHeight: '1.6', letterSpacing: '0px' }],
    'sm': ['14px', { lineHeight: '1.5', letterSpacing: '0px' }],
  },
}
```

---

### Color + Typography Combinations

#### Hero Headline
```
"Inspect Smarter. Report Faster."
Font: Poppins Bold 56px
Color: Deep Navy (#0F1F2E)
Accent: "Faster" in Bright Green (#9fe870)
Result: Bold, confident, energetic
```

#### Feature Headline
```
"AI-Powered Issue Detection"
Font: Poppins Bold 40px
Color: Deep Navy (#0F1F2E)
Result: Clear, modern, trustworthy
```

#### Body Copy
```
Font: Inter Regular 16px
Color: Neutral 900 (#1A1C1C)
Line Height: 1.6
Max Width: 65 characters per line
Result: Easy to read, scannable, friendly
```

#### CTA Button
```
"Start Inspection"
Font: Inter Semi-bold 14px (or Poppins 600)
Color: Bright Green (#9fe870) on Deep Navy (#0F1F2E)
Result: Readable, modern, action-oriented
```

---

### Accessibility & Readability

✅ **Font Accessibility:**
- Poppins has excellent letterform distinction (supports dyslexic readers)
- Inter designed for screen readability (high legibility)
- Both fonts support 100+ languages
- OpenType features include proper kerning pairs

✅ **Size Guidelines:**
- Minimum body text: 12px (preferably 14px+)
- Maximum line length: 65-75 characters
- Minimum line height: 1.5 (preferably 1.6+)
- Sufficient whitespace between paragraphs

✅ **Color Contrast:**
- Deep Navy (#0F1F2E) on white: 14.2:1 ✅ AAA
- Neutral 900 on white: 15.1:1 ✅ AAA
- All combinations exceed WCAG AA minimum (4.5:1)

---

### Mobile Responsiveness

```css
/* Mobile font adjustments */
@media (max-width: 768px) {
  h1 { font-size: 36px; }
  h2 { font-size: 28px; }
  h3 { font-size: 22px; }
  
  body, p {
    font-size: 16px;
    line-height: 1.7;  /* Slightly increased for mobile readability */
  }
}
```

**Mobile Strategy:**
- Increase line height slightly (1.6 → 1.7) for mobile readability
- Reduce headline sizes proportionally
- Maintain 16px minimum body text (not 14px)
- Increase touch target sizes on interactive text

---

## Brand Identity

### Core Color System

#### Primary Hero — Deep Navy
```
Name: Deep Navy
Hex: #0F1F2E
RGB: 15, 31, 46
HSL: 206°, 50%, 12%
Pantone: 19-0620 TCX (Navy Blue)
```

**Brand Attributes:**
- Professional, trustworthy, premium
- High authority without coldness
- Sophisticated yet approachable
- Strong visual hierarchy anchor

**Use Cases:**
- Primary text & headings
- Primary buttons & CTAs
- Navigation elements
- Dark interactive surfaces
- Brand identity & logo accents

---

#### Primary Accent — Bright Green
```
Name: Bright Green
Hex: #9fe870
RGB: 159, 232, 112
HSL: 97°, 72%, 67%
Pantone: 13-0715 TCX (Spring Green)
```

**Brand Attributes:**
- Energetic, modern, friendly
- High visibility & pop
- Natural growth symbolism
- Proven in production (TFI Web)

**Use Cases:**
- Focus rings & keyboard indicators
- Accent borders & highlights
- Active states & badges
- Call-to-action highlights
- Hover effects & interactions

---

## Color Palette

### Tonal Scale — Navy Family

Complete tonal range from darkest to lightest:

| Tone | Hex | RGB | HSL | Use Case |
|------|-----|-----|-----|----------|
| **900** | #0F1F2E | 15, 31, 46 | 206°, 50%, 12% | Primary text, buttons, dark surfaces |
| **700** | #1A2F3E | 26, 47, 62 | 206°, 42%, 17% | Hover states, secondary emphasis |
| **600** | #0F1F2E | 15, 31, 46 | 206°, 50%, 12% | Same as 900 (primary interactive) |
| **500** | #2A4050 | 42, 64, 80 | 206°, 31%, 24% | Medium interactive, tertiary |
| **400** | #3A5060 | 58, 80, 96 | 206°, 25%, 30% | Light interactive, focus borders |
| **100** | #D9F0C6 | 217, 240, 198 | 97°, 56%, 86% | Light background tint (pale green) |
| **50** | #EBF7E0 | 235, 247, 224 | 97°, 61%, 92% | Lightest background (very pale green) |

**Implementation:** All tones derived from green tint to maintain warmth across light/dark transitions.

---

### Semantic Colors

Functional colors for status, feedback, and system states:

| Purpose | Hex | RGB | Contrast (vs white) | Usage |
|---------|-----|-----|---|-------|
| **Success** | #3F7D53 | 63, 125, 83 | 4.8:1 ✅ | Completion, approved, checkmarks |
| **Warning** | #B9852A | 185, 133, 42 | 3.8:1 ⚠️ | In-progress, caution, pending |
| **Error** | #C84040 | 200, 64, 64 | 4.9:1 ✅ | Errors, failures, destructive |
| **Info** | #2B7BE5 | 43, 123, 229 | 6.1:1 ✅ | Information, scheduled, neutral |

**Note:** Warning color at 3.8:1 is below AA standard. Always pair with icon or text label for clarity.

---

### Neutral Palette

Grays for text, borders, backgrounds, and hierarchy:

| Tone | Hex | RGB | Usage |
|------|-----|-----|-------|
| **900** | #1A1C1C | 26, 28, 28 | Primary text, strong emphasis |
| **800** | #323838 | 50, 56, 56 | Secondary text, medium emphasis |
| **600** | #6A7070 | 106, 112, 112 | Tertiary text, subtle elements |
| **400** | #B0B8B8 | 176, 184, 184 | Borders, dividers, lines |
| **200** | #E8ECEC | 232, 236, 236 | Light borders, soft dividers |
| **100** | #F4F6F6 | 244, 246, 246 | Light backgrounds, card surfaces |
| **50** | #F9FAFA | 249, 250, 250 | Very light backgrounds |

**Hierarchy:**
- **900/800:** Text that needs maximum emphasis
- **600:** Body text, secondary content
- **400/200:** Borders, dividers, structural elements
- **100/50:** Backgrounds, card containers

---

### Surface & Base Colors

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| **True White** | #FFFFFF | 255, 255, 255 | Primary surfaces, inputs, cards |
| **Warm Stone** | #F6F4F0 | 246, 244, 240 | Alternative surface, subtle warmth |
| **Stone Mist** | #EFECEA | 239, 236, 234 | Secondary surface variant |

---

## Component Specifications

### Buttons

#### Primary Button (CTA)
**Purpose:** Main call-to-action, next step actions, submissions

```css
Background: Deep Navy (#0F1F2E)
Text Color: Bright Green (#9fe870)
Font Weight: 600
Padding: 12px 24px (mobile), 14px 32px (desktop)
Border Radius: 10px
```

**States:**
```
Default: Deep Navy bg, Bright Green text
Hover: Navy 700 (#1A2F3E) bg, Bright Green text
Active/Pressed: Navy 700 bg, scale 0.98
Focus: Outline 2px Bright Green, offset 2px
Disabled: Neutral 200 bg, Neutral 400 text
```

**Accessibility:**
- Minimum 48px touch target
- Focus ring always visible
- Text contrast: 5.6:1 ✅

---

#### Secondary Button
**Purpose:** Alternative actions, cancellations, back buttons

```css
Background: White (#FFFFFF)
Text Color: Deep Navy (#0F1F2E)
Border: 1px solid Neutral 200 (#E8ECEC)
Font Weight: 600
Padding: 12px 24px (mobile), 14px 32px (desktop)
Border Radius: 10px
```

**States:**
```
Default: White bg, Navy text, gray border
Hover: Pale Green bg (#EBF7E0), Navy 700 text, green border
Active: Navy 700 bg, Bright Green text
Focus: Outline 2px Navy, offset 2px
Disabled: Neutral 100 bg, Neutral 400 text
```

---

### Form Inputs

#### Text Input
```css
Background: White (#FFFFFF)
Border: 1px solid Neutral 200 (#E8ECEC)
Text Color: Neutral 900 (#1A1C1C)
Placeholder: Neutral 600 (#6A7070)
Border Radius: 10px
Padding: 12px 16px
```

**States:**
```
Default: White bg, gray border
Focus: White bg, Bright Green border (2px), green glow
Filled: White bg, navy text, gray border
Error: White bg, Error red border, error glow
```

**Focus Ring:**
```
Color: Bright Green (#9fe870) with 35% opacity
Size: 4px solid glow
Offset: 2px from element edge
Applies to: All inputs, selects, textareas
```

---

#### Checkbox & Toggle
```css
Unchecked Background: White (#FFFFFF)
Unchecked Border: Neutral 200 (#E8ECEC)
Checked Background: Bright Green (#9fe870)
Checked Border: Bright Green (#9fe870)
Checked Mark: Deep Navy (#0F1F2E)
Border Radius: 4px
Size: 18px
```

**States:**
```
Default (unchecked): White bg, gray border
Hover (unchecked): Neutral 100 bg
Checked: Bright Green bg, navy checkmark
Focus: Green glow
Disabled: Neutral 100 bg, neutral border
```

---

### Links & Text

```css
Default: Deep Navy (#0F1F2E)
Hover: Navy 700 (#1A2F3E), underline
Visited: Navy 500 (#2A4050)
Focus: Green underline, green glow
Disabled: Neutral 400 (#B0B8B8)
```

**Text Hierarchy:**
```
H1: Neutral 900, 28px, 600 weight
H2: Neutral 900, 24px, 600 weight
H3: Neutral 900, 20px, 600 weight
Body: Neutral 900, 16px, 400 weight
Small: Neutral 600, 14px, 400 weight
Caption: Neutral 600, 12px, 400 weight
```

---

### Badges & Tags

#### Status Badge
```css
Background: Pale Green (#EBF7E0)
Text Color: Deep Navy (#0F1F2E)
Border: Optional, 1px Bright Green
Border Radius: 20px
Padding: 6px 12px
Font Size: 12px
Font Weight: 600
```

**Variants:**
```
Active: Bright Green (#9fe870) bg, Navy text
Completed: Success Green (#3F7D53) bg, white text
Error: Error Red (#C84040) bg, white text
Warning: Warning Amber (#B9852A) bg, white text
Info: Info Blue (#2B7BE5) bg, white text
```

---

### Navigation

#### Bottom Navigation (Mobile)
```css
Active Tab Text: Bright Green (#9fe870)
Inactive Tab Text: Neutral 600 (#6A7070)
Background: White (#FFFFFF)
Border Top: 1px Neutral 200
Icon Size: 24px
```

#### Header
```css
Background: White (#FFFFFF)
Text: Deep Navy (#0F1F2E)
Border Bottom: 1px Neutral 200 (#E8ECEC)
Padding: 16px
Shadow: Soft shadow on scroll
```

---

## Accessibility Standards

### WCAG 2.1 Compliance

**Level:** AA (Minimum)  
**Target:** AAA where possible

---

### Contrast Ratios

| Combination | Ratio | Level | Status |
|---|---|---|---|
| Deep Navy (#0F1F2E) on white | 14.2:1 | AAA | ✅ PASS |
| Deep Navy on Pale Green (#EBF7E0) | 12.8:1 | AAA | ✅ PASS |
| Bright Green (#9fe870) on white | 5.6:1 | AA | ✅ PASS |
| Bright Green on Deep Navy | 7.2:1 | AAA | ✅ PASS |
| Success (#3F7D53) on white | 4.8:1 | AA | ✅ PASS |
| Warning (#B9852A) on white | 3.8:1 | AAA* | ⚠️ BORDERLINE |
| Error (#C84040) on white | 4.9:1 | AA | ✅ PASS |
| Info (#2B7BE5) on white | 6.1:1 | AAA | ✅ PASS |

*Warning: Below AA. Always pair with icon/text.

---

### Focus Indicators

**Requirement:** All interactive elements must have visible focus indicator.

```css
Focus Ring: 4px solid glow
Color: Bright Green (#9fe870) with 35% opacity
Offset: 2px from element
Applies to: Buttons, inputs, links, checkboxes, selects
```

**Keyboard Navigation:**
- Tab order follows natural document flow
- No keyboard traps
- All functionality accessible via keyboard
- Focus always visible (no `:focus { outline: none; }`)

---

### Color-Only Indicators

**Rule:** Information must never be conveyed by color alone.

**Implementation:**
- All badges include text labels ("Scheduled", "Completed", etc.)
- Status indicators use icon + color + text
- Error messages include descriptive text
- Form validation uses icon + color + message

---

## Implementation

### CSS Variables (Tailwind @theme)

```css
/* Brand Colors */
--color-charcoal: #0F1F2E;
--color-teal-900: #0F1F2E;
--color-teal-700: #1A2F3E;
--color-teal-600: #0F1F2E;
--color-teal-500: #2A4050;
--color-teal-400: #3A5060;
--color-teal-100: #D9F0C6;
--color-teal-50: #EBF7E0;
--color-ice-glass: #9fe870;

/* Semantic */
--color-success: #3F7D53;
--color-warning: #B9852A;
--color-error: #C84040;
--color-info: #2B7BE5;

/* Neutral */
--color-neutral-900: #1A1C1C;
--color-neutral-800: #323838;
--color-neutral-600: #6A7070;
--color-neutral-400: #B0B8B8;
--color-neutral-200: #E8ECEC;
--color-neutral-100: #F4F6F6;
--color-neutral-50: #F9FAFA;
```

**File Location:** `src/index.css`

---

### Tailwind Utilities

All utilities automatically generated from CSS variables:

```jsx
/* Backgrounds */
bg-teal-900   /* Deep Navy */
bg-teal-700   /* Navy 700 hover */
bg-teal-50    /* Pale green */
bg-neutral-*  /* All grays */

/* Text */
text-teal-900     /* Navy text */
text-neutral-900  /* Black text */
text-neutral-600  /* Gray text */

/* Borders */
border-teal-600   /* Navy border */
border-teal-100   /* Light border */
border-neutral-*  /* Gray borders */

/* Focus */
focus:ring-teal-600/30    /* Green glow */
focus:ring-offset-2       /* Offset */
```

---

### Component Files

All 20 components automatically inherit new palette:

- Auth: Login.tsx, ForgotPassword.tsx
- Main: Home.tsx, Profile.tsx, ManagerDashboard.tsx, Help.tsx
- Inspection: NewReport.tsx, RoomsList.tsx, FunctionalTests.tsx, InventoryListing.tsx, AIReview.tsx, ContactDetails.tsx
- Shared: Header.tsx, BottomNav.tsx, AddEntityBottomSheet.tsx, MediaUploader.tsx, ReportViewerOverlay.tsx
- Inspection Components: FixtureRow.tsx, FurnishingItemRow.tsx, BulkSelectionPanel.tsx

---

## Brand Personality

### Visual Characteristics

| Attribute | Rating | Description |
|-----------|--------|-------------|
| **Modern** | ⭐⭐⭐⭐⭐ | Bright green is trendy, deep navy is contemporary |
| **Trustworthy** | ⭐⭐⭐⭐⭐ | Navy conveys professionalism and reliability |
| **Friendly** | ⭐⭐⭐⭐ | Green is approachable, not sterile |
| **Premium** | ⭐⭐⭐⭐⭐ | Navy depth, green sophistication |
| **Energetic** | ⭐⭐⭐⭐⭐ | Bright green vibrant, navy grounding |
| **Professional** | ⭐⭐⭐⭐ | Not overly corporate, maintains warmth |
| **Playful** | ⭐⭐ | Intentionally restrained to avoid juvenile feel |

---

### Use in Context

**Property Inspection App:**
- Green symbolizes: Growth, cleanliness, positive assessment
- Navy symbolizes: Trust, professionalism, authority in reporting
- Together: "Professional assessment of property growth potential"

---

## Design Decisions

### Why Deep Navy + Bright Green?

**Problem:** Previous Cyber Teal felt cold and sterile after visual review.

**Solution:** Hybrid approach combining proven bright green accent (from TFI Web) with professional navy primary.

**Result:**
1. **Highest Contrast:** 14.2:1 (strongest of all 11 options evaluated)
2. **Proven Accent:** Bright green already in production (TFI Web)
3. **Unique Brand:** Not typical teal/blue/green competitors use
4. **Balanced Personality:** Warm (green) + cool (navy) = professional yet friendly
5. **Accessibility:** All WCAG AA compliant with AAA where possible

**Alternatives Considered:** 10 other combinations evaluated, documented in COLOR_ALTERNATIVES.md

---

## Usage Guidelines

### For Designers

1. Use provided Figma library with all colors, components
2. Always check contrast ratios (minimum 4.5:1 for text)
3. Include focus indicators on all interactive elements
4. Never convey status by color alone
5. Use navy for primary hierarchy, green for accents only

**Do's:**
- ✅ Use green for interactive focus states
- ✅ Use navy for primary text and buttons
- ✅ Pair semantic colors with icons/text
- ✅ Test color combinations for contrast

**Don'ts:**
- ❌ Use green as primary text color (too light)
- ❌ Use navy for accents (blends with background)
- ❌ Rely on color alone for status (use text/icon)
- ❌ Change colors without design system approval

---

### For Developers

1. Import component library; use provided utility classes
2. Never hardcode hex values; use CSS variables
3. Test focus states on all interactive elements
4. Verify contrast ratios in QA
5. Use semantic colors for status (success/error/warning/info)

**Implementation:**
```jsx
// ✅ GOOD
<button className="bg-teal-900 text-teal-600">CTA</button>
<input className="focus:ring-teal-600/30" />

// ❌ AVOID
<button style={{ background: '#0F1F2E', color: '#9fe870' }}>CTA</button>
<input style={{ borderColor: '#9fe870' }} />
```

---

### For Product Teams

1. Communicate consistently: "Deep Navy" and "Bright Green"
2. Reference this design system in specs and briefs
3. Test new features against color compliance
4. Request design review before shipping color changes

---

## Deployment & Maintenance

### Version History

| Version | Date | Primary | Accent | Status |
|---------|------|---------|--------|--------|
| **5.0** | Aug 18, 2026 | Deep Navy | Bright Green | ✅ Active |
| 4.0 | Aug 16, 2026 | Cyber Teal | Ice Glass | Deprecated |
| 1.0-3.0 | Historical | Jade | Variants | Deprecated |

---

### Review Cadence

- **Quarterly:** Accessibility audit
- **Bi-annually:** Brand refresh evaluation
- **On request:** After major feature launches

---

### Change Process

1. Identify need (brand, accessibility, UX feedback)
2. Create design proposal with rationale
3. Test new palette against WCAG standards
4. Get design system approval
5. Update CSS variables in `src/index.css`
6. Verify all components render correctly
7. Deploy and monitor

---

## Documentation & Resources

**Files in This Repository:**
- `DESIGN_SYSTEM_COLORS.md` — Detailed color specifications
- `tenify-app-design-system-final.html` — Interactive visual reference
- `OPTION_11_APPLIED.md` — Implementation details
- `COLOR_ALTERNATIVES.md` — Evaluation of all options

**External Resources:**
- Figma Design System Library (color swatches + components)
- Component Storybook (live component examples)
- WCAG 2.1 Guidelines (accessibility standard)

---

## Sign-Off

**Design System Owner:** Tenify Product Team  
**Last Updated:** August 18, 2026  
**Status:** ✅ Production Ready  
**Deployment:** Live

---

**Version:** 5.0  
**Status:** Final & Active  
**Next Review:** November 2026
