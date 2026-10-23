import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { termsOfUse } from "@/lib/legal/terms-of-use";

export const metadata: Metadata = {
  title: "Terms of Use | Tenify",
  description: "The terms that apply when you use the Tenify app and website.",
};

export default function TermsPage() {
  return <LegalPage title="Terms of Use" markdown={termsOfUse} />;
}
