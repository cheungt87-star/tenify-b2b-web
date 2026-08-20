# Tenify B2B Pricing — Brainstorm

*Owner: Lord Tak | Draft: 2026-08-19 | Status: Brainstorm — not decided*

Scope: seat-based SaaS subscription for letting agencies and property management companies (per the Aug 10 B2B PRD). Not the referral/commission model from the July B2B_MODEL_STRATEGY doc — that's a separate track for one-off DTC referrals, not this product.

---

## What we know already

- PRD has "resolved" the model as tiered seat bands (up to 5 seats, up to 10 seats, etc.) but no actual AED figures picked yet.
- DTC per-inspection price: AED 300–800 depending on property size, ~AED 400–500 average.
- Competitor per-inspection pricing: AED 999–1,200+ (Property Check, DPS, Haus & Estates) — all one-off, none subscription.
- B2B buyer is a company, not an individual — budget owner is an office/ops manager or principal, not a tenant.
- No usage cap or per-report pricing exists yet in the PRD — a company on any seat tier can generate unlimited ad-hoc reports today. That's a real gap to close before pricing, or margins are exposed to a small agency running 200 inspections/month on a 5-seat plan.

---

## Option 1 — Pure seat-tiered flat fee (matches PRD as written)

Flat monthly price per seat band, unlimited inspections within it.

| Tier | Seats | Price/month (AED) | Price/seat |
|---|---|---|---|
| Starter | Up to 5 | 799 | ~160 |
| Growth | Up to 10 | 1,399 | ~140 |
| Scale | Up to 25 | 2,999 | ~120 |
| Enterprise | 25+ | Custom | — |

**Pros:** Simple to sell, matches PRD spec exactly, predictable MRR, easy self-serve checkout.
**Cons:** No usage ceiling — a 5-seat agency inspecting 300 units/month costs Tenify the same as one doing 10/month. Margin risk if inspection volume isn't tied to seats (an admin could add many agents doing few inspections, or few agents doing huge volume).
**Fix:** cap reports/month per tier, overage billed per report (see Option 2).

---

## Option 2 — Seat tier + included report allowance + overage

Same seat bands, but each tier includes a monthly inspection allowance; extra reports billed per unit.

| Tier | Seats | Included reports/mo | Price/month | Overage/report |
|---|---|---|---|---|
| Starter | Up to 5 | 40 | 799 | AED 25 |
| Growth | Up to 10 | 100 | 1,399 | AED 20 |
| Scale | Up to 25 | 300 | 2,999 | AED 15 |

**Pros:** Protects margin, scales revenue with actual usage, still simple to communicate.
**Cons:** More complex billing/metering to build (usage tracking, overage invoicing) — adds engineering scope not currently in the PRD (web portal is intentionally minimal for MVP, no analytics dashboard).
**Verdict:** Right long-term shape, probably a v2 — MVP may need to ship Option 1 first and watch usage data before adding caps.

---

## Option 3 — Per-seat pricing, no bands

Straight AED-per-seat/month, company picks exact seat count.

- e.g. AED 175/seat/month, 2-seat minimum
- 5 seats = AED 875, 10 seats = AED 1,750, 25 seats = AED 4,375

**Pros:** Fully linear, no "band cliff" (agency at 11 seats doesn't jump a full tier), easiest to reason about for the buyer.
**Cons:** Loses the volume-discount lever that rewards bigger accounts — larger PM companies (the more strategic accounts) get no better unit economics than a small agency, which weakens the upsell case. Also diverges from what the PRD already specifies (seat bands), so it's a bigger conversation with eng if that's locked.

---

## Option 4 — Land-and-expand: free/low-cost single-seat tier

A near-free "Solo" tier (1 seat, e.g. AED 149/month or even a 14-day free trial) to get small agencies and individual PM staff using it, then upsell to team tiers as they add agents.

**Pros:** Lowers the barrier for the long tail of small agencies (UAE market is dense with 1–3 agent shops per the earlier competitor research). Turns pricing into a growth funnel rather than a gate.
**Cons:** Free/near-free tier costs support and infra without matching the report-volume risk in Option 1. Needs a believable upgrade trigger (seat limit) to avoid a permanent freeloader base.
**Fit:** layer this on top of Option 1 or 2 as the entry rung, not a standalone model.

---

## Option 5 — Annual commitment discount

On top of whichever tier structure: monthly price as listed, annual prepay at ~15–20% off.

- e.g. Growth tier: AED 1,399/mo monthly, or AED 13,999/year (≈AED 1,167/mo, 17% off)

**Pros:** Improves cash flow and retention (sunk cost), reduces monthly churn measurement noise, standard SaaS lever.
**Cons:** None significant — but only works once there's proven product-market fit; discounting before the product is stable risks refunds/complaints.

---

## Option 6 — Per-seat pricing, banded discount (per-seat price drops with volume)

Price per seat declines by band, rewarding agencies that add headcount — the upsell lever from Solo → Growth → Team.

**Solo — AED 500/seat/mo (1 seat, AED 500 total)**
- Unlimited reports
- Co-branded logo
- Email support
- Self-serve set-up

**Growth — AED 450/seat/mo, 10% off (up to 5 seats, AED 2,250 at band max)**
Everything in Solo, plus:
- Dedicated WhatsApp support
- Guided onboarding + training

**Team — AED 400/seat/mo, 20% off (up to 10 seats, AED 4,000 at band max)**
Everything in Growth, plus:
- Dedicated account manager
- We set it up for you

**Custom — 11+ seats, negotiated pricing**
Everything in Team, plus:
- Negotiated scope (TBD)

Solo priced highest per seat but still breaks even under 1 inspection/month against a single AED 450 DTC booking or a AED 999+ competitor inspection. Same caveat as Option 1: assumes unlimited reports per seat, so it doesn't protect margin against a single high-volume seat until an allowance/overage layer is added.

**Benchmark rationale:** this is seat-only, unlimited-inspection pricing (no property/unit cap), so it's anchored against InspectCheck's per-user model — the one comparable pricing on seats alone with no volume dimension — which puts a marginal seat at roughly AED 300–400/month. See "Competitor Benchmarks" below.

---

## Competitor Benchmarks (property inspection SaaS, converted to AED)

| Vendor | Model | Entry tier | Per extra seat | Notes |
|---|---|---|---|---|
| Property Inspect | Seat + property cap | $49/mo (1 seat, 100 units) ≈ AED 180 | $10–15/seat ≈ AED 37–55 | Unlimited inspections, overage on *properties* not seats |
| InspectCheck | Per-user, no property cap | $2,000/yr (2 users) ≈ AED 611/mo | $1,300/yr ≈ AED 397/mo per seat | Also offers per-inspection: $350/report ≈ AED 1,285 |
| SnapInspect | Tiered, opaque | Not disclosed | — | Unlimited inspections on every tier |

Property Inspect's cheap seats are subsidized by property-count overage — not comparable to a seat-only model. InspectCheck is the closer analogue (seat-only, unlimited, no property cap), which is why Option 6 above is anchored near their AED 300–400/seat range rather than Property Inspect's AED 37–55.

---

## Anchoring: how these tiers compare to alternatives

| Option | Monthly cost to agency | Break-even vs paying DTC price per inspection (~AED 450) |
|---|---|---|
| Starter (Opt 1, AED 799, unlimited) | 799 | Pays for itself after ~2 inspections/month |
| Growth (Opt 1, AED 1,399, unlimited) | 1,399 | Pays for itself after ~3 inspections/month |
| Per-seat (Opt 3, AED 175/seat) | scales | Pays for itself after ~1 inspection per seat every 2–3 months |

This is the core sales pitch regardless of which structure wins: any agency doing more than a handful of inspections a month is cheaper on a Tenify subscription than paying DTC per-report, and dramatically cheaper than a competitor's AED 999+ one-off inspection.

---

## Open questions to resolve before locking numbers

1. **What's the actual cost per inspection to Tenify** (agent time if any B2B support is needed, AI review compute, storage, support)? Without this, allowance/overage numbers above are directional, not cost-validated.
2. **Is "unlimited reports" sustainable at MVP**, or does the report cap need to ship in Phase 1 rather than be deferred? Right now the PRD has no usage ceiling at all.
3. **What's the actual willingness-to-pay ceiling** for a small agency (1–3 agents) vs a management company (10–50+ units under management)? Worth 3–5 discovery calls (the July strategy doc's own Phase 1 pilot plan) before finalizing tiers.
4. **Does annual-only or monthly-only launch first** — monthly is lower friction for a first sale, annual is better for cash and retention once there's signal the product sticks.

---

## Recommendation (starting point, not final)

Launch with **Option 1** (flat seat-tiered, unlimited) to keep MVP scope matched to what's already spec'd — no metering work needed. Validate real usage per company for 60–90 days, then move to **Option 2** (allowance + overage) once there's data on which accounts are outliers. Add **Option 4**'s low-cost entry tier once there's a self-serve funnel worth optimizing, and layer **Option 5** annual pricing in once churn/retention numbers justify the discount.
