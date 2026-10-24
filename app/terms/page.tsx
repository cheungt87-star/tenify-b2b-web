import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { LegalPage } from "@/components/legal-page";
import { termsOfUse } from "@/lib/legal/terms-of-use";
import { breadcrumbList, graph } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Terms of Use | Tenify",
  description: "The terms that apply when you use the Tenify app and website.",
};

export default function TermsPage() {
  const termsSchema = graph(
    breadcrumbList([
      { name: "Home", path: "/" },
      { name: "Terms of Use", path: "/terms" },
    ]),
  );

  return (
    <>
      <JsonLd data={termsSchema} />
      <LegalPage title="Terms of Use" markdown={termsOfUse} />
    </>
  );
}
