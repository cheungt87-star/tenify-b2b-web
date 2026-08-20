# Tenify B2B PRD

*Last updated: 2026-08-10 | Owner: Lord Tak*

---

## 1. Overview

**Tenify B2B** extends the Tenify inspection product to letting agencies and property management companies who hold the ongoing management mandate for a portfolio of properties on behalf of landlords, and who run their own pre-move-in inspections as part of that relationship. Unlike the core Tenify marketplace (customer books → freelance agent claims and completes the inspection), B2B users work entirely within their own managed portfolio: they create inspection reports on demand, with no booking step, and the resulting PDF report carries their own company branding rather than Tenify's.

B2B users conduct inspections using the same mobile inspection app as certified Tenify agents (guided room → item → assessment → completion flow), but sign up and pay for access entirely through the web — the app itself is a free download with no registration or payment capability, to stay compliant with Apple App Store rules.

---

## 2. Problem

Letting agencies and management companies that manage properties on behalf of landlords currently run pre-move-in inspections manually — notes on paper, photos in a camera roll, inconsistent write-ups — with no independent, structured, defensible record. They don't have a booking to attach an inspection to (the property is already theirs to manage, not a one-off job won through Tenify), so a booking-first tool doesn't fit their workflow. They also need the output to look like *their* report, not a third-party Tenify report, since they hold the ongoing client relationship with the landlord.

---

## 3. Target Users

- **Letting agencies** — full-service agencies that, beyond finding tenants, also hold the ongoing property management mandate for the landlords they let on behalf of. They run their own move-in inspections as part of that management relationship, not as a one-off booked service, and need the resulting report to represent the agency (their branding, their record-keeping) rather than a third party. This is distinct from a landlord booking an independent one-off inspection through the core Tenify marketplace — the agency *is* the landlord's ongoing representative, across a portfolio of managed properties
- **Property management companies** — larger operators running inspections across a portfolio, with multiple staff needing access under one company account. Functionally the same usage pattern as letting agencies (portfolio-based, ongoing, self-branded), typically at greater scale and with dedicated inspection/compliance staff rather than generalist agents
- **Company admin** — the user within a letting agency or management company who owns billing, manages the company's user list, and sets the report logo
- **Field agent (company user)** — staff within the agency/management company who log into the mobile app to conduct inspections against properties in the company's managed portfolio

---

## 4. Goals

**In scope:**
- Self-serve web signup and recurring billing for letting agents / management companies
- Company account model supporting multiple users under one paying account
- Ability to create a new inspection report on demand, without a pre-existing booking
- Company logo applied automatically to every report generated under that company
- A free-to-download mobile app used only to log in and conduct inspections — no purchase or registration capability in-app

**Non-goals:**
- Booking flow, agent marketplace, or commission structure (that's the core Tenify product — see `TFI_PRD.md`)
- In-app account registration, pricing display, or payment processing of any kind (App Store compliance — see Section 9)
- Multi-currency billing (single currency at launch)
- Per-report logo selection (logo is set once per company, not per report)

---

## 5. Core Features

### Feature 1 — Web Signup & Billing
- Company admin signs up on tenify.ae (or equivalent web property), providing company details and recurring payment via Stripe
- Pricing is tiered by seat bands (e.g. up to 5 seats, up to 10 seats, etc.) — each Stripe plan maps to a `seatLimit`
- Payment is captured on signup; billing recurs automatically until canceled
- Company account is created only once payment succeeds
- Company admin can invite additional users (agents/staff) into the company account from the web, up to the seat limit of their plan; attempting to invite beyond the limit shows an error message and blocks the invite until the admin upgrades
- Signup enforces one account per email address — an email already registered to a company cannot sign up again or be invited into a second company. This is enforced at signup/invite time on the web (unique constraint on email)
- Web portal is kept intentionally minimal for MVP: signup, billing management, logo upload, and user invites — no reporting/analytics dashboard at this stage

### Feature 2 — Company Account & Branding
- Company admin can upload/replace a logo from web account settings
- Logo constraints are kept simple for MVP: standard image formats (PNG/JPG), a sensible max file size, displayed at a fixed size in the report header — no cropping tool, aspect-ratio enforcement, or multi-asset branding
- Logo is stored once per company and applied to the header of every PDF report generated by any user under that company
- Companies without a logo set fall back to default Tenify branding on their reports
- Company admin can view active users under the account and manage billing/subscription status from the web

### Feature 3 — Ad-Hoc Inspection Creation (App)
- Users log into the mobile app with credentials created on the web
- "New Report" entry point lets the user manually enter property address, property type, and customer/tenant details — no pre-existing booking required
- The rest of the inspection flow matches the existing guided flow used by certified Tenify agents: pre-populated rooms (add/remove) → per room (functional test → inventory listing & photography → submit room for batched AI review → AI result review/override) → completion, gated by a full validation check — see `Tenify-app/PRD.md` Feature 3 for full detail
- Resulting inspection is tagged to the user's company and to `source: adhoc`
- B2B ad-hoc inspections are private to the company — Tenify admin has no visibility into or review role over B2B reports (unlike core marketplace bookings, which admin can see and manage)

### Feature 4 — Report Generation
- On completion, a structured PDF report is generated with the company's logo (if set), property/customer details, and a room-by-room breakdown of functional check results and itemised condition ratings
- Report opens with **Must Fix** (failed functional checks, damage-level condition ratings) and **Recommended Fixes** (minor cosmetic condition ratings) summary sections, ahead of the full itemised detail — see `Tenify-app/PRD.md` Feature 4
- Report is available for download/sharing from the app and, if applicable, the web portal

### Feature 5 — Access Enforcement
- App authenticates against accounts created on the web only — there is no account creation, pricing, or payment flow in the app
- If a company's subscription lapses (`past_due`/`canceled`), the user is shown an in-app error message on login (e.g. "Your company's subscription is inactive — contact your account admin") and access is blocked. This is a hard lockout, not read-only access or a silent failure, and is enforced server-side so it can't be bypassed from the client
- The same error-message pattern is used if a company exceeds its seat limit — a blocked invite or a login attempt beyond the plan's seat count surfaces a clear error rather than failing silently
- Login screen includes a plain, non-tappable text hint for first-time downloaders, e.g. "Don't have an account? Visit tenify.ae" — static text only, never a button or link

---

## 6. User Stories

### Company Admin

**US-B1 — Sign Up and Pay**
As a company admin, I want to sign up and set up recurring billing on the web so that my company gets access to the inspection app without needing to buy anything inside the app.

**US-B2 — Invite Team Members**
As a company admin, I want to invite other users into my company account so that my team can conduct inspections under one subscription.

**US-B3 — Set Company Logo**
As a company admin, I want to upload my company logo once so that it automatically appears on every report my team generates, without configuring it per report.

**US-B4 — Manage Subscription**
As a company admin, I want to view and manage my subscription status on the web so that I can update billing details or cancel without contacting support.

### Agent (Company User)

**US-B5 — Log In**
As a company user, I want to log into the mobile app with credentials created on the web so that I can start conducting inspections.

**US-B6 — Create a Report Without a Booking**
As a company user, I want to start a new inspection by entering property and customer details myself so that I can inspect a property that was never booked through Tenify.

**US-B7 — Conduct a Guided Inspection**
As a company user, I want to be guided room-by-room and item-by-item through the inspection, the same as a certified Tenify agent, so that my reports are consistent and defensible.

**US-B8 — Receive a Branded Report**
As a company user, I want the generated report to carry my company's logo automatically so that it looks like it came from my company, not from a third party.

---

## 7. Data Structure

```javascript
Companies:
- id, name, logoUrl, primaryContactUserId, subscriptionStatus (active|past_due|canceled), stripeCustomerId, plan, seatLimit
  // subscriptionStatus/stripeCustomerId/plan/seatLimit are owned by the web signup/billing flow — the app never writes to these fields
  // plan maps to a seat band (e.g. up to 5 seats, up to 10 seats); seatLimit is the numeric cap enforced on invites and logins

Users:
- id, username, password, name, email (unique across all companies), companyId
  // companyId set for all B2B users; null for core Tenify certified agents
  // email uniqueness enforced at signup/invite time — one account per email, one company per user

Inspections:
- id, companyId, source (adhoc), propertyAddress, customerName, customerContact,
  status, startTime, completionTime, assessments[], report
  // no appointmentId — B2B inspections are never tied to a booking

Rooms / Items / Assessments / Media:
- shared structure with the core Tenify inspection app (see Tenify-app/PRD.md)
```

---

## 8. App Store Compliance (iOS)

Apple's "reader app" exception (Guideline 3.1.3) only applies to apps unlocking pre-purchased magazines, books, audio, or video — an inspection app doesn't qualify. Instead, the app follows the standard "no purchase mechanism in the app" pattern used by tools like Slack:

- The app contains no account creation flow, no subscription/pricing display, and no payment processing of any kind
- Because nothing is sold or registered inside the app, it requires no special Apple entitlement and is compliant on every storefront, not just the US
- All registration and recurring billing happens on the web; the app is a free download that only authenticates existing accounts
- Do not add a tappable "Sign Up" link/button in-app — this risks being read as steering users to an external purchase flow outside the US, where Apple's anti-steering rules still apply without the External Link Account Entitlement
- Login screen text hint pointing to the web ("Don't have an account? Visit tenify.ae") must remain plain, static text — never a link or button

---

## 9. Success Metrics

### Acquisition
| Metric | Description | Target |
|--------|-------------|--------|
| Web signup conversion rate | % of company signup page visitors who complete payment | ≥ 5% |
| Companies onboarded | Number of paying company accounts | 20 in Month 1 |

### Activation & Engagement
| Metric | Description | Target |
|--------|-------------|--------|
| Time to first report | From signup to first completed inspection | ≤ 3 days |
| Reports per company per month | Volume of ad-hoc inspections completed | Baseline in Month 1, track growth |
| Logo adoption rate | % of companies that set a custom logo | ≥ 80% |

### Retention & Revenue
| Metric | Description | Target |
|--------|-------------|--------|
| Monthly churn rate | % of company accounts canceling per month | ≤ 5% |
| MRR from B2B | Recurring revenue from company subscriptions | Track from Month 1 |

---

## 10. Open Questions

All initial open questions have been resolved — decisions below. New open questions will be added here as they come up.

### Resolved Decisions

| # | Question | Decision |
|---|----------|----------|
| 1 | Pricing model | Tiered seat bands (e.g. up to 5 seats, up to 10 seats, etc.) — see Feature 1 |
| 2 | Subscription lapse behaviour | Hard lockout with an in-app error message on login — see Feature 5 |
| 3 | Multi-company membership | One account per email; one company per user, enforced at signup/invite — see Feature 1, Data Structure |
| 4 | Tenify admin visibility into B2B reports | No — B2B inspections are fully private to the company — see Feature 3 |
| 5 | Logo file constraints | Kept simple: standard formats, sensible max size, fixed report placement — see Feature 2 |
| 6 | Seat limit enforcement | Same error-message pattern as subscription lapse (#2) — blocked invite/login beyond plan seat count — see Feature 5 |
| 7 | Web portal dashboard scope | MVP-only: signup, billing, logo, user invites — no reporting/analytics dashboard — see Feature 1 |

---

## 11. Milestones

### Phase 1 — Web Signup & Billing
- [ ] Company admin can sign up and pay on the web (Stripe recurring billing)
- [ ] Company admin can invite team members
- [ ] Company admin can upload a company logo
- [ ] Company admin can view/manage subscription status

### Phase 2 — App Access & Ad-Hoc Reports
- [ ] Company users can log into the mobile app with web-created credentials
- [ ] "New Report" ad-hoc creation flow (manual property/customer entry, no booking required)
- [ ] Guided inspection flow (rooms → items → assessment → completion) reused from core Tenify app
- [ ] Generated PDF report applies company logo automatically

### Phase 3 — Access Enforcement & Hardening
- [ ] Server-side enforcement of subscription status (lapsed accounts lose access per Open Questions decision)
- [ ] Login screen text hint pointing to web signup
- [ ] App Store submission review against compliance checklist (Section 8)
