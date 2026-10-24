import type { Metadata } from "next";
import { JsonLd } from "@/components/JsonLd";
import { LegalPage } from "@/components/legal-page";
import { privacyPolicy } from "@/lib/legal/privacy-policy";
import { breadcrumbList, graph } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Privacy Policy | Tenify",
  description:
    "What Tenify collects, how it is used, who sees it and how to delete it.",
};

export default function PrivacyPage() {
  const privacySchema = graph(
    breadcrumbList([
      { name: "Home", path: "/" },
      { name: "Privacy Policy", path: "/privacy" },
    ]),
  );

  return (
    <>
      <JsonLd data={privacySchema} />
      <LegalPage title="Privacy Policy" markdown={privacyPolicy} />
    </>
  );
}
