# Scaffolding docs needed to build tenify-b2b-web

## Already in hand (in docs/ and designs/)
- Brand guidelines (TFI_Brand_Guidelines.md)
- Design system tokens (designs/_ds/, docs/tenify-app-design-system-final.html/.md, DESIGN_SYSTEM_COLORS.md)
- B2B PRD, landing page design brief, messaging/copy
- B2B pricing/model strategy docs
- Design mockups (designs/Tenify Landing - Standalone.html, .dc.html)

## Still needed

### Product/scope
- Sitemap — confirmed page list (home, pricing, product/features, case studies, about, contact, legal) and URL structure
- Content inventory per page — final copy signed off against the messaging doc, mapped to each section/component
- User stories / acceptance criteria for any interactive elements (demo booking, pricing calculator, lead form)

### Technical
- Tech stack decision — confirm reuse of TFI Web's Next.js/Vercel/Supabase stack or standalone build
- Component inventory — mapping design system components to actual React/Next components to build vs reuse from TFI Web
- Environment/config — env vars needed (analytics keys, form endpoint, CMS if any)
- CMS decision — static content vs headless CMS for case studies/blog

### Lead gen & integrations
- Lead form spec — fields, validation, destination (CRM/email/Supabase table)
- Demo booking flow — Calendly or custom, and where it plugs into the funnel
- Analytics/tracking spec — GA4/PostHog events, conversion goals, pixel requirements

### SEO & content
- SEO brief for B2B pages — target keywords, meta titles/descriptions, schema markup (can extend existing SEO-STRATEGY.md from the main project)
- Case studies/social proof — logos, testimonials, or data points to include (legal sign-off if using client names/logos)

### Design
- Responsive/mobile breakpoints for the design mockups (currently desktop-first exports)
- Favicon/OG image assets
- Any missing states: form validation, empty states, error pages, 404

### Launch readiness
- QA/accessibility checklist
- Legal pages — privacy policy, terms, cookie notice (or confirm reuse from TFI Web)
- Deployment plan — domain/subdomain, hosting target, staging vs production
