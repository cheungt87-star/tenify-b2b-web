# B2B Pricing — UI Implementation Brief

*For: pricing/signup page, tenify.ae | Ref: Tenify B2B PRD Feature 1, B2B_Pricing_Brainstorm.md*

---

## Tiers to display

| Tier | Seats | Price/seat/mo (AED) | Band max (AED/mo) | Checkout |
|---|---|---|---|---|
| Solo | 1 | 500 | 500 | Self-serve |
| Growth | Up to 5 | 450 | 2,250 | Self-serve |
| Team | Up to 10 | 400 | 4,000 | Self-serve |
| Custom | 11+ | Negotiated | — | "Contact us" — no checkout |

Billing: monthly, AED, single currency (per PRD non-goals — no multi-currency at launch).

---

## Pricing card copy (per tier)

Each card: tier name, price/seat/mo, seat range, feature list (cumulative — Growth shows Solo's items too, etc.):

- **Solo:** Unlimited reports · Co-branded logo · Email support · Self-serve set-up
- **Growth:** + Dedicated WhatsApp support · + Guided onboarding & training
- **Team:** + Dedicated account manager · + We set it up for you
- **Custom:** "Talk to us" — everything in Team, negotiated scope

Feature list is marketing/servicing only — no in-app feature gating required (reports/branding are identical across tiers per current PRD scope).

---

## Seat selector behavior

- User picks a seat count on signup (not tier name directly) — page auto-resolves the count into the correct band and shows blended price.
- 11+ seats → hide checkout, show "Contact us" CTA instead (routes to sales, not Stripe).
- Show live total: `seats × price/seat` at the band's rate, e.g. 3 seats on Growth = 3 × 450 = AED 1,350/mo.

---

## Backend / Stripe mapping

Matches existing `Companies` schema (`plan`, `seatLimit` fields already in PRD Data Structure):

| Tier | `plan` value | `seatLimit` | Stripe |
|---|---|---|---|
| solo | `solo` | 1 | 1 Stripe Price, qty fixed at 1 |
| growth | `growth` | 5 | 1 Stripe Price, qty = seats (1–5) |
| team | `team` | 10 | 1 Stripe Price, qty = seats (1–10) |
| custom | `custom` | Manual | No Stripe self-serve — sales-assisted invoicing |

- Company account created only after Stripe payment succeeds (per PRD Feature 1 — no change needed there).
- Invite blocked beyond `seatLimit`, same error-message pattern already specced (PRD Feature 5) — no new logic required, just confirm seat counts above map correctly.

---

## Non-goals for this pass

- No feature gating by tier (all tiers get unlimited reports + branding — servicing/setup differences are fulfilled by ops, not app logic).
- No analytics/usage dashboard (already excluded from MVP scope).
- No annual billing toggle yet (flagged as open question — add later if needed).

---

## Open items before build

1. Confirm Stripe Price IDs for Solo/Growth/Team (3 total, quantity-based for Growth/Team).
2. Confirm "Contact us" destination for Custom (email, form, Calendly?).
3. Confirm whether mid-band seat pricing (e.g. 3 seats on Growth) is quantity × Growth price, or if partial bands need their own Stripe quantity logic — assumption above is straight multiplication.
