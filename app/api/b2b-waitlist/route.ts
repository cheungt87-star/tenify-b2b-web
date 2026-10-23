import { getSupabaseServer } from "@/lib/supabase-server";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const COMPANY_NAME_MAX_LENGTH = 120;

type WaitlistBody = {
  company_name?: unknown;
  email?: unknown;
  website?: unknown; // honeypot, real users leave this empty
  source?: unknown;
  submitted_at?: unknown;
};

function bad(error: string) {
  return Response.json({ ok: false, error }, { status: 400 });
}

// PostgREST reports a column that does not exist yet (migration not applied)
// as PGRST204; Postgres itself uses 42703.
function isMissingCompanyNameColumn(error: { code?: string; message?: string }) {
  return (
    error.code === "PGRST204" ||
    error.code === "42703" ||
    (typeof error.message === "string" && error.message.includes("company_name"))
  );
}

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as WaitlistBody | null;
  if (!body || typeof body !== "object") return bad("invalid_json");

  // Bots fill the honeypot. Pretend success and store nothing.
  if (typeof body.website === "string" && body.website.trim() !== "") {
    return Response.json({ ok: true });
  }

  const companyName =
    typeof body.company_name === "string" ? body.company_name.trim() : "";
  if (!companyName || companyName.length > COMPANY_NAME_MAX_LENGTH) {
    return bad("invalid_company_name");
  }

  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  if (!EMAIL_PATTERN.test(email) || email.length > 254) return bad("invalid_email");

  const source =
    typeof body.source === "string" && body.source ? body.source.slice(0, 60) : "b2b_waitlist";
  const submittedAt =
    typeof body.submitted_at === "string" && !Number.isNaN(Date.parse(body.submitted_at))
      ? new Date(body.submitted_at).toISOString()
      : new Date().toISOString();

  try {
    const supabase = getSupabaseServer();
    let { error } = await supabase
      .from("b2b_waitlist")
      .insert({ company_name: companyName, email, source, submitted_at: submittedAt });

    if (error && isMissingCompanyNameColumn(error)) {
      // Migration not applied yet. Save the signup rather than losing the
      // lead, and shout in the logs so company_name is not silently dropped
      // for long.
      console.error(
        "[b2b-waitlist] b2b_waitlist.company_name column missing — run " +
          "supabase/migrations/20261022120000_add_company_name_to_b2b_waitlist.sql. " +
          `Saving signup without company name for now (company: ${companyName}).`,
      );
      ({ error } = await supabase
        .from("b2b_waitlist")
        .insert({ email, source, submitted_at: submittedAt }));
    }

    // 23505 = already on the list. Treat as success so the form never leaks who has signed up.
    if (error && error.code !== "23505") throw error;
  } catch (err) {
    console.error("[b2b-waitlist] failed to save signup", err);
    return Response.json({ ok: false, error: "save_failed" }, { status: 500 });
  }

  return Response.json({ ok: true });
}
