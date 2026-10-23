-- Capture company name on the For Businesses waitlist form.
-- Run in the Supabase SQL editor (or `supabase db push`) for project
-- mopoqxfcotgafwnuxlex before / with deploying the form change.
-- Nullable so existing waitlist rows stay valid; the API requires it
-- for every new signup.
alter table public.b2b_waitlist
  add column if not exists company_name text;

alter table public.b2b_waitlist
  drop constraint if exists b2b_waitlist_company_name_length;

alter table public.b2b_waitlist
  add constraint b2b_waitlist_company_name_length
  check (company_name is null or char_length(company_name) between 1 and 120);
