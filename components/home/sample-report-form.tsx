"use client";

import {
  useEffect,
  useId,
  useRef,
  useState,
  type FormEvent,
  type RefObject,
} from "react";
import { PRIVACY_URL, SAMPLE_REPORT_PDF } from "@/lib/site-config";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const MARKETING_COPY_VERSION = "stay-in-the-loop-v1";
const SOURCE = "sample_report_modal";

type Role = "tenant" | "landlord" | "other" | "";

export type SampleReportLeadPayload = {
  name: string;
  email: string;
  role: Exclude<Role, "">;
  role_other: string;
  marketing_opt_in: boolean;
  marketing_copy_version: typeof MARKETING_COPY_VERSION;
  source: typeof SOURCE;
  submitted_at: string;
};

type SampleReportFormProps = {
  /** When true, show stacked email-only gate for the mid-page section. */
  stacked?: boolean;
  /** Modal mode: full lead form + thank-you. */
  variant?: "inline" | "modal";
  nameInputRef?: RefObject<HTMLInputElement | null>;
  /** Dialog aria-labelledby target when variant is modal. */
  titleId?: string;
  onComplete?: () => void;
};

const fieldInputClass =
  "h-12 w-full rounded-[var(--radius-control)] border border-neutral-200 bg-neutral-100 px-3.5 text-[17px] font-semibold text-navy-900 placeholder:font-normal placeholder:text-label-3 outline-none transition-[border-color,background-color,box-shadow] duration-150 focus:border-brand focus:bg-true-white focus:ring-3 focus:ring-brand/15 aria-[invalid=true]:border-danger";

const DOWNLOAD_NAME = "Tenify sample property condition report.pdf";

export function SampleReportForm({
  stacked = false,
  variant = "inline",
  nameInputRef,
  titleId,
  onComplete,
}: SampleReportFormProps) {
  if (variant === "modal") {
    return (
      <SampleReportModalForm
        nameInputRef={nameInputRef}
        titleId={titleId}
        onComplete={onComplete}
      />
    );
  }
  return <SampleReportInlineForm stacked={stacked} />;
}

/** Mid-page email-only gate (unchanged behaviour for #sample-report). */
function SampleReportInlineForm({ stacked }: { stacked: boolean }) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);
  const inputId = useId();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const value = email.trim();
    if (!EMAIL_PATTERN.test(value)) {
      setError("Enter a valid email address, like name@example.com.");
      return;
    }
    setError("");
    setSending(true);
    try {
      const response = await fetch("/api/sample-report", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: value,
          source: "sample_report_inline",
          submitted_at: new Date().toISOString(),
        }),
      });
      if (!response.ok) throw new Error();
      setDone(true);
    } catch {
      setError("We couldn't send that. Check your connection and try again.");
    } finally {
      setSending(false);
    }
  }

  if (done) {
    return (
      <div
        role="status"
        className="flex flex-col gap-1 rounded-[12px] bg-brand-soft px-4 py-4 text-[16px] leading-[1.5] text-navy-900"
      >
        <p className="font-bold">Your sample report is ready.</p>
        <a
          href={SAMPLE_REPORT_PDF}
          download={DOWNLOAD_NAME}
          className="btn-primary mt-2 self-start"
        >
          Download sample report
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex w-full flex-col gap-2">
      <label htmlFor={inputId} className="text-[15px] font-bold text-navy-900">
        Email address
      </label>
      <div className={`flex flex-col gap-3 ${stacked ? "" : "sm:flex-row"}`}>
        <input
          id={inputId}
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="you@example.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          aria-invalid={error ? true : undefined}
          aria-describedby={`${inputId}-hint${error ? ` ${inputId}-error` : ""}`}
          className={`min-h-[52px] min-w-0 flex-1 rounded-[12px] border bg-true-white px-4 text-base text-navy-900 placeholder:text-label-2 focus:border-brand focus:ring-2 focus:ring-brand/25 focus:outline-none ${
            error ? "border-danger-strong" : "border-neutral-400"
          }`}
        />
        <button type="submit" disabled={sending} className="btn-primary shrink-0 disabled:opacity-70">
          {sending ? "Sending" : "Get the sample report"}
        </button>
      </div>
      {error ? (
        <p id={`${inputId}-error`} role="alert" className="text-sm font-semibold text-danger-strong">
          {error}
        </p>
      ) : null}
      <p id={`${inputId}-hint`} className="text-sm text-label-2">
        Free to download. No app needed.
      </p>
    </form>
  );
}

function SampleReportModalForm({
  nameInputRef,
  titleId,
  onComplete,
}: {
  nameInputRef?: RefObject<HTMLInputElement | null>;
  titleId?: string;
  onComplete?: () => void;
}) {
  const baseId = useId();
  const headingId = titleId ?? `${baseId}-title`;
  const localNameRef = useRef<HTMLInputElement>(null);
  const roleOtherRef = useRef<HTMLInputElement>(null);
  const thanksHeadingRef = useRef<HTMLHeadingElement>(null);

  const nameRef = nameInputRef ?? localNameRef;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<Role>("");
  const [roleOther, setRoleOther] = useState("");
  const [marketingOptIn, setMarketingOptIn] = useState(true);
  const [nameErr, setNameErr] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [roleErr, setRoleErr] = useState("");
  const [formErr, setFormErr] = useState("");
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!done) return;
    thanksHeadingRef.current?.focus();
    onComplete?.();
  }, [done, onComplete]);

  useEffect(() => {
    if (role !== "other") return;
    roleOtherRef.current?.focus();
  }, [role]);

  function selectRole(next: Exclude<Role, "">) {
    setRole(next);
    setRoleErr("");
    if (next !== "other") setRoleOther("");
  }

  function validate(): { ok: boolean; focus: "name" | "email" | "role" | null } {
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    let ok = true;
    let focus: "name" | "email" | "role" | null = null;

    if (!trimmedName) {
      setNameErr("Enter your name.");
      ok = false;
      focus ??= "name";
    } else {
      setNameErr("");
    }

    if (!EMAIL_PATTERN.test(trimmedEmail)) {
      setEmailErr("Enter a valid email address.");
      ok = false;
      focus ??= "email";
    } else {
      setEmailErr("");
    }

    if (!role) {
      setRoleErr("Pick the option that fits you best.");
      ok = false;
      focus ??= "role";
    } else {
      setRoleErr("");
    }

    return { ok, focus };
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormErr("");
    const result = validate();
    if (!result.ok) {
      if (result.focus === "name") nameRef.current?.focus();
      else if (result.focus === "email") {
        document.getElementById(`${baseId}-email`)?.focus();
      }
      return;
    }

    const payload: SampleReportLeadPayload = {
      name: name.trim(),
      email: email.trim(),
      role: role as Exclude<Role, "">,
      role_other: role === "other" ? roleOther.trim() : "",
      marketing_opt_in: marketingOptIn,
      marketing_copy_version: MARKETING_COPY_VERSION,
      source: SOURCE,
      submitted_at: new Date().toISOString(),
    };

    setSending(true);
    try {
      const response = await fetch("/api/sample-report", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error("Request failed");

      window.dispatchEvent(
        new CustomEvent("sample_report_submit", { detail: payload }),
      );
      setDone(true);
    } catch {
      setFormErr("Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  }

  if (done) {
    return (
      <div aria-live="polite">
        <p className="eyebrow mb-1.5">Sample report</p>
        <h2
          id={headingId}
          ref={thanksHeadingRef}
          tabIndex={-1}
          className="m-0 pr-10 text-[28px] leading-[34px] font-extrabold tracking-[-0.02em] text-navy-900 outline-none"
        >
          Your sample report is ready.
        </h2>
        <p className="mt-2 mb-0 text-[16px] leading-[23px] text-label-2">
          See what you get: cover, room-by-room findings, photos and ratings.
          Make your own for free until the end of 2026.
        </p>
        <a
          href={SAMPLE_REPORT_PDF}
          download={DOWNLOAD_NAME}
          className="mt-5 flex min-h-[52px] items-center justify-center rounded-[var(--radius-control)] bg-brand text-[17px] font-bold text-true-white no-underline transition-colors hover:bg-brand-pressed"
        >
          Download sample report
        </a>
      </div>
    );
  }

  return (
    <>
      <div className="intro">
        <p className="eyebrow mb-1.5">Sample report</p>
        <h2
          id={headingId}
          className="m-0 pr-10 text-[28px] leading-[34px] font-extrabold tracking-[-0.02em] text-navy-900"
        >
          Want to see a report first?
        </h2>
        <p className="mt-2 mb-5 text-[16px] leading-[23px] text-label-2">
          Enter your details below and download a completed report for free.
        </p>
      </div>

      <form onSubmit={handleSubmit} noValidate className="flex flex-col">
        <div className="mb-3.5 min-w-0">
          <label
            htmlFor={`${baseId}-name`}
            className="mb-1.5 ml-0.5 block text-[13px] leading-[18px] font-bold text-navy-900"
          >
            Name
          </label>
          <input
            ref={nameRef}
            id={`${baseId}-name`}
            type="text"
            name="name"
            autoComplete="name"
            placeholder="Your name"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
              setNameErr("");
            }}
            aria-invalid={nameErr ? true : false}
            aria-describedby={nameErr ? `${baseId}-name-err` : undefined}
            required
            className={fieldInputClass}
          />
          <p
            id={`${baseId}-name-err`}
            role="alert"
            className={`mt-1.5 ml-0.5 text-[13px] leading-[18px] text-danger-strong ${nameErr ? "" : "hidden"}`}
          >
            {nameErr}
          </p>
        </div>

        <div className="mb-3.5 min-w-0">
          <label
            htmlFor={`${baseId}-email`}
            className="mb-1.5 ml-0.5 block text-[13px] leading-[18px] font-bold text-navy-900"
          >
            Email address
          </label>
          <input
            id={`${baseId}-email`}
            type="email"
            name="email"
            autoComplete="email"
            inputMode="email"
            placeholder="you@example.com"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              setEmailErr("");
            }}
            aria-invalid={emailErr ? true : false}
            aria-describedby={emailErr ? `${baseId}-email-err` : undefined}
            required
            className={fieldInputClass}
          />
          <p
            id={`${baseId}-email-err`}
            role="alert"
            className={`mt-1.5 ml-0.5 text-[13px] leading-[18px] text-danger-strong ${emailErr ? "" : "hidden"}`}
          >
            {emailErr}
          </p>
        </div>

        <fieldset className="mb-0 min-w-0 border-0 p-0">
          <legend className="mb-1.5 ml-0.5 block px-0 text-[13px] leading-[18px] font-bold text-navy-900">
            I am a…
          </legend>
          <div className="grid grid-cols-3 gap-2" role="presentation">
            {(
              [
                ["tenant", "Tenant"],
                ["landlord", "Landlord"],
                ["other", "Other"],
              ] as const
            ).map(([value, label]) => (
              <label
                key={value}
                className="relative m-0 cursor-pointer has-[:focus-visible]:rounded-[var(--radius-control)] has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-navy-900"
              >
                <input
                  type="radio"
                  name={`${baseId}-role`}
                  value={value}
                  checked={role === value}
                  onChange={() => selectRole(value)}
                  className="absolute inset-0 m-0 h-full w-full cursor-pointer opacity-0"
                />
                <span
                  className={`flex min-h-11 items-center justify-center rounded-[var(--radius-control)] border-[1.5px] px-1.5 text-center text-[15px] font-bold transition-colors duration-150 ${
                    role === value
                      ? "border-brand bg-brand text-true-white"
                      : "border-neutral-200 bg-neutral-100 text-navy-900"
                  }`}
                >
                  {label}
                </span>
              </label>
            ))}
          </div>
          {role === "other" ? (
            <div className="mt-2">
              <input
                ref={roleOtherRef}
                type="text"
                id={`${baseId}-role-other`}
                name="role_other"
                placeholder="Describe your role"
                maxLength={80}
                value={roleOther}
                onChange={(event) => setRoleOther(event.target.value)}
                aria-label="Describe your role"
                className={fieldInputClass}
              />
            </div>
          ) : null}
          <p
            id={`${baseId}-role-err`}
            role="alert"
            className={`mt-1.5 ml-0.5 text-[13px] leading-[18px] text-danger-strong ${roleErr ? "" : "hidden"}`}
          >
            {roleErr}
          </p>
        </fieldset>

        <div className="mt-4 rounded-2xl bg-brand-soft px-4 pt-3.5 pb-2">
          <p className="m-0 text-[14px] leading-5 text-navy-900">
            <strong className="mb-0.5 block text-[15px] font-bold">
              Stay in the loop
            </strong>
            Want the occasional email from Tenify? Moving tips, handy checklists
            and news. Unsubscribe anytime.{" "}
            <a
              href={PRIVACY_URL}
              target="_blank"
              rel="noreferrer"
              className="font-bold text-navy-900 no-underline hover:underline"
            >
              Privacy Policy
            </a>
          </p>
          <label className="mt-0.5 flex min-h-11 cursor-pointer items-center gap-3 text-[14px] leading-5 font-semibold text-navy-900">
            <input
              type="checkbox"
              checked={marketingOptIn}
              onChange={(event) => setMarketingOptIn(event.target.checked)}
              className="peer sr-only"
            />
            <span
              aria-hidden="true"
              className="flex size-[22px] shrink-0 items-center justify-center rounded-[6px] border-[1.5px] border-tab-inactive bg-true-white peer-checked:border-brand peer-checked:bg-brand peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-navy-900"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`text-true-white ${marketingOptIn ? "block" : "hidden"}`}
              >
                <path d="M2.5 7.5l3 3 6-6.5" />
              </svg>
            </span>
            Yes, keep me posted
          </label>
        </div>

        <button
          type="submit"
          disabled={sending}
          className="mt-5 flex min-h-[52px] w-full cursor-pointer items-center justify-center rounded-[var(--radius-control)] border-0 bg-brand text-[17px] font-bold text-true-white transition-[background-color,transform] duration-150 hover:bg-brand-pressed active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50"
        >
          {sending ? "Sending…" : "Get the sample report"}
        </button>
        <p
          role="alert"
          className={`mt-3 text-center text-[14px] text-danger-strong ${formErr ? "" : "hidden"}`}
        >
          {formErr}
        </p>
      </form>
    </>
  );
}
