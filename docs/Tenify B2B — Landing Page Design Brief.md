# Tenify B2B — Landing Page Design Brief

*Date: 2026-08-14 | For: Design & Development*

---

## 1. Overview

**Objective:** B2B waitlist landing page targeting letting agency owners and property management company principals in Dubai. Convert visitors to email signups via waitlist form.

**Target Audience:** Agency principals, operations managers, and founders — busy, sales-focused, skeptical of marketing fluff. They want to see business value (differentiation, revenue, speed) immediately.

**Tone:** B2B SaaS professional. Direct, no-nonsense, agency-first. Think Slack, Linear, Revolut — polished but conversational, not corporate.

**Scope:** Single landing page, all sections above the fold and below. No subpages (product pages, pricing calc, etc. can come later). Waitlist form integrates at Hero CTA, repeated before footer.

---

## 2. Visual Direction

### Design System
Use **TFI Design Tokens** (`TFI_Design_Tokens.md`), specifically the **Agent** styling lane (not Tenant):
- Background: `true-white` (#FFFFFF) / `neutral-100`
- Cards: `agent-card` token (white, `neutral-200` border, `radius-md`, shadow-2)
- Buttons: `button-primary` (coral) for primary CTAs, `button-secondary` / `button-ghost` for supporting actions
- Typography: Inter only, per documented type scale
- Spacing: `space-4` / `space-5` (compact, efficient density)
- Radius: `radius-md` (8px) default

### Photography & Imagery
- **Real app screenshots:** Hero video and "How It Works" section must show actual app UI (once built or mocked). Use real Dubai property addresses, realistic tenant/agent names, actual UI flow.
- **No generic stock photos.** All imagery should feel operational/real, not aspirational.
- **Agency branding moment:** The "Generated Report" screen in "How It Works" MUST prominently feature a co-branded report with agency logo — this is the single most important visual moment for the pitch.

### Color Palette
- **Primary (CTAs):** Coral (`button-primary` from TFI tokens)
- **Backgrounds:** Neutral white, light grays for section breaks
- **Text:** Dark gray/charcoal for body, black for headlines
- **Accent:** Coral for key data points, highlights

### Layout & Hierarchy
- **Mobile-first** — design for mobile (375px) first, then tablet (768px), then desktop (1440px)
- **Generously spaced** — don't crowd sections. White space = breathing room = professionalism.
- **One hero image / video per major section** — avoid text-dense walls. Use visuals to break up copy.
- **Hierarchy is clear:** Section headline > supporting copy > supporting details. Never make agency owners hunt for the point.

---

## 3. Page Sections & Design Requirements

### Header / Navigation
**Layout:** Fixed top, sticky on scroll. Minimal.

**Components:**
- Logo (left-aligned, clickable to hero)
- Nav links (right): Product | Pricing | FAQ | Login (subdued)
- CTA button (right): "Join Waitlist" (primary color)

**Notes:**
- Keep nav minimal — 5 links max.
- "Login" is small/subdued (not primary audience yet).
- Primary CTA always visible in header.
- No hamburger menu on mobile; stack nav vertically in a sheet if needed, but prefer a clean, single-column mobile nav.

---

### Hero Section

**Layout:** Full-width, centered text stack on mobile, left text / right video on desktop.

**Components:**
- **Eyebrow:** Optional thin text or small badge, e.g. "For Letting Agencies & Property Management Companies"
- **Headline:** Large, bold, single line if possible: "Turn handover inspections into trust and revenue."
  - Font: Inter Bold or Semi-Bold, 48px+ on desktop, 36px on mobile, `text-black`
  - Line-height: 1.2
- **Subhead:** 4–5 lines, supporting copy: "With Tenify, you can effortlessly generate detailed pre-move-in reports in minutes — fully branded to your agency. Turn a routine handover into a brand moment. Differentiate from competitors and create a new service to sell."
  - Font: Inter Regular, 18px on desktop, 16px on mobile, `text-dark-gray`
  - Line-height: 1.5
- **Video thumbnail / CTA:** Embed YouTube or self-hosted video (2-min explainer showing app flow). Thumbnail shows play icon overlay. Copy: "Watch how it works (2 min) →"
  - Thumbnail size: ~600px wide on desktop, full-width on mobile, `radius-md`, subtle shadow

**CTAs:**
- Primary: "Join the Waitlist" (coral button, center)
- Secondary: "See pricing ↓" (ghost button or link, center, below primary)

**Spacing:**
- Top padding: 80px (desktop), 60px (mobile)
- Bottom padding: 80px (desktop), 60px (mobile)
- Max-width: 1200px, centered

**Notes:**
- Hero should answer the question in under 10 seconds: "What is this?" and "Why should I care?"
- Video is optional but highly recommended — agencies want to see the UI before committing.
- Avoid hero images that feel stock-y; if using static imagery instead of video, use a realistic app screenshot or a high-quality photo of an inspection in progress.

---

### Problem Section

**Layout:** Two-column on desktop (text left, imagery right), single column on mobile.

**Components:**
- **Headline:** "Your inspections aren't working for you."
  - Font: Inter Bold, 36px+ on desktop, 28px on mobile
- **Body copy:** 
  - Para 1: "You're already doing pre-move-in inspections..." (see copy draft)
  - Para 2: "Your competitors aren't doing anything better..." (see copy draft)
  - Font: Inter Regular, 16px, `text-dark-gray`, line-height: 1.6
- **Subhead:** "It doesn't have to be this way."
  - Font: Inter Semi-Bold, 20px, `text-charcoal`

**Imagery (right column on desktop):**
- Visual showing "before" state: scattered photos, notes, manual chaos. Can be illustrated or photographed.
- Size: ~500px wide on desktop, full-width on mobile
- Style: Not overly dramatic or cartoony; should feel real/operational.

**Spacing:**
- Section padding: 80px vertical (desktop), 60px (mobile), 60px horizontal
- Max-width: 1400px, centered
- Two-column gap: 60px on desktop

**Notes:**
- This section does emotional and rational work: "Here's the pain you're experiencing."
- Imagery should feel relatable to agency ops — don't over-design it.
- Keep copy tight — agencies scan, they don't read long paragraphs.

---

### How It Works / What It Looks Like

**Layout:** Centered text, then scrollable or tabbed screenshot carousel below.

**Components:**
- **Headline:** "Same inspection. Professional report. Your brand."
  - Font: Inter Bold, 36px+ on desktop, 28px on mobile
- **Body copy:** "Your inspector arrives at the property..." (see copy draft)
  - Font: Inter Regular, 16px, `text-dark-gray`, line-height: 1.6
- **Time callout:** "Report ready in minutes, not hours."
  - Font: Inter Semi-Bold, 18px, coral color, or in a highlight box

**Screenshot Carousel:**
- 5 screens (mobile mockups or web screenshots showing actual app flow):
  1. Start report screen (property address entry)
  2. Functional checks (Yes/No toggles)
  3. Inventory & photos (item + photo capture)
  4. AI review screen (ratings with override controls)
  5. Final report with agency logo (MOST IMPORTANT — make the logo moment unmistakable)
  
- Mobile frame mockups on desktop: ~400px wide, centered, with rounded corners + shadow
- On mobile: single column, full-width screenshots, swipe or carousel control
- Interactions: Click/swipe to advance, auto-advance every 5 seconds (optional), or dot indicators for manual nav

**Spacing:**
- Section padding: 80px vertical (desktop), 60px (mobile)
- Max-width: 1400px, centered
- Gap between headline and carousel: 40px

**Design Notes:**
- **Critical:** The report screen (screen 5) should be the hero of this section. Make sure the agency logo is large, prominent, and impossible to miss. This is the "aha moment" — position it as such.
- Use real/realistic screenshots, not illustrated mockups. This builds credibility.
- Dot indicators or prev/next arrows should be subtle (not dominating) but clear.
- On mobile, prioritize readability — may need to zoom/crop screenshots so text is legible.

---

### Why It Matters

**Layout:** Three-column grid on desktop, stacked cards on mobile.

**Components:**
- **Headline:** "Three reasons agencies are already asking for this."
  - Font: Inter Bold, 36px+ on desktop, 28px on mobile
  
- **Three cards (equal width on desktop, full-width stacked on mobile):**
  
  **Card 1 — Differentiate**
  - Headline: "Differentiate" (18px, Inter Semi-Bold, coral accent or icon)
  - Body: "You're offering something no competitor in your market does yet. That's not a small thing. Landlords and tenants notice, and they remember." (14px, Inter Regular, `text-dark-gray`)
  - Card styling: `agent-card` token (white bg, `neutral-200` border, `radius-md`, shadow-2)
  - Padding: 32px
  
  **Card 2 — New Revenue**
  - Headline: "New Revenue" (18px, Inter Semi-Bold, coral accent)
  - Body: "Add it as a paid service. Sell to landlords. Sell to tenants. Use it as a reason to win the deal in the first place. Per-seat pricing means your cost stays predictable." (14px, Inter Regular)
  - Card styling: Same as Card 1
  
  **Card 3 — Your Brand**
  - Headline: "Your Brand" (18px, Inter Semi-Bold, coral accent)
  - Body: "Every report carries your logo and your name — not Tenify's. It reinforces who they're working with at the exact moment they care most." (14px, Inter Regular)
  - Card styling: Same as Card 1

**Spacing:**
- Section padding: 80px vertical (desktop), 60px (mobile)
- Max-width: 1400px, centered
- Grid gap: 40px on desktop, 24px on mobile

**Notes:**
- Keep card text short and punchy — each body copy is ~30–40 words.
- Cards should feel lightweight and scannable, not heavy.
- Optional: add small icons (coin for revenue, people for differentiation, badge for brand) above headline, but only if they add clarity, not clutter.

---

### Pricing

**Layout:** Centered text, then pricing table or card grid below.

**Components:**
- **Headline:** "Simple per-seat pricing. No surprises."
  - Font: Inter Bold, 36px+ on desktop, 28px on mobile
- **Body copy:** "One company account. Invite as many inspectors as your plan allows..." (see copy draft)
  - Font: Inter Regular, 16px, `text-dark-gray`

**Pricing Table / Cards:**
- **Table on desktop, cards on mobile**
- Columns: Plan | Seats | Price/month | What's included
- Rows:
  - Starter | Up to 5 | $X | All features
  - Growth | Up to 10 | $X | All features
  - Pro | 15+ | Custom | All features + priority support
  
- **Table styling:**
  - Header row: coral background, white text, Inter Semi-Bold
  - Body rows: white bg, `neutral-100` alternating row background (optional)
  - Border: `neutral-200` dividers
  - Text: Inter Regular, 14–16px

- **Copy below table:** "No long-term contracts. Cancel anytime. Questions? We'll answer them — see below."
  - Font: Inter Regular, 14px, `text-dark-gray`

**CTA within section:** Optional small button "Compare plans" (ghost), but waitlist CTA is sufficient.

**Spacing:**
- Section padding: 80px vertical (desktop), 60px (mobile)
- Max-width: 1200px, centered
- Table width: ~100% of container, responsive

**Notes:**
- Pricing numbers are **TBD** — placeholder values only until finalized.
- Avoid visual tricks (strike-throughs, fake discounts). Be transparent.
- If you choose cards on mobile, make sure they're swipeable or clearly indicate there are multiple plans.

---

### FAQs

**Layout:** Centered text, then accordion or stacked Q&A below.

**Components:**
- **Headline:** "Frequently asked questions"
  - Font: Inter Bold, 36px+ on desktop, 28px on mobile
  
- **FAQ items (6–8 total):**
  - Question: "How long does setup take?" (Inter Semi-Bold, 16px, `text-charcoal`)
  - Answer: "Sign up on the web, invite your team, upload your logo. 15 minutes..." (Inter Regular, 14–16px, `text-dark-gray`, line-height: 1.6)
  
  - Use accordion/collapsible UI on desktop and mobile (click to expand/collapse)
  - Open state: question remains visible, answer appears below
  - Closed state: only question visible
  - Chevron icon (rotates 90° on open) to indicate interactivity

**Styling:**
- Each Q&A item: light border or subtle background, `radius-md`, padding 20px
- Spacing between items: 12px
- Accordion animation: smooth 200–300ms expand/collapse

**Spacing:**
- Section padding: 80px vertical (desktop), 60px (mobile)
- Max-width: 1000px, centered
- FAQ item width: 100%

**Notes:**
- Order FAQs by relevance to sales objections (setup, speed, customization, integration, etc.).
- Answers should be concise (2–3 sentences max). If an answer needs more depth, link to docs or contact form.
- On mobile, consider having 1–2 FAQs open by default so users see there's content; rest closed.

---

### CTA Section (Before Footer)

**Layout:** Centered text stack, single CTA.

**Components:**
- **Headline:** "Ready to stand out?"
  - Font: Inter Bold, 32px on desktop, 24px on mobile
- **Body copy:** "Join the waitlist. Get early access, founding partner pricing, and a say in how the product evolves for agencies like yours."
  - Font: Inter Regular, 16px, `text-dark-gray`, line-height: 1.6
- **Primary CTA:** "Join the Waitlist" (large coral button, center)
- **Micro-copy below CTA:** "No spam. We'll reach out when early access opens — usually within 2–4 weeks."
  - Font: Inter Regular, 12px, `text-light-gray`

**Spacing:**
- Section padding: 80px vertical (desktop), 60px (mobile)
- Background: optional light gray (`neutral-50`) or white — test both
- Max-width: 800px, centered

**Notes:**
- This is the final push before footer — make it clear and single-minded.
- Micro-copy builds trust ("no spam," "usually within 2–4 weeks") — don't skip it.
- Button should be prominent but not huge; ~48–56px tall is standard.

---

### Footer

**Layout:** 5-column grid on desktop, single column stacked on mobile.

**Components:**
- **Column 1 — Logo / Brand**
  - Logo (smaller version, ~60px wide)
  - Brief tagline (optional): "Move-in inspections made easy."
  
- **Column 2 — Product**
  - Header: "Product" (Inter Semi-Bold, 14px)
  - Links: "How it works" | "Features" | "Pricing" (Inter Regular, 13px, link color coral on hover)
  
- **Column 3 — Company**
  - Header: "Company" (Inter Semi-Bold, 14px)
  - Links: "About" | "Blog" | "Contact" (Inter Regular, 13px)
  
- **Column 4 — Legal**
  - Header: "Legal" (Inter Semi-Bold, 14px)
  - Links: "Terms" | "Privacy" | "Cookie Policy" (Inter Regular, 13px)
  
- **Column 5 — Social**
  - Header: "Follow" (Inter Semi-Bold, 14px)
  - Icons: LinkedIn, Twitter (icon-only, 24px, clickable)

**Bottom bar:**
- Copyright line: "Tenify © 2026. All rights reserved." (Inter Regular, 12px, `text-light-gray`, center on mobile)
- Background: `neutral-100` or white with top border `neutral-200`
- Padding: 40px vertical (desktop), 30px (mobile)

**Notes:**
- Footer should feel lightweight, not cramped.
- Link color: coral on hover for emphasis.
- Mobile: stack all columns vertically, centered text, maintain padding.

---

## 4. Responsive Behavior

### Breakpoints
- **Mobile:** 375px – 640px (iPhone 12 to landscape tablet)
- **Tablet:** 641px – 1024px (iPad)
- **Desktop:** 1025px+ (desktop, wide screen)

### Mobile-Specific Adjustments
- Hero: single column (no right-side video, video below text)
- Problem section: single column, imagery below text
- Why It Matters: cards stacked vertically, full-width
- Pricing: cards stacked or scrollable grid
- FAQs: all items collapsed by default (except first), full-width
- Buttons: full-width or 80% width (not cramped)
- Spacing: reduce vertical padding by ~20% on mobile

### Tablet Adjustments
- Two-column layouts revert to single column or 2-up grids
- Font sizes slightly reduced from desktop
- Spacing reduced moderately

---

## 5. Interaction & Micro-Interactions

- **Hover states:** Links and buttons lighten/darken coral, slight scale up (1.02) on hover
- **Active states:** Buttons show pressed state (slight inset shadow)
- **Focus states:** All interactive elements have visible focus ring (coral outline) for accessibility
- **Accordions (FAQ):** Smooth expand/collapse animation (200–300ms), chevron rotates
- **Video:** Play button overlay on video thumbnail, clicking opens video player (YouTube embed or self-hosted)
- **Scroll animations:** Optional subtle fade-in or slide-up as sections come into view (not required, nice-to-have)

---

## 6. Accessibility

- **Color contrast:** All text meets WCAG AA standard (4.5:1 for body text, 3:1 for large text)
- **Keyboard navigation:** All interactive elements (buttons, links, accordions) are tab-navigable
- **Alt text:** All images and icons have descriptive alt text
- **Semantic HTML:** Use proper heading hierarchy (H1, H2, H3), semantic form elements
- **Focus indicators:** Visible focus ring on all focusable elements
- **Form labels:** Waitlist form inputs have associated labels (not placeholder-only)

---

## 7. Performance & Technical Notes

- **Page weight:** Target < 3MB (including images/video)
- **Images:** Lazy-load below-fold images; compress all imagery
- **Video:** Self-hosted MP4 or YouTube embed (fast, no bloat)
- **Fonts:** Inter from system or Google Fonts CDN (not local file)
- **CMS:** Static HTML/React or Webflow-friendly structure (no overly complex dependencies)
- **Forms:** Waitlist form validates email, captures name (optional), submits to Zapier/Airtable or internal database

---

## 8. Waitlist Form

**Fields:**
- Name (optional, but encouraged)
- Email (required, validated)
- Company (optional)
- Company size (optional dropdown: 1–5, 6–20, 20+)

**Behavior:**
- Inline validation (email format check on blur)
- Success message on submit: "Thanks! We'll be in touch when early access opens."
- Prevent duplicate submissions (rate limit)
- Data stored in Airtable or equivalent for follow-up

**Styling:**
- Form inputs: `agent-card` token (white bg, `neutral-200` border, `radius-md`)
- Input text: Inter Regular, 14px
- Placeholder text: `text-light-gray`, subtle
- Focus state: coral border on input
- Submit button: primary coral, full-width on mobile

---

## 9. Content Checklist

- [ ] Headline copy finalized and approved
- [ ] Subhead copy finalized and approved
- [ ] All section copy reviewed and approved
- [ ] FAQ answers confirmed and reviewed
- [ ] Video script + storyboard (if creating explainer video)
- [ ] App UI screenshots/mockups ready (for "How It Works" carousel)
- [ ] Agency logo example for "Why It Matters" visual (or use placeholder)
- [ ] Pricing tiers confirmed (numbers locked in)
- [ ] Social links verified (LinkedIn, Twitter URLs)
- [ ] Contact/support email confirmed
- [ ] Legal pages drafted (Terms, Privacy, Cookie Policy)

---

## 10. Design Deliverables

1. **Figma file** — All sections, annotated, component library linked to TFI Design Tokens
2. **Mobile + Desktop mockups** — Key sections (Hero, Problem, How It Works, Pricing, CTA)
3. **Responsive grid documentation** — Breakpoints, column counts, spacing at each size
4. **Interactive prototype** — Figma prototype or Framer showing scroll, hover, accordion interactions
5. **Design handoff specs** — Font sizes, spacing, color values, component names for development

---

## 11. Success Metrics

- **Waitlist signups:** Target 50+ in first month
- **Bounce rate:** < 40%
- **Scroll depth:** 70%+ of visitors reach pricing section
- **Form completion rate:** 15%+ of visitors who scroll to CTA section
- **Mobile traffic:** ~60% (optimize for mobile first)

---

**Questions? Reach out to [Product Owner / Tak] for clarification on copy, scope, or design direction.**
