"use client";

import { FormEvent, useState } from "react";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function validateEmail(value: string) {
    if (!value.trim()) {
      return "Email is required.";
    }
    if (!EMAIL_PATTERN.test(value.trim())) {
      return "Enter a valid email address.";
    }
    return "";
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextError = validateEmail(email);
    setEmailError(nextError);
    if (nextError) {
      return;
    }
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <p
        className="relative w-full max-w-[480px] rounded-full border border-neutral-200 bg-true-white px-5 py-4 text-center text-[15px] text-neutral-800"
        role="status"
      >
        Thanks! We&apos;ll be in touch when early access opens.
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="relative flex w-full max-w-[480px] flex-wrap items-stretch justify-center gap-3"
    >
      <label htmlFor="waitlist-email" className="sr-only">
        Work email address
      </label>
      <input
        id="waitlist-email"
        name="email"
        type="email"
        autoComplete="email"
        required
        placeholder="Work email address"
        aria-invalid={emailError ? true : undefined}
        aria-describedby={emailError ? "waitlist-email-error" : undefined}
        value={email}
          onChange={(event) => {
            const next = event.target.value;
            setEmail(next);
            if (emailError) {
              setEmailError(validateEmail(next));
            }
          }}
        onBlur={() => setEmailError(validateEmail(email))}
        className="min-w-[180px] flex-1 rounded-full border border-neutral-300 bg-true-white px-[18px] py-3.5 text-left text-[15px] text-neutral-900 placeholder:text-neutral-400 focus:border-jade-900 focus:outline-2 focus:outline-gold-600"
      />
      <button type="submit" className="btn-lime w-full sm:w-auto">
        Join the Waitlist
      </button>
      {emailError ? (
        <p
          id="waitlist-email-error"
          className="w-full text-center text-sm text-error"
          role="alert"
        >
          {emailError}
        </p>
      ) : null}
    </form>
  );
}
