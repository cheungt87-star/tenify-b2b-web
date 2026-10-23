"use client";

import { useId, useMemo, useRef, useState, type KeyboardEvent } from "react";
import { DirhamSign } from "@/components/home/dirham-sign";

const BANDS = [
  {
    key: "solo",
    name: "Solo",
    maxSeats: 1,
    pricePerSeat: 500,
    description: "For a single inspector covering everything.",
    newFeatures: [
      "Unlimited reports",
      "Co-branded logo",
      "Email support",
      "Self-serve set-up",
    ],
  },
  {
    key: "growth",
    name: "Growth",
    maxSeats: 5,
    pricePerSeat: 450,
    description: "For a small team splitting inspections across properties.",
    newFeatures: ["Dedicated WhatsApp support", "Guided onboarding & training"],
  },
  {
    key: "team",
    name: "Team",
    maxSeats: 10,
    pricePerSeat: 400,
    description: "For agencies running inspections at scale.",
    newFeatures: ["Dedicated account manager", "We set it up for you"],
  },
] as const;

const PILLS = [
  { label: "1", value: 1 },
  { label: "2 - 5", value: 5 },
  { label: "6 - 10", value: 10 },
  { label: "11+", value: 11 },
] as const;

export function PricingSelector() {
  const [seatCount, setSeatCount] = useState(3);
  const labelId = useId();
  const pillRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const resolved = useMemo(() => {
    const bandIdx = BANDS.findIndex((band) => seatCount <= band.maxSeats);
    const isCustom = bandIdx === -1;
    const features = isCustom
      ? BANDS.flatMap((band) => band.newFeatures)
      : BANDS.slice(0, bandIdx + 1).flatMap((band) => [...band.newFeatures]);
    const seatLabel = isCustom
      ? `${seatCount} users`
      : BANDS[bandIdx].name === "Solo"
        ? "1 user"
        : `Up to ${BANDS[bandIdx].maxSeats} users`;

    if (isCustom) {
      return {
        name: "Custom",
        isCustom: true,
        seatLabel,
        description: "Everything in Team, scoped and priced for your portfolio.",
        features,
        total: 0,
      };
    }

    return {
      name: BANDS[bandIdx].name,
      isCustom: false,
      seatLabel,
      description: BANDS[bandIdx].description,
      features,
      total: seatCount * BANDS[bandIdx].pricePerSeat,
    };
  }, [seatCount]);

  const activePill = PILLS.findIndex((pill) =>
    pill.value === 11
      ? resolved.isCustom
      : !resolved.isCustom &&
        BANDS.find((band) => seatCount <= band.maxSeats)?.maxSeats === pill.value,
  );

  function onGroupKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    const step =
      event.key === "ArrowRight" || event.key === "ArrowDown"
        ? 1
        : event.key === "ArrowLeft" || event.key === "ArrowUp"
          ? -1
          : 0;
    if (!step) return;
    event.preventDefault();
    const next = (activePill + step + PILLS.length) % PILLS.length;
    setSeatCount(PILLS[next].value);
    pillRefs.current[next]?.focus();
  }

  return (
    <div className="flex flex-col items-center gap-7">
      <p id={labelId} className="text-center text-sm font-bold text-neutral-800">
        How many users?
      </p>
      <div
        className="inline-flex gap-1 rounded-full bg-neutral-100 p-1.5"
        role="radiogroup"
        aria-labelledby={labelId}
        onKeyDown={onGroupKeyDown}
      >
        {PILLS.map((pill, pillIndex) => {
          const active = pillIndex === activePill;
          return (
            <button
              key={pill.label}
              ref={(node) => {
                pillRefs.current[pillIndex] = node;
              }}
              type="button"
              role="radio"
              aria-checked={active}
              tabIndex={active ? 0 : -1}
              className={`min-h-11 rounded-full px-5 text-sm font-bold whitespace-nowrap transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${
                active
                  ? "bg-navy-900 text-true-white"
                  : "bg-transparent text-neutral-600 hover:text-navy-900"
              }`}
              onClick={() => setSeatCount(pill.value)}
            >
              {pill.label}
            </button>
          );
        })}
      </div>

      <article
        className="flex w-full max-w-[440px] flex-col gap-5 rounded-[var(--radius-lg)] border-2 border-navy-900 bg-true-white p-6 sm:p-9"
        aria-live="polite"
      >
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-[22px] font-extrabold tracking-tight text-navy-900">
            {resolved.name}
          </h3>
          <p className="text-sm font-bold whitespace-nowrap text-navy-500">
            {resolved.seatLabel}
          </p>
        </div>
        {resolved.isCustom ? (
          <p className="text-[clamp(1.75rem,8vw,2rem)] font-extrabold tracking-tight whitespace-nowrap text-neutral-900">
            Custom pricing
          </p>
        ) : (
          <p className="flex items-baseline gap-2 whitespace-nowrap">
            <span className="text-[clamp(2rem,10vw,3rem)] font-extrabold tracking-tight text-neutral-900">
              <DirhamSign className="mr-[0.15em]" />
              {resolved.total.toLocaleString("en-AE")}
            </span>
            <span className="text-base text-neutral-600">per month</span>
          </p>
        )}
        <p className="text-[15px] leading-[1.6] text-neutral-600">
          {resolved.description}
        </p>
        <ul className="mt-1 flex flex-col gap-3.5">
          {resolved.features.map((feature) => (
            <li key={feature} className="flex items-center gap-3">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="shrink-0 text-brand"
              >
                <path d="m5 12.5 4.5 4.5L19 7.5" />
              </svg>
              <span className="text-[15px] text-neutral-900">{feature}</span>
            </li>
          ))}
        </ul>
        <a href="#faq" className="btn-navy mt-2 w-full py-4 text-base font-bold">
          {resolved.isCustom ? "Contact us" : "Join the Waitlist"}
        </a>
      </article>
    </div>
  );
}
