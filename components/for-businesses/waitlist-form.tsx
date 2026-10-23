"use client";

import { useId, useState, type FormEvent } from "react";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const COMPANY_NAME_MAX_LENGTH = 120;

const inputClass =
  "h-[clamp(52px,7.6vh,64px)] w-full rounded-full border-2 border-brand bg-true-white px-6 text-[clamp(16px,2.4vh,19px)] font-bold text-navy-900 shadow-[0_8px_24px_-10px_rgba(7,123,92,0.45)] outline-none placeholder:font-semibold placeholder:text-neutral-600 focus:ring-4 focus:ring-brand/20 aria-[invalid=true]:border-danger";

export function WaitlistForm() {
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState(""); // honeypot
  const [companyError, setCompanyError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [formError, setFormError] = useState("");
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);
  const baseId = useId();
  const companyInputId = `${baseId}-company`;
  const emailInputId = `${baseId}-email`;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const companyValue = companyName.trim();
    const emailValue = email.trim();

    const nextCompanyError = companyValue
      ? ""
      : "Enter your company name.";
    const nextEmailError = EMAIL_PATTERN.test(emailValue)
      ? ""
      : "Enter a valid email address, like name@agency.ae.";
    setCompanyError(nextCompanyError);
    setEmailError(nextEmailError);
    setFormError("");
    if (nextCompanyError || nextEmailError) return;

    setSending(true);
    try {
      const response = await fetch("/api/b2b-waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          company_name: companyValue,
          email: emailValue,
          website,
          source: "b2b_waitlist",
          submitted_at: new Date().toISOString(),
        }),
      });
      if (!response.ok) throw new Error();
      setDone(true);
    } catch {
      setFormError("We couldn't save that. Check your connection and try again.");
    } finally {
      setSending(false);
    }
  }

  if (done) {
    return (
      <div role="status" className="flex flex-col gap-1 py-2">
        <p className="text-[clamp(20px,3.2vh,26px)] font-extrabold text-navy-900">
          You&apos;re on the list.
        </p>
        <p className="text-[15px] leading-[1.5] text-neutral-600">
          We&apos;ll email you the day it launches.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex w-full flex-col gap-2.5">
      <label htmlFor={companyInputId} className="sr-only">
        Company name
      </label>
      <input
        id={companyInputId}
        type="text"
        autoComplete="organization"
        placeholder="Company name"
        maxLength={COMPANY_NAME_MAX_LENGTH}
        value={companyName}
        onChange={(event) => {
          setCompanyName(event.target.value);
          if (companyError) setCompanyError("");
        }}
        aria-invalid={companyError ? true : undefined}
        aria-describedby={companyError ? `${companyInputId}-error` : undefined}
        className={inputClass}
      />
      {companyError ? (
        <p id={`${companyInputId}-error`} role="alert" className="px-2 text-sm font-semibold text-danger-strong">
          {companyError}
        </p>
      ) : null}
      <label htmlFor={emailInputId} className="sr-only">
        Work email
      </label>
      <input
        id={emailInputId}
        type="email"
        inputMode="email"
        autoComplete="email"
        placeholder="Work email"
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
          if (emailError) setEmailError("");
        }}
        aria-invalid={emailError ? true : undefined}
        aria-describedby={emailError ? `${emailInputId}-error` : undefined}
        className={inputClass}
      />
      {/* Honeypot: hidden from people and assistive tech. Named "website" so
          it never collides with the real company_name field. */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        value={website}
        onChange={(event) => setWebsite(event.target.value)}
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
      />
      {emailError ? (
        <p id={`${emailInputId}-error`} role="alert" className="px-2 text-sm font-semibold text-danger-strong">
          {emailError}
        </p>
      ) : null}
      {formError ? (
        <p role="alert" className="px-2 text-sm font-semibold text-danger-strong">
          {formError}
        </p>
      ) : null}
      <button
        type="submit"
        disabled={sending}
        className="btn-primary w-full !min-h-[clamp(46px,6.6vh,54px)] disabled:opacity-60"
      >
        {sending ? "Saving…" : "Notify me"}
      </button>
    </form>
  );
}
