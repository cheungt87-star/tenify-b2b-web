import { getSupabaseServer } from "@/lib/supabase-server";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const ROLES = new Set(["tenant", "landlord", "other"]);

type SampleReportBody = {
  name?: unknown;
  email?: unknown;
  role?: unknown;
  role_other?: unknown;
  marketing_opt_in?: unknown;
  marketing_copy_version?: unknown;
  source?: unknown;
  submitted_at?: unknown;
};

function bad(error: string) {
  return Response.json({ ok: false, error }, { status: 400 });
}

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as SampleReportBody | null;
  if (!body || typeof body !== "object") return bad("invalid_json");

  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  const source = typeof body.source === "string" ? body.source.slice(0, 60) : "";

  if (!EMAIL_PATTERN.test(email) || email.length > 254) return bad("invalid_email");

  // The inline mid-page form posts email only. The modal form also sends name and role.
  const isInline = source === "sample_report_inline" || (!body.name && !body.role);

  let name: string | null = null;
  let role: string | null = null;
  let roleOther: string | null = null;

  if (!isInline) {
    name = typeof body.name === "string" ? body.name.trim() : "";
    role = typeof body.role === "string" ? body.role.trim() : "";
    if (!name || name.length > 200) return bad("invalid_name");
    if (!ROLES.has(role)) return bad("invalid_role");
    if (role === "other") {
      roleOther =
        typeof body.role_other === "string" ? body.role_other.trim().slice(0, 80) : "";
      roleOther = roleOther || null;
    }
  }

  const submittedAt =
    typeof body.submitted_at === "string" && !Number.isNaN(Date.parse(body.submitted_at))
      ? new Date(body.submitted_at).toISOString()
      : new Date().toISOString();

  try {
    const { error } = await getSupabaseServer()
      .from("sample_report_leads")
      .insert({
        email,
        name,
        role,
        role_other: roleOther,
        marketing_opt_in: body.marketing_opt_in === true,
        marketing_copy_version:
          typeof body.marketing_copy_version === "string"
            ? body.marketing_copy_version.slice(0, 60)
            : null,
        source: source || (isInline ? "sample_report_inline" : "sample_report_modal"),
        submitted_at: submittedAt,
      });
    if (error) throw error;
  } catch (err) {
    console.error("[sample-report] failed to save lead", err);
    return Response.json({ ok: false, error: "save_failed" }, { status: 500 });
  }

  return Response.json({ ok: true });
}
